import { NextResponse } from 'next/server'
import { getData } from '@/lib/api/server'

type RouteParams = {
  params: {
    uri: string[]
  }
}

export async function GET(_request: Request, { params }: RouteParams) {
  const uriParts = params.uri ?? []
  const uriPath = uriParts.join('/')

  if (!uriPath) {
    return NextResponse.json({ error: 'SEO uri is required' }, { status: 400 })
  }

  if (!process.env.API_BASE_URL || !process.env.COMPANY_ID) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const data = await getData(`system/seo/${uriPath}`)
    return NextResponse.json(data)
  } catch (error) {
    console.error('SEO lookup error:', error)
    return NextResponse.json({ error: 'Failed to fetch SEO data' }, { status: 500 })
  }
}
