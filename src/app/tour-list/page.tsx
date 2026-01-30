'use client'

import { Suspense, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'
import ApiMaintenanceNotice from '@/templete/ApiMaintenanceNotice'
import { footerContactSection } from '@/lib/footer-contact'

export const dynamic = 'force-dynamic'

export default function TourList() {
  return (
    <Suspense fallback={null}>
      <TourListContent />
    </Suspense>
  )
}

type TourListItem = {
  id: number | string
  image: string
  badge?: string
  title: string
  location: string
  duration: string
  priceLabel?: string
  price?: string
  productCode?: string
  href?: string
}

type SectorOption = {
  id: number | string
  name: string
}

type TravelDateOption = {
  label: string
  value: string
}

const isRecord = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null

const extractBannerList = (data: unknown): Record<string, unknown>[] => {
  if (Array.isArray(data)) {
    return data.filter((item) => isRecord(item)) as Record<string, unknown>[]
  }
  if (!isRecord(data)) {
    return []
  }
  const candidates = [data.data, data.list, data.items, data.records, data.rows, data.result]
  for (const candidate of candidates) {
    if (Array.isArray(candidate)) {
      return candidate.filter((item) => isRecord(item)) as Record<string, unknown>[]
    }
    if (isRecord(candidate)) {
      const nested = candidate as Record<string, unknown>
      const nestedCandidates = [nested.data, nested.list, nested.items, nested.records, nested.rows, nested.result]
      for (const nestedCandidate of nestedCandidates) {
        if (Array.isArray(nestedCandidate)) {
          return nestedCandidate.filter((item) => isRecord(item)) as Record<string, unknown>[]
        }
      }
    }
  }
  return []
}

const pickString = (record: Record<string, unknown>, keys: string[]): string => {
  for (const key of keys) {
    const value = record[key]
    if (typeof value === 'string' && value.trim()) {
      return value.trim()
    }
  }
  return ''
}

const resolveBannerImage = (data: unknown): string => {
  const list = extractBannerList(data)
  const first = list[0]
  if (!first) {
    return ''
  }
  const images = isRecord(first.images) ? (first.images as Record<string, unknown>) : null
  return (
    pickString(first, ['image', 'banner', 'bannerImage', 'bannerImg', 'bannerUrl', 'picture']) ||
    (images ? pickString(images, ['desktop', 'mobile', 'image', 'url', 'src']) : '')
  )
}

const MONTH_LABELS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
const MONTH_LOOKUP: Record<string, number> = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11,
}

const getNext12Months = (): TravelDateOption[] => {
  const months: TravelDateOption[] = []
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()

  for (let i = 0; i < 12; i += 1) {
    const monthIndex = (currentMonth + i) % 12
    const yearOffset = Math.floor((currentMonth + i) / 12)
    const year = currentYear + yearOffset
    const value = `${year}-${String(monthIndex + 1).padStart(2, '0')}`
    months.push({
      label: `${MONTH_LABELS[monthIndex]} ${year}`,
      value,
    })
  }

  return months
}

const resolveTravelDateValue = (param: string | null, options: TravelDateOption[]) => {
  if (!param) {
    return ''
  }
  const normalized = param.trim().toLowerCase()
  if (!normalized) {
    return ''
  }
  if (normalized === 'n/a' || normalized === 'na') {
    return ''
  }
  if (/^\d{4}-\d{2}$/.test(normalized)) {
    return options.find((option) => option.value === normalized)?.value ?? ''
  }

  const yearMatch = normalized.match(/\b(\d{4})\b/)
  const year = yearMatch ? Number(yearMatch[1]) : null
  const monthKey = Object.keys(MONTH_LOOKUP).find((key) => normalized.includes(key))
  if (!monthKey) {
    return ''
  }
  const monthIndex = MONTH_LOOKUP[monthKey]
  const match = options.find((option) => {
    const [optionYear, optionMonth] = option.value.split('-').map(Number)
    if (year && optionYear !== year) {
      return false
    }
    return optionMonth - 1 === monthIndex
  })
  return match?.value ?? ''
}

