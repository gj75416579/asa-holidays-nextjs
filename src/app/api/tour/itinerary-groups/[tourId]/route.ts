import { NextResponse } from 'next/server'
import { getData } from '@/lib/api/server'

export const dynamic = 'force-dynamic'

export async function GET(_: Request, context: { params: { tourId: string } }) {
  if (!process.env.API_BASE_URL || !process.env.COMPANY_ID) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const { tourId } = context.params
    if (!tourId) {
      return NextResponse.json({ error: 'Missing tourId' }, { status: 400 })
    }
    console.log('[itinerary-groups] request:', { tourId })
    const data = await getData(`api/b2c/tour/itinerary-groups/${encodeURIComponent(tourId)}`)
    console.log('[itinerary-groups] response:', data)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Itinerary groups GET error:', error)
    return NextResponse.json({ error: 'Failed to fetch itinerary groups' }, { status: 500 })
  }
}
