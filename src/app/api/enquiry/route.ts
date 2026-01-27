import { NextResponse } from 'next/server'
import { postDataJson } from '@/lib/api/server'

export async function POST(request: Request) {
  if (!process.env.API_BASE_URL || !process.env.COMPANY_ID) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const body = await request.json()
    const recaptcha = typeof body?.recaptcha === 'string' ? body.recaptcha : ''
    const shouldVerifyRecaptcha = process.env.NEXT_PUBLIC_API_MODE === 'prod'
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY

    if (shouldVerifyRecaptcha) {
      if (!recaptchaSecret) {
        return NextResponse.json({ error: 'reCAPTCHA secret not configured' }, { status: 500 })
      }
      if (!recaptcha) {
        return NextResponse.json({ error: 'reCAPTCHA verification required' }, { status: 400 })
      }
      const params = new URLSearchParams()
      params.set('secret', recaptchaSecret)
      params.set('response', recaptcha)
      const verification = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString()
      })
      const result = await verification.json()
      if (!result.success) {
        return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 })
      }
    }

    const data = await postDataJson('system/email', body)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Enquiry error:', error)
    return NextResponse.json({ error: 'Failed to send enquiry' }, { status: 500 })
  }
}




