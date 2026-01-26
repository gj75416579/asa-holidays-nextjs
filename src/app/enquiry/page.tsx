'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Script from 'next/script'

import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'

type EnquiryFormState = {
  tourName: string
  tourCode: string
  productCode: string
  tourId: string
  departureId: string
  tourCodeId: string
  type: string
  firstName: string
  lastName: string
  email: string
  phone: string
  departureDate1: string
  departureDate2: string
  adults: string
  children: string
  infants: string
  message: string
  recaptcha: string
}

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string
          callback: (token: string) => void
          'expired-callback'?: () => void
          'error-callback'?: () => void
        }
      ) => number
      reset: (widgetId?: number) => void
    }
  }
}

const defaultFormState: EnquiryFormState = {
  tourName: '',
  tourCode: '',
  productCode: '',
  tourId: '',
  departureId: '',
  tourCodeId: '',
  type: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  departureDate1: '',
  departureDate2: '',
  adults: '1',
  children: '0',
  infants: '0',
  message: '',
  recaptcha: '',
}

const numberOptions = Array.from({ length: 7 }, (_, index) => String(index))
const adultOptions = ['1', '2', '3', '4', '5', '6']

const decodeParam = (value: string | null): string => {
  if (!value) {
    return ''
  }
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

const normalizeDate = (value: string): string => {
  if (!value) {
    return ''
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return value
  }
  const match = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
  if (match) {
    const day = match[1].padStart(2, '0')
    const month = match[2].padStart(2, '0')
    return `${match[3]}-${month}-${day}`
  }
  return ''
}

const formatDateLabel = (value: string): string => {
  if (!value) {
    return ''
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split('-')
    return `${day}/${month}/${year}`
  }
  return value
}

export default function EnquiryPage() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState<EnquiryFormState>(defaultFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const recaptchaRef = useRef<HTMLDivElement | null>(null)
  const recaptchaWidgetId = useRef<number | null>(null)
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''
  const recaptchaMode = process.env.NEXT_PUBLIC_API_MODE ?? 'dev'
  const recaptchaEnabled = recaptchaMode === 'prod' && Boolean(recaptchaSiteKey)

  const queryKey = useMemo(() => searchParams.toString(), [searchParams])

  useEffect(() => {
    const tourName = decodeParam(searchParams.get('tourName'))
    const tourCode = decodeParam(searchParams.get('tourCode'))
    const productCode = decodeParam(searchParams.get('productCode'))
    const departureDate = normalizeDate(decodeParam(searchParams.get('departureDate')))
    const tourId = decodeParam(searchParams.get('tourId'))
    const departureId = decodeParam(searchParams.get('departureId'))
    const tourCodeId = decodeParam(searchParams.get('tourCodeId'))
    const type = decodeParam(searchParams.get('type'))

    setFormData((prev) => ({
      ...prev,
      tourName: tourName || prev.tourName,
      tourCode: tourCode || prev.tourCode,
      productCode: productCode || prev.productCode,
      tourId: tourId || prev.tourId,
      departureId: departureId || prev.departureId,
      tourCodeId: tourCodeId || prev.tourCodeId,
      type: type || prev.type,
      departureDate1: departureDate || prev.departureDate1,
    }))
  }, [queryKey, searchParams])

  useEffect(() => {
    if (!recaptchaEnabled) {
      return
    }
    if (window.grecaptcha) {
      renderRecaptcha()
    }
  }, [recaptchaEnabled])

  useEffect(() => {
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
            const field = element.getAttribute('data-field') as keyof EnquiryFormState | null
            if (field) {
              handleInputChange(field, dateText)
            }
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
  }, [])

  const renderRecaptcha = () => {
    if (!recaptchaEnabled || !recaptchaRef.current || !window.grecaptcha) {
      return
    }
    if (recaptchaWidgetId.current !== null) {
      return
    }
    recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
      sitekey: recaptchaSiteKey,
      callback: (token: string) => handleInputChange('recaptcha', token),
      'expired-callback': () => handleInputChange('recaptcha', ''),
      'error-callback': () => handleInputChange('recaptcha', ''),
    })
  }

  const handleInputChange = (field: keyof EnquiryFormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatusMessage('')
    setIsSuccess(false)

    try {
      if (recaptchaEnabled && !formData.recaptcha) {
        setStatusMessage('Please complete the reCAPTCHA verification.')
        setIsSuccess(false)
        setIsSubmitting(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      const payload = {
        ...formData,
        departureDate1: normalizeDate(formData.departureDate1),
        departureDate2: normalizeDate(formData.departureDate2),
      }

      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok) {
        const message = data?.error || 'Failed to submit enquiry. Please try again.'
        setStatusMessage(message)
        setIsSuccess(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      setStatusMessage('We have received your enquiry. Our tour specialist will contact you shortly.')
      setIsSuccess(true)

      setFormData((prev) => ({
        ...defaultFormState,
        tourName: prev.tourName,
        tourCode: prev.tourCode,
        productCode: prev.productCode,
        tourId: prev.tourId,
        departureId: prev.departureId,
        tourCodeId: prev.tourCodeId,
        type: prev.type,
        departureDate1: prev.departureDate1,
      }))
      if (recaptchaWidgetId.current !== null && window.grecaptcha?.reset) {
        window.grecaptcha.reset(recaptchaWidgetId.current)
      }

      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.error('Enquiry submit error:', error)
      setStatusMessage('Failed to submit enquiry. Please try again.')
      setIsSuccess(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const tourSummary = [
    formData.tourName ? { label: 'Tour Name', value: formData.tourName } : null,
    formData.tourCode ? { label: 'Tour Code', value: formData.tourCode } : null,
    formData.productCode ? { label: 'Product Code', value: formData.productCode } : null,
    formData.departureDate1 ? { label: 'Departure', value: formatDateLabel(formData.departureDate1) } : null,
  ].filter((item): item is { label: string; value: string } => Boolean(item))

  return (
    <>
      <Header />
      {recaptchaEnabled ? (
        <Script
          src="https://www.google.com/recaptcha/api.js?render=explicit"
          strategy="afterInteractive"
          onLoad={renderRecaptcha}
        />
      ) : null}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="breadcrumb-wrapper-3 fix bg-cover" style={{ backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-2.jpg)' }}>
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1>Enquiry</h1>
                </div>
                <ul className="breadcrumb-items">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="style-2 style-3">Enquiry</li>
                </ul>
              </div>
            </div>
          </div>

          <section className="enquiry-section section-padding fix">
            <div className="container">
              <div className="contact-us-wrapper-3 enquiry-wrapper">
                <div className="row g-4">
                  <div className="col-lg-5">
                    <div className="contact-us-content">
                      <div className="section-title mb-0">
                        <h2>Tour Enquiry</h2>
                      </div>
                      <p className="text">
                        Please complete the form and our team will get back to you with tour details, availability, and
                        booking assistance.
                      </p>
                      {tourSummary.length ? (
                        <div className="enquiry-tour-summary">
                          <h5>Selected Tour</h5>
                          <ul>
                            {tourSummary.map((item) => (
                              <li key={item.label}>
                                <span>{item.label}</span>
                                <strong>{item.value}</strong>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="contact-box enquiry-box">
                      {statusMessage ? (
                        <div className={`booking-alert${isSuccess ? ' booking-alert-success' : ''}`}>{statusMessage}</div>
                      ) : null}
                      <form onSubmit={handleSubmit} className="contact-form-items enquiry-form">
                        <div className="row g-4">
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <span>Surname/Family Name</span>
                              <input
                                type="text"
                                value={formData.lastName}
                                onChange={(event) => handleInputChange('lastName', event.target.value)}
                                placeholder="Surname"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <span>
                                Given Name/First Name <span className="required">*</span>
                              </span>
                              <input
                                type="text"
                                value={formData.firstName}
                                onChange={(event) => handleInputChange('firstName', event.target.value)}
                                placeholder="First Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <span>Email Address</span>
                              <input
                                type="email"
                                value={formData.email}
                                onChange={(event) => handleInputChange('email', event.target.value)}
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <span>
                                Phone Number <span className="required">*</span>
                              </span>
                              <input
                                type="tel"
                                value={formData.phone}
                                onChange={(event) => handleInputChange('phone', event.target.value)}
                                placeholder="Phone Number"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <span>Departure Date (Option 1)</span>
                              <input
                                type="text"
                                className="js-date-picker"
                                inputMode="numeric"
                                autoComplete="off"
                                placeholder="DD/MM/YYYY"
                                data-year-range="c:c+5"
                                data-field="departureDate1"
                                value={formatDateLabel(formData.departureDate1)}
                                onChange={(event) => handleInputChange('departureDate1', event.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <span>Departure Date (Option 2)</span>
                              <input
                                type="text"
                                className="js-date-picker"
                                inputMode="numeric"
                                autoComplete="off"
                                placeholder="DD/MM/YYYY"
                                data-year-range="c:c+5"
                                data-field="departureDate2"
                                value={formatDateLabel(formData.departureDate2)}
                                onChange={(event) => handleInputChange('departureDate2', event.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-clt">
                              <span>Adults</span>
                              <select value={formData.adults} onChange={(event) => handleInputChange('adults', event.target.value)}>
                                {adultOptions.map((value) => (
                                  <option key={`adult-${value}`} value={value}>
                                    {value}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-clt">
                              <span>Children</span>
                              <select value={formData.children} onChange={(event) => handleInputChange('children', event.target.value)}>
                                {numberOptions.map((value) => (
                                  <option key={`child-${value}`} value={value}>
                                    {value}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-clt">
                              <span>Infants</span>
                              <select value={formData.infants} onChange={(event) => handleInputChange('infants', event.target.value)}>
                                {numberOptions.map((value) => (
                                  <option key={`infant-${value}`} value={value}>
                                    {value}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-clt">
                              <span>
                                Message <span className="required">*</span>
                              </span>
                              <textarea
                                value={formData.message}
                                onChange={(event) => handleInputChange('message', event.target.value)}
                                placeholder="Please provide your travel requirements or questions."
                                required
                              ></textarea>
                            </div>
                          </div>
                          {recaptchaEnabled ? (
                            <div className="col-lg-12">
                              <div className="enquiry-recaptcha" ref={recaptchaRef}></div>
                            </div>
                          ) : null}
                          <div className="col-lg-12">
                            <button type="submit" className="theme-btn" disabled={isSubmitting}>
                              {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  )
}




