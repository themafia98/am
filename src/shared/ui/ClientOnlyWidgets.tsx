'use client'

import dynamic from 'next/dynamic'

const ScrollProgressBar = dynamic(
  () => import('./ScrollProgressBar').then((m) => m.ScrollProgressBar),
  { ssr: false },
)

const ScrollRevealObserver = dynamic(
  () => import('./ScrollRevealObserver').then((m) => m.ScrollRevealObserver),
  { ssr: false },
)

export function ClientOnlyWidgets() {
  return (
    <>
      <ScrollProgressBar />
      <ScrollRevealObserver />
    </>
  )
}