const formatTravelDateLabel = (value: string, options: TravelDateOption[]) => {
  if (!value) {
    return ''
  }
  const matched = options.find((option) => option.value === value)
  if (matched) {
    return matched.label
  }
  if (/^\d{4}-\d{2}$/.test(value)) {
    const [year, month] = value.split('-')
    const monthIndex = Number(month) - 1
    if (monthIndex >= 0 && monthIndex < MONTH_LABELS.length) {
      return `${MONTH_LABELS[monthIndex]} ${year}`
    }
  }
  return value
}

const extractPageData = (data: unknown): unknown[] => {
  if (!isRecord(data)) {
    return []
  }
  const dataNode = data.data
  if (isRecord(dataNode) && Array.isArray(dataNode.pageData)) {
    return dataNode.pageData
  }
  return []
}

const extractTotalRows = (data: unknown): number | null => {
  if (!isRecord(data)) {
    return null
  }
  const dataNode = data.data
  if (isRecord(dataNode) && typeof dataNode.totalRows === 'number') {
    return dataNode.totalRows
  }
  return null
}

const extractPageMeta = (data: unknown, fallbackPageSize: number) => {
  const fallback = {
    currentPage: 0,
    totalPage: 1,
    pageSize: fallbackPageSize,
    totalRows: 0,
  }
  if (!isRecord(data)) {
    return fallback
  }
  const dataNode = isRecord(data.data) ? data.data : null
  if (!dataNode) {
    return fallback
  }
  const currentPage = typeof dataNode.currentPage === 'number' ? dataNode.currentPage : fallback.currentPage
  const pageSize =
    typeof dataNode.pageSize === 'number' && Number.isFinite(dataNode.pageSize) && dataNode.pageSize > 0
      ? dataNode.pageSize
      : fallback.pageSize
  const totalRows =
    typeof dataNode.totalRows === 'number' && Number.isFinite(dataNode.totalRows) ? dataNode.totalRows : fallback.totalRows
  const totalPage =
    typeof dataNode.totalPage === 'number' && Number.isFinite(dataNode.totalPage) && dataNode.totalPage > 0
      ? dataNode.totalPage
      : totalRows > 0
        ? Math.ceil(totalRows / pageSize)
        : fallback.totalPage
  return { currentPage, totalPage, pageSize, totalRows }
}

const extractSectors = (data: unknown): SectorOption[] => {
  if (!isRecord(data) || !Array.isArray(data.data)) {
    return []
  }

  return data.data
    .map((item) => {
      if (!isRecord(item)) {
        return null
      }
      const name = typeof item.name === 'string' ? item.name.trim() : ''
      if (!name) {
        return null
      }
      const idValue =
        typeof item.id === 'number'
          ? item.id
          : typeof item.id === 'string' && item.id
            ? item.id
            : name
      return { id: idValue, name }
    })
    .filter((item): item is SectorOption => Boolean(item))
}

const formatPrice = (value: unknown) => {
  const numberValue = typeof value === 'number' ? value : Number(value)
  if (!Number.isFinite(numberValue)) {
    return ''
  }
  return `$${numberValue.toLocaleString('en-US', { maximumFractionDigits: 2 })}`
}

const formatDuration = (value: unknown) => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return `${value} days`
  }
  if (typeof value === 'string') {
    return value.trim()
  }
  return ''
}

const parseJsonResponse = async (res: Response) => {
  const text = await res.text()
  if (!res.ok) {
    throw new Error(text || `HTTP ${res.status}`)
  }
  return text ? JSON.parse(text) : {}
}

