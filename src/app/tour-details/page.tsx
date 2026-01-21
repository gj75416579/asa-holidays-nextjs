'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import Header from '@/templete/Header'
import Footer from '@/templete/Footer'
import ApiMaintenanceNotice from '@/templete/ApiMaintenanceNotice'

type TourDetail = {
  id: number | null
  title: string
  location: string
  duration: string
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
  startDate: string
  endDate: string
  price: string
  seatsLeft: string
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

const parseJsonResponse = async (res: Response) => {
  const text = await res.text()
  if (!res.ok) {
    throw new Error(text || `HTTP ${res.status}`)
  }
  return text ? JSON.parse(text) : {}
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
    duration: fallbackEnabled ? fallback.duration : '',
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
    duration: durationValue || (fallbackEnabled ? fallback.duration : ''),
    overviewHtml: getLocalizedText(record.shortDescription),
    highlightsHtml: getLocalizedText(record.highlights),
    itineraryHtml: getLocalizedText(record.writeUps),
    inclusionsHtml: getLocalizedText(record.inclusions),
    exclusionsHtml: getLocalizedText(record.exclusions),
    mapImage: typeof record.sectorMap === 'string' ? record.sectorMap.trim() : '',
    productType: typeof record.productType === 'number' ? record.productType : 1,
  }
}

const pickDeparturePrice = (record: Record<string, unknown>) => {
  const candidates = [record.twnFare, record.sglFare, record.grTwnFare, record.grSglFare, record.misc]
  for (const candidate of candidates) {
    const formatted = formatPrice(candidate)
    if (formatted) {
      return formatted
    }
  }
  return ''
}

