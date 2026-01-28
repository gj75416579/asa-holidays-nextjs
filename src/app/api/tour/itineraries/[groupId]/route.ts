import { NextResponse } from 'next/server'
import { getData } from '@/lib/api/server'

export const dynamic = 'force-dynamic'

export async function GET(_: Request, context: { params: { groupId: string } }) {
  if (!process.env.API_BASE_URL || !process.env.COMPANY_ID) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const { groupId } = context.params
    if (!groupId) {
      return NextResponse.json({ error: 'Missing itineraryGroupId' }, { status: 400 })
    }
    console.log('[itineraries] request:', { groupId })
    const data = await getData(`api/b2c/tour/itineraries/${encodeURIComponent(groupId)}`)
    console.log('[itineraries] response:', data)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Itineraries GET error:', error)
    return NextResponse.json({ error: 'Failed to fetch itineraries' }, { status: 500 })
  }
}
