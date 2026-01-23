import { NextResponse } from 'next/server'
import { getData } from '@/lib/api/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!process.env.API_BASE_URL || !process.env.COMPANY_ID) {
    console.error('Environment variables missing')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const data = await getData('system/mobile-dial-code/list')
    return NextResponse.json(data)
  } catch (error) {
    console.error('Booking dial code error:', error)
    return NextResponse.json({ error: 'Failed to fetch dial codes' }, { status: 500 })
  }
}

