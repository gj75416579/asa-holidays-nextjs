'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'
import ApiMaintenanceNotice from '@/templete/ApiMaintenanceNotice'

export const dynamic = 'force-dynamic'

export default function TourDetails() {
  return (
    <Suspense fallback={null}>
      <TourDetailsContent />
    </Suspense>
  )
}

type TourDetail = {
  id: number | null
  title: string
  location: string
  sector: string
  duration: string
  bannerImage: string
  overviewHtml: string
  highlightsHtml: string
  itineraryHtml: string
  inclusionsHtml: string
  exclusionsHtml: string
  mapImage: string
  productType: number
}

type DepartureItem = {
  id: number | string
  tourId?: number
  priceCodeId?: number
  priceCode?: string
  tourCode?: string
  code?: string
  flightStartDate?: string
  flightEndDate?: string
  startDate?: string
  endDate?: string
  capacity?: number
  reserved?: number
  sold?: number
  landSold?: number
  tourLeader?: number
  tourManager?: number
  sglFare?: number
  twnFare?: number
  trpFare?: number
  chdWithBedFare?: number
  chdHalfTwnFare?: number
  chdWithOutBedFare?: number
  infantFare?: number
  grSglFare?: number
  grTwnFare?: number
  grTrpFare?: number
  grChdWithBedFare?: number
  grChdHalfTwnFare?: number
  grChdWithOutBedFare?: number
  grInfantFare?: number
  adultTax?: number
  childTax?: number
  flights?: Record<string, unknown>[]
}

type ItineraryDay = {
  id: number | string
  title: string
  descriptionHtml: string
}

type ItineraryGroup = {
  id: number
  name?: string
  travelStartDate?: string
  travelEndDate?: string
  itineraryDiffDescInternal?: string
}

type RelatedTourItem = {
  id: number | string
  image: string
  badge?: string
  productCode?: string
  priceLabel?: string
  price?: string
  title: string
  location: string
  duration: string
  href?: string
  delay?: string
}

const tourDetailFallback = {
  title: 'Relinking Beach in Nusa panada island, Bali, Indonesia',
  location: 'Bali, Indonesia',
  duration: '1 - 3 days',
}

const apiMode = process.env.NEXT_PUBLIC_API_MODE ?? 'dev'
const shouldFallback = apiMode !== 'prod'

const isRecord = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null

const getLocalizedText = (value: unknown) => {
  if (typeof value === 'string') {
    return value.trim()
  }
  if (isRecord(value) && typeof value.EN === 'string') {
    return value.EN.trim()
  }
  return ''
}

const pickStringValue = (...values: unknown[]) => {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) {
      return value.trim()
    }
  }
  return ''
}

