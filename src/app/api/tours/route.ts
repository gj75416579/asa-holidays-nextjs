import { NextResponse } from 'next/server';
import { getData, postDataJson } from '@/lib/api/server';

const UPSTREAM_TOURS_ENDPOINT = 'tours'; // TODO: replace with your upstream endpoint.

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const params = Object.fromEntries(searchParams.entries());
    const data = await getData(UPSTREAM_TOURS_ENDPOINT, params);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Tours GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch tours' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = await postDataJson(UPSTREAM_TOURS_ENDPOINT, body);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Tours POST error:', error);
    return NextResponse.json({ error: 'Failed to submit tours request' }, { status: 500 });
  }
}
