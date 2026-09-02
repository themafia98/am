import { ImageResponse } from 'next/og'

export const alt = 'Pavel Piatrovich - Frontend Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const PAPER = '#f2efe8'
const INK = '#16150f'
const FAINT = '#7d786c'
const RULE = '#d5cfc1'
const ACCENT = '#9c3b1c'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: PAPER,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
        }}
      >
        {/* Masthead rule */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: 18,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: FAINT,
            }}
          >
            <span>Portfolio</span>
            <span>Warsaw, Poland</span>
          </div>
          <div style={{ height: 1, background: RULE, marginTop: 16 }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 132, lineHeight: 0.88, color: INK, letterSpacing: '-0.03em' }}>
            Pavel
          </span>
          <span
            style={{
              fontSize: 132,
              lineHeight: 0.88,
              color: ACCENT,
              letterSpacing: '-0.03em',
              fontStyle: 'italic',
            }}
          >
            Piatrovich
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: 1, background: INK, marginBottom: 20 }} />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: 24,
              color: INK,
            }}
          >
            <span>Frontend Engineer</span>
            <span style={{ color: FAINT, fontSize: 20, letterSpacing: '0.08em' }}>
              React · React Native · TypeScript
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
