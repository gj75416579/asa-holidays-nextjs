'use client'

import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'
import ApiMaintenanceNotice from '@/templete/ApiMaintenanceNotice'
import { AirwallexButton, useCheckPaymentStatus } from '@/templete/Airwallex'

export const dynamic = 'force-dynamic'

export default function BookingPage() {
  return (
    <Suspense fallback={null}>
      <BookingPageContent />
    </Suspense>
  )
}

type RoomSelection = {
  adults: number
  childWithBed: number
  childWithoutBed: number
  infants: number
}

type TravellerInfo = {
  title: string
  firstName: string
  lastName: string
  email: string
  dialCode: string
  phone: string
  dob: string
  nationality: string
  passport: string
  passportExpiry: string
  sameAsPrimary?: boolean
}

type ContactInfo = {
  title: string
  firstName: string
  lastName: string
  email: string
  countryCode: string
  phone: string
  address: string
  postCode: string
}

type FlightItem = {
  id?: number
  sector?: string
  flightNo?: string
  departureDate?: string
  etd?: string
  eta?: string
  zone?: number
}

type TourSummary = {
  title: string
  duration: string
  code: string
  cover: string
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
  sglFare?: number
  twnFare?: number
  trpFare?: number
  chdWithBedFare?: number
  chdWithOutBedFare?: number
  infantFare?: number
  grSglFare?: number
  grTwnFare?: number
  grTrpFare?: number
  grChdWithBedFare?: number
  grChdWithOutBedFare?: number
  grInfantFare?: number
  flights?: FlightItem[]
}

type RoomConfig = {
  adultNum: number
  childWithBedNum: number
  childWithoutBedNum: number
  infantNum: number
  childWithoutBedStartAge?: number
  childWithoutBedEndAge?: number
  formula?: string
  roomType?: string
  adultSingle?: number
  adultTwin?: number
  adultTriple?: number
  adultQuad?: number
  childWithHalfTwin?: number
  childWithBed?: number
  childWithoutBed?: number
  infant?: number
  info?: Record<string, unknown>
  isBackend?: number
  isTcp?: number
}

type BookingRoom = {
  id?: number
  sequence?: number
  adultNum?: number
  childWithBedNum?: number
  childWithoutBedNum?: number
  infantNum?: number
  adultSingle?: number
  adultTwin?: number
  adultTriple?: number
  adultQuad?: number
  childWithHalfTwin?: number
  childWithBed?: number
  childWithoutBed?: number
  infant?: number
}

type DialCode = {
  dialCode: string
  name?: string
}

type Nationality = {
  id?: number
  name: string
  code?: string
}

const steps = ['Availability', 'Traveller Details', 'Review', 'Payment', 'Confirmation']
const apiMode = process.env.NEXT_PUBLIC_API_MODE ?? 'dev'
const shouldFallback = apiMode !== 'prod'

const fallbackTour: TourSummary = {
  title: 'Spectacular Holiday Journey',
  duration: '7 days',
  code: 'ASA-TOUR',
  cover: '/assets/img/home-1/Image.jpg',
}

const fallbackDeparture: DepartureItem = {
  id: 'fallback',
  flightStartDate: '2025-01-10',
  flightEndDate: '2025-01-17',
  sglFare: 1780,
  twnFare: 1580,
  grSglFare: 1400,
  grTwnFare: 1200,
}

const titleOptions = ['MR', 'MRS', 'MS', 'MISS', 'MSTR']

const createEmptyTraveller = (): TravellerInfo => ({
  title: 'MR',
  firstName: '',
  lastName: '',
  email: '',
  dialCode: '',
  phone: '',
  dob: '',
  nationality: '',
  passport: '',
  passportExpiry: '',
  sameAsPrimary: false,
})

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
  const amount = typeof value === 'number' ? value : Number(value)
  if (!Number.isFinite(amount) || amount <= 0) {
    return ''
  }
  return `$${amount.toLocaleString('en-US', { maximumFractionDigits: 2 })}`
}

const formatDate = (value: string) => {
  if (!value) {
    return ''
  }
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) {
    return value
  }
  return parsed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })
}

const formatDateInputValue = (value: string) => {
  if (!value) {
    return ''
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split('-')
    return `${day}/${month}/${year}`
  }
  return value
}

const normalizeDateInputValue = (value: string) => {
  if (!value) {
    return ''
  }
  const match = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
  if (match) {
    const day = match[1].padStart(2, '0')
    const month = match[2].padStart(2, '0')
    return `${match[3]}-${month}-${day}`
  }
  return value
}

const formatPersonName = (title: string, firstName: string, lastName: string) => {
  const prefix = title ? `${title}. ` : ''
  const full = `${firstName ?? ''} ${lastName ?? ''}`.trim()
  return `${prefix}${full}`.trim()
}

const parseBookingDateTime = (value: string) => {
  if (!value) {
    return null
  }
  const normalized = value.includes('T') ? value : value.replace(' ', 'T')
  const withZone = /Z|[+-]\d{2}:\d{2}$/.test(normalized) ? normalized : `${normalized}+08:00`
  const parsed = new Date(withZone)
  if (Number.isNaN(parsed.getTime())) {
    return null
  }
  return parsed
}

const getTourRedirectUrl = (detailData: unknown, tourId: number | null) => {
  if (isRecord(detailData) && isRecord(detailData.data)) {
    const record = detailData.data
    if (typeof record.uri === 'string' && record.uri.trim()) {
      return `/tour-details?uri=${encodeURIComponent(record.uri.trim())}`
    }
    if (typeof record.id === 'number' && Number.isFinite(record.id)) {
      return `/tour-details?id=${record.id}`
    }
  }
  if (tourId) {
    return `/tour-details?id=${tourId}`
  }
  return '/tour-list'
}

const clearBookingUrlParams = (tourParam: string | null, fallbackId: string | null) => {
  if (typeof window === 'undefined') {
    return
  }
  try {
    const url = new URL(window.location.href)
    const tourValue = tourParam || url.searchParams.get('tour')
    const tourIdValue = fallbackId || url.searchParams.get('tourId') || url.searchParams.get('id')
    const departureIdValue = url.searchParams.get('departureId')
    const tourCodeIdValue = url.searchParams.get('tourCodeId')
    const typeValue = url.searchParams.get('type')

    url.search = ''
    if (tourValue) {
      url.searchParams.set('tour', tourValue)
    } else if (tourIdValue) {
      url.searchParams.set('tourId', tourIdValue)
      if (departureIdValue) {
        url.searchParams.set('departureId', departureIdValue)
      }
      if (tourCodeIdValue) {
        url.searchParams.set('tourCodeId', tourCodeIdValue)
      }
      if (typeValue) {
        url.searchParams.set('type', typeValue)
      }
    }

    window.history.replaceState({}, '', url.toString())
  } catch (error) {
    console.error('Booking URL cleanup error:', error)
  }
}

const parseJsonResponse = async (res: Response) => {
  const text = await res.text()
  if (!res.ok) {
    throw new Error(text || `HTTP ${res.status}`)
  }
  return text ? JSON.parse(text) : {}
}

const BOOKING_STORAGE_PREFIX = 'asa-booking'
const BOOKING_STORAGE_KEYS = {
  bookingDetails: 'bookingDetails',
  tourDetail: 'tourDetail',
  tourInfo: 'tourInfo',
  roomConfigs: 'roomConfigs',
  rooms: 'rooms',
  tripPrice: 'tripPrice',
  currentStep: 'currentStep',
  formData: 'formData',
  userAppliedCodes: 'userAppliedCodes',
}

const bookingStorage = {
  async getItem(key: string) {
    if (typeof window === 'undefined') {
      return null
    }
    try {
      const raw = window.localStorage.getItem(`${BOOKING_STORAGE_PREFIX}:${key}`)
      return raw ? JSON.parse(raw) : null
    } catch {
      return null
    }
  },
  async setItem(key: string, value: unknown) {
    if (typeof window === 'undefined') {
      return
    }
    try {
      window.localStorage.setItem(`${BOOKING_STORAGE_PREFIX}:${key}`, JSON.stringify(value))
    } catch {
      return
    }
  },
  async removeItem(key: string) {
    if (typeof window === 'undefined') {
      return
    }
    try {
      window.localStorage.removeItem(`${BOOKING_STORAGE_PREFIX}:${key}`)
    } catch {
      return
    }
  },
}

const clearSavedBookingState = async () => {
  await Promise.all(
    Object.values(BOOKING_STORAGE_KEYS).map((key) => bookingStorage.removeItem(key))
  )
}

const getApiErrorMessage = (payload: unknown) => {
  if (!isRecord(payload)) {
    return null
  }
  const errorTitle = typeof payload.errorTitle === 'string' ? payload.errorTitle.trim() : ''
  const error = typeof payload.error === 'string' ? payload.error.trim() : ''
  return errorTitle || error || null
}

const isWaitlistMessage = (message: string) => {
  const lower = message.toLowerCase()
  return lower.includes('waiting list') || lower.includes('waitlist')
}

const decodeUtf8Base64 = (value: string) =>
  decodeURIComponent(
    Array.from(atob(value))
      .map((char) => `%${char.charCodeAt(0).toString(16).padStart(2, '0')}`)
      .join('')
  )

const fromHex = (value: string) => {
  if (!value || value.length % 2 !== 0) {
    return ''
  }
  let result = ''
  for (let i = 0; i < value.length; i += 2) {
    const code = Number.parseInt(value.slice(i, i + 2), 16)
    if (Number.isNaN(code)) {
      return ''
    }
    result += String.fromCharCode(code)
  }
  return result
}

type EncodedTourPayload = {
  tourId?: number
  tourCodeId?: number
  type?: number
  departureId?: number
}

const parseEncodedTourParam = (value: string | null): EncodedTourPayload | null => {
  if (!value) {
    return null
  }
  try {
    const base64 = fromHex(value)
    if (!base64) {
      return null
    }
    const decoded = JSON.parse(decodeUtf8Base64(base64))
    if (!isRecord(decoded)) {
      return null
    }
    const tourId = typeof decoded.tourId === 'number' ? decoded.tourId : Number(decoded.tourId)
    const tourCodeId = typeof decoded.tourCodeId === 'number' ? decoded.tourCodeId : Number(decoded.tourCodeId)
    const type = typeof decoded.type === 'number' ? decoded.type : Number(decoded.type)
    const departureId =
      typeof decoded.departureId === 'number' ? decoded.departureId : Number(decoded.departureId)
    return {
      tourId: Number.isFinite(tourId) ? tourId : undefined,
      tourCodeId: Number.isFinite(tourCodeId) ? tourCodeId : undefined,
      type: Number.isFinite(type) ? type : undefined,
      departureId: Number.isFinite(departureId) ? departureId : undefined,
    }
  } catch {
    return null
  }
}

const resolveTourSummary = (data: unknown, fallback: TourSummary, fallbackEnabled: boolean): TourSummary => {
  if (!isRecord(data) || !isRecord(data.data)) {
    return fallbackEnabled ? fallback : { title: '', duration: '', code: '', cover: '' }
  }

  const record = data.data
  const title = getLocalizedText(record.name)
  const duration = formatDuration(record.duration)
  const code = typeof record.productCode === 'string' ? record.productCode.trim() : ''
  const cover = typeof record.cover === 'string' ? record.cover.trim() : ''

  return {
    title: title || (fallbackEnabled ? fallback.title : ''),
    duration: duration || (fallbackEnabled ? fallback.duration : ''),
    code: code || (fallbackEnabled ? fallback.code : ''),
    cover: cover || (fallbackEnabled ? fallback.cover : ''),
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

    const flights = Array.isArray(item.flights)
      ? item.flights
        .map((flight) => {
          if (!isRecord(flight)) {
            return null
          }

          const flightItem: FlightItem = {}

          if (typeof flight.id === 'number') {
            flightItem.id = flight.id
          }
          if (typeof flight.sector === 'string') {
            flightItem.sector = flight.sector
          }
          if (typeof flight.flightNo === 'string') {
            flightItem.flightNo = flight.flightNo
          }
          if (typeof flight.departureDate === 'string') {
            flightItem.departureDate = flight.departureDate
          }
          if (typeof flight.etd === 'string') {
            flightItem.etd = flight.etd
          }
          if (typeof flight.eta === 'string') {
            flightItem.eta = flight.eta
          }
          if (typeof flight.zone === 'number') {
            flightItem.zone = flight.zone
          }

          if (!Object.keys(flightItem).length) {
            return null
          }

          return flightItem
        })
        .filter((flight): flight is FlightItem => Boolean(flight))
      : []
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
      sglFare: typeof item.sglFare === 'number' ? item.sglFare : undefined,
      twnFare: typeof item.twnFare === 'number' ? item.twnFare : undefined,
      trpFare: typeof item.trpFare === 'number' ? item.trpFare : undefined,
      chdWithBedFare: typeof item.chdWithBedFare === 'number' ? item.chdWithBedFare : undefined,
      chdWithOutBedFare: typeof item.chdWithOutBedFare === 'number' ? item.chdWithOutBedFare : undefined,
      infantFare: typeof item.infantFare === 'number' ? item.infantFare : undefined,
      grSglFare: typeof item.grSglFare === 'number' ? item.grSglFare : undefined,
      grTwnFare: typeof item.grTwnFare === 'number' ? item.grTwnFare : undefined,
      grTrpFare: typeof item.grTrpFare === 'number' ? item.grTrpFare : undefined,
      grChdWithBedFare: typeof item.grChdWithBedFare === 'number' ? item.grChdWithBedFare : undefined,
      grChdWithOutBedFare: typeof item.grChdWithOutBedFare === 'number' ? item.grChdWithOutBedFare : undefined,
      grInfantFare: typeof item.grInfantFare === 'number' ? item.grInfantFare : undefined,
      flights: flights.length ? flights : undefined,
    })
  })

  return departures
}

