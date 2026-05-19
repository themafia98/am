'use client'

import { useEffect, useState } from 'react'

export function ScrollProgressBar(): React.ReactElement {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 z-[60] h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 pointer-events-none"
      style={{ width: `${progress}%` }}
    />
  )
}
