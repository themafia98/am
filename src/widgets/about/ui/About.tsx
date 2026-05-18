import { PERSONAL, ABOUT_TAGS } from '@/shared/config/cv'
import { SectionHeader } from '@/shared/ui'

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader number="01" title="About" />

        <div className="grid lg:grid-cols-[1fr_200px] gap-12 items-start">
          <div>
            <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
              {PERSONAL.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {ABOUT_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-white/35 border border-white/[0.08] px-3 py-1.5 rounded-full hover:border-cyan-500/30 hover:text-cyan-400/70 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center text-center pt-2">
            <div
              aria-hidden
              className="font-syne font-bold text-[120px] leading-none text-white/[0.04] select-none"
            >
              {PERSONAL.yearsOfExperience}+
            </div>
            <p className="font-mono text-xs text-white/25 tracking-[0.2em] uppercase -mt-4">
              years of
              <br />
              experience
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
