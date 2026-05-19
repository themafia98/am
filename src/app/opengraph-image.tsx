import { ImageResponse } from 'next/og'

export const alt = 'Pavel Piatrovich — Frontend Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 88px',
          position: 'relative',
        }}
      >
        {/* top-right decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 440,
            height: 440,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -20,
            right: -20,
            width: 300,
            height: 300,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.04)',
          }}
        />

        {/* status pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#06b6d4',
            }}
          />
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: 16,
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Currently @ Solbeg · Warsaw, Poland
          </span>
        </div>

        {/* name */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 40 }}>
          <span style={{ fontSize: 112, fontWeight: 700, color: '#ffffff', lineHeight: 0.88 }}>
            Pavel
          </span>
          <span
            style={{
              fontSize: 112,
              fontWeight: 700,
              lineHeight: 0.88,
              background: 'linear-gradient(135deg, #06b6d4 0%, #e0f2fe 50%, #06b6d4 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Piatrovich
          </span>
        </div>

        {/* subtitle */}
        <span
          style={{
            fontFamily: 'monospace',
            fontSize: 20,
            color: 'rgba(255,255,255,0.25)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}
        >
          React · React Native · TypeScript
        </span>
      </div>
    ),
    { ...size },
  )
}