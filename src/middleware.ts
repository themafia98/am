import { type NextRequest, NextResponse } from 'next/server'
import { logger } from '@/shared/lib/logger'

export function middleware(req: NextRequest): NextResponse {
  const t0 = Date.now()
  const requestId = crypto.randomUUID()

  const res = NextResponse.next()
  res.headers.set('X-Request-Id', requestId)
  res.headers.set('X-Response-Time', `${Date.now() - t0}ms`)

  logger.info('request', {
    requestId,
    method: req.method,
    path: req.nextUrl.pathname,
    country: req.headers.get('x-vercel-ip-country') ?? '-',
    ua: req.headers.get('user-agent') ?? '-',
  })

  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|icon\\.svg|favicon\\.ico).*)'],
}
