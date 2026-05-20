import { type NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

const PDF_FILENAME = 'Pavel_Piatrovich_CV_2026_1905.pdf'

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
