import { NextResponse } from 'next/server';
import { getData, postDataJson } from '@/lib/api/server';

const UPSTREAM_SECTORS_ENDPOINT = 'sectors'; // TODO: replace with your upstream endpoint.

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const params = Object.fromEntries(searchParams.entries());
    const data = await getData(UPSTREAM_SECTORS_ENDPOINT, params);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Sectors GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch sectors' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = await postDataJson(UPSTREAM_SECTORS_ENDPOINT, body);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Sectors POST error:', error);
    return NextResponse.json({ error: 'Failed to submit sectors request' }, { status: 500 });
  }
}
