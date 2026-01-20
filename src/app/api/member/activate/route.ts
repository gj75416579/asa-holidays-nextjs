import { NextResponse } from 'next/server'
import { postData } from '@/lib/api/server'

export async function POST(request: Request) {
  if (!process.env.API_BASE_URL || !process.env.COMPANY_ID) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const body = await request.json()
  const authHeader = request.headers.get('Authorization') || body.Authorization
    const payload = { data: JSON.stringify(body) }
    const headers = authHeader ? { Authorization: authHeader } : {}
    const data = await postData('member/b2c/activity', payload, headers)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Member activate error:', error)
    return NextResponse.json({ error: 'Failed to activate member' }, { status: 500 })
  }
}