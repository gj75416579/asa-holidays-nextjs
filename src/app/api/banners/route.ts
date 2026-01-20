import { NextResponse } from 'next/server';
import { getData } from '@/lib/api/server';

const UPSTREAM_BANNERS_ENDPOINT = 'banners'; // TODO: replace with your upstream endpoint.

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const params = Object.fromEntries(searchParams.entries());
    const data = await getData(UPSTREAM_BANNERS_ENDPOINT, params);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Banners GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch banners' }, { status: 500 });
  }
}
