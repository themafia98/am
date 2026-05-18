import { PERSONAL, HERO_STATS, MARQUEE_SKILLS } from '@/lib/data/cv'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const doubled = [...MARQUEE_SKILLS, ...MARQUEE_SKILLS]

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Ambient glow blobs */}
      <div
        aria-hidden
        className="absolute top-1/3 right-[-10%] w-[550px] h-[550px] rounded-full bg-cyan-500/[0.04] blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-1/4 left-[-8%] w-[400px] h-[400px] rounded-full bg-blue-600/[0.04] blur-[100px] pointer-events-none"
      />

      {/* Dot matrix background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* Concentric arcs — top-right decorative element */}
      <svg
        aria-hidden
        className="absolute -top-32 -right-32 w-[600px] h-[600px] pointer-events-none opacity-[0.045]"
        viewBox="0 0 600 600"
        fill="none"
      >
        {[120, 200, 280, 360, 440].map((r) => (
          <circle key={r} cx="600" cy="0" r={r} stroke="white" strokeWidth="1" />
        ))}
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 w-full">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] max-w-full">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse-dot flex-shrink-0" />
          <span className="font-mono text-[10px] sm:text-xs text-white/40 truncate">
            Currently @{' '}
            <span className="text-white/60">{PERSONAL.currentCompany}</span>
            <span className="hidden sm:inline"> &nbsp;·&nbsp; {PERSONAL.location}</span>
          </span>
        </div>

        {/* Name — oversized display, smaller floor on mobile */}
        <div className="mb-4">
          <h1 className="font-syne font-bold leading-[0.88] tracking-tighter">
            <span className="block text-[clamp(2.75rem,11vw,8.5rem)] text-white">
              {PERSONAL.firstName}
            </span>
            <span className="block text-[clamp(2.75rem,11vw,8.5rem)] gradient-text">
              {PERSONAL.lastName}
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="font-mono text-white/30 text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.28em] uppercase mb-8 sm:mb-10">
          {PERSONAL.title}&nbsp;&nbsp;·&nbsp;&nbsp;{PERSONAL.subtitle}
        </p>

        {/* CTA row — full-width stack on mobile, inline on sm+ */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-10 sm:mb-14">
          <Button
            variant="primary"
            href={PERSONAL.cvPath}
            download={PERSONAL.cvFileName}
            className="justify-center sm:justify-start"
          >
            ↓ Download CV
          </Button>
          <Button
            variant="ghost"
            href={PERSONAL.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="justify-center sm:justify-start"
          >
            ↗ View CV
          </Button>
          <Button
            variant="ghost"
            href={PERSONAL.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="justify-center sm:justify-start"
          >
            LinkedIn
          </Button>
          <Button
            variant="ghost"
            href={`mailto:${PERSONAL.email}`}
            className="justify-center sm:justify-start"
          >
            Email
          </Button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 w-fit divide-x divide-white/[0.06] border border-white/[0.08] rounded-xl overflow-hidden">
          {HERO_STATS.map((stat) => (
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

      {/* Marquee strip */}
      <div className="relative z-10 w-full overflow-hidden border-t border-white/[0.05] py-3 sm:py-4 bg-white/[0.01]">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((skill, i) => (
            <span key={i} className="inline-flex items-center gap-3 sm:gap-4 mx-3 sm:mx-4">
              <span className="font-mono text-[10px] sm:text-xs text-white/25 tracking-widest">{skill}</span>
              <span className="text-cyan-500/25 text-[7px] sm:text-[8px]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue — hidden on very short screens */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 pointer-events-none">
        <span className="font-mono text-[9px] text-white/15 tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-7 bg-gradient-to-b from-white/15 to-transparent" />
      </div>
    </section>
  )
}
