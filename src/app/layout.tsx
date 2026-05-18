import type { Metadata } from 'next'
import { Syne, Space_Mono } from 'next/font/google'
import { preconnect, prefetchDNS } from 'react-dom'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'

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
  preconnect('https://fonts.googleapis.com')
  preconnect('https://fonts.gstatic.com', { crossOrigin: 'anonymous' })
  prefetchDNS('https://linkedin.com')
  prefetchDNS('https://wa.me')

  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable}`}>
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
