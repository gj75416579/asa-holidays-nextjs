import { NextResponse } from 'next/server'
import { postDataJson } from '@/lib/api/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  if (!process.env.API_BASE_URL || !process.env.COMPANY_ID) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const position = searchParams.get('position') || 'Home Page'
    const data = await postDataJson('api/b2c/banner/list', { position })
    return NextResponse.json(data)
  } catch (error) {
    console.error('Banners GET error:', error)
    return NextResponse.json({ error: 'Failed to fetch banners' }, { status: 500 })
  }
}

