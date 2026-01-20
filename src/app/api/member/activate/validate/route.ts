import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const token = body.token

    if (!token) {
      return NextResponse.json({ error: 'Activation token is required' }, { status: 400 })
    }

    return NextResponse.json({ success: true, data: { token } })
  } catch (error) {
    console.error('Activation token validation error:', error)
    return NextResponse.json({ error: 'Failed to validate activation token' }, { status: 500 })
  }
}