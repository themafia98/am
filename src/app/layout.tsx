import type { Metadata } from 'next'
import { preconnect, prefetchDNS } from 'react-dom'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { ClientOnlyWidgets } from '@/shared/ui/ClientOnlyWidgets'
import { PERSON_JSON_LD, SITE_URL } from './constants'
import { displaySerif, inter } from './fonts'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Pavel Piatrovich - Frontend Engineer',
  description:
    'Frontend Engineer with 7+ years of experience specialising in React, React Native, and TypeScript. Based in Warsaw, Poland.',
  keywords: [
    'Frontend Engineer',
    'React Developer',
    'React Native',
    'TypeScript',
    'Warsaw',
    'Poland',
    'Pavel Piatrovich',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Pavel Piatrovich - Frontend Engineer',
    description:
      'Frontend Engineer with 7+ years of experience specialising in React, React Native, and TypeScript.',
    type: 'website',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pavel Piatrovich - Frontend Engineer',
    description: 'Frontend Engineer · React · React Native · TypeScript · Warsaw',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  preconnect('https://fonts.googleapis.com')
  preconnect('https://fonts.gstatic.com', { crossOrigin: 'anonymous' })
  prefetchDNS('https://linkedin.com')
  prefetchDNS('https://wa.me')

  return (
    <html lang="en" className={`${displaySerif.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
        {/* Intercept Cmd+P / Ctrl+P before React mounts - opens CV PDF inline */}
        <script dangerouslySetInnerHTML={{
          __html: `!function(){document.addEventListener('keydown',function(e){if((e.metaKey||e.ctrlKey)&&'p'===e.key.toLowerCase()){e.preventDefault();e.stopImmediatePropagation();window.open('/api/cv-view','_blank');}},true);}();`
        }} />
      </head>
      <body className="bg-paper font-sans text-ink antialiased">
        <ClientOnlyWidgets />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
