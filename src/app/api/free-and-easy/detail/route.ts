import { NextResponse } from 'next/server'
import { getData } from '@/lib/api/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Package ID is required' }, { status: 400 })
  }

  if (!process.env.API_BASE_URL || !process.env.COMPANY_ID) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const data = await getData('api/b2c/tour/' + id)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Free and easy detail error:', error)
    return NextResponse.json({ error: 'Failed to fetch package' }, { status: 500 })
  }
}