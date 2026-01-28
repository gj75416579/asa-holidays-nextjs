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

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <table>
        <tr><td><strong>Trip Type:</strong></td><td>${formatValue(body?.tripType)}</td></tr>
        <tr><td><strong>Departure:</strong></td><td>${formatValue(body?.month)} ${formatValue(body?.year, '')}</td></tr>
        <tr><td><strong>Destination:</strong></td><td>${formatValue(body?.destination)}</td></tr>
        <tr><td><strong>Duration:</strong></td><td>${formatValue(body?.duration)}</td></tr>
        <tr><td><strong>Travelers:</strong></td><td>${formatValue(body?.adults)} adults, ${formatValue(body?.children, '0')} children, ${formatValue(body?.room, '0')} rooms</td></tr>
        <tr><td><strong>Budget:</strong></td><td>${formatValue(body?.budget)}</td></tr>
        <tr><td><strong>Name:</strong></td><td>${formatValue(body?.name)}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${formatValue(body?.email)}</td></tr>
        <tr><td><strong>Phone:</strong></td><td>${formatValue(body?.phone)}</td></tr>
        <tr><td><strong>Message:</strong></td><td>${formatMessage(body?.message)}</td></tr>
        <tr><td><strong>Submitted At:</strong></td><td>${new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' })}</td></tr>
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
    console.error('Contact error:', error)
    return NextResponse.json({ error: 'Failed to send contact request' }, { status: 500 })
  }
}
