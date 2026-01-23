import { NextResponse } from 'next/server'
import { postDataJson } from '@/lib/api/server'

export async function POST(request: Request) {
  if (!process.env.API_BASE_URL || !process.env.COMPANY_ID) {
    console.error('Environment variables missing')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const body = await request.json()
    const data = await postDataJson('api/b2c/tour-tranx/pre-amount', body)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Booking check price error:', error)
    return NextResponse.json({ error: 'Failed to fetch booking data' }, { status: 500 })
  }
}