const CountdownTimer = ({ targetDate, onExpire }: { targetDate: string; onExpire?: () => void }) => {
  const [timeLeft, setTimeLeft] = useState('Loading...')
  const expiredRef = useRef(false)

  useEffect(() => {
    const updateTimer = () => {
      const target = parseBookingDateTime(targetDate)
      if (!target) {
        setTimeLeft('Loading...')
        return
      }
      const now = new Date()
      const diffMs = target.getTime() - now.getTime()
      if (diffMs <= 0) {
        setTimeLeft('Expired')
        if (!expiredRef.current) {
          expiredRef.current = true
          onExpire?.()
        }
        return
      }
      const totalSeconds = Math.floor(diffMs / 1000)
      const hours = Math.floor(totalSeconds / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      const seconds = totalSeconds % 60
      if (hours > 0) {
        setTimeLeft(`${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`)
      } else {
        setTimeLeft(`${minutes}:${seconds.toString().padStart(2, '0')}`)
      }
    }

    updateTimer()
    const timer = window.setInterval(updateTimer, 1000)
    return () => window.clearInterval(timer)
  }, [targetDate, onExpire])

  const display = timeLeft === 'Expired'
    ? timeLeft
    : timeLeft.split(':').length === 3
      ? `${timeLeft} hrs`
      : `${timeLeft} mins`

  return <span>{display}</span>
}

const getFromPrice = (departure: DepartureItem | null, priceType: 'full' | 'land') => {
  if (!departure) {
    return ''
  }
  const prices =
    priceType === 'land'
      ? [
        departure.grTwnFare,
        departure.grSglFare,
        departure.grTrpFare,
        departure.grChdWithBedFare,
        departure.grChdWithOutBedFare,
        departure.grInfantFare,
      ]
      : [departure.twnFare, departure.sglFare, departure.trpFare, departure.chdWithBedFare, departure.chdWithOutBedFare, departure.infantFare]

  const match = prices.find((value) => typeof value === 'number' && value > 0)
  return match ? formatPrice(match) : ''
}

const mergeRecords = (...records: Array<Record<string, unknown> | null>) => {
  const result: Record<string, unknown> = {}
  records.forEach((record) => {
    if (record && isRecord(record)) {
      Object.assign(result, record)
    }
  })
  return result
}

const buildTripPriceFromDetails = (details: Record<string, unknown>) => {
  const transaction = mergeRecords(
    isRecord(details.priceCode) ? (details.priceCode as Record<string, unknown>) : null,
    isRecord(details.paxsInfo) ? (details.paxsInfo as Record<string, unknown>) : null,
    isRecord(details.tranx) ? (details.tranx as Record<string, unknown>) : null
  )
  return {
    transaction,
    discount: details.discounts,
    tier: details.grossTiers,
    miscs: details.miscs,
  }
}

const extractDiscountCodes = (details: Record<string, unknown>) => {
  const discounts = Array.isArray(details.discounts) ? details.discounts : []
  return discounts
    .map((discount) => {
      if (isRecord(discount) && isRecord(discount.info) && typeof discount.info.code === 'string') {
        return discount.info.code
      }
      return null
    })
    .filter((code): code is string => Boolean(code))
}

const parseNationalityValue = (value: string) => {
  if (!value) {
    return { name: '', code: '' }
  }
  const parts = value.split(' / ')
  if (parts.length >= 2) {
    return { name: parts[0], code: parts[1] }
  }
  return { name: value, code: '' }
}

const toNumber = (value: unknown) => {
  const num = typeof value === 'number' ? value : Number(value)
  return Number.isFinite(num) ? num : 0
}

const findMinimumRoomConfig = (configs: RoomConfig[]) => {
  if (!configs.length) {
    return null
  }
  return configs.reduce((minConfig, config) => {
    const total = config.adultNum + config.childWithBedNum + config.childWithoutBedNum + config.infantNum
    const minTotal = minConfig.adultNum + minConfig.childWithBedNum + minConfig.childWithoutBedNum + minConfig.infantNum
    return total < minTotal ? config : minConfig
  }, configs[0])
}

const isValidRoomConfig = (room: RoomSelection, configs: RoomConfig[]) =>
  configs.some(
    (config) =>
      config.adultNum === room.adults &&
      config.childWithBedNum === room.childWithBed &&
      config.childWithoutBedNum === room.childWithoutBed &&
      config.infantNum === room.infants
  )

const getInfoValue = (info: Record<string, unknown> | undefined, key: string) => {
  if (!info) {
    return 0
  }
  const value = info[key]
  return typeof value === 'number' ? value : toNumber(value)
}

const transformRoomData = (room: RoomSelection, sequence: number, config: RoomConfig) => {
  const info = isRecord(config.info) ? config.info : {}
  return {
    sequence,
    formula: config.formula ?? '',
    roomType: config.roomType ?? '',
    adultNum: room.adults,
    childWithBedNum: room.childWithBed,
    childWithoutBedNum: room.childWithoutBed,
    infantNum: room.infants,
    adultSingle: toNumber(config.adultSingle),
    adultTwin: toNumber(config.adultTwin),
    adultTriple: toNumber(config.adultTriple),
    adultQuad: toNumber(config.adultQuad),
    childWithHalfTwin: toNumber(config.childWithHalfTwin),
    childWithBed: toNumber(config.childWithBed),
    childWithoutBed: toNumber(config.childWithoutBed),
    infant: toNumber(config.infant),
    info: {
      adultNum_1: getInfoValue(info, 'adultNum_1'),
      adultNum_2: getInfoValue(info, 'adultNum_2'),
      adultNum_3: getInfoValue(info, 'adultNum_3'),
      adultNum_4: getInfoValue(info, 'adultNum_4'),
      childWithoutBedNum_1: getInfoValue(info, 'childWithoutBedNum_1'),
      childWithoutBedNum_2: getInfoValue(info, 'childWithoutBedNum_2'),
      childWithoutBedNum_3: getInfoValue(info, 'childWithoutBedNum_3'),
      childWithBedNum_1: getInfoValue(info, 'childWithBedNum_1'),
      childWithBedNum_2: getInfoValue(info, 'childWithBedNum_2'),
      childWithBedNum_3: getInfoValue(info, 'childWithBedNum_3'),
      infantNum_1: getInfoValue(info, 'infantNum_1'),
      infantNum_2: getInfoValue(info, 'infantNum_2'),
      infantNum_3: getInfoValue(info, 'infantNum_3'),
    },
    isDbl: 0,
  }
}

const buildRoomsPayload = (rooms: RoomSelection[], configs: RoomConfig[]) => {
  const payload: Record<string, unknown>[] = []
  const matchedConfigs: RoomConfig[] = []

  for (let index = 0; index < rooms.length; index += 1) {
    const room = rooms[index]
    const config = configs.find(
      (item) =>
        item.adultNum === room.adults &&
        item.childWithBedNum === room.childWithBed &&
        item.childWithoutBedNum === room.childWithoutBed &&
        item.infantNum === room.infants
    )

    if (!config) {
      return {
        roomsPayload: [],
        configs: [],
        error: 'Selected room configuration is not available. Please adjust travellers.',
      }
    }

    payload.push(transformRoomData(room, index + 1, config))
    matchedConfigs.push(config)
  }

  return { roomsPayload: payload, configs: matchedConfigs, error: null }
}

const buildPaxTypes = (room: RoomSelection, config?: RoomConfig) => {
  const types: string[] = []
  const targetTotal = room.adults + room.childWithBed + room.childWithoutBed + room.infants

  if (config) {
    for (let i = 0; i < toNumber(config.adultQuad); i += 1) {
      types.push('QUAD')
    }
    for (let i = 0; i < toNumber(config.adultTriple); i += 1) {
      types.push('TRI')
    }
    for (let i = 0; i < toNumber(config.adultTwin); i += 1) {
      types.push('TWN')
    }
    for (let i = 0; i < toNumber(config.adultSingle); i += 1) {
      types.push('SGL')
    }

    const halfTwin = Math.min(room.childWithBed, toNumber(config.childWithHalfTwin))
    for (let i = 0; i < halfTwin; i += 1) {
      types.push('CTW')
    }
    for (let i = halfTwin; i < room.childWithBed; i += 1) {
      types.push('CWB')
    }

    for (let i = 0; i < room.childWithoutBed; i += 1) {
      types.push('CNB')
    }

    for (let i = 0; i < room.infants; i += 1) {
      types.push('INF')
    }
  } else {
    for (let i = 0; i < room.adults; i += 1) {
      types.push('ADT')
    }
    for (let i = 0; i < room.childWithBed; i += 1) {
      types.push('CWB')
    }
    for (let i = 0; i < room.childWithoutBed; i += 1) {
      types.push('CNB')
    }
    for (let i = 0; i < room.infants; i += 1) {
      types.push('INF')
    }
  }

  while (types.length < targetTotal) {
    types.push('ADT')
  }

  return types
}

const CHILD_WITH_BED_TYPES = ['CWB', 'CTW']
const CHILD_WITHOUT_BED_TYPES = ['CNB']
const INFANT_PAX_TYPES = ['INF']

const getTravellerCategory = (type: string) => {
  if (CHILD_WITH_BED_TYPES.includes(type)) {
    return 'childWithBed'
  }
  if (CHILD_WITHOUT_BED_TYPES.includes(type)) {
    return 'childWithoutBed'
  }
  if (INFANT_PAX_TYPES.includes(type)) {
    return 'infant'
  }
  return 'adult'
}

const getTravellerTypeLabel = (type: string) => {
  const category = getTravellerCategory(type)
  if (category === 'childWithBed') {
    return 'Child With Bed'
  }
  if (category === 'childWithoutBed') {
    return 'Child Without Bed'
  }
  if (category === 'infant') {
    return 'Infant'
  }
  return 'Adult'
}

const parseDateOnly = (value: string) => {
  if (!value) {
    return null
  }
  const parts = value.split('-')
  if (parts.length === 3) {
    const year = Number(parts[0])
    const month = Number(parts[1])
    const day = Number(parts[2])
    if (Number.isFinite(year) && Number.isFinite(month) && Number.isFinite(day)) {
      return new Date(year, month - 1, day)
    }
  }
  const slashParts = value.split('/')
  if (slashParts.length === 3) {
    const day = Number(slashParts[0])
    const month = Number(slashParts[1])
    const year = Number(slashParts[2])
    if (Number.isFinite(year) && Number.isFinite(month) && Number.isFinite(day)) {
      return new Date(year, month - 1, day)
    }
  }
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) {
    return null
  }
  return new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate())
}

const addMonths = (date: Date, months: number) => {
  const next = new Date(date)
  next.setMonth(next.getMonth() + months)
  return next
}

const addYears = (date: Date, years: number) => {
  const next = new Date(date)
  next.setFullYear(next.getFullYear() + years)
  return next
}

const addDays = (date: Date, days: number) => {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return next
}

const getAgeYears = (reference: Date, dob: Date) => {
  let years = reference.getFullYear() - dob.getFullYear()
  const monthDiff = reference.getMonth() - dob.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && reference.getDate() < dob.getDate())) {
    years -= 1
  }
  return years
}

const getAgeDays = (reference: Date, dob: Date) => {
  const msPerDay = 1000 * 60 * 60 * 24
  return Math.floor((reference.getTime() - dob.getTime()) / msPerDay)
}

const validateDobForType = (
  dobValue: string,
  type: string,
  returnDate: Date | null,
  childWithoutBedStartAge = 2,
  childWithoutBedEndAge = 11
) => {
  if (!dobValue) {
    return 'Date of birth is required.'
  }
  const dob = parseDateOnly(dobValue)
  if (!dob) {
    return 'Date of birth is invalid.'
  }
  if (!returnDate) {
    return null
  }
  if (dob > returnDate) {
    return 'Date of birth must be in the past.'
  }
  const category = getTravellerCategory(type)

  if (category === 'adult') {
    const ageYears = getAgeYears(returnDate, dob)
    if (ageYears < 12) {
      return 'Adults must be 12 years or older.'
    }
    return null
  }

  if (category === 'childWithBed') {
    const minDate = addDays(addYears(returnDate, -12), 1)
    const maxDate = addYears(returnDate, -2)
    if (dob < minDate || dob > maxDate) {
      return 'Child with bed must be between 2 and 11 years.'
    }
    return null
  }

  if (category === 'childWithoutBed') {
    const minDate = addDays(addYears(returnDate, -(childWithoutBedEndAge + 1)), 1)
    const maxDate = addYears(returnDate, -childWithoutBedStartAge)
    if (dob < minDate || dob > maxDate) {
      return `Child without bed must be between ${childWithoutBedStartAge} and ${childWithoutBedEndAge} years.`
    }
    return null
  }

  if (category === 'infant') {
    const minDate = addDays(addYears(returnDate, -2), 1)
    const maxDate = addDays(returnDate, -14)
    if (dob < minDate || dob > maxDate) {
      return 'Infants must be between 14 days and 2 years.'
    }
  }
  return null
}

const validatePassportExpiry = (expiryValue: string, returnDate: Date | null) => {
  if (!expiryValue) {
    return null
  }
  const expiry = parseDateOnly(expiryValue)
  if (!expiry) {
    return 'Passport expiry date is invalid.'
  }
  if (!returnDate) {
    return null
  }
  const minExpiry = addMonths(returnDate, 6)
  if (expiry < minExpiry) {
    return 'Passport must be valid for at least 6 months after return date.'
  }
  return null
}

