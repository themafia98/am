'use client'

import { useState, useEffect } from 'react'
import { NAV_ITEMS, PERSONAL } from '@/lib/data/cv'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.25 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled || mobileOpen
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/[0.06]'
            : 'bg-transparent',
        )}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={closeMobile}
            className="font-mono text-sm text-white/30 hover:text-white/70 transition-colors duration-200"
          >
            <span className="text-cyan-500 font-bold">PP</span>
            <span className="text-white/20 mx-1">/</span>
            <span>portfolio</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'font-mono text-[11px] tracking-[0.2em] uppercase transition-colors duration-200',
                  activeSection === item.href.slice(1)
                    ? 'text-cyan-400'
                    : 'text-white/35 hover:text-white/70',
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="md:hidden flex flex-col justify-center items-end gap-[5px] w-8 h-8 shrink-0"
          >
            <span
              className={cn(
                'block h-px bg-white/60 transition-all duration-300 origin-right',
                mobileOpen ? 'rotate-[-45deg] w-5 translate-y-[3px]' : 'w-5',
              )}
            />
            <span
              className={cn(
                'block h-px bg-white/60 transition-all duration-300',
                mobileOpen ? 'opacity-0 w-0' : 'w-3',
              )}
            />
            <span
              className={cn(
                'block h-px bg-white/60 transition-all duration-300 origin-right',
                mobileOpen ? 'rotate-[45deg] w-5 -translate-y-[3px]' : 'w-5',
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col bg-[#0a0a0a] pt-24 px-8 pb-10 md:hidden',
          'transition-all duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      >
        <nav className="flex flex-col gap-2 mt-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              className={cn(
                'font-syne font-bold text-5xl py-3 border-b border-white/[0.05] transition-colors duration-200',
                activeSection === item.href.slice(1)
                  ? 'text-cyan-400'
                  : 'text-white/25 hover:text-white',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bottom contacts */}
        <div className="mt-auto flex flex-col gap-3">
          <a
            href={`mailto:${PERSONAL.email}`}
            className="font-mono text-xs text-white/25 hover:text-white/60 transition-colors"
          >
            {PERSONAL.email}
          </a>
          <a
            href={PERSONAL.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-white/25 hover:text-white/60 transition-colors"
          >
            linkedin.com/in/{PERSONAL.linkedin}
          </a>
        </div>
      </div>
    </>
  )
}
