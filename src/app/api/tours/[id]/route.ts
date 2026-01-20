import { NextResponse } from 'next/server';
import { getData } from '@/lib/api/server';

const UPSTREAM_TOUR_DETAIL_ENDPOINT = 'tours'; // TODO: replace with your upstream endpoint.

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await getData(`${UPSTREAM_TOUR_DETAIL_ENDPOINT}/${params.id}`);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Tour detail GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch tour' }, { status: 500 });
  }
}
