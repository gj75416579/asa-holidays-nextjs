'use client'

import { Suspense, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'
import ApiMaintenanceNotice from '@/templete/ApiMaintenanceNotice'

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

const isRecord = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null

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

  const DEFAULT_PRICE_MIN = 1
  const DEFAULT_PRICE_MAX = 20000
  const DEFAULT_DURATION_MIN = 1
  const DEFAULT_DURATION_MAX = 30
  const PAGE_SIZE = 10

  const [filters, setFilters] = useState({
    sectorIds: [] as string[],
    priceMin: DEFAULT_PRICE_MIN,
    priceMax: DEFAULT_PRICE_MAX,
    durationMin: DEFAULT_DURATION_MIN,
    durationMax: DEFAULT_DURATION_MAX,
  })
  const [currentPage, setCurrentPage] = useState(0)
  const [sectorsData, setSectorsData] = useState<unknown | null>(null)
  const [listError, setListError] = useState(false)
  const [sectorsError, setSectorsError] = useState(false)

  const sectorOptions = useMemo(() => extractSectors(sectorsData), [sectorsData])
  const selectedSectorOptions = useMemo(
    () => sectorOptions.filter((sector) => filters.sectorIds.includes(String(sector.id))),
    [filters.sectorIds, sectorOptions]
  )

  const listPayload = useMemo(
    () => ({
      search: '',
      tourIds: '',
      sectorIds: filters.sectorIds.length ? filters.sectorIds.join(',') : '',
      startDuration: filters.durationMin,
      endDuration: filters.durationMax,
      startPrice: filters.priceMin,
      endPrice: filters.priceMax,
      date: '',
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

  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Breadcrumb Section Start */}
          <div className="breadcrumb-wrapper-2 fix bg-cover" style={{ backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-1.jpg)' }}>
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
                            onClick={() =>
                              setFilters((prev) => ({
                                ...prev,
                                sectorIds: prev.sectorIds.filter((id) => id !== String(sector.id)),
                              }))
                            }
                          >
                            {sector.name}
                            <span className="filter-chip-remove">x</span>
                          </button>
                        ))}
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

          {/* Contact Section Start */}
          <section className="contact-section section-padding pb-0">
            <div className="container">
              <div className="contact-wrapper">
                <div className="row g-4 align-items-end">
                  <div className="col-lg-6">
                    <div className="contact-image">
                      <img data-speed=".8" src="/assets/img/home-1/Image.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-content">
                      <div className="logo-image">
                        <a href="/"><img src="/assets/img/logo/white-logo.svg" alt="img" /></a>
                      </div>
                      <div className="section-title mb-0">
                        <h2 className="sec-title text-white text-anim">
                          Adventure Is Calling é??Are You Ready?
                        </h2>
                      </div>
                      <p className="text wow fadeInUp" data-wow-delay=".3s">
                        Get ready to embark on unforgettable journeys with us. whether you&apos;re seeking thrilling adventures, relaxing escapes
                      </p>
                      <a href="/tour-details" className="theme-btn">Explore Our Tours</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Section Start */}
          <Footer />
        </div>
      </div>
    </>
  )
}



