function BookingPageContent() {
  const searchParams = useSearchParams()
  const encodedTourParam = searchParams.get('tour')
  const decodedTour = parseEncodedTourParam(encodedTourParam)
  const tourIdParam = (decodedTour?.tourId !== undefined ? String(decodedTour.tourId) : null) ?? (searchParams.get('tourId') ?? searchParams.get('id'))
  const departureIdParam =
    (decodedTour?.departureId !== undefined ? String(decodedTour.departureId) : null) ??
    searchParams.get('departureId')
  const priceTypeRaw = decodedTour?.type ?? searchParams.get('type')
  const priceTypeParam =
    priceTypeRaw === 2 || priceTypeRaw === '2'
      ? 'land'
      : priceTypeRaw === 1 || priceTypeRaw === '1'
        ? 'full'
        : priceTypeRaw
  const tourCodeIdParam =
    (decodedTour?.tourCodeId !== undefined ? String(decodedTour.tourCodeId) : null) ??
    searchParams.get('tourCodeId')
  const paymentGateway = searchParams.get('gateway')
  const paymentIntentId = searchParams.get('id') ?? searchParams.get('payment_intent_id')
  const [storedPaymentReturn, setStoredPaymentReturn] = useState<{ gateway: string; id: string } | null>(null)

  const parsedTourId = tourIdParam ? Number(tourIdParam) : NaN
  const tourId = Number.isFinite(parsedTourId) ? parsedTourId : null
  const parsedTourCodeIdParam = tourCodeIdParam ? Number(tourCodeIdParam) : NaN
  const initialTourCodeId = Number.isFinite(parsedTourCodeIdParam) ? parsedTourCodeIdParam : null

  const [currentStep, setCurrentStep] = useState(1)
  const [priceType, setPriceType] = useState<'full' | 'land'>(priceTypeParam === 'land' ? 'land' : 'full')
  const [rooms, setRooms] = useState<RoomSelection[]>([
    {
      adults: 2,
      childWithBed: 0,
      childWithoutBed: 0,
      infants: 0,
    },
  ])
  const [primaryContact, setPrimaryContact] = useState<ContactInfo>({
    title: 'MR',
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+65',
    phone: '',
    address: '',
    postCode: '',
  })
  const [travellers, setTravellers] = useState<TravellerInfo[]>([createEmptyTraveller(), createEmptyTraveller()])
  const [primaryContactErrors, setPrimaryContactErrors] = useState<Partial<Record<keyof ContactInfo, string>>>({})
  const [travellerErrors, setTravellerErrors] = useState<Array<Partial<Record<keyof TravellerInfo, string>>>>([])
  const [formError, setFormError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentMessage, setPaymentMessage] = useState<string | null>(null)
  const [pricingError, setPricingError] = useState<string | null>(null)
  const [pricingWarning, setPricingWarning] = useState<string | null>(null)
  const [tripPrice, setTripPrice] = useState<Record<string, unknown> | null>(null)
  const [bookingId, setBookingId] = useState<number | null>(null)
  const [bookingRooms, setBookingRooms] = useState<BookingRoom[] | null>(null)
  const [bookingRef, setBookingRef] = useState<string | null>(null)
  const [expectedCancelTime, setExpectedCancelTime] = useState<string | null>(null)
  const [bookingDetailData, setBookingDetailData] = useState<Record<string, unknown> | null>(null)
  const [paymentInfo, setPaymentInfo] = useState<Record<string, unknown> | null>(null)
  const [dialCodes, setDialCodes] = useState<DialCode[]>([])
  const [nationalities, setNationalities] = useState<Nationality[]>([])
  const [discountCode, setDiscountCode] = useState('')
  const [discountMessage, setDiscountMessage] = useState<string | null>(null)
  const [appliedDiscounts, setAppliedDiscounts] = useState<string[]>([])
  const [isApplyingDiscount, setIsApplyingDiscount] = useState(false)
  const [isRefreshingBooking, setIsRefreshingBooking] = useState(false)
  const [paymentLookupId, setPaymentLookupId] = useState('')
  const [roomConfigs, setRoomConfigs] = useState<RoomConfig[]>([])
  const [selectedRoomConfigs, setSelectedRoomConfigs] = useState<RoomConfig[]>([])
  const [roomConfigError, setRoomConfigError] = useState(false)
  const [showCancelConfirm, setShowCancelConfirm] = useState(false)
  const [storageReady, setStorageReady] = useState(false)
  const [isPaymentContactOpen, setIsPaymentContactOpen] = useState(false)
  const [isPaymentTravellerOpen, setIsPaymentTravellerOpen] = useState(false)
  const [isPaymentPriceOpen, setIsPaymentPriceOpen] = useState(true)
  const [isConfirmContactOpen, setIsConfirmContactOpen] = useState(false)
  const [isConfirmTravellerOpen, setIsConfirmTravellerOpen] = useState(false)
  const [isConfirmPriceOpen, setIsConfirmPriceOpen] = useState(true)
  const [paymentTermsAccepted, setPaymentTermsAccepted] = useState(false)
  const formErrorRef = useRef<HTMLDivElement | null>(null)
  const roomsInitialized = useRef(false)
  const pricingInitialized = useRef(false)
  const bookingRefreshInitialized = useRef(false)

  const [tourData, setTourData] = useState<unknown | null>(null)
  const [departureData, setDepartureData] = useState<unknown | null>(null)
  const [tourInfoData, setTourInfoData] = useState<unknown | null>(null)
  const [tourError, setTourError] = useState(false)
  const [departureError, setDepartureError] = useState(false)
  const [tourInfoError, setTourInfoError] = useState(false)
  const effectivePaymentGateway = paymentGateway ?? storedPaymentReturn?.gateway ?? null
  const effectivePaymentIntentId = paymentIntentId ?? storedPaymentReturn?.id ?? null
  const shouldCheckPayment = effectivePaymentGateway === 'airwallex' && Boolean(effectivePaymentIntentId)
  const paymentStatusResult = useCheckPaymentStatus(shouldCheckPayment ? effectivePaymentIntentId : null)
  const paymentStatus = paymentStatusResult.status
  const paymentStatusMessage = paymentStatusResult.message
  const paymentStatusLoading = paymentStatusResult.isLoading
  const paymentStatusTone =
    paymentStatus === 'success'
      ? 'success'
      : paymentStatus === 'pending'
        ? 'pending'
        : paymentStatus === 'failed' || paymentStatus === 'error'
          ? 'failed'
          : 'info'
  const shouldShowPaymentStatus = Boolean(paymentStatusMessage || paymentStatusLoading)

  useEffect(() => {
    const entries = Object.fromEntries(searchParams.entries())
    console.log('[booking] query params:', entries)
    console.log('[booking] decoded tour param:', decodedTour)
    console.log('[booking] parsed values:', {
      tourIdParam,
      tourCodeIdParam,
      departureIdParam,
      priceTypeParam,
      paymentGateway,
      paymentIntentId,
      storedPaymentReturn,
    })
  }, [searchParams, decodedTour, tourIdParam, tourCodeIdParam, departureIdParam, priceTypeParam, paymentGateway, paymentIntentId])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    const storedGateway = window.sessionStorage.getItem('asa-payment-gateway')
    const storedId = window.sessionStorage.getItem('asa-payment-intent-id')
    if (storedGateway && storedId) {
      setStoredPaymentReturn({ gateway: storedGateway, id: storedId })
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    if (paymentGateway && paymentIntentId) {
      window.sessionStorage.setItem('asa-payment-gateway', paymentGateway)
      window.sessionStorage.setItem('asa-payment-intent-id', paymentIntentId)
      setStoredPaymentReturn({ gateway: paymentGateway, id: paymentIntentId })
    }
  }, [paymentGateway, paymentIntentId])

  useEffect(() => {
    if (!tourId) {
      return
    }
    if (isRecord(tourData) && isRecord(tourData.data)) {
      return
    }
    let isActive = true

    const loadSavedState = async () => {
      const [
        savedBookingDetails,
        savedTourDetail,
        savedTourInfo,
        savedRoomConfigs,
        savedRooms,
        savedTripPrice,
        savedCurrentStep,
        savedFormData,
        savedUserAppliedCodes,
      ] = await Promise.all([
        bookingStorage.getItem(BOOKING_STORAGE_KEYS.bookingDetails),
        bookingStorage.getItem(BOOKING_STORAGE_KEYS.tourDetail),
        bookingStorage.getItem(BOOKING_STORAGE_KEYS.tourInfo),
        bookingStorage.getItem(BOOKING_STORAGE_KEYS.roomConfigs),
        bookingStorage.getItem(BOOKING_STORAGE_KEYS.rooms),
        bookingStorage.getItem(BOOKING_STORAGE_KEYS.tripPrice),
        bookingStorage.getItem(BOOKING_STORAGE_KEYS.currentStep),
        bookingStorage.getItem(BOOKING_STORAGE_KEYS.formData),
        bookingStorage.getItem(BOOKING_STORAGE_KEYS.userAppliedCodes),
      ])

      if (!isActive) {
        return
      }

      const savedBookingId =
        savedBookingDetails && typeof savedBookingDetails.id === 'number'
          ? savedBookingDetails.id
          : Number(savedBookingDetails?.id)
      const hasActiveBooking = Number.isFinite(savedBookingId)
      const hasMatchingTourDetail = isRecord(savedTourDetail) && typeof savedTourDetail.id === 'number'
        ? savedTourDetail.id === tourId
        : false
      const hasMatchingTourInfo =
        !initialTourCodeId ||
        (isRecord(savedTourInfo) && typeof savedTourInfo.id === 'number' && savedTourInfo.id === initialTourCodeId)

      if (hasActiveBooking && (!hasMatchingTourDetail || !hasMatchingTourInfo)) {
        try {
          await fetch('/api/booking/cancel', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: savedBookingId }),
          })
        } catch (error) {
          console.error('Booking cancel mismatch error:', error)
        }
        await clearSavedBookingState()
        return
      }

      if (isRecord(savedTourDetail)) {
        setTourData({ data: savedTourDetail })
      }
      if (isRecord(savedTourInfo)) {
        setTourInfoData({ data: savedTourInfo })
      }
      if (Array.isArray(savedRoomConfigs)) {
        setRoomConfigs(savedRoomConfigs as RoomConfig[])
      }
      if (Array.isArray(savedRooms)) {
        setRooms(savedRooms as RoomSelection[])
        roomsInitialized.current = true
      }
      if (savedTripPrice && isRecord(savedTripPrice)) {
        setTripPrice(savedTripPrice)
        pricingInitialized.current = true
      }
      if (hasActiveBooking) {
        setBookingId(savedBookingId)
        if (typeof savedBookingDetails.expectedCancelTime === 'string') {
          setExpectedCancelTime(savedBookingDetails.expectedCancelTime)
        }
        if (isRecord(savedBookingDetails.data)) {
          const detailData = savedBookingDetails.data as Record<string, unknown>
          const details = isRecord(detailData.details) ? (detailData.details as Record<string, unknown>) : null
          setBookingDetailData(detailData)
          if (details && Array.isArray(details.rooms)) {
            setBookingRooms(details.rooms as BookingRoom[])
          }
          if (!savedTripPrice && details) {
            setTripPrice(buildTripPriceFromDetails(details))
            pricingInitialized.current = true
          }
          if (details && isRecord(details.tranx) && typeof details.tranx.expectedCancelTime === 'string') {
            setExpectedCancelTime(details.tranx.expectedCancelTime)
          }
          if (typeof detailData.ref === 'string') {
            setBookingRef(detailData.ref)
          }
          if (details) {
            setAppliedDiscounts(extractDiscountCodes(details))
          }
        }
      }
      if (isRecord(savedFormData)) {
        const savedPrimaryContact = savedFormData.primaryContact
        if (isRecord(savedPrimaryContact)) {
          setPrimaryContact((prev) => ({ ...prev, ...savedPrimaryContact }))
        }
        if (Array.isArray(savedFormData.travellers)) {
          setTravellers(savedFormData.travellers as TravellerInfo[])
        }
      }
      if (Array.isArray(savedUserAppliedCodes)) {
        setAppliedDiscounts(savedUserAppliedCodes as string[])
      }
      if (typeof savedCurrentStep === 'number' || typeof savedCurrentStep === 'string') {
        const nextStep = Number(savedCurrentStep)
        if (Number.isFinite(nextStep)) {
          const safeStep = Math.min(Math.max(nextStep, 1), steps.length)
          if (safeStep === 1 || hasActiveBooking) {
            setCurrentStep(safeStep)
            if (hasActiveBooking && safeStep > 1) {
              pricingInitialized.current = true
            }
          }
        }
      }
      setStorageReady(true)
    }

    loadSavedState()

    return () => {
      isActive = false
    }
  }, [tourId, initialTourCodeId])

  useEffect(() => {
    if (!shouldCheckPayment) {
      return
    }
    if (currentStep < 4) {
      setCurrentStep(4)
    }
  }, [shouldCheckPayment, currentStep])

  useEffect(() => {
    if (!shouldCheckPayment || !effectivePaymentIntentId) {
      return
    }
    let isActive = true

    const lookupBookingId = async () => {
      try {
        const res = await fetch('/api/booking/getBookingIDByPayment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ transaction_id: effectivePaymentIntentId }),
        })
        const json = await parseJsonResponse(res)
        const nextId = isRecord(json) ? Number(json.data) : NaN
        if (!Number.isFinite(nextId)) {
          return
        }
        if (isActive) {
          setBookingId(nextId)
          await refreshBookingDetails(nextId)
        }
      } catch (error) {
        console.error('Payment booking lookup error:', error)
      }
    }

    lookupBookingId()

    return () => {
      isActive = false
    }
  }, [shouldCheckPayment, effectivePaymentIntentId])

  useEffect(() => {
    if (!shouldCheckPayment) {
      return
    }
    if (paymentStatus === 'success') {
      if (bookingId) {
        refreshBookingDetails(bookingId)
      }
      setCurrentStep(5)
    }
  }, [paymentStatus, shouldCheckPayment, bookingId])

  useEffect(() => {
    if (!storageReady) {
      return
    }
    if (isRecord(tourData) && isRecord(tourData.data)) {
      bookingStorage.setItem(BOOKING_STORAGE_KEYS.tourDetail, tourData.data)
    }
  }, [storageReady, tourData])

  useEffect(() => {
    if (!storageReady) {
      return
    }
    if (isRecord(tourInfoData) && isRecord(tourInfoData.data)) {
      bookingStorage.setItem(BOOKING_STORAGE_KEYS.tourInfo, tourInfoData.data)
    }
  }, [storageReady, tourInfoData])

  useEffect(() => {
    if (!storageReady) {
      return
    }
    if (roomConfigs.length) {
      bookingStorage.setItem(BOOKING_STORAGE_KEYS.roomConfigs, roomConfigs)
    }
  }, [storageReady, roomConfigs])

  useEffect(() => {
    if (!storageReady) {
      return
    }
    if (rooms.length) {
      bookingStorage.setItem(BOOKING_STORAGE_KEYS.rooms, rooms)
    }
  }, [storageReady, rooms])

  useEffect(() => {
    if (!storageReady) {
      return
    }
    if (tripPrice) {
      bookingStorage.setItem(BOOKING_STORAGE_KEYS.tripPrice, tripPrice)
    } else {
      bookingStorage.removeItem(BOOKING_STORAGE_KEYS.tripPrice)
    }
  }, [storageReady, tripPrice])

  useEffect(() => {
    if (!storageReady) {
      return
    }
    if (bookingId) {
      bookingStorage.setItem(BOOKING_STORAGE_KEYS.bookingDetails, {
        id: bookingId,
        expectedCancelTime,
        data: bookingDetailData,
      })
    } else {
      bookingStorage.removeItem(BOOKING_STORAGE_KEYS.bookingDetails)
    }
  }, [storageReady, bookingId, expectedCancelTime, bookingDetailData])

  useEffect(() => {
    bookingRefreshInitialized.current = false
  }, [bookingId])

  useEffect(() => {
    if (currentStep !== 3 || !bookingId || bookingDetailData) {
      return
    }
    refreshBookingDetails(bookingId)
  }, [bookingId, bookingDetailData, currentStep])

  useEffect(() => {
    if (!storageReady) {
      return
    }
    bookingStorage.setItem(BOOKING_STORAGE_KEYS.formData, {
      primaryContact,
      travellers,
    })
  }, [storageReady, primaryContact, travellers])

  useEffect(() => {
    if (!storageReady) {
      return
    }
    bookingStorage.setItem(BOOKING_STORAGE_KEYS.currentStep, currentStep)
  }, [storageReady, currentStep])

  useEffect(() => {
    if (!storageReady) {
      return
    }
    bookingStorage.setItem(BOOKING_STORAGE_KEYS.userAppliedCodes, appliedDiscounts)
  }, [storageReady, appliedDiscounts])

  useEffect(() => {
    if (!tourId) {
      return
    }
    if (paymentGateway || paymentIntentId || storedPaymentReturn) {
      return
    }
    if (bookingId || currentStep > 1) {
      clearBookingUrlParams(encodedTourParam, tourIdParam)
    }
  }, [bookingId, currentStep, encodedTourParam, tourId, tourIdParam, paymentGateway, paymentIntentId, storedPaymentReturn])

  const totalTravellers = useMemo(
    () =>
      rooms.reduce(
        (sum, room) => sum + room.adults + room.childWithBed + room.childWithoutBed + room.infants,
        0
      ),
    [rooms]
  )

  const travellerTypes = useMemo(() => {
    const types: string[] = []
    rooms.forEach((room, roomIndex) => {
      const roomConfig = selectedRoomConfigs[roomIndex]
      types.push(...buildPaxTypes(room, roomConfig))
    })
    return types.slice(0, totalTravellers)
  }, [rooms, selectedRoomConfigs, totalTravellers])
  const childWithoutBedStartAge = useMemo(() => {
    const value = toNumber(roomConfigs[0]?.childWithoutBedStartAge)
    return value > 0 ? value : 2
  }, [roomConfigs])

  const childWithoutBedEndAge = useMemo(() => {
    const value = toNumber(roomConfigs[0]?.childWithoutBedEndAge)
    return value > 0 ? value : 11
  }, [roomConfigs])
  const bookingReference = useMemo(() => `ASA-${Date.now().toString().slice(-6)}`, [])
  const tourSummary = resolveTourSummary(tourData, fallbackTour, shouldFallback)
  const departures = resolveDepartures(departureData)
  const selectedDeparture = useMemo(() => {
    if (departures.length === 0) {
      return shouldFallback ? fallbackDeparture : null
    }
    if (departureIdParam) {
      const matched = departures.find((item) => String(item.id) === departureIdParam)
      if (matched) {
        return matched
      }
    }
    return departures[0]
  }, [departures, departureIdParam])
  const tourInfo = useMemo(
    () => (isRecord(tourInfoData) && isRecord(tourInfoData.data) ? tourInfoData.data : null),
    [tourInfoData]
  )
  const tourInfoCode =
    tourInfo && typeof tourInfo.code === 'string' ? tourInfo.code.trim() : ''
  const tripCode =
    tourInfoCode ||
    selectedDeparture?.tourCode ||
    selectedDeparture?.priceCode ||
    selectedDeparture?.code ||
    tourSummary.code
  const resolvedTourCodeId = useMemo(() => {
    const paramId = tourCodeIdParam ? Number(tourCodeIdParam) : NaN
    if (Number.isFinite(paramId)) {
      return paramId
    }
    if (selectedDeparture?.id) {
      return selectedDeparture.id
    }
    return null
  }, [tourCodeIdParam, selectedDeparture])
  const departureStartDate = useMemo(
    () => parseDateOnly(selectedDeparture?.flightStartDate || selectedDeparture?.startDate || ''),
    [selectedDeparture]
  )
  const departureEndDate = useMemo(
    () => parseDateOnly(selectedDeparture?.flightEndDate || selectedDeparture?.endDate || ''),
    [selectedDeparture]
  )
  const departureRange = selectedDeparture
    ? `${formatDate(selectedDeparture.flightStartDate || selectedDeparture.startDate || '')} - ${formatDate(
      selectedDeparture.flightEndDate || selectedDeparture.endDate || ''
    )}`.replace(/^ - | - $/g, '')
    : ''
  const fromPrice = getFromPrice(selectedDeparture, priceType)
  const totalAmount = useMemo(() => {
    if (!tripPrice || !isRecord(tripPrice)) {
      return null
    }
    const transaction = isRecord(tripPrice.transaction) ? tripPrice.transaction : null
    const amount = transaction ? (transaction.totalAmount ?? transaction.total ?? null) : null
    const parsed = typeof amount === 'number' ? amount : Number(amount)
    return Number.isFinite(parsed) ? parsed : null
  }, [tripPrice])

  const transaction = useMemo(() => (isRecord(tripPrice?.transaction) ? tripPrice.transaction : null), [tripPrice])

  const handleCountdownExpire = useCallback(() => {
    clearSavedBookingState()
    window.location.href = getTourRedirectUrl(tourData, tourId)
  }, [tourData, tourId])

  const showDiscountForm = currentStep === 2 || currentStep === 3

  const paymentSummary = useMemo(() => {
    const details = bookingDetailData && isRecord(bookingDetailData.details) ? bookingDetailData.details : null
    const tranx = details && isRecord(details.tranx) ? details.tranx : null
    const totalAmountValue = toNumber(
      (tranx && (tranx.totalAmount ?? tranx.total)) ??
      (bookingDetailData && (bookingDetailData.totalAmount ?? bookingDetailData.total)) ??
      (transaction && (transaction.totalAmount ?? transaction.total))
    )
    const totalPaidValue = toNumber(
      (tranx && tranx.totalPaid) ?? (bookingDetailData && bookingDetailData.totalPaid)
    )
    const depositValue = toNumber((tranx && (tranx.deposit ?? tranx.totalDeposit)) ?? 0)
    const balanceValue = totalAmountValue - totalPaidValue
    return {
      totalAmountValue,
      totalPaidValue,
      depositValue,
      balanceValue,
    }
  }, [bookingDetailData, transaction])

  const airwallexBookingData = useMemo(() => {
    const details = bookingDetailData && isRecord(bookingDetailData.details) ? bookingDetailData.details : null
    const tranx = details && isRecord(details.tranx) ? details.tranx : null
    const currency =
      (isRecord(paymentInfo) && typeof paymentInfo.currency === 'string' ? paymentInfo.currency : '') ||
      (tranx && typeof tranx.currencyFrom === 'string' ? tranx.currencyFrom : '') ||
      (transaction && typeof transaction.currencyFrom === 'string' ? transaction.currencyFrom : '')

    if (isRecord(paymentInfo)) {
      const payload = { ...paymentInfo } as Record<string, unknown>
      if (currency && typeof payload.currency !== 'string') {
        payload.currency = currency
      }
      if (bookingDetailData && typeof bookingDetailData.ref === 'string' && typeof payload.ref !== 'string') {
        payload.ref = bookingDetailData.ref
      }
      return payload
    }

    const payload: Record<string, unknown> = {}
    if (bookingDetailData && typeof bookingDetailData.paymentOrderId !== 'undefined') {
      payload.paymentOrderId = bookingDetailData.paymentOrderId
    }
    if (tranx && typeof tranx.deposit !== 'undefined') {
      payload.amount = tranx.deposit
    }
    if (currency) {
      payload.currency = currency
    }
    if (bookingDetailData && typeof bookingDetailData.ref === 'string') {
      payload.ref = bookingDetailData.ref
    }
    return Object.keys(payload).length ? payload : null
  }, [bookingDetailData, paymentInfo, transaction])

  const reviewDetails = useMemo(() => {
    if (!bookingDetailData || !isRecord(bookingDetailData)) {
      return null
    }
    const details = isRecord(bookingDetailData.details) ? bookingDetailData.details : null
    const purchaser = details && isRecord(details.purchaser) ? details.purchaser : null
    const rooms = details && Array.isArray(details.rooms) ? details.rooms : []
    return { purchaser, rooms }
  }, [bookingDetailData])

  const reviewHasPaxs = useMemo(() => {
    if (!reviewDetails?.rooms?.length) {
      return false
    }
    return reviewDetails.rooms.some((room) => isRecord(room) && Array.isArray(room.paxs) && room.paxs.length > 0)
  }, [reviewDetails])

  const renderReviewRow = (label: string, value: string) => (
    <div className="booking-review-row">
      <span className="booking-review-label">{label}</span>
      <span className="booking-review-value">{value || '-'}</span>
    </div>
  )

  const formatSignedPrice = (value: number) => {
    if (!Number.isFinite(value) || value === 0) {
      return ''
    }
    const sign = value < 0 ? '-' : ''
    const formatted = formatPrice(Math.abs(value))
    return formatted ? `${sign}${formatted}` : ''
  }

  const priceRows = useMemo(() => {
    if (!transaction) {
      return []
    }

    const rows: Array<{ label: string; unitPrice: number; qty: number; amount: number }> = []
    const addRow = (label: string, unit: unknown, qty: unknown) => {
      const unitPrice = toNumber(unit)
      const quantity = toNumber(qty)
      if (unitPrice <= 0 || quantity <= 0) {
        return
      }
      rows.push({ label, unitPrice, qty: quantity, amount: unitPrice * quantity })
    }

    addRow('Adult (Single)', transaction.sglFare, transaction.sglPax)
    addRow('Adult (Twin)', transaction.twnFare, transaction.twnPax)
    addRow('Adult (Triple)', transaction.trpFare, transaction.trpPax)
    const quadFare = toNumber(transaction.quadFare) || toNumber(transaction.trpFare)
    if (quadFare > 0) {
      addRow('Adult (Quad)', quadFare, transaction.quadPax)
    }

    addRow('Child', transaction.chdWhalfTwn, transaction.chdHalfTwnPax)
    addRow('Child (W/Bed)', transaction.chdWbed, transaction.chdWithBedPax)
    addRow('Child (WO/Bed)', transaction.chdWoBed, transaction.chdWithOutBedPax)
    addRow('Infant', transaction.infantFare, transaction.infantPax)

    addRow('Land Tour (Twin)', transaction.grTwnFare, transaction.grTwnPax)
    addRow('Land Tour (Single)', transaction.grSglFare, transaction.grSglPax)

    return rows
  }, [transaction])

  const taxRows = useMemo(() => {
    if (!transaction) {
      return []
    }

    const rows: Array<{ label: string; unitPrice: number; qty: number; amount: number }> = []
    const adultCount =
      toNumber(transaction.sglPax) +
      toNumber(transaction.twnPax) +
      toNumber(transaction.trpPax) +
      toNumber(transaction.quadPax)
    const childCount =
      toNumber(transaction.chdHalfTwnPax) +
      toNumber(transaction.chdWithBedPax) +
      toNumber(transaction.chdWithOutBedPax)

    if (toNumber(transaction.adultTax) > 0 && adultCount > 0) {
      rows.push({
        label: 'Adult Taxes',
        unitPrice: toNumber(transaction.adultTax),
        qty: adultCount,
        amount: toNumber(transaction.adultTax) * adultCount,
      })
    }

    if (toNumber(transaction.childTax) > 0 && childCount > 0) {
      rows.push({
        label: 'Child Taxes',
        unitPrice: toNumber(transaction.childTax),
        qty: childCount,
        amount: toNumber(transaction.childTax) * childCount,
      })
    }

    return rows
  }, [transaction])

  const discountRows = useMemo(() => {
    const rows: Array<{ label: string; amount: number }> = []
    const tiers = Array.isArray(tripPrice?.tier) ? (tripPrice?.tier as Record<string, unknown>[]) : []
    const discounts = Array.isArray(tripPrice?.discount) ? (tripPrice?.discount as Record<string, unknown>[]) : []

    const tierTotals = tiers.reduce<Record<string, { label: string; amount: number }>>((acc, tier) => {
      if (!isRecord(tier)) {
        return acc
      }
      const price = toNumber(tier.price)
      if (price === 0) {
        return acc
      }
      const key = typeof tier.grossTierId === 'number' ? String(tier.grossTierId) : tier.name ? String(tier.name) : 'tier'
      const name = typeof tier.name === 'string' && tier.name.trim()
        ? tier.name
        : tier.type === 'A'
          ? 'L1 Disc'
          : 'L2 Disc'
      if (!acc[key]) {
        acc[key] = { label: name, amount: 0 }
      }
      acc[key].amount += price
      return acc
    }, {})

    Object.values(tierTotals).forEach((tier) => {
      rows.push({ label: tier.label, amount: -Math.abs(tier.amount) })
    })

    discounts.forEach((discount) => {
      if (!isRecord(discount)) {
        return
      }
      const info = isRecord(discount.info) ? discount.info : null
      const label = info && typeof info.code === 'string' ? info.code : 'Discount'
      const amount = toNumber(discount.price)
      if (amount <= 0) {
        return
      }
      rows.push({ label, amount: -Math.abs(amount) })
    })

    return rows
  }, [tripPrice])

  const flightRows = useMemo(() => {
    const flights = selectedDeparture?.flights
    if (!Array.isArray(flights)) {
      return []
    }
    return flights.filter((flight) =>
      Boolean(flight && (flight.departureDate || flight.flightNo || flight.sector || flight.etd || flight.eta))
    )
  }, [selectedDeparture])
  const extractBookingId = (payload: unknown) => {
    if (!isRecord(payload)) {
      return null
    }
    const data = isRecord(payload.data) ? payload.data : null
    const transaction = data && isRecord(data.transaction) ? data.transaction : null
    const tranx = data && isRecord(data.tranx) ? data.tranx : null
    const idCandidates = [
      transaction?.id,
      data?.id,
      tranx?.id,
      data?.bookingId,
      payload?.id,
    ]
    for (const candidate of idCandidates) {
      const parsedId = typeof candidate === 'number' ? candidate : Number(candidate)
      if (Number.isFinite(parsedId) && parsedId > 0) {
        return parsedId
      }
    }
    return null
  }

  const extractBookingRooms = (payload: unknown) => {
    if (!isRecord(payload)) {
      return null
    }
    const data = isRecord(payload.data) ? payload.data : null
    if (data && Array.isArray(data.room)) {
      return data.room as BookingRoom[]
    }
    if (data && isRecord(data.details) && Array.isArray(data.details.rooms)) {
      return data.details.rooms as BookingRoom[]
    }
    return null
  }

  const requestPricing = async (nextRooms: RoomSelection[], isUserAction: boolean) => {
    if (!tourId || !resolvedTourCodeId || !roomConfigs.length) {
      return
    }

    const payloadResult = buildRoomsPayload(nextRooms, roomConfigs)
    if (payloadResult.error) {
      setPricingError(payloadResult.error)
      setPricingWarning(null)
      return
    }

    setPricingError(null)
    setPricingWarning(null)

    try {
      if (bookingId && isUserAction) {
        console.log('[booking][grabSeat] request:', {
          id: bookingId,
          rooms: payloadResult.roomsPayload,
        })
        const res = await fetch('/api/booking/grabSeat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: bookingId,
            rooms: payloadResult.roomsPayload,
          }),
        })
        const json = await parseJsonResponse(res)
        console.log('[booking][grabSeat] response:', json)
        const apiError = getApiErrorMessage(json)
        if (apiError) {
          if (isWaitlistMessage(apiError)) {
            setPricingWarning(apiError)
          } else {
            setPricingError(apiError)
          }
        }
        setTripPrice(isRecord(json) && isRecord(json.data) ? (json.data as Record<string, unknown>) : json)
        const nextBookingId = extractBookingId(json)
        if (nextBookingId) {
          setBookingId(nextBookingId)
        }
        const roomData = extractBookingRooms(json)
        if (roomData) {
          setBookingRooms(roomData)
        }
        if (isRecord(json.data) && typeof json.data.expectedCancelTime === 'string') {
          setExpectedCancelTime(json.data.expectedCancelTime)
        }
      } else {
        console.log('[booking][checkPrice] request:', {
          tourId,
          tourCodeId: resolvedTourCodeId,
          rooms: payloadResult.roomsPayload,
        })
        const res = await fetch('/api/booking/checkPrice', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tourId,
            tourCodeId: resolvedTourCodeId,
            rooms: payloadResult.roomsPayload,
          }),
        })
        const json = await parseJsonResponse(res)
        console.log('[booking][checkPrice] response:', json)
        const apiError = getApiErrorMessage(json)
        if (apiError) {
          if (isWaitlistMessage(apiError)) {
            setPricingWarning(apiError)
          } else {
            setPricingError(apiError)
          }
        }
        setTripPrice(isRecord(json) && isRecord(json.data) ? (json.data as Record<string, unknown>) : json)
      }

      setSelectedRoomConfigs(payloadResult.configs)
    } catch (error) {
      console.error('Booking pricing error:', error)
      setPricingError('Failed to calculate pricing. Please try again.')
    }
  }

  const buildPaxsPayload = () => {
    const paxs: Record<string, unknown>[] = []
    let travelerIndex = 0

    rooms.forEach((room, roomIndex) => {
      const roomConfig = selectedRoomConfigs[roomIndex]
      const roomTypes = buildPaxTypes(room, roomConfig)
      const bookingRoom = bookingRooms?.[roomIndex]
      const roomId = bookingRoom?.id ?? roomIndex + 1
      const sequence = bookingRoom?.sequence ?? roomIndex + 1

      roomTypes.forEach((type) => {
        const traveler = travellers[travelerIndex] ?? createEmptyTraveller()
        const fallbackTitle = ['CNB', 'CWB', 'CTW', 'INF'].includes(type) ? 'MISS' : 'MR'
        const title = traveler.title || fallbackTitle
        const gender = title === 'MR' || title === 'MSTR' ? 'Male' : 'Female'
        const nationality = parseNationalityValue(traveler.nationality)
        const dialCode = traveler.dialCode || primaryContact.countryCode
        const phone = traveler.phone || primaryContact.phone
        paxs.push({
          title,
          firstName: traveler.firstName,
          lastName: traveler.lastName,
          email: traveler.email || primaryContact.email,
          dialCode,
          mobile: phone ? `${dialCode}${phone}` : '',
          nationality: nationality.name,
          nationalityShort: nationality.code,
          birthday: normalizeDateInputValue(traveler.dob),
          gender,
          passport: traveler.passport,
          expiryDate: normalizeDateInputValue(traveler.passportExpiry),
          tranxRoomId: roomId,
          sequence,
          type,
          feeType: priceType === 'land' ? 'Land' : 'Full',
          isLandTour: priceType === 'land' ? 1 : 0,
        })
        travelerIndex += 1
      })
    })

    return paxs
  }

  const refreshBookingDetails = async (overrideId?: number) => {
    const activeBookingIdRaw = overrideId ?? bookingId
    const activeBookingId =
      typeof activeBookingIdRaw === 'number' ? activeBookingIdRaw : Number(activeBookingIdRaw)
    if (!Number.isFinite(activeBookingId)) {
      console.warn('Booking refresh skipped: invalid booking id', activeBookingIdRaw)
      return
    }
    setIsRefreshingBooking(true)
    try {
      const res = await fetch(`/api/booking/queryDetail?id=${activeBookingId}`)
      const json = await parseJsonResponse(res)
      if (isRecord(json) && isRecord(json.data)) {
        const data = json.data
        if (typeof data.id === 'number' && !bookingId) {
          setBookingId(data.id)
        }
        setBookingDetailData(data)
        if (isRecord(data.details)) {
          const details = data.details
          setTripPrice(buildTripPriceFromDetails(details))
          if (Array.isArray(details.rooms)) {
            setBookingRooms(details.rooms as BookingRoom[])
          }
          if (isRecord(details.tranx)) {
            if (typeof details.tranx.expectedCancelTime === 'string') {
              setExpectedCancelTime(details.tranx.expectedCancelTime)
            }
            if (typeof details.tranx.status === 'string' && details.tranx.status.toLowerCase() === 'voided') {
              await clearSavedBookingState()
              window.location.href = getTourRedirectUrl(tourData, tourId)
              return
            }
          }
          setAppliedDiscounts(extractDiscountCodes(details))
        }
        if (typeof data.ref === 'string') {
          setBookingRef(data.ref)
        }
      }
    } catch (error) {
      console.error('Booking refresh error:', error)
    } finally {
      setIsRefreshingBooking(false)
    }
  }

  useEffect(() => {
    if (!bookingId || bookingRefreshInitialized.current) {
      return
    }
    if (tripPrice && bookingRooms && bookingDetailData && typeof bookingDetailData.ref === 'string') {
      bookingRefreshInitialized.current = true
      return
    }
    bookingRefreshInitialized.current = true
    refreshBookingDetails(bookingId)
  }, [bookingId, bookingDetailData, bookingRooms, tripPrice])

  const handleApplyDiscount = async () => {
    if (!bookingId) {
      setDiscountMessage('Please start booking before applying a promo code.')
      return
    }
    const code = discountCode.trim()
    if (!code) {
      setDiscountMessage('Please enter a promo code.')
      return
    }
    const transaction = isRecord(tripPrice?.transaction) ? tripPrice?.transaction : null
    const updateTime = transaction && typeof transaction.updateTime === 'string' ? transaction.updateTime : ''
    if (!updateTime) {
      setDiscountMessage('Pricing must be calculated before applying a promo code.')
      return
    }

    setIsApplyingDiscount(true)
    setDiscountMessage(null)
    try {
      const res = await fetch('/api/booking/discountCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: bookingId,
          discountCode: code,
          updateTime,
          status: true,
        }),
      })
      const text = await res.text()
      const json = text ? JSON.parse(text) : {}
      const apiError = getApiErrorMessage(json) ?? (typeof json?.error === 'string' ? json.error : null)
      if (!res.ok || apiError || json?.success === false) {
        setDiscountMessage(apiError || 'Failed to apply promo code.')
        return
      }
      setAppliedDiscounts((prev) => (prev.includes(code) ? prev : [...prev, code]))
      setDiscountCode('')
      setDiscountMessage('Promo code applied.')
      await refreshBookingDetails()
    } catch (error) {
      console.error('Booking discount error:', error)
      const message = error instanceof Error ? error.message : 'Failed to apply promo code.'
      setDiscountMessage(message)
    } finally {
      setIsApplyingDiscount(false)
    }
  }

  const handleRemoveDiscount = async (code: string) => {
    if (!bookingId) {
      return
    }
    const transaction = isRecord(tripPrice?.transaction) ? tripPrice?.transaction : null
    const updateTime = transaction && typeof transaction.updateTime === 'string' ? transaction.updateTime : ''
    if (!updateTime) {
      setDiscountMessage('Pricing must be refreshed before removing a promo code.')
      return
    }

    setIsApplyingDiscount(true)
    try {
      const res = await fetch('/api/booking/discountCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: bookingId,
          discountCode: code,
          updateTime,
          status: false,
        }),
      })
      const text = await res.text()
      const json = text ? JSON.parse(text) : {}
      const apiError = getApiErrorMessage(json) ?? (typeof json?.error === 'string' ? json.error : null)
      if (!res.ok || apiError || json?.success === false) {
        setDiscountMessage(apiError || 'Failed to remove promo code.')
        return
      }
      setAppliedDiscounts((prev) => prev.filter((item) => item !== code))
      setDiscountMessage('Promo code removed.')
      await refreshBookingDetails()
    } catch (error) {
      console.error('Booking discount remove error:', error)
      const message = error instanceof Error ? error.message : 'Failed to remove promo code.'
      setDiscountMessage(message)
    } finally {
      setIsApplyingDiscount(false)
    }
  }

  const handleCancelBooking = async () => {
    setIsSubmitting(true)
    const redirectUrl = getTourRedirectUrl(tourData, tourId)
    try {
      if (bookingId) {
        await fetch('/api/booking/cancel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: bookingId }),
        })
      }
    } catch (error) {
      console.error('Booking cancel error:', error)
    } finally {
      setBookingId(null)
      setBookingRooms(null)
      setTripPrice(null)
      setExpectedCancelTime(null)
      setBookingDetailData(null)
      setPaymentInfo(null)
      setAppliedDiscounts([])
      await clearSavedBookingState()
      clearBookingUrlParams(encodedTourParam, tourIdParam)
      setShowCancelConfirm(false)
      window.location.href = redirectUrl
      setIsSubmitting(false)
    }
  }

  const openCancelConfirm = () => {
    setShowCancelConfirm(true)
  }

  const closeCancelConfirm = () => {
    setShowCancelConfirm(false)
  }

  const handleLookupBooking = async () => {
    if (!paymentLookupId.trim()) {
      setPaymentMessage('Please enter a transaction ID.')
      return
    }
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/booking/getBookingIDByPayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transaction_id: paymentLookupId.trim() }),
      })
      const json = await parseJsonResponse(res)
      const nextId = isRecord(json) ? Number(json.data) : NaN
      if (Number.isFinite(nextId)) {
        setBookingId(nextId)
        await refreshBookingDetails(nextId)
        setPaymentMessage(`Booking ID ${nextId} loaded.`)
      } else {
        setPaymentMessage('No booking found for this transaction.')
      }
    } catch (error) {
      console.error('Booking lookup error:', error)
      setPaymentMessage('Failed to lookup booking.')
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const syncTravellers = () => {
      setTravellers((prev) => {
        const next = [...prev]
        while (next.length < totalTravellers) {
          const newTraveller = createEmptyTraveller()
          if (dialCodes[0]?.dialCode) {
            newTraveller.dialCode = dialCodes[0].dialCode
          }
          next.push(newTraveller)
        }
        if (next.length > totalTravellers) {
          next.length = totalTravellers
        }
        return next
      })
    }
    syncTravellers()
  }, [totalTravellers, dialCodes])

  useEffect(() => {
    setTravellers((prev) =>
      prev.map((traveller) => (traveller.sameAsPrimary ? applyPrimaryToTraveller(traveller) : traveller))
    )
  }, [primaryContact])

  useEffect(() => {
    if (currentStep !== 2) {
      return
    }
    let timer: number | null = null

    const initDatePickers = () => {
      const $ = (window as any).jQuery
      if (!$ || typeof $.fn?.datepicker !== 'function') {
        timer = window.setTimeout(initDatePickers, 200)
        return
      }
      $('.js-date-picker').each((_: number, element: HTMLElement) => {
        const $element = $(element)
        if ($element.hasClass('hasDatepicker')) {
          return
        }
        const yearRange = element.getAttribute('data-year-range') || 'c-10:c+10'
        $element.datepicker({
          dateFormat: 'dd/mm/yy',
          changeMonth: true,
          changeYear: true,
          yearRange,
          onSelect: (dateText: string) => {
            const field = element.getAttribute('data-field') as keyof TravellerInfo | null
            const index = Number(element.getAttribute('data-index'))
            if (!field || !Number.isFinite(index)) {
              return
            }
            updateTraveller(index, field, dateText)
          },
        })
      })
    }

    initDatePickers()

    return () => {
      if (timer) {
        window.clearTimeout(timer)
      }
    }
  }, [currentStep, travellers.length])

  useEffect(() => {
    if (!tourId) {
      return
    }
    if (isRecord(tourData) && isRecord(tourData.data)) {
      const savedId = typeof tourData.data.id === 'number' ? tourData.data.id : Number(tourData.data.id)
      if (savedId === tourId) {
        return
      }
    }
    let isActive = true

    const fetchTourDetail = async () => {
      try {
        if (isActive) {
          setTourError(false)
        }
        console.log('[booking][tourDetail] request:', { tourId })
        const detailRes = await fetch(`/api/tour/detail?id=${tourId}`)
        const detailJson = await parseJsonResponse(detailRes)
        const detailRecord = isRecord(detailJson) && isRecord(detailJson.data) ? detailJson.data : null
        const productType = detailRecord && typeof detailRecord.productType === 'number' ? detailRecord.productType : null
        if (productType === 2) {
          const params = new URLSearchParams()
          const tourName = detailRecord ? getLocalizedText(detailRecord.name) : ''
          if (tourName) {
            params.set('tourName', tourName)
          }
          const tourCode = detailRecord && typeof detailRecord.tourCode === 'string'
            ? detailRecord.tourCode.trim()
            : detailRecord && typeof detailRecord.code === 'string'
              ? detailRecord.code.trim()
              : ''
          if (tourCode) {
            params.set('tourCode', tourCode)
          }
          const productCode = detailRecord && typeof detailRecord.productCode === 'string'
            ? detailRecord.productCode.trim()
            : ''
          if (productCode) {
            params.set('productCode', productCode)
          }
          if (tourId) {
            params.set('tourId', String(tourId))
          }
          if (departureIdParam) {
            params.set('departureId', departureIdParam)
          }
          if (tourCodeIdParam) {
            params.set('tourCodeId', tourCodeIdParam)
          }
          params.set('type', '2')
          const enquiryQuery = params.toString()
          const enquiryUrl = enquiryQuery ? `/enquiry?${enquiryQuery}` : '/enquiry'
          if (typeof window !== 'undefined') {
            window.location.href = enquiryUrl
          }
          return
        }        console.log('[booking][tourDetail] response:', detailJson)
        if (isActive) {
          setTourData(detailJson)
        }
      } catch (error) {
        console.error('Booking tour detail error:', error)
        if (isActive) {
          setTourError(true)
        }
      }
    }

    fetchTourDetail()

    return () => {
      isActive = false
    }
  }, [tourId, tourData])

  useEffect(() => {
    if (!formError || !formErrorRef.current) {
      return
    }
    formErrorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [formError])

  useEffect(() => {
    let isActive = true

    const fetchDialCodes = async () => {
      try {
        const res = await fetch('/api/booking/dialCode')
        const json = await parseJsonResponse(res)
        const list = Array.isArray(json?.data) ? (json.data as DialCode[]) : []
        if (isActive) {
          setDialCodes(list)
          if (!primaryContact.countryCode && list[0]?.dialCode) {
            setPrimaryContact((prev) => ({ ...prev, countryCode: list[0].dialCode }))
          }
          if (list[0]?.dialCode) {
            setTravellers((prev) =>
              prev.map((traveller) =>
                traveller.dialCode ? traveller : { ...traveller, dialCode: list[0].dialCode }
              )
            )
          }
        }
      } catch (error) {
        console.error('Booking dial code error:', error)
      }
    }

    const fetchNationalities = async () => {
      try {
        const res = await fetch('/api/booking/nationality')
        const json = await parseJsonResponse(res)
        const list = Array.isArray(json?.data) ? (json.data as Nationality[]) : []
        if (isActive) {
          setNationalities(list)
        }
      } catch (error) {
        console.error('Booking nationality error:', error)
      }
    }

    fetchDialCodes()
    fetchNationalities()

    return () => {
      isActive = false
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    const jquery = (window as any).$
    if (!jquery || !jquery.fn || !jquery.fn.niceSelect) {
      return
    }
    const selects = jquery('select')
    selects.each((index: number, element: HTMLElement) => {
      const select = jquery(element)
      if (select.next('.nice-select').length) {
        select.niceSelect('update')
      } else {
        select.niceSelect()
      }
    })
    const initSearch = (window as any).initNiceSelectSearch
    if (typeof initSearch === 'function') {
      initSearch()
    }
  }, [currentStep, dialCodes.length, nationalities.length, travellers.length])

  useEffect(() => {
    if (!resolvedTourCodeId) {
      return
    }
    const skipTourInfo = isRecord(tourInfoData) && isRecord(tourInfoData.data)
    const skipRoomConfigs = roomConfigs.length > 0
    if (skipTourInfo && skipRoomConfigs) {
      return
    }
    let isActive = true

    const fetchTourInfo = async () => {
      if (skipTourInfo) {
        return
      }
      try {
        if (isActive) {
          setTourInfoError(false)
        }
        console.log('[booking][tourInfo] request:', { tourCodeId: resolvedTourCodeId })
        const res = await fetch(`/api/booking/tourInfo?id=${resolvedTourCodeId}`)
        const json = await parseJsonResponse(res)
        console.log('[booking][tourInfo] response:', json)
        if (isActive) {
          setTourInfoData(json)
        }
      } catch (error) {
        console.error('Booking tour info error:', error)
        if (isActive) {
          setTourInfoError(true)
        }
      }
    }

    const fetchRoomConfigs = async () => {
      if (skipRoomConfigs) {
        return
      }
      try {
        if (isActive) {
          setRoomConfigError(false)
        }
        console.log('[booking][roomConfiguration] request:', { tourCodeId: resolvedTourCodeId })
        const res = await fetch(`/api/booking/roomConfiguration?id=${resolvedTourCodeId}`)
        const json = await parseJsonResponse(res)
        console.log('[booking][roomConfiguration] response:', json)
        const configs = Array.isArray(json?.data) ? (json.data as RoomConfig[]) : []
        const usableConfigs = configs.filter(
          (config) => toNumber(config.isBackend) === 0 && toNumber(config.isTcp) === 0
        )
        if (isActive) {
          setRoomConfigs(usableConfigs.length ? usableConfigs : configs)
        }
      } catch (error) {
        console.error('Booking room config error:', error)
        if (isActive) {
          setRoomConfigError(true)
        }
      }
    }

    fetchTourInfo()
    fetchRoomConfigs()

    return () => {
      isActive = false
    }
  }, [resolvedTourCodeId, tourInfoData, roomConfigs])

  useEffect(() => {
    if (!roomConfigs.length || roomsInitialized.current) {
      return
    }
    const minConfig = findMinimumRoomConfig(roomConfigs)
    if (minConfig) {
      setRooms([
        {
          adults: minConfig.adultNum,
          childWithBed: minConfig.childWithBedNum,
          childWithoutBed: minConfig.childWithoutBedNum,
          infants: minConfig.infantNum,
        },
      ])
    }
    roomsInitialized.current = true
  }, [roomConfigs])

  useEffect(() => {
    if (!roomConfigs.length || !rooms.length || selectedRoomConfigs.length) {
      return
    }
    const payloadResult = buildRoomsPayload(rooms, roomConfigs)
    if (!payloadResult.error) {
      setSelectedRoomConfigs(payloadResult.configs)
    }
  }, [roomConfigs, rooms, selectedRoomConfigs.length])

  useEffect(() => {
    if (pricingInitialized.current) {
      return
    }
    if (!tourId || !resolvedTourCodeId || !roomConfigs.length) {
      return
    }
    pricingInitialized.current = true
    requestPricing(rooms, false)
  }, [tourId, resolvedTourCodeId, roomConfigs, rooms])

  useEffect(() => {
    if (!tourId) {
      return
    }
    let isActive = true

    const fetchDepartures = async () => {
      try {
        if (isActive) {
          setDepartureError(false)
        }
        const requestPayload = {
          id: tourId,
          pageSize: 0,
          currentPage: 0,
        }
        console.log('[booking][departures] request:', requestPayload)
        const res = await fetch('/api/tour/departures', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestPayload),
        })
        const json = await parseJsonResponse(res)
        console.log('[booking][departures] response:', json)
        if (isActive) {
          setDepartureData(json)
        }
      } catch (error) {
        console.error('Booking departures error:', error)
        if (isActive) {
          setDepartureError(true)
        }
      }
    }

    fetchDepartures()

    return () => {
      isActive = false
    }
  }, [tourId])

  const updateRoom = (index: number, field: keyof RoomSelection, value: number) => {
    const nextRooms = rooms.map((room, roomIndex) =>
      roomIndex === index ? { ...room, [field]: Math.max(0, value) } : room
    )
    setRooms(nextRooms)
    if (roomConfigs.length && !isValidRoomConfig(nextRooms[index], roomConfigs)) {
      setPricingError('Selected room configuration is not available. Please adjust travellers.')
    }
    requestPricing(nextRooms, true)
  }

  const addRoom = () => {
    const baseConfig = findMinimumRoomConfig(roomConfigs)
    const newRoom: RoomSelection = baseConfig
      ? {
        adults: baseConfig.adultNum,
        childWithBed: baseConfig.childWithBedNum,
        childWithoutBed: baseConfig.childWithoutBedNum,
        infants: baseConfig.infantNum,
      }
      : {
        adults: 2,
        childWithBed: 0,
        childWithoutBed: 0,
        infants: 0,
      }
    const nextRooms = rooms.length < 4 ? [...rooms, newRoom] : rooms
    setRooms(nextRooms)
    requestPricing(nextRooms, true)
  }

  const removeRoom = (index: number) => {
    const nextRooms = rooms.length > 1 ? rooms.filter((_, roomIndex) => roomIndex !== index) : rooms
    setRooms(nextRooms)
    requestPricing(nextRooms, true)
  }

  const updatePrimaryContact = (field: keyof ContactInfo, value: string) => {
    setPrimaryContact((prev) => ({ ...prev, [field]: value }))
    setPrimaryContactErrors((prev) => {
      if (!prev[field]) {
        return prev
      }
      return { ...prev, [field]: undefined }
    })
  }

  const updateTraveller = (index: number, field: keyof TravellerInfo, value: string) => {
    setTravellers((prev) =>
      prev.map((traveller, tIndex) => (tIndex === index ? { ...traveller, [field]: value } : traveller))
    )
    setTravellerErrors((prev) => {
      const current = prev[index]
      if (!current || !current[field]) {
        return prev
      }
      const next = [...prev]
      next[index] = { ...current, [field]: undefined }
      return next
    })
  }

  const applyPrimaryToTraveller = (traveller: TravellerInfo) => ({
    ...traveller,
    title: primaryContact.title,
    firstName: primaryContact.firstName,
    lastName: primaryContact.lastName,
    email: primaryContact.email,
    dialCode: primaryContact.countryCode,
    phone: primaryContact.phone,
  })

  const toggleSameAsPrimary = (index: number, nextValue: boolean) => {
    setTravellers((prev) =>
      prev.map((traveller, tIndex) => {
        if (!nextValue) {
          return tIndex === index ? { ...traveller, sameAsPrimary: false } : traveller
        }
        if (tIndex === index) {
          return { ...applyPrimaryToTraveller(traveller), sameAsPrimary: true }
        }
        return { ...traveller, sameAsPrimary: false }
      })
    )
  }

  const renderFieldError = (message?: string) => (message ? <span className="field-error">{message}</span> : null)

  const validateStep = () => {
    setFormError(null)
    if (currentStep === 1 && totalTravellers <= 0) {
      setFormError('Please add at least one traveller.')
      return false
    }
    if (currentStep === 1 && pricingError) {
      setFormError(pricingError)
      return false
    }
    if (currentStep === 2) {
      const primaryFields: Array<{ key: keyof ContactInfo; label: string; value: string }> = [
        { key: 'firstName', label: 'First Name', value: primaryContact.firstName },
        { key: 'lastName', label: 'Last Name', value: primaryContact.lastName },
        { key: 'email', label: 'Email', value: primaryContact.email },
        { key: 'countryCode', label: 'Country Code', value: primaryContact.countryCode },
        { key: 'phone', label: 'Phone', value: primaryContact.phone },
        { key: 'address', label: 'Address', value: primaryContact.address },
        { key: 'postCode', label: 'Postal Code', value: primaryContact.postCode },
      ]
      const primaryErrors: Partial<Record<keyof ContactInfo, string>> = {}
      const primaryMissing = primaryFields
        .filter(({ value }) => !value || !value.trim())
        .map(({ key, label }) => {
          primaryErrors[key] = 'Required'
          return label
        })

      if (primaryMissing.length) {
        setPrimaryContactErrors(primaryErrors)
        setFormError(`Primary contact missing: ${primaryMissing.join(', ')}.`)
        return false
      }
      setPrimaryContactErrors({})

      const returnDate = departureEndDate ?? departureStartDate
      const nextTravellerErrors = travellers.map(() => ({} as Partial<Record<keyof TravellerInfo, string>>))
      let firstError = ''
      let firstErrorFieldId = ''

      for (let index = 0; index < travellers.length; index += 1) {
        const traveller = travellers[index]
        const type = travellerTypes[index] ?? 'ADT'
        const label = getTravellerTypeLabel(type)

        const addTravellerError = (field: keyof TravellerInfo, message: string) => {
          nextTravellerErrors[index][field] = message
          if (!firstError) {
            firstError = `Traveller ${index + 1} (${label}): ${message}`
            if (field === 'nationality') {
              firstErrorFieldId = `traveller-${index}-nationality`
            }
          }
        }

        if (!traveller.firstName) {
          addTravellerError('firstName', 'First name is required.')
        }
        if (!traveller.lastName) {
          addTravellerError('lastName', 'Last name is required.')
        }
        if (!traveller.nationality || !traveller.nationality.trim()) {
          addTravellerError('nationality', 'Nationality is required.')
        }
        if (!traveller.passport) {
          addTravellerError('passport', 'Passport number is required.')
        }

        const dobError = validateDobForType(traveller.dob, type, returnDate, childWithoutBedStartAge, childWithoutBedEndAge)
        if (dobError) {
          addTravellerError('dob', dobError)
        }

        const expiryError = validatePassportExpiry(traveller.passportExpiry, returnDate)
        if (expiryError) {
          addTravellerError('passportExpiry', expiryError)
        }
      }
      setTravellerErrors(nextTravellerErrors)
      if (firstError) {
        setFormError(firstError)
        if (firstErrorFieldId) {
          setTimeout(() => {
            const target = document.getElementById(firstErrorFieldId)
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
          }, 0)
        }
        return false
      }
    }
    return true
  }

  const handleNextStep = async () => {
    if (!validateStep()) {
      return
    }
    if (currentStep === 4 && !paymentTermsAccepted) {
      setFormError('Please accept the terms and conditions before continuing.')
      return
    }

    if (!tourId) {
      setFormError('Tour information is missing. Please restart booking.')
      return
    }

    setIsSubmitting(true)
    setPaymentMessage(null)

    try {
      if (currentStep === 1) {
        if (!resolvedTourCodeId) {
          setFormError('Tour code information is missing. Please restart booking.')
          return
        }
        const payloadResult = buildRoomsPayload(rooms, roomConfigs)
        if (payloadResult.error) {
          setFormError(payloadResult.error)
          return
        }
        setSelectedRoomConfigs(payloadResult.configs)

        let activeBookingId = bookingId
        if (!activeBookingId) {
          const initialPayload = {
            tourId,
            tourCodeId: resolvedTourCodeId,
          }
          console.log('[booking][initialBooking] request:', initialPayload)
          const initialRes = await fetch('/api/booking/initialBooking', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(initialPayload),
          })
          const initialJson = await parseJsonResponse(initialRes)
          console.log('[booking][initialBooking] response:', initialJson)
          activeBookingId = extractBookingId(initialJson)
          if (!activeBookingId) {
            setFormError('Failed to start booking. Please try again.')
            return
          }
        }

        const holdPayload = {
          id: activeBookingId,
          rooms: payloadResult.roomsPayload,
        }
        console.log('[booking][grabSeat] request:', holdPayload)
        const holdRes = await fetch('/api/booking/grabSeat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(holdPayload),
        })
        const holdJson = await parseJsonResponse(holdRes)
        console.log('[booking][grabSeat] response:', holdJson)
        const nextBookingId = extractBookingId(holdJson) ?? activeBookingId
        setBookingId(nextBookingId)
        setTripPrice(isRecord(holdJson) && isRecord(holdJson.data) ? (holdJson.data as Record<string, unknown>) : holdJson)

        const roomData = extractBookingRooms(holdJson)
        if (roomData) {
          setBookingRooms(roomData)
        }
        if (isRecord(holdJson.data) && typeof holdJson.data.expectedCancelTime === 'string') {
          setExpectedCancelTime(holdJson.data.expectedCancelTime)
        }

        setCurrentStep(2)
        window.scrollTo(0, 0)
        return
      }

      if (currentStep === 2) {
        if (!bookingId) {
          setFormError('Booking session is missing. Please restart booking.')
          return
        }
        const payloadResult = buildRoomsPayload(rooms, roomConfigs)
        if (payloadResult.error) {
          setFormError(payloadResult.error)
          return
        }

        const purchaser = {
          title: primaryContact.title,
          firstName: primaryContact.firstName,
          lastName: primaryContact.lastName,
          email: primaryContact.email,
          dialCode: primaryContact.countryCode,
          mobile: primaryContact.phone ? `${primaryContact.countryCode}${primaryContact.phone}` : '',
          address: primaryContact.address,
          postCode: primaryContact.postCode,
        }
        const updateRes = await fetch('/api/booking/updatePax', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: bookingId,
            paxs: buildPaxsPayload(),
            purchaser,
            rooms: bookingRooms ?? payloadResult.roomsPayload,
          }),
        })
        await parseJsonResponse(updateRes)
        await refreshBookingDetails(bookingId)
        setCurrentStep(3)
        window.scrollTo(0, 0)
        return
      }

      if (currentStep === 3) {
        if (!bookingId) {
          setFormError('Booking session is missing. Please restart booking.')
          return
        }
        const submitRes = await fetch('/api/booking/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: bookingId,
          }),
        })
        const submitJson = await parseJsonResponse(submitRes)
        if (isRecord(submitJson) && isRecord(submitJson.data)) {
          const submitData = submitJson.data
          const paymentData = isRecord(submitData.payment) ? submitData.payment : null
          const tranxCurrency =
            isRecord(submitData.tranx) && typeof submitData.tranx.currencyFrom === 'string'
              ? submitData.tranx.currencyFrom
              : ''
          if (paymentData) {
            const nextPayment = { ...paymentData } as Record<string, unknown>
            if (tranxCurrency && typeof nextPayment.currency !== 'string') {
              nextPayment.currency = tranxCurrency
            }
            setPaymentInfo(nextPayment)
          } else {
            const nextPayment = { ...submitData } as Record<string, unknown>
            if (tranxCurrency && typeof nextPayment.currency !== 'string') {
              nextPayment.currency = tranxCurrency
            }
            setPaymentInfo(nextPayment)
          }
          if (typeof submitJson.data.ref === 'string') {
            setBookingRef(submitJson.data.ref)
            setPaymentMessage(`Booking reference: ${submitJson.data.ref}`)
          }
        }
        await refreshBookingDetails(bookingId)
        setCurrentStep(4)
        window.scrollTo(0, 0)
        return
      }

      if (currentStep === 4) {
        if (!bookingId) {
          setFormError('Booking session is missing. Please restart booking.')
          return
        }
        const payRes = await fetch('/api/booking/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: bookingId,
          }),
        })
        const payJson = await parseJsonResponse(payRes)
        if (isRecord(payJson) && isRecord(payJson.data)) {
          setPaymentInfo(payJson.data)
        }
        setPaymentMessage('Payment request sent. This is a placeholder confirmation.')
        setCurrentStep(5)
        window.scrollTo(0, 0)
        return
      }

      setCurrentStep((prev) => Math.min(prev + 1, steps.length))
      window.scrollTo(0, 0)
    } catch (error) {
      console.error('Booking step error:', error)
      setFormError('Booking request failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePreviousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
    window.scrollTo(0, 0)
  }

  const showApiNotice = (tourError || departureError || roomConfigError || tourInfoError) && !shouldFallback

  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="breadcrumb-wrapper-3 fix bg-cover" style={{ backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-2.jpg)' }}>
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1 className="wow fadeInUp" data-wow-delay=".3s">
                    Booking
                  </h1>
                </div>
                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="style-2 style-3">Booking</li>
                </ul>
              </div>
            </div>
          </div>

          <ApiMaintenanceNotice visible={showApiNotice} />

          <section className="booking-section section-padding fix">
            <div className="container">
              <div className="booking-progress">
                {steps.map((step, index) => {
                  const stepNumber = index + 1
                  const isActive = currentStep >= stepNumber
                  return (
                    <div key={step} className={`booking-step ${isActive ? 'is-active' : ''}`}>
                      <div className="booking-step-number">{stepNumber}</div>
                      <div className="booking-step-label">{step}</div>
                      {index < steps.length - 1 ? <div className="booking-step-line"></div> : null}
                    </div>
                  )
                })}
              </div>

              <div className="row g-4">
                <div className={currentStep < 4 ? 'col-lg-8' : 'col-lg-12'}>
                  <div className="booking-card">
                    {formError ? <div ref={formErrorRef} className="booking-alert">{formError}</div> : null}
                    {currentStep === 4 && expectedCancelTime ? (
                      <div className="booking-summary-countdown booking-summary-countdown-main">
                        <p className="booking-summary-countdown-text">
                          We&apos;ve reserved this seats for you. Please complete checkout in:
                        </p>
                        <p className="booking-summary-countdown-time">
                          <CountdownTimer targetDate={expectedCancelTime} onExpire={handleCountdownExpire} />
                        </p>
                      </div>
                    ) : null}

                    {currentStep === 1 && (
                      <div className="booking-step-content">
                        <h3>Room & Traveller Selection</h3>
                        <p className="text">Select the number of rooms and travellers for this booking.</p>
                        {pricingError ? <div className="booking-alert">{pricingError}</div> : null}
                        {pricingWarning ? <div className="booking-alert booking-alert-warning">{pricingWarning}</div> : null}
                        {expectedCancelTime ? (
                          <div className="booking-note">
                            <h4>Reservation Hold</h4>
                            <p className="text">Seats are held until {expectedCancelTime}.</p>
                          </div>
                        ) : null}
                        <div className="booking-rooms">
                          {rooms.map((room, index) => (
                            <div key={`room-${index}`} className="booking-room-card">
                              <div className="booking-room-header">
                                <h4>Room {index + 1}</h4>
                                {rooms.length > 1 ? (
                                  <button type="button" className="booking-remove-room" onClick={() => removeRoom(index)}>
                                    Remove
                                  </button>
                                ) : null}
                              </div>
                              <div className="booking-room-grid">
                                <div className="booking-counter">
                                  <div>
                                    <span className="booking-counter-label">Adults</span>
                                    <span className="booking-counter-note">12 years & above</span>
                                  </div>
                                  <div className="booking-counter-controls">
                                    <button type="button" className="booking-counter-btn" onClick={() => updateRoom(index, 'adults', room.adults - 1)}>
                                      -
                                    </button>
                                    <span className="booking-counter-value">{room.adults}</span>
                                    <button type="button" className="booking-counter-btn" onClick={() => updateRoom(index, 'adults', room.adults + 1)}>
                                      +
                                    </button>
                                  </div>
                                </div>
                                <div className="booking-counter">
                                  <div>
                                    <span className="booking-counter-label">Child With Bed</span>
                                    <span className="booking-counter-note">2-11 years</span>
                                  </div>
                                  <div className="booking-counter-controls">
                                    <button
                                      type="button"
                                      className="booking-counter-btn"
                                      onClick={() => updateRoom(index, 'childWithBed', room.childWithBed - 1)}
                                    >
                                      -
                                    </button>
                                    <span className="booking-counter-value">{room.childWithBed}</span>
                                    <button
                                      type="button"
                                      className="booking-counter-btn"
                                      onClick={() => updateRoom(index, 'childWithBed', room.childWithBed + 1)}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                                <div className="booking-counter">
                                  <div>
                                    <span className="booking-counter-label">Child Without Bed</span>
                                    <span className="booking-counter-note">2-11 years</span>
                                  </div>
                                  <div className="booking-counter-controls">
                                    <button
                                      type="button"
                                      className="booking-counter-btn"
                                      onClick={() => updateRoom(index, 'childWithoutBed', room.childWithoutBed - 1)}
                                    >
                                      -
                                    </button>
                                    <span className="booking-counter-value">{room.childWithoutBed}</span>
                                    <button
                                      type="button"
                                      className="booking-counter-btn"
                                      onClick={() => updateRoom(index, 'childWithoutBed', room.childWithoutBed + 1)}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                                <div className="booking-counter">
                                  <div>
                                    <span className="booking-counter-label">Infants</span>
                                    <span className="booking-counter-note">Under 2 years</span>
                                  </div>
                                  <div className="booking-counter-controls">
                                    <button type="button" className="booking-counter-btn" onClick={() => updateRoom(index, 'infants', room.infants - 1)}>
                                      -
                                    </button>
                                    <span className="booking-counter-value">{room.infants}</span>
                                    <button type="button" className="booking-counter-btn" onClick={() => updateRoom(index, 'infants', room.infants + 1)}>
                                      +
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="booking-room-actions">
                          <button type="button" className="theme-btn outline" onClick={addRoom} disabled={rooms.length >= 4}>
                            + Add Room
                          </button>
                          <p className="text">Maximum 4 rooms per booking.</p>
                        </div>
                        <div className="booking-note">
                          <h4>Reservation Deposit</h4>
                          <p className="text">A deposit is required to reserve your scheduled group tour. The payment section will be added soon.</p>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="booking-step-content booking-form">
                        <h3>Primary Contact</h3>
                        <div className="row g-4">
                          <div className="col-md-4">
                            <div className="form-clt">
                              <span>Title</span>
                              <select
                                data-react-select="true"
                                value={primaryContact.title}
                                onChange={(event) => updatePrimaryContact('title', event.target.value)}
                              >
                                {titleOptions.map((option) => (
                                  <option key={`primary-title-${option}`} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className={`form-clt${primaryContactErrors.firstName ? ' is-error' : ''}`}>
                              <span>First Name <span className="required">*</span></span>
                              <input
                                type="text"
                                value={primaryContact.firstName}
                                onChange={(event) => updatePrimaryContact('firstName', event.target.value)}
                                placeholder="First name"
                              />
                              {renderFieldError(primaryContactErrors.firstName)}
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className={`form-clt${primaryContactErrors.lastName ? ' is-error' : ''}`}>
                              <span>Last Name <span className="required">*</span></span>
                              <input
                                type="text"
                                value={primaryContact.lastName}
                                onChange={(event) => updatePrimaryContact('lastName', event.target.value)}
                                placeholder="Last name"
                              />
                              {renderFieldError(primaryContactErrors.lastName)}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className={`form-clt${primaryContactErrors.email ? ' is-error' : ''}`}>
                              <span>Email <span className="required">*</span></span>
                              <input
                                type="email"
                                value={primaryContact.email}
                                onChange={(event) => updatePrimaryContact('email', event.target.value)}
                                placeholder="Email address"
                              />
                              {renderFieldError(primaryContactErrors.email)}
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className={`form-clt${primaryContactErrors.countryCode ? ' is-error' : ''}`}>
                              <span>Country Code <span className="required">*</span></span>
                              <select
                                data-react-select="true"
                                value={primaryContact.countryCode}
                                onChange={(event) => updatePrimaryContact('countryCode', event.target.value)}
                              >
                                <option value="">Select</option>
                                {dialCodes.map((code, optionIndex) => (
                                  <option key={`dial-${code.dialCode}-${optionIndex}`} value={code.dialCode}>
                                    {code.dialCode} {code.name ? `(${code.name})` : ''}
                                  </option>
                                ))}
                              </select>
                              {renderFieldError(primaryContactErrors.countryCode)}
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className={`form-clt${primaryContactErrors.phone ? ' is-error' : ''}`}>
                              <span>Phone <span className="required">*</span></span>
                              <input
                                type="text"
                                value={primaryContact.phone}
                                onChange={(event) => updatePrimaryContact('phone', event.target.value)}
                                placeholder="Phone number"
                              />
                              {renderFieldError(primaryContactErrors.phone)}
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className={`form-clt${primaryContactErrors.address ? ' is-error' : ''}`}>
                              <span>Address <span className="required">*</span></span>
                              <input
                                type="text"
                                value={primaryContact.address}
                                onChange={(event) => updatePrimaryContact('address', event.target.value)}
                                placeholder="Address"
                              />
                              {renderFieldError(primaryContactErrors.address)}
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className={`form-clt${primaryContactErrors.postCode ? ' is-error' : ''}`}>
                              <span>Postal Code <span className="required">*</span></span>
                              <input
                                type="text"
                                value={primaryContact.postCode}
                                onChange={(event) => updatePrimaryContact('postCode', event.target.value)}
                                placeholder="Postal code"
                              />
                              {renderFieldError(primaryContactErrors.postCode)}
                            </div>
                          </div>
                        </div>

                        <h3 className="booking-section-title">Traveller Details</h3>
                        <div className="booking-traveller-grid">
                          {travellers.map((traveller, index) => {
                            const travellerError = travellerErrors[index] ?? {}
                            return (
                              <div key={`traveller-${index}`} className="booking-traveller-card">
                                <div className="booking-traveller-header">
                                  <h4>
                                    Traveller {index + 1}{' '}
                                    <span className="booking-traveller-type">({getTravellerTypeLabel(travellerTypes[index] ?? 'ADT')})</span>
                                  </h4>
                                  <label className="booking-traveller-sync">
                                    <input
                                      type="checkbox"
                                      checked={Boolean(traveller.sameAsPrimary)}
                                      onChange={(event) => toggleSameAsPrimary(index, event.target.checked)}
                                    />
                                    Same as Primary Contact
                                  </label>
                                </div>
                                <div className="row g-4">
                                  <div className="col-md-3">
                                    <div className="form-clt">
                                      <span>Title</span>
                                      <select
                                        data-react-select="true"
                                        value={traveller.title}
                                        onChange={(event) => updateTraveller(index, 'title', event.target.value)}
                                        disabled={traveller.sameAsPrimary}
                                      >
                                        {titleOptions.map((option) => (
                                          <option key={`traveller-title-${index}-${option}`} value={option}>
                                            {option}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className={`form-clt${travellerError.firstName ? ' is-error' : ''}`}>
                                      <span>First Name <span className="required">*</span></span>
                                      <input
                                        type="text"
                                        value={traveller.firstName}
                                        onChange={(event) => updateTraveller(index, 'firstName', event.target.value)}
                                        placeholder="First name"
                                        disabled={traveller.sameAsPrimary}
                                      />
                                      {renderFieldError(travellerError.firstName)}
                                    </div>
                                  </div>
                                  <div className="col-md-5">
                                    <div className={`form-clt${travellerError.lastName ? ' is-error' : ''}`}>
                                      <span>Last Name <span className="required">*</span></span>
                                      <input
                                        type="text"
                                        value={traveller.lastName}
                                        onChange={(event) => updateTraveller(index, 'lastName', event.target.value)}
                                        placeholder="Last name"
                                        disabled={traveller.sameAsPrimary}
                                      />
                                      {renderFieldError(travellerError.lastName)}
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-clt">
                                      <span>Email</span>
                                      <input
                                        type="email"
                                        value={traveller.email}
                                        onChange={(event) => updateTraveller(index, 'email', event.target.value)}
                                        placeholder="Email address"
                                        disabled={traveller.sameAsPrimary}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div className="form-clt">
                                      <span>Dial Code</span>
                                      <select
                                        data-react-select="true"
                                        value={traveller.dialCode}
                                        onChange={(event) => updateTraveller(index, 'dialCode', event.target.value)}
                                        disabled={traveller.sameAsPrimary}
                                      >
                                        <option value="">Select</option>
                                        {dialCodes.map((code, optionIndex) => (
                                          <option
                                            key={`traveller-dial-${index}-${code.dialCode}-${optionIndex}`}
                                            value={code.dialCode}
                                          >
                                            {code.dialCode} {code.name ? `(${code.name})` : ''}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div className="form-clt">
                                      <span>Phone</span>
                                      <input
                                        type="text"
                                        value={traveller.phone}
                                        onChange={(event) => updateTraveller(index, 'phone', event.target.value)}
                                        placeholder="Phone number"
                                        disabled={traveller.sameAsPrimary}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className={`form-clt${travellerError.dob ? ' is-error' : ''}`}>
                                      <span>Date of Birth <span className="required">*</span></span>
                                      <input
                                        type="text"
                                        className="js-date-picker"
                                        inputMode="numeric"
                                        autoComplete="off"
                                        placeholder="DD/MM/YYYY"
                                        data-year-range="c-120:c"
                                        data-field="dob"
                                        data-index={index}
                                        value={formatDateInputValue(traveller.dob)}
                                        onChange={(event) => updateTraveller(index, 'dob', event.target.value)}
                                      />
                                      {renderFieldError(travellerError.dob)}
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className={`form-clt${travellerError.nationality ? ' is-error' : ''}`}>
                                      <span>Nationality <span className="required">*</span></span>
                                      <select
                                        id={`traveller-${index}-nationality`}
                                        data-react-select="true"
                                        value={traveller.nationality}
                                        onChange={(event) => updateTraveller(index, 'nationality', event.target.value)}
                                      >
                                        <option value="">Select</option>
                                        {nationalities.map((nationality, optionIndex) => {
                                          const value = nationality.code
                                            ? `${nationality.name} / ${nationality.code}`
                                            : nationality.name
                                          return (
                                            <option
                                              key={`nat-${nationality.id ?? nationality.name}-${optionIndex}`}
                                              value={value}
                                            >
                                              {value}
                                            </option>
                                          )
                                        })}
                                      </select>
                                      {renderFieldError(travellerError.nationality)}
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className={`form-clt${travellerError.passport ? ' is-error' : ''}`}>
                                      <span>Passport Number <span className="required">*</span></span>
                                      <input
                                        type="text"
                                        value={traveller.passport}
                                        onChange={(event) => updateTraveller(index, 'passport', event.target.value)}
                                        placeholder="Passport number"
                                      />
                                      {renderFieldError(travellerError.passport)}
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className={`form-clt${travellerError.passportExpiry ? ' is-error' : ''}`}>
                                      <span>Passport Expiry</span>
                                      <input
                                        type="text"
                                        className="js-date-picker"
                                        inputMode="numeric"
                                        autoComplete="off"
                                        placeholder="DD/MM/YYYY"
                                        data-year-range="c:c+20"
                                        data-field="passportExpiry"
                                        data-index={index}
                                        value={formatDateInputValue(traveller.passportExpiry)}
                                        onChange={(event) => updateTraveller(index, 'passportExpiry', event.target.value)}
                                      />
                                      {renderFieldError(travellerError.passportExpiry)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="booking-step-content">
                        <h3>Review Your Booking</h3>
                        <div className="booking-review-block">
                          <h4>Primary Contact</h4>
                          <div className="booking-review-grid">
                            {renderReviewRow(
                              'Name',
                              formatPersonName(
                                reviewDetails?.purchaser && typeof reviewDetails.purchaser.title === 'string'
                                  ? reviewDetails.purchaser.title
                                  : primaryContact.title,
                                reviewDetails?.purchaser && typeof reviewDetails.purchaser.firstName === 'string'
                                  ? reviewDetails.purchaser.firstName
                                  : primaryContact.firstName,
                                reviewDetails?.purchaser && typeof reviewDetails.purchaser.lastName === 'string'
                                  ? reviewDetails.purchaser.lastName
                                  : primaryContact.lastName
                              )
                            )}
                            {renderReviewRow(
                              'Email',
                              reviewDetails?.purchaser && typeof reviewDetails.purchaser.email === 'string'
                                ? reviewDetails.purchaser.email
                                : primaryContact.email
                            )}
                            {renderReviewRow(
                              'Contact Number',
                              reviewDetails?.purchaser && typeof reviewDetails.purchaser.mobile === 'string'
                                ? reviewDetails.purchaser.mobile
                                : `${primaryContact.countryCode}${primaryContact.phone}`.trim()
                            )}
                            {renderReviewRow(
                              'Address',
                              reviewDetails?.purchaser
                                ? `${typeof reviewDetails.purchaser.address === 'string' ? reviewDetails.purchaser.address : ''} ${typeof reviewDetails.purchaser.postCode === 'string' ? reviewDetails.purchaser.postCode : ''}`.trim()
                                : `${primaryContact.address} ${primaryContact.postCode}`.trim()
                            )}
                          </div>
                        </div>

                        {reviewHasPaxs ? (
                          <div className="booking-review-block">
                            {reviewDetails?.rooms?.map((room, roomIndex) => {
                              const roomRecord = isRecord(room) ? room : null
                              const roomSequence = roomRecord && typeof roomRecord.sequence === 'number' ? roomRecord.sequence : roomIndex + 1
                              const paxs = roomRecord && Array.isArray(roomRecord.paxs) ? roomRecord.paxs : []
                              return (
                                <div key={`review-room-${roomSequence}`} className="booking-review-room">
                                  <h4>Room {roomSequence}</h4>
                                  <div className="booking-review-travellers">
                                    {paxs.map((pax, paxIndex) => {
                                      const paxRecord = isRecord(pax) ? pax : null
                                      const paxType = paxRecord && typeof paxRecord.type === 'string' ? paxRecord.type : 'ADT'
                                      const paxName = paxRecord
                                        ? formatPersonName(
                                          typeof paxRecord.title === 'string' ? paxRecord.title : '',
                                          typeof paxRecord.firstName === 'string' ? paxRecord.firstName : '',
                                          typeof paxRecord.lastName === 'string' ? paxRecord.lastName : ''
                                        )
                                        : ''
                                      return (
                                        <div key={`review-room-${roomSequence}-pax-${paxIndex}`} className="booking-review-card">
                                          <h5>
                                            Traveller {paxIndex + 1} ({getTravellerTypeLabel(paxType)})
                                          </h5>
                                          <div className="booking-review-grid">
                                            {renderReviewRow('Name', paxName)}
                                            {renderReviewRow('Email', paxRecord && typeof paxRecord.email === 'string' ? paxRecord.email : '')}
                                            {renderReviewRow('Contact Number', paxRecord && typeof paxRecord.mobile === 'string' ? paxRecord.mobile : '')}
                                            {renderReviewRow('Date of Birth', paxRecord && typeof paxRecord.birthday === 'string' ? formatDate(paxRecord.birthday) : '')}
                                            {renderReviewRow('Nationality', paxRecord && typeof paxRecord.nationality === 'string' ? paxRecord.nationality : '')}
                                            {renderReviewRow('Passport', paxRecord && typeof paxRecord.passport === 'string' ? paxRecord.passport : '')}
                                            {renderReviewRow(
                                              'Passport Expiry',
                                              paxRecord && typeof paxRecord.expiryDate === 'string' ? formatDate(paxRecord.expiryDate) : ''
                                            )}
                                          </div>
                                        </div>
                                      )
                                    })}
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        ) : (
                          <div className="booking-review-block">
                            <h4>Travellers</h4>
                            {bookingId && !reviewDetails ? (
                              <p className="text">Booking details are loading. If this persists, use Refresh Booking Details on the payment step.</p>
                            ) : null}
                            <div className="booking-review-travellers">
                              {travellers.map((traveller, index) => (
                                <div key={`review-traveller-${index}`} className="booking-review-card">
                                  <h5>
                                    Traveller {index + 1} ({getTravellerTypeLabel(travellerTypes[index] ?? 'ADT')})
                                  </h5>
                                  <div className="booking-review-grid">
                                    {renderReviewRow('Name', formatPersonName(traveller.title, traveller.firstName, traveller.lastName))}
                                    {renderReviewRow('Email', traveller.email)}
                                    {renderReviewRow('Contact Number', `${traveller.dialCode}${traveller.phone}`.trim())}
                                    {renderReviewRow('Date of Birth', traveller.dob ? formatDate(traveller.dob) : '')}
                                    {renderReviewRow('Nationality', traveller.nationality)}
                                    {renderReviewRow('Passport', traveller.passport)}
                                    {renderReviewRow('Passport Expiry', traveller.passportExpiry ? formatDate(traveller.passportExpiry) : '')}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {showDiscountForm ? (
                          <div className="booking-review-block booking-discount">
                            <h4>Promo Code</h4>
                            <div className="booking-discount-form">
                              <input
                                type="text"
                                value={discountCode}
                                onChange={(event) => setDiscountCode(event.target.value)}
                                placeholder="Enter promo code"
                              />
                              <button type="button" className="theme-btn outline" onClick={handleApplyDiscount} disabled={isApplyingDiscount}>
                                {isApplyingDiscount ? 'Applying...' : 'Apply'}
                              </button>
                            </div>
                            {discountMessage ? <div className="booking-discount-message">{discountMessage}</div> : null}
                            {appliedDiscounts.length ? (
                              <div className="booking-discount-list">
                                {appliedDiscounts.map((code) => (
                                  <button
                                    key={`discount-${code}`}
                                    type="button"
                                    className="booking-discount-chip"
                                    onClick={() => handleRemoveDiscount(code)}
                                  >
                                    {code} <span>&times;</span>
                                  </button>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        ) : null}
                        <div className="booking-review-notice">
                          <h4>Important Notice</h4>
                          <p className="text">
                            Please review all details carefully before proceeding to payment. Any changes after payment may incur additional charges.
                          </p>
                        </div>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="booking-step-content booking-payment">
                        <h3>Payment</h3>
                        {shouldShowPaymentStatus ? (
                          <div className={`booking-payment-status booking-payment-status-${paymentStatusTone}`}>
                            {paymentStatusLoading ? <span className="booking-payment-status-spinner" /> : null}
                            <p className="text">{paymentStatusMessage || 'Checking payment status...'}</p>
                          </div>
                        ) : null}
                        {paymentMessage ? (
                          <div className="booking-payment-note">
                            <p className="text">{paymentMessage}</p>
                          </div>
                        ) : null}
                        {bookingDetailData && isRecord(bookingDetailData) && typeof bookingDetailData.ref === 'string' ? (
                          <div className="booking-payment-ref">
                            Booking Ref: <strong>{bookingDetailData.ref}</strong>
                          </div>
                        ) : bookingRef ? (
                          <div className="booking-payment-ref">
                            Booking Ref: <strong>{bookingRef}</strong>
                          </div>
                        ) : null}

                        <div className="booking-payment-summary">
                          <div className="booking-payment-tour">
                            {tourSummary.cover ? <img src={tourSummary.cover} alt={tourSummary.title} /> : null}
                            <div>
                              <p className="booking-payment-duration">{tourSummary.duration || '-'}</p>
                              <h4>{tourSummary.title || 'Tour details'}</h4>
                              {tripCode ? <p className="booking-payment-code">{tripCode}</p> : null}
                            </div>
                          </div>
                          <div className="booking-payment-departure">
                            <div className="booking-payment-departure-grid">
                              <div>
                                <span>Departure Date</span>
                                <p>{formatDate(selectedDeparture?.flightStartDate || selectedDeparture?.startDate || '') || 'To be confirmed'}</p>
                              </div>
                              <div className="booking-payment-plane">
                                <i className="fa-solid fa-plane"></i>
                              </div>
                              <div>
                                <span>Return Date</span>
                                <p>{formatDate(selectedDeparture?.flightEndDate || selectedDeparture?.endDate || '') || 'To be confirmed'}</p>
                              </div>
                            </div>
                          </div>
                          {flightRows.length ? (
                            <div className="booking-payment-flights">
                              <div className="booking-payment-title">Flight Details</div>
                              <div className="booking-summary-flights">
                                <div className="flight-row flight-head">
                                  <span>Date</span>
                                  <span>Sector</span>
                                  <span>Flight</span>
                                  <span>ETD</span>
                                  <span>ETA</span>
                                </div>
                                {flightRows.map((flight, index) => (
                                  <div key={`payment-flight-${index}`} className="flight-row">
                                    <span>{formatDate(flight.departureDate || '')}</span>
                                    <span>{flight.sector || '-'}</span>
                                    <span>{flight.flightNo || '-'}</span>
                                    <span>{flight.etd || '-'}</span>
                                    <span>
                                      {flight.eta || '-'}
                                      {typeof flight.zone === 'number' && flight.zone !== 0 ? (
                                        <span className="flight-zone">{flight.zone > 0 ? `+${flight.zone}` : flight.zone}</span>
                                      ) : null}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : null}
                        </div>

                        <div className="booking-payment-section">
                          <button
                            type="button"
                            className="booking-payment-toggle"
                            onClick={() => setIsPaymentContactOpen((prev) => !prev)}
                          >
                            <span>Primary Contact</span>
                            <span className="booking-toggle-icon">{isPaymentContactOpen ? '-' : '+'}</span>
                          </button>
                          {isPaymentContactOpen ? (
                            <div className="booking-payment-panel">
                              {renderReviewRow(
                                'Name',
                                formatPersonName(
                                  reviewDetails?.purchaser && typeof reviewDetails.purchaser.title === 'string'
                                    ? reviewDetails.purchaser.title
                                    : primaryContact.title,
                                  reviewDetails?.purchaser && typeof reviewDetails.purchaser.firstName === 'string'
                                    ? reviewDetails.purchaser.firstName
                                    : primaryContact.firstName,
                                  reviewDetails?.purchaser && typeof reviewDetails.purchaser.lastName === 'string'
                                    ? reviewDetails.purchaser.lastName
                                    : primaryContact.lastName
                                )
                              )}
                              {renderReviewRow(
                                'Email',
                                reviewDetails?.purchaser && typeof reviewDetails.purchaser.email === 'string'
                                  ? reviewDetails.purchaser.email
                                  : primaryContact.email
                              )}
                              {renderReviewRow(
                                'Contact Number',
                                reviewDetails?.purchaser && typeof reviewDetails.purchaser.mobile === 'string'
                                  ? reviewDetails.purchaser.mobile
                                  : `${primaryContact.countryCode}${primaryContact.phone}`.trim()
                              )}
                              {renderReviewRow(
                                'Address',
                                reviewDetails?.purchaser
                                  ? `${typeof reviewDetails.purchaser.address === 'string' ? reviewDetails.purchaser.address : ''} ${typeof reviewDetails.purchaser.postCode === 'string' ? reviewDetails.purchaser.postCode : ''}`.trim()
                                  : `${primaryContact.address} ${primaryContact.postCode}`.trim()
                              )}
                            </div>
                          ) : null}
                        </div>

                        <div className="booking-payment-section">
                          <button
                            type="button"
                            className="booking-payment-toggle"
                            onClick={() => setIsPaymentTravellerOpen((prev) => !prev)}
                          >
                            <span>Travellers</span>
                            <span className="booking-toggle-icon">{isPaymentTravellerOpen ? '-' : '+'}</span>
                          </button>
                          {isPaymentTravellerOpen ? (
                            <div className="booking-payment-panel">
                              {reviewHasPaxs ? (
                                reviewDetails?.rooms.map((room, roomIndex) => {
                                  const roomRecord = isRecord(room) ? room : null
                                  const roomSequence = roomRecord && typeof roomRecord.sequence === 'number' ? roomRecord.sequence : roomIndex + 1
                                  const paxs = roomRecord && Array.isArray(roomRecord.paxs) ? roomRecord.paxs : []
                                  return (
                                    <div key={`payment-room-${roomSequence}`} className="booking-payment-room">
                                      <h5>Room {roomSequence}</h5>
                                      <div className="booking-review-travellers">
                                        {paxs.map((pax, paxIndex) => {
                                          const paxRecord = isRecord(pax) ? pax : null
                                          const paxType = paxRecord && typeof paxRecord.type === 'string' ? paxRecord.type : 'ADT'
                                          const paxName = paxRecord
                                            ? formatPersonName(
                                              typeof paxRecord.title === 'string' ? paxRecord.title : '',
                                              typeof paxRecord.firstName === 'string' ? paxRecord.firstName : '',
                                              typeof paxRecord.lastName === 'string' ? paxRecord.lastName : ''
                                            )
                                            : ''
                                          return (
                                            <div key={`payment-room-${roomSequence}-pax-${paxIndex}`} className="booking-review-card">
                                              <h5>
                                                Traveller {paxIndex + 1} ({getTravellerTypeLabel(paxType)})
                                              </h5>
                                              <div className="booking-review-grid">
                                                {renderReviewRow('Name', paxName)}
                                                {renderReviewRow('Email', paxRecord && typeof paxRecord.email === 'string' ? paxRecord.email : '')}
                                                {renderReviewRow('Contact Number', paxRecord && typeof paxRecord.mobile === 'string' ? paxRecord.mobile : '')}
                                                {renderReviewRow('Date of Birth', paxRecord && typeof paxRecord.birthday === 'string' ? formatDate(paxRecord.birthday) : '')}
                                                {renderReviewRow('Nationality', paxRecord && typeof paxRecord.nationality === 'string' ? paxRecord.nationality : '')}
                                                {renderReviewRow('Passport', paxRecord && typeof paxRecord.passport === 'string' ? paxRecord.passport : '')}
                                                {renderReviewRow(
                                                  'Passport Expiry',
                                                  paxRecord && typeof paxRecord.expiryDate === 'string' ? formatDate(paxRecord.expiryDate) : ''
                                                )}
                                              </div>
                                            </div>
                                          )
                                        })}
                                      </div>
                                    </div>
                                  )
                                })
                              ) : (
                                <div className="booking-review-travellers">
                                  {travellers.map((traveller, index) => (
                                    <div key={`payment-traveller-${index}`} className="booking-review-card">
                                      <h5>
                                        Traveller {index + 1} ({getTravellerTypeLabel(travellerTypes[index] ?? 'ADT')})
                                      </h5>
                                      <div className="booking-review-grid">
                                        {renderReviewRow('Name', formatPersonName(traveller.title, traveller.firstName, traveller.lastName))}
                                        {renderReviewRow('Email', traveller.email)}
                                        {renderReviewRow('Contact Number', `${traveller.dialCode}${traveller.phone}`.trim())}
                                        {renderReviewRow('Date of Birth', traveller.dob ? formatDate(traveller.dob) : '')}
                                        {renderReviewRow('Nationality', traveller.nationality)}
                                        {renderReviewRow('Passport', traveller.passport)}
                                        {renderReviewRow('Passport Expiry', traveller.passportExpiry ? formatDate(traveller.passportExpiry) : '')}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : null}
                        </div>

                        <div className="booking-payment-section">
                          <button
                            type="button"
                            className="booking-payment-toggle"
                            onClick={() => setIsPaymentPriceOpen((prev) => !prev)}
                          >
                            <span>Price Summary</span>
                            <span className="booking-toggle-icon">{isPaymentPriceOpen ? '-' : '+'}</span>
                          </button>
                          {isPaymentPriceOpen ? (
                            <div className="booking-payment-panel">
                              {priceRows.length ? (
                                <div className="booking-payment-price-block">
                                  <div className="booking-summary-title">Tour Fare</div>
                                  <div className="booking-summary-table">
                                    <div className="booking-summary-price-row booking-summary-head">
                                      <span>Type</span>
                                      <span>Unit</span>
                                      <span>Qty</span>
                                      <span>Amount</span>
                                    </div>
                                    {priceRows.map((row) => (
                                      <div key={`payment-fare-${row.label}`} className="booking-summary-price-row">
                                        <span>{row.label}</span>
                                        <span>{formatPrice(row.unitPrice)}</span>
                                        <span>{row.qty}</span>
                                        <span>{formatPrice(row.amount)}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : null}

                              {taxRows.length ? (
                                <div className="booking-payment-price-block">
                                  <div className="booking-summary-title">Taxes</div>
                                  <div className="booking-summary-table">
                                    <div className="booking-summary-price-row booking-summary-head">
                                      <span>Type</span>
                                      <span>Unit</span>
                                      <span>Qty</span>
                                      <span>Amount</span>
                                    </div>
                                    {taxRows.map((row) => (
                                      <div key={`payment-tax-${row.label}`} className="booking-summary-price-row">
                                        <span>{row.label}</span>
                                        <span>{formatPrice(row.unitPrice)}</span>
                                        <span>{row.qty}</span>
                                        <span>{formatPrice(row.amount)}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : null}

                              {discountRows.length ? (
                                <div className="booking-payment-price-block">
                                  <div className="booking-summary-title">Discount</div>
                                  <div className="booking-summary-table">
                                    {discountRows.map((row, index) => (
                                      <div key={`payment-discount-${index}`} className="booking-summary-price-row">
                                        <span>{row.label}</span>
                                        <span></span>
                                        <span></span>
                                        <span>{formatSignedPrice(row.amount)}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : null}

                              <div className="booking-payment-total">
                                <div className="booking-summary-total-row">
                                  <span>Total Amount</span>
                                  <span>{formatPrice(paymentSummary.totalAmountValue || totalAmount || 0)}</span>
                                </div>
                                {paymentSummary.depositValue > 0 ? (
                                  <div className="booking-summary-total-row">
                                    <span>Deposit</span>
                                    <span>{formatPrice(paymentSummary.depositValue)}</span>
                                  </div>
                                ) : null}
                                {paymentSummary.totalPaidValue > 0 ? (
                                  <div className="booking-summary-total-row">
                                    <span>Total Paid</span>
                                    <span>{formatPrice(paymentSummary.totalPaidValue)}</span>
                                  </div>
                                ) : null}
                                {paymentSummary.balanceValue > 0 ? (
                                  <div className="booking-summary-total-row">
                                    <span>Balance</span>
                                    <span>{formatPrice(paymentSummary.balanceValue)}</span>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          ) : null}
                        </div>
                        <div className="booking-payment-secure">
                          <h4>Secure Payment</h4>
                          <p className="text">
                            Your payment information is encrypted and securely processed. We do not store complete card details on our servers.
                          </p>
                        </div>

                        <label className="booking-payment-check">
                          <input
                            type="checkbox"
                            checked={paymentTermsAccepted}
                            onChange={(event) => setPaymentTermsAccepted(event.target.checked)}
                          />
                          I have read and understood the booking&apos; <a href="/tour-terms" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a>.
                        </label>

                        {(!paymentStatus || paymentStatus === 'failed' || paymentStatus === 'error') ? (
                          <div className="booking-payment-actions">
                            <AirwallexButton
                              tourParam={encodedTourParam}
                              bookingData={airwallexBookingData}
                              disabled={!paymentTermsAccepted}
                            />
                          </div>
                        ) : null}
                      </div>
                    )}

                    {currentStep === 5 && (
                      <div className="booking-step-content booking-confirmation">
                        <div className="booking-confirmation-banner">
                          <h3>Booking Successful</h3>
                          <p className="text">
                            A booking summary email will be sent to your registered email address once the payment is processed.
                            Please check your spam folder if you don&apos;t receive it within 15 minutes.
                          </p>
                        </div>

                        {bookingRef ?? bookingReference ? (
                          <div className="booking-review-block">
                            <h4>Reference</h4>
                            <p>{bookingRef ?? bookingReference}</p>
                          </div>
                        ) : null}

                        <div className="booking-confirmation-summary">
                          <div className="booking-summary-header">
                            {tourSummary.cover ? <img src={tourSummary.cover} alt={tourSummary.title} /> : null}
                            <div>
                              <span className="booking-summary-code">{tripCode}</span>
                              <h4>{tourSummary.title}</h4>
                              <p>{tourSummary.duration}</p>
                              <div className="booking-summary-meta">
                                <span>Travellers: {totalTravellers}</span>
                                <span className="booking-pill">{priceType === 'land' ? 'Land Tour' : 'Full Tour'}</span>
                              </div>
                            </div>
                          </div>

                          <div className="booking-summary-section">
                            <div className="booking-summary-grid">
                              <div>
                                <span className="booking-summary-label">Departure Date</span>
                                <p>{formatDate(selectedDeparture?.flightStartDate || selectedDeparture?.startDate || '') || 'To be confirmed'}</p>
                              </div>
                              <div className="booking-summary-plane">
                                <i className="fa-solid fa-plane"></i>
                              </div>
                              <div className="booking-summary-right">
                                <span className="booking-summary-label">Return Date</span>
                                <p>{formatDate(selectedDeparture?.flightEndDate || selectedDeparture?.endDate || '') || 'To be confirmed'}</p>
                              </div>
                            </div>
                          </div>

                          {flightRows.length ? (
                            <div className="booking-summary-section">
                              <div className="booking-summary-title">Flight Details</div>
                              <div className="booking-summary-flights">
                                <div className="flight-row flight-head">
                                  <span>Date</span>
                                  <span>Sector</span>
                                  <span>Flight</span>
                                  <span>ETD</span>
                                  <span>ETA</span>
                                </div>
                                {flightRows.map((flight, index) => (
                                  <div key={`confirmation-flight-${index}`} className="flight-row">
                                    <span>{formatDate(flight.departureDate || '')}</span>
                                    <span>{flight.sector || '-'}</span>
                                    <span>{flight.flightNo || '-'}</span>
                                    <span>{flight.etd || '-'}</span>
                                    <span>
                                      {flight.eta || '-'}
                                      {typeof flight.zone === 'number' && flight.zone !== 0 ? (
                                        <span className="flight-zone">{flight.zone > 0 ? `+${flight.zone}` : flight.zone}</span>
                                      ) : null}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : null}
                        </div>

                        <div className="booking-payment-section">
                          <button
                            type="button"
                            className="booking-payment-toggle"
                            onClick={() => setIsConfirmContactOpen((prev) => !prev)}
                          >
                            <span>Primary Contact</span>
                            <span className="booking-toggle-icon">{isConfirmContactOpen ? '-' : '+'}</span>
                          </button>
                          {isConfirmContactOpen ? (
                            <div className="booking-payment-panel">
                              {renderReviewRow(
                                'Name',
                                formatPersonName(
                                  reviewDetails?.purchaser && typeof reviewDetails.purchaser.title === 'string'
                                    ? reviewDetails.purchaser.title
                                    : primaryContact.title,
                                  reviewDetails?.purchaser && typeof reviewDetails.purchaser.firstName === 'string'
                                    ? reviewDetails.purchaser.firstName
                                    : primaryContact.firstName,
                                  reviewDetails?.purchaser && typeof reviewDetails.purchaser.lastName === 'string'
                                    ? reviewDetails.purchaser.lastName
                                    : primaryContact.lastName
                                )
                              )}
                              {renderReviewRow(
                                'Email',
                                reviewDetails?.purchaser && typeof reviewDetails.purchaser.email === 'string'
                                  ? reviewDetails.purchaser.email
                                  : primaryContact.email
                              )}
                              {renderReviewRow(
                                'Contact Number',
                                reviewDetails?.purchaser && typeof reviewDetails.purchaser.mobile === 'string'
                                  ? reviewDetails.purchaser.mobile
                                  : `${primaryContact.countryCode}${primaryContact.phone}`.trim()
                              )}
                              {renderReviewRow(
                                'Address',
                                reviewDetails?.purchaser
                                  ? `${typeof reviewDetails.purchaser.address === 'string' ? reviewDetails.purchaser.address : ''} ${typeof reviewDetails.purchaser.postCode === 'string' ? reviewDetails.purchaser.postCode : ''}`.trim()
                                  : `${primaryContact.address} ${primaryContact.postCode}`.trim()
                              )}
                            </div>
                          ) : null}
                        </div>

                        <div className="booking-payment-section">
                          <button
                            type="button"
                            className="booking-payment-toggle"
                            onClick={() => setIsConfirmTravellerOpen((prev) => !prev)}
                          >
                            <span>Travellers</span>
                            <span className="booking-toggle-icon">{isConfirmTravellerOpen ? '-' : '+'}</span>
                          </button>
                          {isConfirmTravellerOpen ? (
                            <div className="booking-payment-panel">
                              {reviewHasPaxs ? (
                                reviewDetails?.rooms.map((room, roomIndex) => {
                                  const roomRecord = isRecord(room) ? room : null
                                  const roomSequence = roomRecord && typeof roomRecord.sequence === 'number' ? roomRecord.sequence : roomIndex + 1
                                  const paxs = roomRecord && Array.isArray(roomRecord.paxs) ? roomRecord.paxs : []
                                  return (
                                    <div key={`confirmation-room-${roomSequence}`} className="booking-payment-room">
                                      <h5>Room {roomSequence}</h5>
                                      <div className="booking-review-travellers">
                                        {paxs.map((pax, paxIndex) => {
                                          const paxRecord = isRecord(pax) ? pax : null
                                          const paxType = paxRecord && typeof paxRecord.type === 'string' ? paxRecord.type : 'ADT'
                                          const paxName = paxRecord
                                            ? formatPersonName(
                                              typeof paxRecord.title === 'string' ? paxRecord.title : '',
                                              typeof paxRecord.firstName === 'string' ? paxRecord.firstName : '',
                                              typeof paxRecord.lastName === 'string' ? paxRecord.lastName : ''
                                            )
                                            : ''
                                          return (
                                            <div key={`confirmation-room-${roomSequence}-pax-${paxIndex}`} className="booking-review-card">
                                              <h5>
                                                Traveller {paxIndex + 1} ({getTravellerTypeLabel(paxType)})
                                              </h5>
                                              <div className="booking-review-grid">
                                                {renderReviewRow('Name', paxName)}
                                                {renderReviewRow('Email', paxRecord && typeof paxRecord.email === 'string' ? paxRecord.email : '')}
                                                {renderReviewRow('Contact Number', paxRecord && typeof paxRecord.mobile === 'string' ? paxRecord.mobile : '')}
                                                {renderReviewRow('Date of Birth', paxRecord && typeof paxRecord.birthday === 'string' ? formatDate(paxRecord.birthday) : '')}
                                                {renderReviewRow('Nationality', paxRecord && typeof paxRecord.nationality === 'string' ? paxRecord.nationality : '')}
                                                {renderReviewRow('Passport', paxRecord && typeof paxRecord.passport === 'string' ? paxRecord.passport : '')}
                                                {renderReviewRow(
                                                  'Passport Expiry',
                                                  paxRecord && typeof paxRecord.expiryDate === 'string' ? formatDate(paxRecord.expiryDate) : ''
                                                )}
                                              </div>
                                            </div>
                                          )
                                        })}
                                      </div>
                                    </div>
                                  )
                                })
                              ) : (
                                <div className="booking-review-travellers">
                                  {travellers.map((traveller, index) => (
                                    <div key={`confirmation-traveller-${index}`} className="booking-review-card">
                                      <h5>
                                        Traveller {index + 1} ({getTravellerTypeLabel(travellerTypes[index] ?? 'ADT')})
                                      </h5>
                                      <div className="booking-review-grid">
                                        {renderReviewRow('Name', formatPersonName(traveller.title, traveller.firstName, traveller.lastName))}
                                        {renderReviewRow('Email', traveller.email)}
                                        {renderReviewRow('Contact Number', `${traveller.dialCode}${traveller.phone}`.trim())}
                                        {renderReviewRow('Date of Birth', traveller.dob ? formatDate(traveller.dob) : '')}
                                        {renderReviewRow('Nationality', traveller.nationality)}
                                        {renderReviewRow('Passport', traveller.passport)}
                                        {renderReviewRow('Passport Expiry', traveller.passportExpiry ? formatDate(traveller.passportExpiry) : '')}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : null}
                        </div>

                        <div className="booking-payment-section">
                          <button
                            type="button"
                            className="booking-payment-toggle"
                            onClick={() => setIsConfirmPriceOpen((prev) => !prev)}
                          >
                            <span>Price Summary</span>
                            <span className="booking-toggle-icon">{isConfirmPriceOpen ? '-' : '+'}</span>
                          </button>
                          {isConfirmPriceOpen ? (
                            <div className="booking-payment-panel">
                              {priceRows.length ? (
                                <div className="booking-payment-price-block">
                                  <div className="booking-summary-title">Tour Fare</div>
                                  <div className="booking-summary-table">
                                    <div className="booking-summary-price-row booking-summary-head">
                                      <span>Type</span>
                                      <span>Unit</span>
                                      <span>Qty</span>
                                      <span>Amount</span>
                                    </div>
                                    {priceRows.map((row) => (
                                      <div key={`confirmation-fare-${row.label}`} className="booking-summary-price-row">
                                        <span>{row.label}</span>
                                        <span>{formatPrice(row.unitPrice)}</span>
                                        <span>{row.qty}</span>
                                        <span>{formatPrice(row.amount)}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : null}

                              {taxRows.length ? (
                                <div className="booking-payment-price-block">
                                  <div className="booking-summary-title">Taxes</div>
                                  <div className="booking-summary-table">
                                    <div className="booking-summary-price-row booking-summary-head">
                                      <span>Type</span>
                                      <span>Unit</span>
                                      <span>Qty</span>
                                      <span>Amount</span>
                                    </div>
                                    {taxRows.map((row) => (
                                      <div key={`confirmation-tax-${row.label}`} className="booking-summary-price-row">
                                        <span>{row.label}</span>
                                        <span>{formatPrice(row.unitPrice)}</span>
                                        <span>{row.qty}</span>
                                        <span>{formatPrice(row.amount)}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : null}

                              {discountRows.length ? (
                                <div className="booking-payment-price-block">
                                  <div className="booking-summary-title">Discount</div>
                                  <div className="booking-summary-table">
                                    {discountRows.map((row, index) => (
                                      <div key={`confirmation-discount-${index}`} className="booking-summary-price-row">
                                        <span>{row.label}</span>
                                        <span></span>
                                        <span></span>
                                        <span>{formatSignedPrice(row.amount)}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : null}

                              <div className="booking-payment-total">
                                <div className="booking-summary-total-row">
                                  <span>Total Amount</span>
                                  <span>{formatPrice(paymentSummary.totalAmountValue || totalAmount || 0)}</span>
                                </div>
                                {paymentSummary.totalPaidValue > 0 ? (
                                  <div className="booking-summary-total-row">
                                    <span>Total Paid</span>
                                    <span>{formatPrice(paymentSummary.totalPaidValue)}</span>
                                  </div>
                                ) : paymentSummary.depositValue > 0 ? (
                                  <div className="booking-summary-total-row">
                                    <span>Deposit</span>
                                    <span>{formatPrice(paymentSummary.depositValue)}</span>
                                  </div>
                                ) : null}
                                {paymentSummary.balanceValue > 0 ? (
                                  <div className="booking-summary-total-row">
                                    <span>Balance</span>
                                    <span>{formatPrice(paymentSummary.balanceValue)}</span>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    )}

                    <div className="booking-navigation">
                      {currentStep > 1 && currentStep < 5 ? (
                        <button type="button" className="theme-btn outline" onClick={handlePreviousStep}>
                          Back
                        </button>
                      ) : null}
                      {bookingId && currentStep < 5 ? (
                        <button type="button" className="theme-btn outline" onClick={openCancelConfirm}>
                          Cancel Booking
                        </button>
                      ) : null}

                      {currentStep < 5 && currentStep !== 4 ? (
                        <button type="button" className="theme-btn" onClick={handleNextStep} disabled={isSubmitting}>
                          Continue
                        </button>
                      ) : currentStep >= 5 ? (
                        <a href="/tour-list" className="theme-btn">
                          Back to Tours
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>

                {currentStep < 4 ? (
                  <div className="col-lg-4">
                    <div className="booking-summary">
                    <div className="booking-summary-header">
                      {tourSummary.cover ? <img src={tourSummary.cover} alt={tourSummary.title} /> : null}
                      <div>
                        <span className="booking-summary-code">{tripCode}</span>
                        <h4>{tourSummary.title}</h4>
                        <p>{tourSummary.duration}</p>
                        <div className="booking-summary-meta">
                          <span>Travellers: {totalTravellers}</span>
                          <span className="booking-pill">{priceType === 'land' ? 'Land Tour' : 'Full Tour'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="booking-summary-section">
                      <div className="booking-summary-grid">
                        <div>
                          <span className="booking-summary-label">Departure Date</span>
                          <p>{formatDate(selectedDeparture?.flightStartDate || selectedDeparture?.startDate || '') || 'To be confirmed'}</p>
                        </div>
                        <div className="booking-summary-plane">
                          <i className="fa-solid fa-plane"></i>
                        </div>
                        <div className="booking-summary-right">
                          <span className="booking-summary-label">Return Date</span>
                          <p>{formatDate(selectedDeparture?.flightEndDate || selectedDeparture?.endDate || '') || 'To be confirmed'}</p>
                        </div>
                      </div>
                    </div>

                    {flightRows.length ? (
                      <div className="booking-summary-section">
                        <div className="booking-summary-title">Flight Details</div>
                        <div className="booking-summary-flights">
                          <div className="flight-row flight-head">
                            <span>Date</span>
                            <span>Sector</span>
                            <span>Flight</span>
                            <span>ETD</span>
                            <span>ETA</span>
                          </div>
                          {flightRows.map((flight, index) => (
                            <div key={`flight-${index}`} className="flight-row">
                              <span>{formatDate(flight.departureDate || '')}</span>
                              <span>{flight.sector || '-'}</span>
                              <span>{flight.flightNo || '-'}</span>
                              <span>{flight.etd || '-'}</span>
                              <span>
                                {flight.eta || '-'}
                                {typeof flight.zone === 'number' && flight.zone !== 0 ? (
                                  <span className="flight-zone">{flight.zone > 0 ? `+${flight.zone}` : flight.zone}</span>
                                ) : null}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {priceRows.length ? (
                      <div className="booking-summary-section">
                        <div className="booking-summary-title">Tour Fare</div>
                        <div className="booking-summary-table">
                          <div className="booking-summary-price-row booking-summary-head">
                            <span>Type</span>
                            <span>Unit</span>
                            <span>Qty</span>
                            <span>Amount</span>
                          </div>
                          {priceRows.map((row) => (
                            <div key={row.label} className="booking-summary-price-row">
                              <span>{row.label}</span>
                              <span>{formatPrice(row.unitPrice)}</span>
                              <span>{row.qty}</span>
                              <span>{formatPrice(row.amount)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {taxRows.length ? (
                      <div className="booking-summary-section">
                        <div className="booking-summary-title">Taxes</div>
                        <div className="booking-summary-table">
                          <div className="booking-summary-price-row booking-summary-head">
                            <span>Type</span>
                            <span>Unit</span>
                            <span>Qty</span>
                            <span>Amount</span>
                          </div>
                          {taxRows.map((row) => (
                            <div key={row.label} className="booking-summary-price-row">
                              <span>{row.label}</span>
                              <span>{formatPrice(row.unitPrice)}</span>
                              <span>{row.qty}</span>
                              <span>{formatPrice(row.amount)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {discountRows.length ? (
                      <div className="booking-summary-section">
                        <div className="booking-summary-title">Discount</div>
                        <div className="booking-summary-table">
                          {discountRows.map((row, index) => (
                            <div key={`discount-${index}`} className="booking-summary-price-row">
                              <span>{row.label}</span>
                              <span></span>
                              <span></span>
                              <span>{formatSignedPrice(row.amount)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {showDiscountForm ? (
                      <div className="booking-summary-section booking-discount-summary">
                        <div className="booking-summary-title">Discount Code</div>
                        <div className="booking-discount-form">
                          <input
                            type="text"
                            value={discountCode}
                            onChange={(event) => setDiscountCode(event.target.value)}
                            placeholder="Enter promo code"
                          />
                          <button type="button" className="theme-btn outline" onClick={handleApplyDiscount} disabled={isApplyingDiscount}>
                            {isApplyingDiscount ? 'Applying...' : 'Apply'}
                          </button>
                        </div>
                        {discountMessage ? <div className="booking-discount-message">{discountMessage}</div> : null}
                        {appliedDiscounts.length ? (
                          <div className="booking-discount-list">
                            {appliedDiscounts.map((code) => (
                              <button
                                key={`discount-summary-${code}`}
                                type="button"
                                className="booking-discount-chip"
                                onClick={() => handleRemoveDiscount(code)}
                              >
                                {code} <span>&times;</span>
                              </button>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ) : null}

                    {totalAmount ? (
                      <div className="booking-summary-section booking-summary-total">
                        <div className="booking-summary-total-row">
                          <span>Total Amount</span>
                          <span>{formatPrice(totalAmount)}</span>
                        </div>
                      </div>
                    ) : fromPrice ? (
                      <div className="booking-summary-section booking-summary-total">
                        <div className="booking-summary-total-row">
                          <span>From</span>
                          <span>{fromPrice}</span>
                        </div>
                      </div>
                    ) : null}

                    <div className="booking-summary-note">
                      <p className="text">Payment is reserved for a short period. Complete the steps to confirm your booking.</p>
                    </div>
                  </div>
                </div>
                ) : null}
              </div>
            </div>
          </section>

          {currentStep < 4 ? (
            <div className="booking-mobile-bar">
              <div>
                <span className="booking-mobile-label">Total</span>
                <span className="booking-mobile-value">
                  {totalAmount ? formatPrice(totalAmount) : fromPrice || '-'}
                </span>
              </div>
              <button type="button" className="theme-btn" onClick={handleNextStep} disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Continue'}
              </button>
            </div>
          ) : null}

          {showCancelConfirm ? (
            <div className="booking-modal-backdrop" onClick={closeCancelConfirm}>
              <div className="booking-modal" onClick={(event) => event.stopPropagation()}>
                <h3>Cancel Booking Process?</h3>
                <p className="text">
                  Are you sure you want to cancel your booking process? All your current selections and information will be lost.
                </p>
                <div className="booking-modal-actions">
                  <button type="button" className="theme-btn outline" onClick={closeCancelConfirm}>
                    Keep Booking
                  </button>
                  <button type="button" className="theme-btn" onClick={handleCancelBooking} disabled={isSubmitting}>
                    {isSubmitting ? 'Cancelling...' : 'Cancel Booking'}
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          <Footer />
        </div>
      </div>
    </>
  )
}










