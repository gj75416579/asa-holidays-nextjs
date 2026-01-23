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

    const params = body.params || {}
    const data = await getData('reward/list', params, { Authorization: authHeader })
    return NextResponse.json(data)
  } catch (error) {
    console.error('Reward list error:', error)
    return NextResponse.json({ error: 'Failed to fetch rewards' }, { status: 500 })
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

    const { searchParams } = new URL(request.url)
    const params = Object.fromEntries(searchParams.entries())
    const data = await getData('reward/list', params, { Authorization: authHeader })
    return NextResponse.json(data)
  } catch (error) {
    console.error('Reward list error:', error)
    return NextResponse.json({ error: 'Failed to fetch rewards' }, { status: 500 })
  }
}