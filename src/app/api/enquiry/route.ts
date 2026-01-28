import { NextResponse } from 'next/server'
import { postDataJson } from '@/lib/api/server'

const ASA_ENQUIRY_EMAIL = 'enquiry@asaholiday.com'

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
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
      "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
      <head></head>
      <body>
      <table>
        <tr><td>Tour Name:</td><td>${formatValue(body?.tourName, 'General Enquiry')}</td></tr>
        <tr><td>Product Code:</td><td>${formatValue(body?.productCode)}</td></tr>
        <tr><td>Tour Code:</td><td>${formatValue(body?.tourCode)}</td></tr>
        <tr><td>First Name:</td><td>${formatValue(body?.firstName)}</td></tr>
        <tr><td>Last Name:</td><td>${formatValue(body?.lastName)}</td></tr>
        <tr><td>Email:</td><td>${formatValue(body?.email, 'Not provided')}</td></tr>
        <tr><td>Mobile:</td><td>${formatValue(body?.phone)}</td></tr>
        <tr><td>Adults:</td><td>${formatValue(body?.adults, '1')}</td></tr>
        <tr><td>Children:</td><td>${formatValue(body?.children, '0')}</td></tr>
        <tr><td>Infants:</td><td>${formatValue(body?.infants, '0')}</td></tr>
        <tr><td>Departure Prefer 1:</td><td>${formatValue(body?.departureDate1, 'Not specified')}</td></tr>
        <tr><td>Departure Prefer 2:</td><td>${formatValue(body?.departureDate2, 'Not specified')}</td></tr>
        <tr><td>Message:</td><td>${formatMessage(body?.message)}</td></tr>
        <tr><td>Submitted At:</td><td>${new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' })}</td></tr>
      </table>
      </body>
      </html>
    `

    const emailData = {
      subject: 'Enquiry',
      message: emailContent,
      to: [ASA_ENQUIRY_EMAIL]
    }

    const data = await postDataJson('system/email', emailData)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Enquiry error:', error)
    return NextResponse.json({ error: 'Failed to send enquiry' }, { status: 500 })
  }
}