const resolveBannerImage = (record: Record<string, unknown>) => {
  const images = isRecord(record.images) ? record.images : null
  return pickStringValue(
    record.banner,
    record.bannerImage,
    record.bannerImg,
    record.bannerUrl,
    record.cover,
    record.image,
    record.thumbnail,
    images?.banner,
    images?.desktop
  )
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

const formatPrice = (value: unknown) => {
  const numberValue = typeof value === 'number' ? value : Number(value)
  if (!Number.isFinite(numberValue)) {
    return ''
  }
  return `$${numberValue.toLocaleString('en-US', { maximumFractionDigits: 2 })}`
}

const formatPriceDisplay = (value: unknown) => {
  const numberValue = typeof value === 'number' ? value : Number(value)
  if (!Number.isFinite(numberValue) || numberValue <= 0) {
    return '-'
  }
  return `$${numberValue.toLocaleString('en-US', { maximumFractionDigits: 2 })}`
}

const encodeUtf8Base64 = (value: string) =>
  btoa(
    encodeURIComponent(value).replace(/%([0-9A-F]{2})/g, (_, code) => String.fromCharCode(Number.parseInt(code, 16)))
  )

const toHex = (value: string) =>
  value
    .split('')
    .map((char) => char.charCodeAt(0).toString(16).padStart(2, '0'))
    .join('')

const encodeTourParam = (payload: Record<string, unknown>) => {
  const json = JSON.stringify(payload)
  const base64 = encodeUtf8Base64(json)
  return toHex(base64)
}

const toNumber = (value: unknown) => {
  const numberValue = typeof value === 'number' ? value : Number(value)
  return Number.isFinite(numberValue) ? numberValue : 0
}

const parseJsonResponse = async (res: Response) => {
  const text = await res.text()
  if (!res.ok) {
    throw new Error(text || `HTTP ${res.status}`)
  }
  return text ? JSON.parse(text) : {}
}

const extractList = (data: unknown): Record<string, unknown>[] => {
  if (Array.isArray(data)) {
    return data as Record<string, unknown>[]
  }
  if (!isRecord(data)) {
    return []
  }

  const candidates = [data.data, data.list, data.items, data.records, data.rows, data.result]
  for (const candidate of candidates) {
    if (Array.isArray(candidate)) {
      return candidate as Record<string, unknown>[]
    }
    if (isRecord(candidate)) {
      const nestedCandidates = [candidate.data, candidate.list, candidate.items, candidate.records, candidate.rows, candidate.result]
      for (const nestedCandidate of nestedCandidates) {
        if (Array.isArray(nestedCandidate)) {
          return nestedCandidate as Record<string, unknown>[]
        }
      }
    }
  }

  return []
}

const resolveSeoId = async (uri: string) => {
  const candidates = uri.includes('/') ? [uri] : [`tour/${uri}`, uri]
  for (const candidate of candidates) {
    try {
      const seoRes = await fetch(`/api/system/seo/${encodeURI(candidate)}`)
      const seoData = await parseJsonResponse(seoRes)
      const refId = isRecord(seoData) && isRecord(seoData.data) ? seoData.data.refId : null
      if (typeof refId === 'number') {
        return refId
      }
    } catch (error) {
      console.warn('SEO lookup failed:', candidate, error)
    }
  }
  return null
}

const resolveTourDetail = (data: unknown, fallback: typeof tourDetailFallback, fallbackEnabled: boolean): TourDetail => {
  const emptyDetail: TourDetail = {
    id: null,
    title: fallbackEnabled ? fallback.title : '',
    location: fallbackEnabled ? fallback.location : '',
    sector: fallbackEnabled ? fallback.location : '',
    duration: fallbackEnabled ? fallback.duration : '',
    bannerImage: '',
    overviewHtml: '',
    highlightsHtml: '',
    itineraryHtml: '',
    inclusionsHtml: '',
    exclusionsHtml: '',
    mapImage: '',
    productType: 1,
  }

  if (!isRecord(data) || !isRecord(data.data)) {
    return emptyDetail
  }

  const record = data.data
  const titleValue = getLocalizedText(record.name)
  const locationValue = typeof record.sector === 'string' ? record.sector.trim() : ''
  const durationValue = formatDuration(record.duration)

  return {
    id: typeof record.id === 'number' ? record.id : null,
    title: titleValue || (fallbackEnabled ? fallback.title : ''),
    location: locationValue || (fallbackEnabled ? fallback.location : ''),
    sector: locationValue || (fallbackEnabled ? fallback.location : ''),
    duration: durationValue || (fallbackEnabled ? fallback.duration : ''),
    bannerImage: resolveBannerImage(record),
    overviewHtml: getLocalizedText(record.shortDescription),
    highlightsHtml: getLocalizedText(record.highlights),
    itineraryHtml: getLocalizedText(record.writeUps),
    inclusionsHtml: getLocalizedText(record.inclusions),
    exclusionsHtml: getLocalizedText(record.exclusions),
    mapImage: typeof record.sectorMap === 'string' ? record.sectorMap.trim() : '',
    productType: typeof record.productType === 'number' ? record.productType : 1,
  }
}

const resolveDepartures = (data: unknown): DepartureItem[] => {
  if (!isRecord(data) || !isRecord(data.data) || !Array.isArray(data.data.pageData)) {
    return []
  }

  const departures: DepartureItem[] = []

  data.data.pageData.forEach((item) => {
    if (!isRecord(item)) {
      return
    }

    const idValue = typeof item.id === 'number' ? item.id : typeof item.code === 'string' ? item.code : ''
    if (!idValue) {
      return
    }

    departures.push({
      id: idValue,
      tourId: typeof item.tourId === 'number' ? item.tourId : undefined,
      priceCodeId: typeof item.priceCodeId === 'number' ? item.priceCodeId : undefined,
      priceCode: typeof item.priceCode === 'string' ? item.priceCode : undefined,
      tourCode: typeof item.tourCode === 'string' ? item.tourCode : undefined,
      code: typeof item.code === 'string' ? item.code : undefined,
      flightStartDate: typeof item.flightStartDate === 'string' ? item.flightStartDate.trim() : undefined,
      flightEndDate: typeof item.flightEndDate === 'string' ? item.flightEndDate.trim() : undefined,
      startDate: typeof item.startDate === 'string' ? item.startDate.trim() : undefined,
      endDate: typeof item.endDate === 'string' ? item.endDate.trim() : undefined,
      capacity: typeof item.capacity === 'number' ? item.capacity : undefined,
      reserved: typeof item.reserved === 'number' ? item.reserved : undefined,
      sold: typeof item.sold === 'number' ? item.sold : undefined,
      landSold: typeof item.landSold === 'number' ? item.landSold : undefined,
      tourLeader: typeof item.tourLeader === 'number' ? item.tourLeader : undefined,
      tourManager: typeof item.tourManager === 'number' ? item.tourManager : undefined,
      sglFare: typeof item.sglFare === 'number' ? item.sglFare : undefined,
      twnFare: typeof item.twnFare === 'number' ? item.twnFare : undefined,
      trpFare: typeof item.trpFare === 'number' ? item.trpFare : undefined,
      chdWithBedFare: typeof item.chdWithBedFare === 'number' ? item.chdWithBedFare : undefined,
      chdHalfTwnFare: typeof item.chdHalfTwnFare === 'number' ? item.chdHalfTwnFare : undefined,
      chdWithOutBedFare: typeof item.chdWithOutBedFare === 'number' ? item.chdWithOutBedFare : undefined,
      infantFare: typeof item.infantFare === 'number' ? item.infantFare : undefined,
      grSglFare: typeof item.grSglFare === 'number' ? item.grSglFare : undefined,
      grTwnFare: typeof item.grTwnFare === 'number' ? item.grTwnFare : undefined,
      grTrpFare: typeof item.grTrpFare === 'number' ? item.grTrpFare : undefined,
      grChdWithBedFare: typeof item.grChdWithBedFare === 'number' ? item.grChdWithBedFare : undefined,
      grChdHalfTwnFare: typeof item.grChdHalfTwnFare === 'number' ? item.grChdHalfTwnFare : undefined,
      grChdWithOutBedFare: typeof item.grChdWithOutBedFare === 'number' ? item.grChdWithOutBedFare : undefined,
      grInfantFare: typeof item.grInfantFare === 'number' ? item.grInfantFare : undefined,
      adultTax: typeof item.adultTax === 'number' ? item.adultTax : undefined,
      childTax: typeof item.childTax === 'number' ? item.childTax : undefined,
      flights: Array.isArray(item.flights) ? (item.flights as Record<string, unknown>[]) : undefined,
    })
  })

  return departures
}

type DeparturePriceSet = {
  sglFare?: number
  twnFare?: number
  trpFare?: number
  chdWithBedFare?: number
  chdHalfTwnFare?: number
  chdWithOutBedFare?: number
  infantFare?: number
  adultTax?: number
  childTax?: number
}

const getDeparturePrices = (departure: DepartureItem, priceType: 'full' | 'land'): DeparturePriceSet => {
  if (priceType === 'land') {
    return {
      sglFare: departure.grSglFare,
      twnFare: departure.grTwnFare,
      trpFare: departure.grTrpFare,
      chdWithBedFare: departure.grChdWithBedFare,
      chdHalfTwnFare: departure.grChdHalfTwnFare,
      chdWithOutBedFare: departure.grChdWithOutBedFare,
      infantFare: departure.grInfantFare,
      adultTax: 0,
      childTax: 0,
    }
  }

  return {
    sglFare: departure.sglFare,
    twnFare: departure.twnFare,
    trpFare: departure.trpFare,
    chdWithBedFare: departure.chdWithBedFare,
    chdHalfTwnFare: departure.chdHalfTwnFare,
    chdWithOutBedFare: departure.chdWithOutBedFare,
    infantFare: departure.infantFare,
    adultTax: departure.adultTax,
    childTax: departure.childTax,
  }
}

const pickFromPrice = (prices: DeparturePriceSet) => {
  const candidates = [
    prices.twnFare,
    prices.sglFare,
    prices.trpFare,
    prices.chdWithBedFare,
    prices.chdHalfTwnFare,
    prices.chdWithOutBedFare,
    prices.infantFare,
  ]
  for (const candidate of candidates) {
    if (typeof candidate === 'number' && candidate > 0) {
      return formatPrice(candidate)
    }
  }
  return ''
}

const getAvailability = (departure: DepartureItem) => {
  const capacity = toNumber(departure.capacity)
  const reserved = toNumber(departure.reserved)
  const sold = toNumber(departure.sold)
  const landSold = toNumber(departure.landSold)
  const tourLeader = toNumber(departure.tourLeader)
  const tourManager = toNumber(departure.tourManager)
  const salesQty = capacity - reserved - sold + landSold
  const available = salesQty - tourLeader - tourManager

  if (available <= 0) {
    return { label: 'Sold Out', status: 'sold-out', available }
  }
  if (available <= 9) {
    return { label: 'Selling Fast', status: 'selling-fast', available }
  }
  return { label: 'Available', status: 'available', available }
}

const resolveItineraryGroupId = (data: unknown): number | null => {
  if (!isRecord(data) || !Array.isArray(data.data)) {
    return null
  }
  const first = data.data[0] as Record<string, unknown> | undefined
  if (!first || typeof first.id !== 'number') {
    return null
  }
  return first.id
}

const resolveItineraryItems = (data: unknown): ItineraryDay[] => {
  if (!isRecord(data) || !isRecord(data.data) || !Array.isArray(data.data.itineraries)) {
    return []
  }

  return data.data.itineraries.map((item, index) => {
    const record = isRecord(item) ? item : {}
    const title = getLocalizedText(record.name)
    const descriptionHtml = getLocalizedText(record.description)

    return {
      id: typeof record.id === 'number' ? record.id : `itinerary-${index + 1}`,
      title: title || `Day ${index + 1}`,
      descriptionHtml,
    }
  })
}
const resolveRelatedTours = (data: unknown): RelatedTourItem[] => {
  const list = extractList(data)
  if (!list.length) {
    return []
  }

  const related: RelatedTourItem[] = []

  list.forEach((item, index) => {
    if (!isRecord(item)) {
      return
    }

    const title = getLocalizedText(item.name)
    const location = typeof item.sector === 'string' ? item.sector.trim() : ''
    const duration = formatDuration(item.duration)
    const image = typeof item.cover === 'string' ? item.cover.trim() : ''
    const badge = typeof item.badge === 'string' ? item.badge.trim() : ''
    const productCode = typeof item.productCode === 'string' ? item.productCode.trim() : ''
    const price = formatPrice(item.price)
    const uriValue = typeof item.uri === 'string' ? item.uri.trim() : ''
    const idValue =
      typeof item.id === 'number'
        ? item.id
        : productCode
          ? productCode
          : `related-${index + 1}`
    const hrefValue = uriValue
      ? `/tour-details?uri=${encodeURIComponent(uriValue)}`
      : typeof item.id === 'number'
        ? `/tour-details?id=${item.id}`
        : ''

    related.push({
      id: idValue,
      image,
      badge,
      productCode,
      priceLabel: price ? 'From' : '',
      price,
      title,
      location,
      duration,
      href: hrefValue,
      delay: `.${2 + index * 2}s`,
    })
  })

  return related
}

function TourDetailsContent() {
  const searchParams = useSearchParams()
  const idParam = searchParams.get('id')
  const uriParam = searchParams.get('uri')

  const [detailData, setDetailData] = useState<unknown | null>(null)
  const [departuresData, setDeparturesData] = useState<unknown | null>(null)
  const [relatedData, setRelatedData] = useState<unknown | null>(null)
  const [detailError, setDetailError] = useState(false)
  const [departuresError, setDeparturesError] = useState(false)
  const [relatedError, setRelatedError] = useState(false)
  const [itineraryItems, setItineraryItems] = useState<ItineraryDay[]>([])
  const [itineraryError, setItineraryError] = useState(false)
  const [activeDetailSection, setActiveDetailSection] = useState('overview')
  const [detailNavTop, setDetailNavTop] = useState(0)
  const detailNavRef = useRef<HTMLDivElement | null>(null)
  const detailNavTriggerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let isActive = true

    const fetchDetail = async () => {
      try {
        if (isActive) {
          setDetailError(false)
        }
        let detailId: number | null = null
        if (idParam) {
          const parsedId = Number(idParam)
          detailId = Number.isFinite(parsedId) ? parsedId : null
        }

        if (!detailId && uriParam) {
          detailId = await resolveSeoId(uriParam)
        }

        if (!detailId) {
          if (isActive) {
            setDetailError(true)
          }
          return
        }

        const detailRes = await fetch(`/api/tour/detail?id=${detailId}`)
        const detailJson = await parseJsonResponse(detailRes)
        console.log('Tour detail API data:', detailJson)
        if (isActive) {
          setDetailData(detailJson)
        }
      } catch (error) {
        console.error('Tour detail fetch error:', error)
        if (isActive) {
          setDetailError(true)
        }
      }
    }

    fetchDetail()

    return () => {
      isActive = false
    }
  }, [idParam, uriParam])

  const resolvedDetail = resolveTourDetail(detailData, tourDetailFallback, shouldFallback)
  const departures = resolveDepartures(departuresData)
  const relatedTours = resolveRelatedTours(relatedData)
  const isGroupTour = resolvedDetail.productType === 1

  useEffect(() => {
    let isActive = true

    if (!resolvedDetail.id || !isGroupTour) {
      setDeparturesData(null)
      return () => {
        isActive = false
      }
    }

    const fetchDepartures = async () => {
      try {
        if (isActive) {
          setDeparturesError(false)
        }
        const requestPayload = {
          id: resolvedDetail.id,
          pageSize: 0,
          currentPage: 0,
        }
        const res = await fetch('/api/tour/departures', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestPayload),
        })
        const json = await parseJsonResponse(res)
        if (isActive) {
          setDeparturesData(json)
        }
      } catch (error) {
        console.error('Tour departures fetch error:', error)
        if (isActive) {
          setDeparturesError(true)
        }
      }
    }

    fetchDepartures()

    return () => {
      isActive = false
    }
  }, [resolvedDetail.id, isGroupTour])

  useEffect(() => {
    let isActive = true

    if (!resolvedDetail.id) {
      setRelatedData(null)
      return () => {
        isActive = false
      }
    }

    const fetchRelated = async () => {
      try {
        if (isActive) {
          setRelatedError(false)
        }
        const relatedRes = await fetch(`/api/tour/link/${resolvedDetail.id}`)
        const relatedJson = await parseJsonResponse(relatedRes)
        if (isActive) {
          setRelatedData(relatedJson)
        }
      } catch (error) {
        console.error('Related tours fetch error:', error)
        if (isActive) {
          setRelatedError(true)
        }
      }
    }

    fetchRelated()

    return () => {
      isActive = false
    }
  }, [resolvedDetail.id])
  const emptyNotice = <div className="tour-empty-notice">No information available for this tour.</div>
  const mapLocation = resolvedDetail.sector.trim()
  const hasMapLocation = Boolean(mapLocation)
  const hasMapImage = Boolean(resolvedDetail.mapImage)
  const callPhone = '+6563035303'
  const primaryDeparture = departures[0] ?? null
  const showSidebarPricing = false
  const detailNavItems = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'itinerary', label: 'ITINERARY' },
    { id: 'price', label: 'PRICE & DEPARTURE' },
  ]
  const enquiryParams = new URLSearchParams()
  if (resolvedDetail.title) {
    enquiryParams.set('tourName', resolvedDetail.title)
  }
  const primaryTourCode = primaryDeparture?.tourCode || primaryDeparture?.code || ''
  if (primaryTourCode) {
    enquiryParams.set('tourCode', primaryTourCode)
  }
  if (primaryDeparture?.priceCode) {
    enquiryParams.set('productCode', primaryDeparture.priceCode)
  }
  const primaryDepartureDate = primaryDeparture?.flightStartDate || primaryDeparture?.startDate || ''
  if (primaryDepartureDate) {
    enquiryParams.set('departureDate', primaryDepartureDate)
  }
  if (resolvedDetail.id) {
    enquiryParams.set('tourId', String(resolvedDetail.id))
  }
  if (primaryDeparture?.id) {
    enquiryParams.set('departureId', String(primaryDeparture.id))
  }
  if (primaryDeparture?.priceCodeId) {
    enquiryParams.set('tourCodeId', String(primaryDeparture.priceCodeId))
  }
  enquiryParams.set('type', String(isGroupTour ? 1 : 2))
  const enquiryQuery = enquiryParams.toString()
  const enquiryUrl = enquiryQuery ? `/enquiry?${enquiryQuery}` : '/enquiry'
  const scrollToDetailSection = (sectionId: string) => {
    if (typeof window === 'undefined') {
      return
    }
    const target = document.getElementById(`detail-${sectionId}`)
    if (!target) {
      return
    }
    const headerOffset = detailNavTop
    const navHeight = detailNavRef.current?.getBoundingClientRect().height ?? 0
    const targetTop = target.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: targetTop - headerOffset - navHeight - 16,
      behavior: 'smooth',
    })
  }
  const DepartureCard = ({ departure }: { departure: DepartureItem }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [priceType, setPriceType] = useState<'full' | 'land'>('full')

    useEffect(() => {
      if (!isExpanded && priceType !== 'full') {
        setPriceType('full')
      }
    }, [isExpanded, priceType])

    const formatDateDisplay = (value: string, options: Intl.DateTimeFormatOptions) => {
      if (!value) {
        return ''
      }
      const date = new Date(value)
      if (Number.isNaN(date.getTime())) {
        return value
      }
      return new Intl.DateTimeFormat('en-US', options).format(date)
    }

    const formatTime = (value: string) => {
      if (!value) {
        return ''
      }
      const trimmed = value.replace(/[^0-9]/g, '')
      if (trimmed.length !== 4) {
        return value
      }
      return `${trimmed.slice(0, 2)}:${trimmed.slice(2)}`
    }

    const availability = getAvailability(departure)
    const prices = getDeparturePrices(departure, priceType)
    const dateStart = departure.flightStartDate || departure.startDate || ''
    const dateEnd = departure.flightEndDate || departure.endDate || ''
    const dateRange = dateStart && dateEnd
      ? `${formatDateDisplay(dateStart, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })} - ${formatDateDisplay(dateEnd, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}`
      : formatDateDisplay(dateStart || dateEnd, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }) || 'TBA'
    const tourCode = departure.tourCode || departure.code || ''
    const bookingTourId = departure.tourId ?? resolvedDetail.id
    const bookingPayload: Record<string, unknown> = {
      tourId: bookingTourId ?? undefined,
      tourCodeId: departure.id ?? departure.priceCodeId ?? undefined,
      departureId: departure.id ?? undefined,
      type: 1,
    }
    const bookingUrl = `/booking?tour=${encodeTourParam(bookingPayload)}`
    const enquiryParams = new URLSearchParams()
    if (resolvedDetail.title) {
      enquiryParams.set('tourName', resolvedDetail.title)
    }
    if (tourCode) {
      enquiryParams.set('tourCode', tourCode)
    }
    if (departure.priceCode) {
      enquiryParams.set('productCode', departure.priceCode)
    }
    if (dateStart) {
      enquiryParams.set('departureDate', dateStart)
    }
    if (bookingTourId) {
      enquiryParams.set('tourId', String(bookingTourId))
    }
    if (departure.id) {
      enquiryParams.set('departureId', String(departure.id))
    }
    if (departure.priceCodeId) {
      enquiryParams.set('tourCodeId', String(departure.priceCodeId))
    }
    enquiryParams.set('type', '2')
    const enquiryQuery = enquiryParams.toString()
    const enquiryUrl = enquiryQuery ? `/enquiry?${enquiryQuery}` : '/enquiry'
    const availabilityClass =
      availability.status === 'sold-out'
        ? 'is-sold-out'
        : availability.status === 'selling-fast'
          ? 'is-selling-fast'
          : 'is-available'
    const showPhoneAction = availability.status === 'selling-fast'
    const hasPhone = Boolean(callPhone)
    const actionPrimaryUrl = bookingUrl
    const tripDays = typeof (departure as Record<string, unknown>).days === 'number'
      ? (departure as Record<string, unknown>).days
      : dateStart && dateEnd
        ? Math.max(1, Math.round((new Date(dateEnd).getTime() - new Date(dateStart).getTime()) / (1000 * 60 * 60 * 24)) + 1)
        : null
    const tripNights = typeof (departure as Record<string, unknown>).nights === 'number'
      ? (departure as Record<string, unknown>).nights
      : tripDays
        ? Math.max(0, tripDays - 1)
        : null
    const departureName = getLocalizedText((departure as Record<string, unknown>).name)
    const airlineCode = typeof (departure as Record<string, unknown>).airlineCode === 'string'
      ? (departure as Record<string, unknown>).airlineCode
      : ''
    const airlineName = typeof (departure as Record<string, unknown>).airlineName === 'string'
      ? (departure as Record<string, unknown>).airlineName
      : ''

    const renderActionButton = (size: 'small' | 'large') => {
      if (availability.status === 'sold-out') {
        return (
          <button type="button" className={`theme-btn namho-book-btn ${size} is-disabled`} disabled>
            BOOK NOW
          </button>
        )
      }

      if (showPhoneAction) {
        if (!hasPhone) {
          return <div className={`action-btn-placeholder ${size}`}></div>
        }
        return (
          <a href={`tel:${callPhone}`} className={`action-btn action-primary ${size}`}>
            CALL US NOW
          </a>
        )
      }

      return (
        <a href={actionPrimaryUrl} className={`theme-btn namho-book-btn ${size}`}>
          BOOK NOW
        </a>
      )
    }

    return (
      <div className={`namho-departure-card${isExpanded ? ' is-expanded' : ''}`}>
        <div className="namho-card-header">
          <div className="namho-card-header-main">
            <div className="namho-card-date">
              <div className="namho-card-date-range">{dateRange}</div>
              {tourCode ? <div className="namho-card-code">{tourCode}</div> : null}
            </div>
            <div className="namho-card-meta">
              <div className={`namho-availability ${availabilityClass}`}>{availability.label}</div>
              {airlineCode ? (
                <img
                  src={`https://resources-mytourix-prod.s3.ap-southeast-1.amazonaws.com/Platform/airline/${airlineCode}.png`}
                  alt={airlineName || 'Airline'}
                  className="namho-airline-logo"
                />
              ) : null}
              <div className="namho-from">
                <div className="namho-from-label">From:</div>
                <div className="namho-from-value">{formatPriceDisplay(prices.twnFare)}</div>
              </div>
            </div>
          </div>
          <div className="namho-card-header-actions">
            <div className="namho-card-actions">{renderActionButton('small')}</div>
            <button
              type="button"
              className="namho-card-toggle"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              aria-label={isExpanded ? 'Collapse departure' : 'Expand departure'}
            >
              {isExpanded ? '▲' : '▼'}
            </button>
          </div>
        </div>

        {isExpanded ? (
          <div className="namho-card-body">
            <div className="namho-body-top">
              <div className="namho-calendar">
                <div className="namho-calendar-label">Travel Dates</div>
                <div className="namho-calendar-range">{dateRange}</div>
              </div>
              <div className="namho-body-summary">
                {tripDays ? (
                  <div className="namho-duration">
                    {tripDays} Days{tripNights !== null ? ` | ${tripNights} Nights` : ''}
                  </div>
                ) : null}
                {departureName ? <div className="namho-departure-name">{departureName}</div> : null}
              </div>
              <div className="namho-body-price">
                <div className="namho-body-price-row">
                  {airlineCode ? (
                    <img
                      src={`https://resources-mytourix-prod.s3.ap-southeast-1.amazonaws.com/Platform/airline/${airlineCode}.png`}
                      alt={airlineName || 'Airline'}
                      className="namho-airline-logo large"
                    />
                  ) : null}
                  <div className="namho-from">
                    <div className="namho-from-label">From:</div>
                    <div className="namho-from-value large">{formatPriceDisplay(prices.twnFare)}</div>
                  </div>
                </div>
                {/* <div className="namho-body-action">{renderActionButton('large')}</div> */}
              </div>
            </div>

            <div className="namho-price-toggle">
              <button
                type="button"
                className={`namho-price-tab${priceType === 'full' ? ' is-active' : ''}`}
                onClick={() => setPriceType('full')}
              >
                Full Tour
              </button>
              <button
                type="button"
                className={`namho-price-tab${priceType === 'land' ? ' is-active' : ''}`}
                onClick={() => setPriceType('land')}
              >
                Land Tour
              </button>
            </div>

            <div className="namho-price-grid">
              <div className="namho-price-block">
                <h4>Adult Fares (12 years & above)</h4>
                <div className="namho-price-row">
                  <span>Single Fare</span>
                  <span>{formatPriceDisplay(prices.sglFare)}</span>
                </div>
                <div className="namho-price-row">
                  <span>Twin Fare</span>
                  <span>{formatPriceDisplay(prices.twnFare)}</span>
                </div>
                <div className="namho-price-row">
                  <span>Triple Fare</span>
                  <span>{formatPriceDisplay(prices.trpFare)}</span>
                </div>
                <div className="namho-price-row muted">
                  <span>Adult Tax</span>
                  <span>{formatPriceDisplay(prices.adultTax)}</span>
                </div>
              </div>
              <div className="namho-price-block">
                <h4>Child Fares (2 to 11 years)</h4>
                <div className="namho-price-row">
                  <span>Child Twin</span>
                  <span>{formatPriceDisplay(prices.chdHalfTwnFare)}</span>
                </div>
                <div className="namho-price-row">
                  <span>Child w/Bed</span>
                  <span>{formatPriceDisplay(prices.chdWithBedFare)}</span>
                </div>
                <div className="namho-price-row">
                  <span>Child w/o Bed</span>
                  <span>{formatPriceDisplay(prices.chdWithOutBedFare)}</span>
                </div>
                <div className="namho-price-row muted">
                  <span>Child Tax</span>
                  <span>{formatPriceDisplay(prices.childTax)}</span>
                </div>
              </div>
              <div className="namho-price-block">
                <h4>Infant Fares (Below 2 years)</h4>
                <div className="namho-price-row">
                  <span>Infant</span>
                  <span>{formatPriceDisplay(prices.infantFare)}</span>
                </div>
              </div>
            </div>

            {false && departure.flights && departure.flights.length ? (
              <div className="namho-flight-schedule">
                <h4>Flight Schedule</h4>
                <div className="namho-flight-table">
                  <div className="namho-flight-row header">
                    <span>DATE</span>
                    <span>SECTOR</span>
                    <span>FLIGHT</span>
                    <span>ETD</span>
                    <span>ETA</span>
                  </div>
                  {departure.flights.map((flight, index) => {
                    const flightRecord = flight as Record<string, unknown>
                    const flightDate = typeof flightRecord.departureDate === 'string' ? flightRecord.departureDate : ''
                    const flightSector = typeof flightRecord.sector === 'string' ? flightRecord.sector : ''
                    const flightNo = typeof flightRecord.flightNo === 'string' ? flightRecord.flightNo : ''
                    const etd = typeof flightRecord.etd === 'string' ? flightRecord.etd : ''
                    const eta = typeof flightRecord.eta === 'string' ? flightRecord.eta : ''

                    return (
                      <div key={`${departure.id}-flight-${index}`} className="namho-flight-row">
                        <span>{formatDateDisplay(flightDate, { weekday: 'short', month: 'short', day: 'numeric', year: '2-digit' })}</span>
                        <span>{flightSector}</span>
                        <span>{flightNo}</span>
                        <span>{formatTime(etd)}</span>
                        <span>{formatTime(eta)}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    )
  }

  useEffect(() => {
    let isActive = true

    if (!resolvedDetail.id) {
      setItineraryItems([])
      return
    }

    const fetchItinerary = async () => {
      try {
        if (isActive) {
          setItineraryError(false)
        }
        console.log('[itinerary-groups] request:', { tourId: resolvedDetail.id })
        const groupRes = await fetch(`/api/tour/itinerary-groups/${resolvedDetail.id}`)
        const groupData = await parseJsonResponse(groupRes)
        console.log('[itinerary-groups] response:', groupData)
        const groupId = resolveItineraryGroupId(groupData)
        if (!groupId) {
          if (isActive) {
            setItineraryItems([])
          }
          return
        }

        console.log('[itineraries] request:', { groupId })
        const itineraryRes = await fetch(`/api/tour/itineraries/${groupId}`)
        const itineraryData = await parseJsonResponse(itineraryRes)
        console.log('[itineraries] response:', itineraryData)
        const items = resolveItineraryItems(itineraryData)
        if (isActive) {
          setItineraryItems(items)
        }
      } catch (error) {
        console.error('Itinerary fetch error:', error)
        if (isActive) {
          setItineraryError(true)
        }
      }
    }

    fetchItinerary()

    return () => {
      isActive = false
    }
  }, [resolvedDetail.id])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const navItems = ['overview', 'itinerary', 'price']

    const getHeaderHeight = () => {
      const header =
        document.getElementById('header-sticky') ||
        document.querySelector('.sticky-header') ||
        document.querySelector('header')
      return header ? header.getBoundingClientRect().height : 80
    }

    const updateHeaderOffset = () => {
      setDetailNavTop(getHeaderHeight())
    }

    const updateActiveSection = () => {
      const headerOffset = getHeaderHeight()
      const navHeight = detailNavRef.current?.getBoundingClientRect().height ?? 0
      const offset = headerOffset + navHeight + 16
      let currentSection = 'overview'
      for (const id of navItems) {
        const section = document.getElementById(`detail-${id}`)
        if (!section) {
          continue
        }
        const sectionTop = section.getBoundingClientRect().top + window.scrollY
        if (window.scrollY + offset >= sectionTop) {
          currentSection = id
        }
      }
      setActiveDetailSection(currentSection)
    }

    const handleScroll = () => {
      updateActiveSection()
    }

    updateHeaderOffset()
    updateActiveSection()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateHeaderOffset)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateHeaderOffset)
    }
  }, [detailNavTop])

  const showApiNotice = detailError || departuresError || relatedError || itineraryError
  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Hero Section Start */}
          <div className="breadcrumb-wrapper fix">
            <div className="container">
              <div className="page-heading style-2">
                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <a href="/">
                      Home
                    </a>
                  </li>
                  <li className="style-2 style-3">
                    Tour Details
                  </li>
                </ul>
                <div className="breadcrumb-sub-title">
                  <h1 className="wow fadeInUp" data-wow-delay=".3s">{resolvedDetail.title}</h1>
                </div>
                <ul className="list">
                  {resolvedDetail.location ? (
                    <li>
                      <i className="fa-regular fa-location-dot"></i>
                      {resolvedDetail.location}
                    </li>
                  ) : null}
                  {resolvedDetail.duration ? (
                    <li>
                      <i className="fa-regular fa-clock"></i>
                      {resolvedDetail.duration}
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          </div>

          <ApiMaintenanceNotice visible={showApiNotice} />

          {/* tour-details Section Start */}
          <section className="tour-details-section section-padding pt-0 fix">
            <div className="container">
              <div className="tour-details-wrappers">
                {/* <div className="row g-2">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="details-image">
                      <img src="/assets/img/inner-page/tour-details/details-1.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4 col-md-6">
                    <div className="details-image">
                      <img src="/assets/img/inner-page/tour-details/details-2.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="details-image">
                      <img src="/assets/img/inner-page/tour-details/details-3.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4 col-md-6">
                    <div className="details-image">
                      <img src="/assets/img/inner-page/tour-details/details-4.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="details-image">
                      <img src="/assets/img/inner-page/tour-details/details-5.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="details-image">
                      <img src="/assets/img/inner-page/tour-details/details-6.jpg" alt="img" />
                    </div>
                  </div>
                </div> */}
                <div className="tour-details-content">
                  {resolvedDetail.bannerImage ? (
                    <div
                      className="tour-detail-banner"
                      role="img"
                      aria-label={resolvedDetail.title || 'Tour banner'}
                      style={{ backgroundImage: `url(${resolvedDetail.bannerImage})` }}
                    ></div>
                  ) : null}
                  <div
                    ref={detailNavTriggerRef}
                    className="tour-detail-nav-trigger"
                    style={{ height: '0px' }}
                  ></div>
                  <div
                    ref={detailNavRef}
                    className="tour-detail-nav"
                  >
                    <div className="tour-detail-nav-inner">
                      <div className="tour-detail-nav-links">
                        {detailNavItems.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            className="tour-detail-nav-link"
                            onClick={() => scrollToDetailSection(item.id)}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                      <select
                        className="tour-detail-nav-select"
                        onChange={(event) => scrollToDetailSection(event.target.value)}
                        value={activeDetailSection}
                      >
                        {detailNavItems.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row g-4">
                    <div className="col-lg-12 col-12">
                      <div className="tour-left-content">
                        <div id="detail-overview" className="tour-detail-section">
                          <h3>Tours Overview</h3>
                          {resolvedDetail.overviewHtml ? (
                            <div className="tour-richtext mt-3 mb-5" dangerouslySetInnerHTML={{ __html: resolvedDetail.overviewHtml }} />
                          ) : (
                            <div className="mt-3 mb-5">{emptyNotice}</div>
                          )}
                          <div className="row g-4 mb-5">
                            <div className="col-lg-6">
                              <div className="list-item">
                                <h3>Included and Excluded</h3>
                                {resolvedDetail.inclusionsHtml ? (
                                  <div className="tour-richtext" dangerouslySetInnerHTML={{ __html: resolvedDetail.inclusionsHtml }} />
                                ) : (
                                  emptyNotice
                                )}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="list-item">
                                <h3>Excluded</h3>
                                {resolvedDetail.exclusionsHtml ? (
                                  <div className="tour-richtext" dangerouslySetInnerHTML={{ __html: resolvedDetail.exclusionsHtml }} />
                                ) : (
                                  emptyNotice
                                )}
                              </div>
                            </div>
                          </div>
                          <h3>Top Highlights</h3>
                          {resolvedDetail.highlightsHtml ? (
                            <div className="tour-richtext mt-3" dangerouslySetInnerHTML={{ __html: resolvedDetail.highlightsHtml }} />
                          ) : (
                            <div className="mt-3">{emptyNotice}</div>
                          )}
                        </div>
                        {/* Frequently Asked Questions hidden for now */}
                        {/*
                        <h3>Frequently Asked Questions</h3>
                        <div className="accordion-one mt-25 mb-60" id="faq-accordion">
                          <div className="accordion-item">
                            <h5 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                01_How do I book a tour or travel package?
                              </button>
                            </h5>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                              <div className="accordion-body">
                                <p>
                                  The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h5 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                02_What is included in the travel package?
                              </button>
                            </h5>
                            <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#faq-accordion">
                              <div className="accordion-body">
                                <p>The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h5 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                03_What is your cancellation and refund policy?
                              </button>
                            </h5>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                              <div className="accordion-body">
                                <p>
                                  The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h5 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                04_Can I customize my tour or travel package?
                              </button>
                            </h5>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                              <div className="accordion-body">
                                <p>
                                  The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h5 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                05_What documents do I need to travel?
                              </button>
                            </h5>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                              <div className="accordion-body">
                                <p>
                                  The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        */}
                        {hasMapLocation || hasMapImage ? (
                          <>
                            <h3>Maps</h3>
                            <div className="map-items">
                              <div className="googpemap">
                                {hasMapLocation ? (
                                  <iframe
                                    src={`https://www.google.com/maps?q=${encodeURIComponent(mapLocation)}&output=embed`}
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                  ></iframe>
                                ) : hasMapImage ? (
                                  <img src={resolvedDetail.mapImage} alt="map" />
                                ) : null}
                              </div>
                            </div>
                          </>
                        ) : null}
                        <div id="detail-itinerary" className="tour-detail-section">
                          <h3>Itinerary</h3>
                          {itineraryItems.length ? (
                            <div className="accordion-two mt-3 mb-5" id="itinerary-accordion">
                              {itineraryItems.map((item, index) => {
                                const collapseId = `itinerary-collapse-${item.id}`
                                const isFirst = index === 0
                                return (
                                  <div key={item.id} className="accordion-item">
                                    <h5 className="accordion-header">
                                      <button
                                        className={`accordion-button${isFirst ? '' : ' collapsed'}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#${collapseId}`}
                                        aria-expanded={isFirst}
                                        aria-controls={collapseId}
                                      >
                                        {item.title}
                                      </button>
                                    </h5>
                                    <div
                                      id={collapseId}
                                      className={`accordion-collapse collapse${isFirst ? ' show' : ''}`}
                                      data-bs-parent="#itinerary-accordion"
                                    >
                                      <div className="accordion-body">
                                        {item.descriptionHtml ? (
                                          <div className="tour-richtext" dangerouslySetInnerHTML={{ __html: item.descriptionHtml }} />
                                        ) : (
                                          <div className="tour-richtext">{emptyNotice}</div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          ) : (
                            <div className="mt-3 mb-5">{emptyNotice}</div>
                          )}
                        </div>
                        <div id="detail-price" className="tour-detail-section">
                          <h3 className="tour-detail-section-title">Price & Departure</h3>
                          <p className="tour-detail-section-subtitle">
                            {resolvedDetail.title}
                          </p>
                          <p className="tour-detail-section-note">
                            For more departures/airlines{' '}
                            <a href={enquiryUrl} className="tour-detail-section-link">
                              Enquire Now!
                            </a>
                          </p>
                          {isGroupTour ? (
                            departures.length ? (
                              <div className="departure-card-list detail-departure-list">
                                {departures.map((departure) => (
                                  <DepartureCard key={`departure-main-${departure.id}`} departure={departure} />
                                ))}
                              </div>
                            ) : (
                              <p className="text">No departures available yet.</p>
                            )
                          ) : (
                            <p className="text">This tour is for enquiry only. Please contact us for availability.</p>
                          )}
                        </div>
                        {/* Clients Reviews hidden for now */}
                        {/*
                        <h3>Clients Reviews</h3>
                        <div className="courses-reviews-box-items">
                          <div className="courses-reviews-box">
                            <div className="reviews-box">
                              <h2><span className="count">4.8</span></h2>
                              <p>856 Reviews</p>
                              <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                            </div>
                            <div className="reviews-ratting-right">
                              <div className="reviews-ratting-item">
                                <span>Services</span>
                                <div className="progress">
                                  <div className="progress-value style-two"></div>
                                </div>
                                <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="far fa-star"></i>
                                </div>
                              </div>
                              <div className="reviews-ratting-item">
                                <span>Guides</span>
                                <div className="progress">
                                  <div className="progress-value style-three"></div>
                                </div>
                                <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                              </div>
                              <div className="reviews-ratting-item">
                                <span>Price</span>
                                <div className="progress">
                                  <div className="progress-value style-three"></div>
                                </div>
                                <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="far fa-star"></i>
                                  <i className="far fa-star"></i>
                                </div>
                              </div>
                              <div className="reviews-ratting-item">
                                <span>Safety</span>
                                <div className="progress">
                                  <div className="progress-value style-four"></div>
                                </div>
                                <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="far fa-star"></i>
                                  <i className="far fa-star"></i>
                                  <i className="far fa-star"></i>
                                </div>
                              </div>
                              <div className="reviews-ratting-item">
                                <span>Foods</span>
                                <div className="progress">
                                  <div className="progress-value style-five"></div>
                                </div>
                                <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="far fa-star"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        */}
                        {/* Add Reviews hidden for now */}
                      </div>
                    </div>
                    {/* <div className="col-lg-4 col-12">
                      <div className="tour-details-side">
                        <div className="tour-details-sidebar sticky-style">
                          {showSidebarPricing ? (
                            <div className="tour-sidebar-items">
                              {isGroupTour ? (
                                <a href={enquiryUrl} className="theme-btn">
                                  Enquiry Now
                                </a>
                              ) : null}
                              <h3>{isGroupTour ? 'Price & Departure' : 'Tour Enquiry'}</h3>
                              {isGroupTour ? (
                                departures.length ? (
                                  <div className="departure-card-list">
                                    {departures.map((departure) => (
                                      <DepartureCard key={`departure-${departure.id}`} departure={departure} />
                                    ))}
                                  </div>
                                ) : (
                                  <p className="text">No departures available yet.</p>
                                )
                              ) : (
                                <>
                                  <p className="text">This tour is for enquiry only. Please contact us for availability.</p>
                                  <a href={enquiryUrl} className="theme-btn">
                                    Enquiry Now
                                  </a>
                                </>
                              )}
                            </div>
                          ) : null}
                          <div className="widget-contact">
                            <h3>Need Help?</h3>
                            <ul className="list-style-one">
                              <li><i className="far fa-envelope"></i> <a href="mailto:enquiry@asaholiday.com">enquiry@asaholiday.com</a></li>
                              <li><i className="far fa-phone-volume"></i> <a href="tel:+6563035303">+65 6303 5303</a></li>
                            </ul>
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
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tour Grid Section Start */}
          <section className="tour-grid-section related-tours-section section-padding pt-0 fix">
            <div className="container">
              <div className="section-title text-center">
                <h2 className="text-anim">Related Trips You Might Also Like</h2>
              </div>
              <div className="row">
                {relatedTours.length ? (
                  relatedTours.map((item) => (
                    <div key={item.id} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={item.delay}>
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
                  ))
                ) : (
                  <div className="col-12 text-center">{emptyNotice}</div>
                )}
              </div>
            </div>
          </section>

          {/* Footer Section Start */}
          <Footer />
        </div>
      </div>
    </>
  );
}







































