import { NextResponse } from 'next/server'
import { postDataJson } from '@/lib/api/server'

export async function POST(request: Request) {
  if (!process.env.API_BASE_URL || !process.env.COMPANY_ID) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const body = await request.json()
    const recaptcha = body.recaptcha

    if (process.env.RECAPTCHA_SECRET_KEY && !recaptcha) {
      return NextResponse.json({ error: 'reCAPTCHA verification required' }, { status: 400 })
    }

    if (recaptcha && process.env.RECAPTCHA_SECRET_KEY) {
      const verification = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: secret=&response=
      })
      const result = await verification.json()
      if (!result.success) {
        return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 })
      }
    }

    const data = await postDataJson('system/email', body)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Contact error:', error)
    return NextResponse.json({ error: 'Failed to send contact request' }, { status: 500 })
  }
}