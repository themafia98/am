import { Button } from '@/shared/ui'
import { ArrowDownIcon, ArrowUpRightIcon, PinIcon } from '@/shared/ui/icons'
import { OpenToWorkBadge } from '@/shared/ui/OpenToWorkBadge'
import type { CvData } from '@/shared/types'

export function Hero({ cv }: { cv: CvData }) {
  const { personal, heroStats } = cv

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="mb-4">
          <h1 className="font-syne font-bold leading-[0.88] tracking-tighter">
            <span className="block text-[clamp(2.75rem,11vw,8.5rem)] text-white">
              {personal.firstName}
            </span>
            <span className="block text-[clamp(2.75rem,11vw,8.5rem)] text-cyan-400">
              {personal.lastName}
            </span>
          </h1>
        </div>

        <p className="font-mono text-white/40 text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.28em] uppercase mb-3">
          {personal.title}&nbsp;&nbsp;·&nbsp;&nbsp;{personal.subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-3 mb-8 sm:mb-10">
          <p className="font-mono text-white/45 text-[9px] sm:text-xs tracking-[0.2em] uppercase flex items-center gap-2">
            <PinIcon className="text-white/35" />
            <span>{personal.location}</span>
          </p>
          <OpenToWorkBadge />
        </div>

        <div className="hero-buttons flex flex-col gap-4 mb-10 sm:mb-14">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="primary"
              href="/api/cv-download"
              download={personal.cvFileName}
              className="justify-center sm:justify-start"
            >
              <ArrowDownIcon />
              Download CV
            </Button>
            <Button
              variant="ghost"
              href={personal.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="justify-center sm:justify-start"
            >
              <ArrowUpRightIcon />
              View CV
            </Button>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-white/30 hover:text-white/65 transition-colors duration-200"
            >
              LinkedIn
              <ArrowUpRightIcon />
            </a>
            <span className="text-white/10">·</span>
            <a
              href={`mailto:${personal.email}`}
              className="font-mono text-xs text-white/30 hover:text-white/65 transition-colors duration-200"
            >
              {personal.email}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 w-fit divide-x divide-white/[0.06] border border-white/[0.08] rounded-xl overflow-hidden">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-6 sm:px-8 py-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <span className="font-syne font-bold text-xl sm:text-2xl text-white">{stat.value}</span>
              <span className="font-mono text-[9px] sm:text-[10px] text-white/25 tracking-wider uppercase mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll-cue absolute bottom-5 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 pointer-events-none">
        <span className="font-mono text-[9px] text-white/15 tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-7 bg-gradient-to-b from-white/15 to-transparent" />
      </div>
    </section>
  )
}