const resolveTourListItems = (data: unknown): TourListItem[] => {
  const list = extractPageData(data)
  if (!list.length) {
    return []
  }

  const items: TourListItem[] = []

  list.forEach((item, index) => {
    if (!isRecord(item)) {
      return
    }

    const nameValue =
      typeof item.name === 'string'
        ? item.name.trim()
        : isRecord(item.name) && typeof item.name.EN === 'string'
          ? item.name.EN.trim()
          : ''
    const sectorValue = typeof item.sector === 'string' ? item.sector.trim() : ''
    const priceValue = formatPrice(item.price)
    const durationValue = formatDuration(item.duration)
    const imageValue = typeof item.cover === 'string' ? item.cover.trim() : ''
    const productCodeValue = typeof item.productCode === 'string' ? item.productCode.trim() : ''
    const uriValue = typeof item.uri === 'string' ? item.uri.trim() : ''
    const idValue =
      typeof item.id === 'number'
        ? item.id
        : typeof productCodeValue === 'string' && productCodeValue
          ? productCodeValue
          : `tour-${index + 1}`
    const hrefValue = uriValue
      ? `/tour-details?uri=${encodeURIComponent(uriValue)}`
      : typeof item.id === 'number'
        ? `/tour-details?id=${item.id}`
        : ''
    const tagBadge = Array.isArray(item.tags)
      ? item.tags.find((tag) => isRecord(tag) && typeof tag.groupName === 'string' && tag.groupName === 'Promo Tag')
      : null
    const badgeValue = tagBadge && typeof tagBadge.name === 'string' ? tagBadge.name.trim() : ''

    items.push({
      id: idValue,
      image: imageValue,
      badge: badgeValue,
      title: nameValue,
      location: sectorValue,
      duration: durationValue,
      price: priceValue,
      priceLabel: priceValue ? 'From' : '',
      productCode: productCodeValue,
      href: hrefValue,
    })
  })

  return items
}

