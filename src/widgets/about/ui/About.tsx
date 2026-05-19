import { SectionHeader } from '@/shared/ui'
import type { CvData } from '@/shared/types'

export function About({ cv }: { cv: CvData }): React.ReactElement {
  const { personal, aboutTags } = cv

  return (
    <section id="about" data-reveal className="py-16 sm:py-24 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader number="01" title="About" />

        <div className="grid lg:grid-cols-[1fr_200px] gap-12 items-start">
          <div>
            <p className="text-lg text-white/65 leading-relaxed max-w-2xl">
              {personal.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {aboutTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-white/40 border border-white/[0.08] px-3 py-1.5 rounded-full hover:border-white/20 hover:text-white/65 transition-colors cursor-default"
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
              {personal.yearsOfExperience}+
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
