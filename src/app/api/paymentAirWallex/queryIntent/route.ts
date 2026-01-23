import { NextResponse } from 'next/server'
import { postDataJson } from '@/lib/api/server'

export async function POST(request: Request) {
  if (!process.env.API_BASE_URL || !process.env.COMPANY_ID) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const body = await request.json()
    const data = await postDataJson('airwallex/intent/query', body)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Airwallex query intent error:', error)
    return NextResponse.json({ error: 'Failed to query intent' }, { status: 500 })
  }
}