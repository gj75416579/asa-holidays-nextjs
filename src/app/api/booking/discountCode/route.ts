import { NextResponse } from 'next/server'
import { postDataJson } from '@/lib/api/server'

export async function POST(request: Request) {
  if (!process.env.API_BASE_URL || !process.env.COMPANY_ID) {
    console.error('Environment variables missing')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const body = await request.json()
    const response = await postDataJson<{
      errorCode?: string
      error?: string
      data?: unknown
    }>('api/b2c/tour-tranx/seize', body)

    if (response?.errorCode && response.errorCode !== '0') {
      if (response.errorCode === '36002') {
        return NextResponse.json(
          {
            success: false,
            error: 'This promo code is no longer valid',
            errorCode: response.errorCode,
          },
          { status: 400 }
        )
      }

      if (response.errorCode === '36003') {
        return NextResponse.json(
          {
            success: false,
            error: 'This promo code has already been applied',
            errorCode: response.errorCode,
          },
          { status: 400 }
        )
      }

      return NextResponse.json(
        {
          success: false,
          error: response.error || 'Failed to apply promo code',
          errorCode: response.errorCode,
        },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      data: response.data,
    })
  } catch (error) {
    console.error('Booking discount code error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process promo code',
      },
      { status: 500 }
    )
  }
}
