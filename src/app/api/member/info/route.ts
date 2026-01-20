import { NextResponse } from 'next/server'
import { getData } from '@/lib/api/server'

export async function POST(request: Request) {
  if (!process.env.API_BASE_URL || !process.env.COMPANY_ID) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const body = await request.json()
    const authHeader = body.Authorization

    if (!authHeader) {
      return NextResponse.json({ error: 'Authorization is required' }, { status: 401 })
    }

    const data = await getData('member/b2c/info', {}, { Authorization: authHeader })
    return NextResponse.json(data)
  } catch (error) {
    console.error('Member info error:', error)
    return NextResponse.json({ error: 'Failed to fetch member info' }, { status: 500 })
  }
}

export async function GET(request: Request) {
  if (!process.env.API_BASE_URL || !process.env.COMPANY_ID) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const authHeader = request.headers.get('Authorization')

    if (!authHeader) {
      return NextResponse.json({ error: 'Authorization is required' }, { status: 401 })
    }

    const data = await getData('member/b2c/info', {}, { Authorization: authHeader })
    return NextResponse.json(data)
  } catch (error) {
    console.error('Member info error:', error)
    return NextResponse.json({ error: 'Failed to fetch member info' }, { status: 500 })
  }
}