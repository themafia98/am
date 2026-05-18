import type { Metadata } from 'next'
import { Syne, Space_Mono } from 'next/font/google'
import { preconnect, prefetchDNS } from 'react-dom'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

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

// metadataBase enables absolute OG/Twitter image URLs required by Vercel + social crawlers.
// VERCEL_PROJECT_PRODUCTION_URL is set automatically by Vercel on every deployment.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Pavel Piatrovich — Frontend Engineer',
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
    title: 'Pavel Piatrovich — Frontend Engineer',
    description:
      'Frontend Engineer with 6+ years of experience specialising in React, React Native, and TypeScript.',
    type: 'website',
    url: siteUrl,
  },
  twitter: {
    card: 'summary',
    title: 'Pavel Piatrovich — Frontend Engineer',
    description: 'Frontend Engineer · React · React Native · TypeScript · Warsaw',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // React 19 resource APIs — emits <link> hints into <head> during SSR.
  // preconnect: establish early connections to external origins.
  preconnect('https://fonts.googleapis.com')
  preconnect('https://fonts.gstatic.com', { crossOrigin: 'anonymous' })
  // prefetchDNS: cheap DNS lookup for origins the user may navigate to.
  prefetchDNS('https://linkedin.com')
  prefetchDNS('https://wa.me')

  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable}`}>
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
