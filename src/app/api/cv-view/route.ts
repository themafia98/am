import { type NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

const PDF_FILENAME = 'pavel-piatrovich-cv-2026-06-02-up.pdf'

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const filePath = join(process.cwd(), 'public', PDF_FILENAME)
    const buffer = await readFile(filePath)

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline',
        'Cache-Control': 'public, max-age=86400',
      },
    })
  } catch {
    return NextResponse.redirect(new URL(`/${PDF_FILENAME}`, req.url))
  }
}
