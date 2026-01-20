import { NextResponse } from 'next/server'
import { getData } from '@/lib/api/server'

export async function POST(request: Request) {
  if (!process.env.API_BASE_URL || !process.env.COMPANY_ID) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const body = await request.json()
    const authHeader = body.Authorization
    const id = body.id

    if (!authHeader) {
      return NextResponse.json({ error: 'Authorization is required' }, { status: 401 })
    }

    if (!id) {
      return NextResponse.json({ error: 'Redemption ID is required' }, { status: 400 })
    }

    const data = await getData('member/b2c/redemption/' + id, {}, { Authorization: authHeader })
    return NextResponse.json(data)
  } catch (error) {
    console.error('Redemption details error:', error)
    return NextResponse.json({ error: 'Failed to fetch redemption details' }, { status: 500 })
  }
}