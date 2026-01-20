import { NextResponse } from 'next/server'
import { getData } from '@/lib/api/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Tour Code ID is required' }, { status: 400 })
  }

  if (!process.env.API_BASE_URL || !process.env.COMPANY_ID) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const data = await getData('api/b2c/tour-code/room-configurations/' + id)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Room configuration error:', error)
    return NextResponse.json({ error: 'Failed to fetch room configuration' }, { status: 500 })
  }
}