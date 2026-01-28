import { NextResponse } from 'next/server'
import { postDataJson } from '@/lib/api/server'

const ASA_CONTACT_EMAIL = 'enquiry@asaholiday.com'

const formatValue = (value: unknown, fallback = 'N/A') => {
  if (typeof value === 'string' && value.trim()) {
    return value.trim()
  }
  if (typeof value === 'number') {
    return String(value)
  }
  return fallback
}

const formatMessage = (value: unknown) => {
  if (typeof value !== 'string' || !value.trim()) {
    return 'N/A'
  }
  return value.replace(/\n/g, '<br>')
}

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

    const name = formatValue(body?.name_contact || body?.name)
    const lastName = formatValue(body?.lastname_contact || body?.lastName, '')
    const email = formatValue(body?.email_contact || body?.email)
    const phone = formatValue(body?.phone_contact || body?.phone)
    const message = formatMessage(body?.message_contact || body?.message)
    const fullName = `${name} ${lastName}`.trim() || 'N/A'

    const emailContent = `
      <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
        <tr><td><strong>Name:</strong></td><td>${fullName}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
        <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
        <tr><td><strong>Message:</strong></td><td>${message}</td></tr>
        <tr><td><strong>Submitted:</strong></td><td>${new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' })}</td></tr>
      </table>
    `

    const emailData = {
      subject: 'Website Contact Form',
      message: emailContent,
      to: [ASA_CONTACT_EMAIL]
    }

    const data = await postDataJson('system/email', emailData)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Contact simple error:', error)
    return NextResponse.json({ error: 'Failed to send contact request' }, { status: 500 })
  }
}
