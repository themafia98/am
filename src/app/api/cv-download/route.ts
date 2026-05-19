import { type NextRequest, NextResponse } from 'next/server'
import { logger } from '@/shared/lib/logger'

export function GET(req: NextRequest): NextResponse {
  logger.info('cv:download', {
    country: req.headers.get('x-vercel-ip-country') ?? '-',
    ua: req.headers.get('user-agent') ?? '-',
    ref: req.headers.get('referer') ?? '-',
  })

  return NextResponse.redirect(new URL('/Pavel_Piatrovich_CV_2026_1405.pdf', req.url))
}
