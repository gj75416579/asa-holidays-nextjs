'use client'

import { Suspense, useState } from 'react'
import Script from 'next/script'

import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'

type MiceFormState = {
  name: string
  email: string
  contactNo: string
  subject: string
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
      getResponse: () => string
      reset: (widgetId?: number) => void
    }
  }
}

const defaultFormState: MiceFormState = {
  name: '',
  email: '',
  contactNo: '',
  subject: '',
  message: '',
  recaptcha: '',
}

function MiceContent() {
  const [formData, setFormData] = useState<MiceFormState>(defaultFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''
  const recaptchaMode = process.env.NEXT_PUBLIC_API_MODE ?? 'dev'
  const recaptchaEnabled = recaptchaMode === 'prod' && Boolean(recaptchaSiteKey)
  const galleryImages = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg']

  const handleInputChange = (field: keyof MiceFormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const getRecaptchaResponse = () => {
    if (!recaptchaEnabled || !window.grecaptcha || typeof window.grecaptcha.getResponse !== 'function') {
      return ''
    }
    return window.grecaptcha.getResponse()
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatusMessage('')
    setIsSuccess(false)

    try {
      const recaptchaToken = getRecaptchaResponse()
      if (recaptchaEnabled && !recaptchaToken) {
        setStatusMessage('Please complete the reCAPTCHA verification.')
        setIsSuccess(false)
        setIsSubmitting(false)
        return
      }

      const payload = {
        formType: 'mice',
        name: formData.name,
        email: formData.email,
        contactNo: formData.contactNo,
        subject: formData.subject,
        message: formData.message,
        recaptcha: recaptchaToken,
      }

      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => null)
      if (!response.ok) {
        const message = data?.error || 'Failed to submit MICE inquiry. Please try again.'
        setStatusMessage(message)
        setIsSuccess(false)
        return
      }

      setStatusMessage('We have received your MICE inquiry. Our team will contact you shortly.')
      setIsSuccess(true)
      setFormData(defaultFormState)
      if (recaptchaEnabled && window.grecaptcha?.reset) {
        window.grecaptcha.reset()
      }
    } catch (error) {
      console.error('MICE submit error:', error)
      setStatusMessage('Failed to submit MICE inquiry. Please try again.')
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {recaptchaEnabled ? (
            <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
          ) : null}

          <div className="breadcrumb-wrapper-3 fix bg-cover" style={{ backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-2.jpg)' }}>
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1 className="wow fadeInUp" data-wow-delay=".3s">
                    MICE
                  </h1>
                </div>
                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="style-2 style-3">MICE</li>
                </ul>
              </div>
            </div>
          </div>

          <section className="mice-hero">
            <div className="container">
              {/* <img src="/assets/img/mice/home.png" alt="MICE Services" className="mice-hero-image" /> */}
              <div className="mice-services-title">
                <h2>OUR SERVICES</h2>
              </div>
              <div className="mice-gallery swiper mice-gallery-slider">
                <div className="swiper-wrapper">
                  {galleryImages.map((src, index) => (
                    <div key={src} className="swiper-slide">
                      <div className="mice-gallery-item">
                        <img src={src} alt={`MICE gallery ${index + 1}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mice-contact-section">
            <div className="container">
              <div className="mice-contact-intro">
                <h2>CONTACT US</h2>
                <p>
                  At ASA Holidays, the sky&apos;s the limit in terms of creating your next Corporate event. Our knowledgeable
                  and experienced agents are waiting to plan every last detail of your upcoming trip, so all that&apos;s left
                  for you is to enjoy it. So send us an email and we&apos;ll get back to you as soon as possible.
                </p>
                <a href="mailto:mice@asaholiday.com" className="mice-contact-email">mice@asaholiday.com</a>
              </div>

              <div className="mice-contact-form">
                {statusMessage ? (
                  <div className={`booking-alert${isSuccess ? ' booking-alert-success' : ''}`}>{statusMessage}</div>
                ) : null}
                <form onSubmit={handleSubmit} className="contact-form-items">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <span>Name <span className="required">*</span></span>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(event) => handleInputChange('name', event.target.value)}
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <span>Email <span className="required">*</span></span>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(event) => handleInputChange('email', event.target.value)}
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <span>Contact No. <span className="required">*</span></span>
                        <input
                          type="text"
                          value={formData.contactNo}
                          onChange={(event) => handleInputChange('contactNo', event.target.value)}
                          placeholder="Contact No."
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <span>Subject <span className="required">*</span></span>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(event) => handleInputChange('subject', event.target.value)}
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <span>Message <span className="required">*</span></span>
                        <textarea
                          value={formData.message}
                          onChange={(event) => handleInputChange('message', event.target.value)}
                          placeholder="Message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    {recaptchaEnabled ? (
                      <div className="col-lg-12">
                        <div className="enquiry-recaptcha">
                          <div className="g-recaptcha" data-sitekey={recaptchaSiteKey}></div>
                        </div>
                      </div>
                    ) : null}
                    <div className="col-lg-12 text-end">
                      <button type="submit" className="theme-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>

          <section className="contact-us-section section-padding fix">
            <div className="container">
              <div className="contact-us-wrapper">
                <h2 className="text-center">HQ &amp; Sales Office (Chinatown) #03-57/58/59</h2>
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.816352022553!2d103.84034231475397!3d1.28409499906343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19749ff9d617%3A0xe4257fd7145d0676!2sASA+Holidays!5e0!3m2!1sen!2s!4v1449467689304d"
                    title="ASA Holidays HQ & Sales Office"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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

export default function MicePage() {
  return (
    <Suspense fallback={null}>
      <MiceContent />
    </Suspense>
  )
}




