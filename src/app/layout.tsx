import type { Metadata } from 'next'
import { Syne, Space_Mono } from 'next/font/google'
import { preconnect, prefetchDNS } from 'react-dom'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { ClientOnlyWidgets } from '@/shared/ui/ClientOnlyWidgets'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Pavel Piatrovich - Frontend Engineer',
  description:
    'Frontend Engineer with 6+ years of experience specialising in React, React Native, and TypeScript. Based in Warsaw, Poland.',
  keywords: [
    'Frontend Engineer',
    'React Developer',
    'React Native',
    'TypeScript',
    'Warsaw',
    'Poland',
    'Pavel Piatrovich',
  ],
  openGraph: {
    title: 'Pavel Piatrovich - Frontend Engineer',
    description:
      'Frontend Engineer with 6+ years of experience specialising in React, React Native, and TypeScript.',
    type: 'website',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pavel Piatrovich - Frontend Engineer',
    description: 'Frontend Engineer · React · React Native · TypeScript · Warsaw',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pavel Piatrovich',
  jobTitle: 'Frontend Engineer',
  url: siteUrl,
  email: 'pasha.petrovich98@gmail.com',
  sameAs: ['https://linkedin.com/in/pavel-software-anywhere'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Warsaw',
    addressCountry: 'PL',
  },
  knowsAbout: ['React', 'React Native', 'TypeScript', 'JavaScript', 'Frontend Engineering'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  preconnect('https://fonts.googleapis.com')
  preconnect('https://fonts.gstatic.com', { crossOrigin: 'anonymous' })
  prefetchDNS('https://linkedin.com')
  prefetchDNS('https://wa.me')

  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Intercept Cmd+P / Ctrl+P before React mounts - opens CV PDF inline */}
        <script dangerouslySetInnerHTML={{
          __html: `!function(){document.addEventListener('keydown',function(e){if((e.metaKey||e.ctrlKey)&&'p'===e.key.toLowerCase()){e.preventDefault();e.stopImmediatePropagation();window.open('/api/cv-view','_blank');}},true);}();`
        }} />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">
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
