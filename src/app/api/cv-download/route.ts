import { type NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { logger } from '@/shared/lib/logger'

const PDF_FILENAME = 'Pavel_Piatrovich_CV_2026_1905.pdf'

export async function GET(req: NextRequest): Promise<NextResponse> {
  logger.info('cv:download', {
    country: req.headers.get('x-vercel-ip-country') ?? '-',
    ua: req.headers.get('user-agent') ?? '-',
    ref: req.headers.get('referer') ?? '-',
  })

  try {
    const filePath = join(process.cwd(), 'public', PDF_FILENAME)
    const buffer = await readFile(filePath)

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${PDF_FILENAME}"`,
        'Content-Length': String(buffer.length),
        'Cache-Control': 'public, max-age=86400',
      },
    })
  } catch {
    return NextResponse.redirect(new URL(`/${PDF_FILENAME}`, req.url))
  }
}
