'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PERSONAL } from '@/shared/config/cv'
import { NAV_ITEMS } from '@/shared/config/nav'
import { cn } from '@/shared/lib/cn'

function sectionId(href: string): string | null {
  const [, hash] = href.split('#')
  return hash ?? null
}

function isNavItemActive(href: string, pathname: string, activeSection: string): boolean {
  const id = sectionId(href)
  if (id) return pathname === '/' && activeSection === id
  return pathname === href || pathname.startsWith(`${href}/`)
}

const SECTION_ITEMS = NAV_ITEMS.filter((item) => item.href.includes('#'))
const PAGE_ITEMS = NAV_ITEMS.filter((item) => !item.href.includes('#'))

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (pathname !== '/') return

    const ids = SECTION_ITEMS.map((item) => sectionId(item.href)).filter((id): id is string => id !== null)
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
  }, [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
          scrolled || mobileOpen ? 'border-b border-rule bg-paper' : 'border-b border-transparent',
        )}
      >
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link
            href="/"
            onClick={closeMobile}
            className="font-display text-lg transition-colors hover:text-accent"
          >
            {PERSONAL.name}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {SECTION_ITEMS.map((item) => {
              const isActive = isNavItemActive(item.href, pathname, activeSection)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-[11px] uppercase tracking-label transition-colors duration-200',
                    'border-b pb-0.5',
                    isActive
                      ? 'border-accent text-accent'
                      : 'border-transparent text-ink-faint hover:text-ink',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}

            {PAGE_ITEMS.length > 0 && <span aria-hidden className="h-4 w-px bg-rule" />}

            {PAGE_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'font-display text-lg italic transition-colors duration-200',
                  isNavItemActive(item.href, pathname, activeSection)
                    ? 'text-accent'
                    : 'text-ink hover:text-accent',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="flex h-8 w-8 shrink-0 flex-col items-end justify-center gap-[6px] md:hidden"
          >
            <span
              className={cn(
                'block h-px w-6 origin-right bg-ink transition-transform duration-300',
                mobileOpen && 'translate-y-[3px] rotate-[-45deg]',
              )}
            />
            <span
              className={cn(
                'block h-px w-6 origin-right bg-ink transition-transform duration-300',
                mobileOpen && '-translate-y-[3px] rotate-[45deg]',
              )}
            />
          </button>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col bg-paper px-6 pb-10 pt-24 md:hidden',
          'transition-opacity duration-300',
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <nav className="mt-4 flex flex-col">
          {SECTION_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              className={cn(
                'flex items-baseline gap-4 border-b border-rule py-4 font-display text-4xl transition-colors',
                isNavItemActive(item.href, pathname, activeSection) ? 'text-accent' : 'text-ink',
              )}
            >
              <span className="tnum text-[11px] uppercase tracking-label text-ink-ghost">
                {String(i + 1).padStart(2, '0')}
              </span>
              {item.label}
            </Link>
          ))}

          {PAGE_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              className={cn(
                'flex items-baseline gap-4 border-b border-rule py-4 font-display text-4xl italic transition-colors',
                isNavItemActive(item.href, pathname, activeSection) ? 'text-accent' : 'text-ink',
              )}
            >
              <span aria-hidden className="text-[11px] not-italic text-ink-ghost">
                &rarr;
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-2 text-sm text-ink-soft">
          <a href={`mailto:${PERSONAL.email}`} className="transition-colors hover:text-accent">
            {PERSONAL.email}
          </a>
          <a
            href={PERSONAL.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            github.com/{PERSONAL.github}
          </a>
          <a
            href={PERSONAL.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            linkedin.com/in/{PERSONAL.linkedin}
          </a>
        </div>
      </div>
    </>
  )
}
