import { NextResponse } from 'next/server'
import { getData } from '@/lib/api/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Tour ID is required' }, { status: 400 })
  }

  const parsedId = Number(id)
  if (!Number.isFinite(parsedId)) {
    return NextResponse.json({ error: 'Tour ID must be a valid integer' }, { status: 400 })
  }

  if (!process.env.API_BASE_URL || !process.env.COMPANY_ID) {
    console.error('Environment variables missing')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const data = await getData(`api/b2c/tour-code/room-configurations/${parsedId}`)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Booking room configuration error:', error)
    return NextResponse.json({ error: 'Failed to fetch room configurations' }, { status: 500 })
  }
}
