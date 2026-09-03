import { Button } from '@/shared/ui'
import { ArrowDownIcon, ArrowUpRightIcon } from '@/shared/ui/icons'
import { OpenToWorkBadge } from '@/shared/ui/OpenToWorkBadge'
import { LABEL_CLASS } from '@/shared/ui/constants'
import { cn } from '@/shared/lib/cn'
import type { CvData } from '@/shared/types'

export function Hero({ cv }: { cv: CvData }) {
  const { personal, heroStats } = cv

  return (
    <section className="relative flex min-h-[92vh] flex-col justify-center pt-16">
      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        {/* Masthead line - the page announces itself like a printed cover */}
        <div className="mb-8 flex items-center gap-5 sm:mb-10">
          <span className={LABEL_CLASS}>Portfolio</span>
          <span className="h-px flex-1 bg-rule" />
          <span className={cn(LABEL_CLASS, 'tnum')}>{personal.location}</span>
        </div>

        <h1 className="font-display leading-[0.85] tracking-[-0.02em]">
          <span className="block text-[clamp(3rem,10vw,6.5rem)]">{personal.firstName}</span>
          <span className="block pl-[0.06em] text-[clamp(3rem,10vw,6.5rem)] italic text-accent">
            {personal.lastName}
          </span>
        </h1>

        <div className="mt-10 border-t border-ink pt-5 sm:mt-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="max-w-measure font-display text-xl leading-snug sm:text-2xl">
              {personal.title}
              <span className="text-ink-faint"> — {personal.subtitle}</span>
            </p>
            <OpenToWorkBadge />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 sm:mt-12 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex flex-col gap-3 sm:flex-row">
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
              Read online
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-soft">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              GitHub
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {personal.email}
            </a>
          </div>
        </div>

        {/* Figures, set as a printed table rather than glowing stat cards */}
        <dl className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-rule pt-6 sm:mt-16">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-3">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="tnum font-display text-3xl leading-none sm:text-4xl">{stat.value}</dd>
              <span className={cn(LABEL_CLASS, 'max-w-[7rem] leading-tight')}>{stat.label}</span>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
