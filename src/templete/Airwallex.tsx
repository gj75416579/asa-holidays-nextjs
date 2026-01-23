'use client'

import { useEffect, useState } from 'react'

type AirwallexSdk = {
  init: (options: { env: string; origin: string }) => void
  redirectToCheckout: (options: {
    mode: 'payment'
    currency: string
    intent_id: string
    client_secret: string
    successUrl: string
    failUrl: string
  }) => void
}

declare global {
  interface Window {
    Airwallex?: AirwallexSdk
  }
}

const apiMode = process.env.NEXT_PUBLIC_API_MODE ?? 'dev'
const fallbackEnv = apiMode === 'prod' ? 'prod' : 'demo'
const airwallexEnv = process.env.NEXT_PUBLIC_AIRWALLEX_ENV ?? fallbackEnv
const airwallexSdkUrl =
  process.env.NEXT_PUBLIC_AIRWALLEX_SDK_URL ??
  (airwallexEnv === 'prod'
    ? 'https://checkout.airwallex.com/assets/elements.bundle.min.js'
    : 'https://checkout-demo.airwallex.com/assets/elements.bundle.min.js')

type AirwallexButtonProps = {
  tourParam: string | null
  bookingData: Record<string, unknown> | null
  disabled?: boolean
}

const buildReturnUrl = (tourParam: string | null) => {
  const params = new URLSearchParams()
  if (tourParam) {
    params.set('tour', tourParam)
  }
  params.set('gateway', 'airwallex')
  const query = params.toString()
  return `${window.location.origin}/booking${query ? `?${query}` : ''}`
}

export function AirwallexButton({ tourParam, bookingData, disabled }: AirwallexButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sdkLoaded, setSdkLoaded] = useState(false)

  useEffect(() => {
    if (!bookingData) {
      return
    }
    if (window.Airwallex) {
      setSdkLoaded(true)
      return
    }
    if (!airwallexSdkUrl) {
      setError('Airwallex SDK URL is missing.')
      return
    }
    const script = document.createElement('script')
    script.src = airwallexSdkUrl
    script.async = true
    script.onload = () => setSdkLoaded(true)
    script.onerror = () => setError('Failed to load payment system.')
    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [bookingData])

  const createPaymentIntent = async () => {
    if (!bookingData) {
      return null
    }
    const res = await fetch('/api/paymentAirWallex/createIntent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    })
    const text = await res.text()
    const json = text ? JSON.parse(text) : {}
    if (!res.ok) {
      const message = typeof json?.error === 'string' ? json.error : 'Failed to create payment intent.'
      throw new Error(message)
    }
    if (!json?.data?.id || !json?.data?.client_secret) {
      throw new Error('Invalid payment intent data received.')
    }
    return { intentId: json.data.id as string, clientSecret: json.data.client_secret as string }
  }

  const handleCheckout = async () => {
    if (!bookingData) {
      setError('Payment data is not ready yet.')
      return
    }
    setLoading(true)
    setError(null)
    try {
      const paymentDetails = await createPaymentIntent()
      if (!paymentDetails) {
        throw new Error('Failed to create payment intent.')
      }
      if (!window.Airwallex) {
        throw new Error('Airwallex SDK not loaded.')
      }
      const successUrl = buildReturnUrl(tourParam)
      window.Airwallex.init({
        env: airwallexEnv,
        origin: window.location.origin,
      })
      window.Airwallex.redirectToCheckout({
        mode: 'payment',
        currency: String(bookingData.currency ?? 'SGD'),
        intent_id: paymentDetails.intentId,
        client_secret: paymentDetails.clientSecret,
        successUrl,
        failUrl: successUrl,
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to process payment.'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  if (!bookingData) {
    return (
      <div>
        <button type="button" className="theme-btn" disabled>
          Processing...
        </button>
        {error ? <p className="booking-payment-note">{error}</p> : null}
      </div>
    )
  }

  return (
    <div>
      <button type="button" className="theme-btn" onClick={handleCheckout} disabled={loading || !sdkLoaded || disabled}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
      {error ? <p className="booking-payment-note">{error}</p> : null}
    </div>
  )
}

export function useCheckPaymentStatus(paymentIntentId: string | null) {
  const [status, setStatus] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let isMounted = true
    if (!paymentIntentId) {
      setStatus(null)
      setMessage(null)
      setIsLoading(false)
      return () => {
        isMounted = false
      }
    }

    const checkPaymentStatus = async () => {
      setIsLoading(true)
      try {
        const res = await fetch('/api/paymentAirWallex/queryIntent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: paymentIntentId }),
        })
        const text = await res.text()
        const json = text ? JSON.parse(text) : {}
        if (!res.ok) {
          throw new Error(typeof json?.error === 'string' ? json.error : 'Failed to verify payment.')
        }
        const paymentStatus = json?.data?.status
        if (paymentStatus === 'SUCCEEDED') {
          setStatus('success')
          setMessage('Payment successful!')
        } else if (paymentStatus === 'REQUIRES_CUSTOMER_ACTION' || paymentStatus === 'REQUIRES_CAPTURE') {
          setStatus('pending')
          setMessage('Your payment is being processed. Please wait...')
          if (isMounted) {
            setTimeout(checkPaymentStatus, 5000)
          }
        } else {
          setStatus('failed')
          setMessage('Payment failed. Please try again or contact customer support.')
        }
      } catch (error) {
        if (!isMounted) {
          return
        }
        setStatus('error')
        setMessage('An error occurred while verifying your payment. Please contact customer support.')
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    checkPaymentStatus()

    return () => {
      isMounted = false
    }
  }, [paymentIntentId])

  return { status, message, isLoading }
}
