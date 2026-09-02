'use client'

import dynamic from 'next/dynamic'

export const ScrollRevealObserver = dynamic(
  () => import('./ScrollRevealObserver').then((m) => m.ScrollRevealObserver),
  { ssr: false },
)