function TourListContent() {
  const searchParams = useSearchParams()
  const productTypeParam = searchParams.get('productType')
  const productType = productTypeParam === '2' ? 2 : 1
  const sectorIdParam = searchParams.get('sectorId')
  const sectorNameParam = searchParams.get('sectorName')
  const travelDateParam = searchParams.get('travelDate') ?? searchParams.get('month')

  const DEFAULT_PRICE_MIN = 1
  const DEFAULT_PRICE_MAX = 20000
  const DEFAULT_DURATION_MIN = 1
  const DEFAULT_DURATION_MAX = 30
  const PAGE_SIZE = 10

  const travelDateOptions = useMemo(() => getNext12Months(), [])
  const [filters, setFilters] = useState({
    sectorIds: sectorIdParam ? [sectorIdParam] : [],
    travelDate: resolveTravelDateValue(travelDateParam, travelDateOptions),
    priceMin: DEFAULT_PRICE_MIN,
    priceMax: DEFAULT_PRICE_MAX,
    durationMin: DEFAULT_DURATION_MIN,
    durationMax: DEFAULT_DURATION_MAX,
  })
  const [sectorTouched, setSectorTouched] = useState(false)
  const [travelDateTouched, setTravelDateTouched] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [sectorsData, setSectorsData] = useState<unknown | null>(null)
  const [listError, setListError] = useState(false)
  const [sectorsError, setSectorsError] = useState(false)
  const [bannerData, setBannerData] = useState<unknown | null>(null)

  const sectorOptions = useMemo(() => extractSectors(sectorsData), [sectorsData])
  const selectedSectorOptions = useMemo(
    () => sectorOptions.filter((sector) => filters.sectorIds.includes(String(sector.id))),
    [filters.sectorIds, sectorOptions]
  )

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    const $ = (window as any).jQuery
    if (!$ || !$.fn || !$.fn.niceSelect) {
      return
    }
    const $select = $('.tour-list-wrapper .tour-date-select')
    if (!$select.length) {
      return
    }
    if ($select.next('.nice-select').length) {
      $select.niceSelect('update')
    } else {
      $select.niceSelect()
    }
    const initNiceSelectSearch = (window as any).initNiceSelectSearch
    if (typeof initNiceSelectSearch === 'function') {
      initNiceSelectSearch()
    }
  }, [filters.travelDate, travelDateOptions])

  useEffect(() => {
    setSectorTouched(false)
  }, [sectorIdParam, sectorNameParam])

  useEffect(() => {
    if (sectorTouched) {
      return
    }
    if (sectorIdParam) {
      setFilters((prev) => {
        if (prev.sectorIds.length === 1 && prev.sectorIds[0] === sectorIdParam) {
          return prev
        }
        return { ...prev, sectorIds: [sectorIdParam] }
      })
      return
    }
    if (!sectorNameParam || filters.sectorIds.length) {
      return
    }
    const normalized = sectorNameParam.trim().toLowerCase()
    if (!normalized) {
      return
    }
    const match = sectorOptions.find((sector) => sector.name.toLowerCase() === normalized)
    if (match) {
      setFilters((prev) => ({ ...prev, sectorIds: [String(match.id)] }))
    }
  }, [sectorIdParam, sectorNameParam, sectorOptions, filters.sectorIds, sectorTouched])

  useEffect(() => {
    if (travelDateTouched) {
      return
    }
    const resolved = resolveTravelDateValue(travelDateParam, travelDateOptions)
    if (resolved && resolved !== filters.travelDate) {
      setFilters((prev) => ({ ...prev, travelDate: resolved }))
    }
  }, [travelDateParam, travelDateOptions, filters.travelDate, travelDateTouched])

  const listPayload = useMemo(
    () => ({
      search: '',
      tourIds: '',
      sectorIds: filters.sectorIds.length ? filters.sectorIds.join(',') : '',
      startDuration: filters.durationMin,
      endDuration: filters.durationMax,
      startPrice: filters.priceMin,
      endPrice: filters.priceMax,
      date: filters.travelDate,
      productType: productType,
      sort: 2,
      sortType: 1,
      currentPage,
      pageSize: PAGE_SIZE,
    }),
    [filters, productType, currentPage]
  )

  const [tourListData, setTourListData] = useState<unknown | null>(null)
  const pageMeta = useMemo(() => extractPageMeta(tourListData, PAGE_SIZE), [tourListData, PAGE_SIZE])
  const totalPages = pageMeta.totalPage
  const activePage = Math.min(Math.max(currentPage, 0), Math.max(totalPages - 1, 0))

  useEffect(() => {
    if (currentPage !== activePage) {
      setCurrentPage(activePage)
    }
  }, [activePage, currentPage])

  useEffect(() => {
    setCurrentPage(0)
  }, [
    productType,
    filters.sectorIds.join(','),
    filters.travelDate,
    filters.priceMin,
    filters.priceMax,
    filters.durationMin,
    filters.durationMax,
  ])

  useEffect(() => {
    let isActive = true

    const fetchList = async () => {
      try {
        if (isActive) {
          setListError(false)
        }
        const res = await fetch('/api/tour/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(listPayload),
        })
        const data = await parseJsonResponse(res)
        if (isActive) {
          setTourListData(data)
        }
      } catch (error) {
        console.error('Tour list fetch error:', error)
        if (isActive) {
          setListError(true)
        }
      }
    }

    fetchList()

    return () => {
      isActive = false
    }
  }, [listPayload])

  useEffect(() => {
    let isActive = true
    const position = productType === 2 ? 'Free & Easy' : 'Group Tour'

    const fetchBanner = async () => {
      try {
        const res = await fetch(`/api/banners?position=${encodeURIComponent(position)}`)
        const data = await parseJsonResponse(res)
        if (isActive) {
          setBannerData(data)
        }
      } catch (error) {
        console.error('Tour list banner error:', error)
        if (isActive) {
          setBannerData(null)
        }
      }
    }

    fetchBanner()

    return () => {
      isActive = false
    }
  }, [productType])

  const pageNumbers = useMemo(() => {
    if (totalPages <= 1) {
      return []
    }
    const maxButtons = 5
    let start = Math.max(activePage - Math.floor(maxButtons / 2), 0)
    let end = Math.min(start + maxButtons - 1, totalPages - 1)
    if (end - start + 1 < maxButtons) {
      start = Math.max(end - maxButtons + 1, 0)
    }
    return Array.from({ length: end - start + 1 }, (_, index) => start + index)
  }, [activePage, totalPages])

  const handlePageChange = (nextPage: number) => {
    if (nextPage < 0 || nextPage >= totalPages || nextPage === activePage) {
      return
    }
    setCurrentPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    let isActive = true

    const fetchSectors = async () => {
      try {
        if (isActive) {
          setSectorsError(false)
        }
        const res = await fetch('/api/sectors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({}),
        })
        const data = await parseJsonResponse(res)
        if (isActive) {
          setSectorsData(data)
        }
      } catch (error) {
        console.error('Sector fetch error:', error)
        if (isActive) {
          setSectorsError(true)
        }
      }
    }

    fetchSectors()

    return () => {
      isActive = false
    }
  }, [])

  const resolvedTourListItems = resolveTourListItems(tourListData)
  const totalRows = extractTotalRows(tourListData)
  const displayTotalRows = totalRows ?? resolvedTourListItems.length
  const showApiNotice = listError || sectorsError
  const travelDateLabel = formatTravelDateLabel(filters.travelDate, travelDateOptions)
  const bannerImage = resolveBannerImage(bannerData) || '/assets/img/inner-page/breadcrumb/bg-1.jpg'

  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Breadcrumb Section Start */}
          <div className="breadcrumb-wrapper-2 fix bg-cover" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1 className="wow fadeInUp" data-wow-delay=".3s">Tour List</h1>
                </div>
                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <a href="/">
                      Home
                    </a>
                  </li>
                  <li className="style-2">
                    Tour List
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ApiMaintenanceNotice visible={showApiNotice} />

          {/* Tour List Section Start */}
          <section className="tour-list-section section-padding">
            <div className="container">
              <div className="tour-list-wrapper">
                <div className="row g-4">
                  <div className="col-lg-4 col-12 order-2 order-xl-1">
                    <div className="sticky-style">
                      <div className="tour-main-sideber">
                        <div className="tour-sidebar-items">
                          <div className="widget-title">
                            <h4>Destination</h4>
                          </div>
                          <div className="form-clt">
                            <div className="destination-filter">
                              {sectorOptions.map((sector) => (
                                <button
                                  key={sector.id}
                                  type="button"
                                  className={`destination-pill${filters.sectorIds.includes(String(sector.id)) ? ' is-active' : ''}`}
                                  onClick={() => {
                                    const idValue = String(sector.id)
                                    setSectorTouched(true)
                                    setFilters((prev) => {
                                      if (prev.sectorIds.includes(idValue)) {
                                        return { ...prev, sectorIds: prev.sectorIds.filter((id) => id !== idValue) }
                                      }
                                      return { ...prev, sectorIds: [...prev.sectorIds, idValue] }
                                    })
                                  }}
                                >
                                  {sector.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="tour-sidebar-items travel-date-item">
                          <div className="widget-title">
                            <h4>Travel Date</h4>
                          </div>
                          <div className="form-clt">
                            <select
                              className="tour-date-select"
                              data-react-select="true"
                              value={filters.travelDate}
                              onChange={(event) => {
                                const nextValue = event.target.value
                                setTravelDateTouched(true)
                                setFilters((prev) => ({ ...prev, travelDate: nextValue }))
                              }}
                            >
                              <option value="">N/A</option>
                              {travelDateOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="tour-sidebar-items">
                          <div className="widget-title">
                            <h4>Price Range</h4>
                          </div>
                          <div className="range-filter">
                            <div className="range-values">
                              <span>${filters.priceMin}</span>
                              <span>${filters.priceMax}</span>
                            </div>
                            <div className="range-inputs">
                              <input
                                type="range"
                                min={DEFAULT_PRICE_MIN}
                                max={DEFAULT_PRICE_MAX}
                                value={filters.priceMin}
                                onChange={(event) => {
                                  const value = Number(event.target.value)
                                  setFilters((prev) => ({
                                    ...prev,
                                    priceMin: value,
                                    priceMax: Math.max(prev.priceMax, value),
                                  }))
                                }}
                              />
                              <input
                                type="range"
                                min={DEFAULT_PRICE_MIN}
                                max={DEFAULT_PRICE_MAX}
                                value={filters.priceMax}
                                onChange={(event) => {
                                  const value = Number(event.target.value)
                                  setFilters((prev) => ({
                                    ...prev,
                                    priceMin: Math.min(prev.priceMin, value),
                                    priceMax: value,
                                  }))
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="tour-sidebar-items">
                          <div className="widget-title">
                            <h4>Duration (Days)</h4>
                          </div>
                          <div className="range-filter">
                            <div className="range-values">
                              <span>{filters.durationMin} days</span>
                              <span>{filters.durationMax} days</span>
                            </div>
                            <div className="range-inputs">
                              <input
                                type="range"
                                min={DEFAULT_DURATION_MIN}
                                max={DEFAULT_DURATION_MAX}
                                value={filters.durationMin}
                                onChange={(event) => {
                                  const value = Number(event.target.value)
                                  setFilters((prev) => ({
                                    ...prev,
                                    durationMin: value,
                                    durationMax: Math.max(prev.durationMax, value),
                                  }))
                                }}
                              />
                              <input
                                type="range"
                                min={DEFAULT_DURATION_MIN}
                                max={DEFAULT_DURATION_MAX}
                                value={filters.durationMax}
                                onChange={(event) => {
                                  const value = Number(event.target.value)
                                  setFilters((prev) => ({
                                    ...prev,
                                    durationMin: Math.min(prev.durationMin, value),
                                    durationMax: value,
                                  }))
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tour-sidebar-bg-image-items">
                        <img src="/assets/img/inner-page/tour-sidebar/sidebar-image.jpg" alt="img" />
                        <div className="tour-bg-content">
                          <span>xplore The World</span>
                          <h3>
                            <a href="/tour-details">Best Tourist Place</a>
                          </h3>
                          <a href="/tour-details" className="theme-btn">Explore Tours</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 order-1 order-xl-2">
                    <div className="tour-active-filters">
                      <div className="filter-summary">
                        <span className="filter-label">Price:</span>
                        <span className="filter-value">
                          ${filters.priceMin} - ${filters.priceMax}
                        </span>
                        <span className="filter-label">Duration:</span>
                        <span className="filter-value">
                          {filters.durationMin} - {filters.durationMax} days
                        </span>
                        {selectedSectorOptions.map((sector) => (
                          <button
                            key={`selected-${sector.id}`}
                            type="button"
                            className="destination-pill filter-chip"
                            onClick={() => {
                              setSectorTouched(true)
                              setFilters((prev) => ({
                                ...prev,
                                sectorIds: prev.sectorIds.filter((id) => id !== String(sector.id)),
                              }))
                            }}
                          >
                            {sector.name}
                            <span className="filter-chip-remove">x</span>
                          </button>
                        ))}
                        {filters.travelDate ? (
                          <>
                            <span className="filter-label">Travel Date:</span>
                            <button
                              type="button"
                              className="destination-pill filter-chip"
                              onClick={() => {
                                setTravelDateTouched(true)
                                setFilters((prev) => ({ ...prev, travelDate: '' }))
                              }}
                            >
                              {travelDateLabel}
                              <span className="filter-chip-remove">x</span>
                            </button>
                          </>
                        ) : null}
                      </div>
                    </div>
                    <div className="tour-list-wrap">
                      <div className="list-wrap">
                        <ul className="nav">
                          <li className="nav-item">
                            <a href="#grid" data-bs-toggle="tab" className="nav-link">
                              <i className="fa-regular fa-grid-2"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#list" data-bs-toggle="tab" className="nav-link active">
                              <i className="fas fa-bars"></i>
                            </a>
                          </li>
                        </ul>
                        <p>{displayTotalRows} Tours found</p>
                      </div>
                      {/* Sort By hidden per request */}
                    </div>
                    <div className="tab-content">
                      <div id="grid" className="tab-pane fade">
                        <div className="row">
                          {resolvedTourListItems.map((item) => (
                            <div key={`grid-${item.id}`} className="col-xl-6 col-lg-6 col-md-6">
                              <div className="tour-place-item">
                                <div className={`tour-place-image${item.image ? '' : ' is-empty'}`}>
                                  {item.image ? <img src={item.image} alt="img" /> : null}
                                  {item.badge ? <span>{item.badge}</span> : null}
                                  <div className="icon">
                                    <i className="fa-regular fa-heart"></i>
                                  </div>
                                </div>
                                <div className="tour-place-content">
                                  <div className="rating-item">
                                    {item.productCode ? <div className="product-code">{item.productCode}</div> : null}
                                    {item.price ? (
                                      <h5>
                                        <span>{item.priceLabel}</span>
                                        {item.price}
                                      </h5>
                                    ) : null}
                                  </div>
                                  {item.title ? (
                                    <h3 title={item.title}>
                                      {item.href ? <a href={item.href}>{item.title}</a> : <span>{item.title}</span>}
                                    </h3>
                                  ) : null}
                                  <ul className="tour-list">
                                    {item.location ? (
                                      <li>
                                        <i className="fa-regular fa-location-dot"></i>
                                        {item.location}
                                      </li>
                                    ) : null}
                                    {item.duration ? (
                                      <li>
                                        <i className="fa-regular fa-clock"></i>
                                        {item.duration}
                                      </li>
                                    ) : null}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div id="list" className="tab-pane fade show active">
                        {resolvedTourListItems.map((item) => (
                          <div key={`list-${item.id}`} className="tour-list-box-items">
                            <div className={`tour-image${item.image ? '' : ' is-empty'}`}>
                              {item.image ? <img src={item.image} alt="img" /> : null}
                              {item.badge ? <span>{item.badge}</span> : null}
                              <div className="icon">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="tour-content">
                              {item.title ? (
                                <h3 title={item.title}>
                                  {item.href ? <a href={item.href}>{item.title}</a> : <span>{item.title}</span>}
                                </h3>
                              ) : null}
                              <ul>
                                {item.location ? (
                                  <li>
                                    <i className="fa-regular fa-location-dot"></i>
                                    {item.location}
                                  </li>
                                ) : null}
                                {item.duration ? (
                                  <li>
                                    <i className="fa-regular fa-timer"></i>
                                    {item.duration}
                                  </li>
                                ) : null}
                              </ul>
                              <div className="bottom-list-items">
                                {item.price ? (
                                  <div className="list-1">
                                    <p>Start Price</p>
                                    <h4>{item.price}</h4>
                                  </div>
                                ) : null}
                                {item.productCode ? (
                                  <div className="list-2">
                                    <p>Product Code</p>
                                    <span className="product-code">{item.productCode}</span>
                                  </div>
                                ) : null}
                                {item.href ? (
                                  <a href={item.href} className="theme-btn">
                                    View Tour
                                  </a>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {totalPages > 1 ? (
                      <div className="page-nav-wrap">
                        <ul>
                          <li>
                            <button
                              type="button"
                              className={`page-numbers${activePage === 0 ? ' disabled' : ''}`}
                              onClick={() => handlePageChange(activePage - 1)}
                              disabled={activePage === 0}
                            >
                              <i className="fa-solid fa-chevron-left"></i>
                            </button>
                          </li>
                          {pageNumbers.map((page) => (
                            <li key={`page-${page}`}>
                              <button
                                type="button"
                                className={`page-numbers${page === activePage ? ' active' : ''}`}
                                onClick={() => handlePageChange(page)}
                              >
                                {page + 1}
                              </button>
                            </li>
                          ))}
                          <li>
                            <button
                              type="button"
                              className={`page-numbers style-2${activePage >= totalPages - 1 ? ' disabled' : ''}`}
                              onClick={() => handlePageChange(activePage + 1)}
                              disabled={activePage >= totalPages - 1}
                            >
                              <i className="fa-solid fa-chevron-right"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </section>
{/* Footer Section Start */}
          <Footer contactSection={footerContactSection} />
        </div>
      </div>
    </>
  )
}




















