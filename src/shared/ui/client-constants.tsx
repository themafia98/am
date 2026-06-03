'use client'

import dynamic from 'next/dynamic'

export const ScrollProgressBar = dynamic(
  () => import('./ScrollProgressBar').then((m) => m.ScrollProgressBar),
  { ssr: false },
)

export const ScrollRevealObserver = dynamic(
  () => import('./ScrollRevealObserver').then((m) => m.ScrollRevealObserver),
  { ssr: false },
)