const resolveDepartures = (data: unknown): DepartureItem[] => {
  if (!isRecord(data) || !isRecord(data.data) || !Array.isArray(data.data.pageData)) {
    return []
  }

  return data.data.pageData
    .map((item) => {
      if (!isRecord(item)) {
        return null
      }

      const startDate = typeof item.startDate === 'string' ? item.startDate.trim() : ''
      const endDate = typeof item.endDate === 'string' ? item.endDate.trim() : ''
      const seatsLeft =
        typeof item.capacity === 'number' && typeof item.sold === 'number'
          ? String(Math.max(item.capacity - item.sold, 0))
          : ''
      const price = pickDeparturePrice(item)

      return {
        id: typeof item.id === 'number' ? item.id : startDate || endDate || 'departure',
        startDate,
        endDate,
        price,
        seatsLeft,
      }
    })
    .filter((item): item is DepartureItem => Boolean(item))
}
export default function TourDetails() {
  const searchParams = useSearchParams()
  const idParam = searchParams.get('id')
  const uriParam = searchParams.get('uri')

  const [detailData, setDetailData] = useState<unknown | null>(null)
  const [departuresData, setDeparturesData] = useState<unknown | null>(null)
  const [detailError, setDetailError] = useState(false)
  const [departuresError, setDeparturesError] = useState(false)

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
  const isGroupTour = resolvedDetail.productType === 1
  const showApiNotice = detailError || departuresError

  useEffect(() => {
    let isActive = true

    if (!resolvedDetail.id || !isGroupTour) {
      setDeparturesData(null)
      return
    }

    const fetchDepartures = async () => {
      try {
        if (isActive) {
          setDeparturesError(false)
        }
        const res = await fetch('/api/tour/departures', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: resolvedDetail.id,
            pageSize: 0,
            currentPage: 0,
          }),
        })
        const data = await parseJsonResponse(res)
        if (isActive) {
          setDeparturesData(data)
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
                <div className="row g-2">
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
                </div>
                <div className="tour-details-content">
                  <div className="row g-4">
                    <div className="col-lg-8 col-12">
                      <div className="tour-left-content">
                        <h3>Tours Overview</h3>
{resolvedDetail.overviewHtml ? (
  <div className="tour-richtext mt-3 mb-5" dangerouslySetInnerHTML={{ __html: resolvedDetail.overviewHtml }} />
) : shouldFallback ? (
  <>
    <p className="mt-3 mb-3">
      Bali, often called &quot;The Island of Gods&quot;, is one of the world&apos;s most captivating travel destinations. Located in Indonesia, this tropical paradise is famous for its pristine beaches, lush rice terraces, vibrant nightlife, and deeply spiritual culture. Whether you&apos;re seeking adventure, relaxation, or cultural immersion, Bali offers an experience like no other.
    </p>
    <p className="mb-5">
      Visitors can unwind on stunning beaches like Kuta, Seminyak, and Nusa Dua, or escape to bud for peaceful retreat surrounded by rice fields, art galleries, and yoga centers. Adventure seekers can explore volcano hikes at Mount Batur, diving in crystal-clear waters, or surfing world-class waves. Bali is also rich in tradition, with thousands of temples, colorful ceremonies, and warm hospitality from locals.
    </p>
  </>
) : null}
                        <div className="row g-4 mb-5">
                          <div className="col-lg-6">
                            <div className="list-item">
                              <h3>Included and Excluded</h3>
{resolvedDetail.inclusionsHtml ? (
  <div className="tour-richtext" dangerouslySetInnerHTML={{ __html: resolvedDetail.inclusionsHtml }} />
) : shouldFallback ? (
  <ul className="list">
    <li>
      <i className="fa-solid fa-check"></i>
      Pick and Drop Services
    </li>
    <li>
      <i className="fa-solid fa-check"></i>
      1 Meal Per Day
    </li>
    <li>
      <i className="fa-solid fa-check"></i>
      Cruise Dinner &amp; Music Event
    </li>
    <li>
      <i className="fa-solid fa-check"></i>
      Visit 7 Best Places in the City
    </li>
    <li>
      <i className="fa-solid fa-check"></i>
      Bottled Water on Buses
    </li>
    <li>
      <i className="fa-solid fa-check"></i>
      Transportation Luxury Tour Bus
    </li>
  </ul>
) : null}
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="list-item">
                              <h3>Excluded</h3>
{resolvedDetail.exclusionsHtml ? (
  <div className="tour-richtext" dangerouslySetInnerHTML={{ __html: resolvedDetail.exclusionsHtml }} />
) : shouldFallback ? (
  <ul className="list">
    <li>
      <i className="fa-solid fa-xmark"></i>
      Gratuities
    </li>
    <li>
      <i className="fa-solid fa-xmark"></i>
      Hotel pickup and drop-off
    </li>
    <li>
      <i className="fa-solid fa-xmark"></i>
      Lunch, Food &amp; Drinks
    </li>
    <li>
      <i className="fa-solid fa-xmark"></i>
      Optional upgrade to a glass
    </li>
    <li>
      <i className="fa-solid fa-xmark"></i>
      Additional Services
    </li>
    <li>
      <i className="fa-solid fa-xmark"></i>
      Insurance
    </li>
  </ul>
) : null}
                            </div>
                          </div>
                        </div>
                        <h3>Top Highlights</h3>
{resolvedDetail.highlightsHtml ? (
  <div className="tour-richtext mt-3" dangerouslySetInnerHTML={{ __html: resolvedDetail.highlightsHtml }} />
) : shouldFallback ? (
  <>
    <p className="mt-3">
      Bali is more than just a tropical destination¨¦?£¤?¡±?t&apos;s a paradise filled with unforgettable experiences. from its sacred temples perched on dramatic cliffs to golden beaches that stretch for miles, every corner of the island offers something unique.
    </p>
    <ul className="list-2">
      <li>
        <i className="fa-solid fa-check"></i>
        Explore iconic sites like Tanah Lot, Uluwatu, and Besakih Temple.
      </li>
      <li>
        <i className="fa-solid fa-check"></i>
        Relax on Kuta, Seminyak, Nusa Dua, and Jimbaran Bay.
      </li>
      <li>
        <i className="fa-solid fa-check"></i>
        Discover rice terraces, art markets, yoga retreats, and monkey forests.
      </li>
      <li>
        <i className="fa-solid fa-check"></i>
        Hike an active volcano for breathtaking sunrise views.
      </li>
      <li>
        <i className="fa-solid fa-check"></i>
        Experience beach clubs, rooftop bars, and live music in Seminyak and Canggu.
      </li>
      <li>
        <i className="fa-solid fa-check"></i>
        Visit Tegenungan, Gitgit, and Sekumpul waterfalls for adventure and serenity.
      </li>
    </ul>
  </>
) : null}
                        <h3>Itinerary</h3>
{resolvedDetail.itineraryHtml ? (
  <div className="tour-richtext" dangerouslySetInnerHTML={{ __html: resolvedDetail.itineraryHtml }} />
) : shouldFallback ? (
  <div className="accordion-two" id="faq-accordion-two">
    <div className="accordion-item">
      <h5 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoOne" aria-expanded="false" aria-controls="collapseTwoOne">
          Day 1 - Arrive at campground
        </button>
      </h5>
      <div id="collapseTwoOne" className="accordion-collapse collapse" data-bs-parent="#faq-accordion-two">
        <div className="accordion-body">
          <p>
            The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.
          </p>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h5 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoTwo" aria-expanded="false" aria-controls="collapseTwoTwo">
          Day 2 - Wake up early and embark on a day hike
        </button>
      </h5>
      <div id="collapseTwoTwo" className="accordion-collapse collapse" data-bs-parent="#faq-accordion-two">
        <div className="accordion-body">
          <p>
            The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.
          </p>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h5 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoThree" aria-expanded="false" aria-controls="collapseTwoThree">
          Day 3 - Join a guided ranger-led nature walk
        </button>
      </h5>
      <div id="collapseTwoThree" className="accordion-collapse collapse" data-bs-parent="#faq-accordion-two">
        <div className="accordion-body">
          <p>
            The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.
          </p>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h5 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoFour" aria-expanded="false" aria-controls="collapseTwoFour">
          Day 4 - Take a break from hiking
        </button>
      </h5>
      <div id="collapseTwoFour" className="accordion-collapse collapse" data-bs-parent="#faq-accordion-two">
        <div className="accordion-body">
          <p>
            The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.
          </p>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h5 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoFive" aria-expanded="false" aria-controls="collapseTwoFive">
          Day 5 - Pack a lunch and embark on a longer hike
        </button>
      </h5>
      <div id="collapseTwoFive" className="accordion-collapse collapse" data-bs-parent="#faq-accordion-two">
        <div className="accordion-body">
          <p>
            The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.
          </p>
        </div>
      </div>
    </div>
  </div>
) : null}
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
                        {resolvedDetail.mapImage || shouldFallback ? (
  <>
    <h3>Maps</h3>
    <div className="map-items">
      <div className="googpemap">
        {resolvedDetail.mapImage ? (
          <img src={resolvedDetail.mapImage} alt="map" />
        ) : (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        )}
      </div>
    </div>
  </>
) : null}
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
                        <h3>Add Reviews</h3>
                        <div className="contact-box">
                          <h4>Leave Feedback</h4>
                          <form action="contact.php" id="contact-form1" method="POST" className="contact-form-items">
                            <div className="row g-4">
                              <div className="col-lg-6">
                                <div className="form-clt">
                                  <span>Name</span>
                                  <input type="text" name="name" id="name331" placeholder="Full Name" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-clt">
                                  <span>Phone</span>
                                  <input type="text" name="name" id="name22" placeholder="Phone Number" />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-clt">
                                  <span>Email</span>
                                  <input type="text" name="name" id="email11" placeholder="Your email" />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-clt">
                                  <span>Comments</span>
                                  <textarea name="message" id="message1" placeholder="Type your message"></textarea>
                                </div>
                              </div>
                              <div className="col-lg-8">
                                <button type="submit" className="theme-btn">
                                  Send Your Reviews
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12">
                      <div className="tour-details-side">
                        <div className="tour-details-sidebar sticky-style">
                          <div className="tour-sidebar-items">
  <h3>{isGroupTour ? 'Departure Dates' : 'Tour Enquiry'}</h3>
  {isGroupTour ? (
    <>
      {departures.length ? (
        <ul className="departure-list">
          {departures.map((departure) => (
            <li key={`departure-${departure.id}`}>
              <div className="departure-date">
                <span>{departure.startDate}</span>
                {departure.endDate ? <span> - {departure.endDate}</span> : null}
              </div>
              {departure.price ? <div className="departure-price">{departure.price}</div> : null}
              {departure.seatsLeft ? <div className="departure-seats">Seats left: {departure.seatsLeft}</div> : null}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text">No departures available yet.</p>
      )}
      <a href="/contact" className="theme-btn">
        Book Now
      </a>
    </>
  ) : (
    <>
      <p className="text">This tour is for enquiry only. Please contact us for availability.</p>
      <a href="/contact" className="theme-btn">
        Enquiry Now
      </a>
    </>
  )}
</div>
<div className="widget-contact">
                            <h3>Need Help?</h3>
                            <ul className="list-style-one">
                              <li><i className="far fa-envelope"></i> <a href="mailto:helpxample@gmail.com">helpxample@gmail.com</a></li>
                              <li><i className="far fa-phone-volume"></i> <a href="tel:+000(123)45688">+000 (123) 456 88</a></li>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tour Grid Section Start */}
          <section className="tour-grid-section section-padding pt-0 fix">
            <div className="container">
              <div className="section-title text-center">
                <h2 className="text-anim">Related Trips You Might Also Like</h2>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                  <div className="tour-place-item">
                    <div className="tour-place-image">
                      <img src="/assets/img/home-1/tour/tour-8.jpg" alt="img" />
                      <span>10% Off</span>
                      <div className="icon">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="tour-place-content">
                      <div className="rating-item">
                        <div className="star">
                          <span>Rating</span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star-half-stroke"></i>
                        </div>
                        <h5><span>Tours Price</span>$49.00</h5>
                      </div>
                      <h3>
                        <a href="/tour-details">
                          Relinking Beach in Nusa panada island, Bali, Indonesia
                        </a>
                      </h3>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Bali, Indonesia
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          1 - 3 days
                        </li>
                        <li>
                          <i className="fa-regular fa-users"></i>
                          3 persons
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                  <div className="tour-place-item">
                    <div className="tour-place-image">
                      <img src="/assets/img/home-1/tour/tour-9.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="tour-place-content">
                      <div className="rating-item">
                        <div className="star">
                          <span>Rating</span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star-half-stroke"></i>
                        </div>
                        <h5><span>Tours Price</span>$49.00</h5>
                      </div>
                      <h3>
                        <a href="/tour-details">
                          Scenic Kayaking Setup Along <br /> Duero River, Soria
                        </a>
                      </h3>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Soria, Castilla
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          1 - 3 days
                        </li>
                        <li>
                          <i className="fa-regular fa-users"></i>
                          3 persons
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                  <div className="tour-place-item">
                    <div className="tour-place-image">
                      <img src="/assets/img/home-1/tour/tour-10.jpg" alt="img" />
                      <span>13% Off</span>
                      <div className="icon">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="tour-place-content">
                      <div className="rating-item">
                        <div className="star">
                          <span>Rating</span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star-half-stroke"></i>
                        </div>
                        <h5><span>Tours Price</span>$49.00</h5>
                      </div>
                      <h3>
                        <a href="/tour-details">
                          Camel safaris along desert dunes near roads and small villages
                        </a>
                      </h3>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Giza, Egypt
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          1 - 3 days
                        </li>
                        <li>
                          <i className="fa-regular fa-users"></i>
                          3 persons
                        </li>
                      </ul>
                    </div>
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
                          Adventure Is Calling éˆ?Are You Ready?
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
  );
}



















