import { SectionHeader } from '@/shared/ui'
import type { CvData } from '@/shared/types'

export function About({ cv }: { cv: CvData }): React.ReactElement {
  const { personal, aboutTags } = cv

  return (
    <section id="about" data-reveal className="border-t border-rule py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader index="01" title="About" note={`${personal.yearsOfExperience}+ years`} />

        <div className="grid gap-10 lg:grid-cols-[1fr_16rem] lg:gap-16">
          {/* Lead paragraph, set large with a drop-cap opening */}
          <p className="max-w-measure font-display text-2xl leading-[1.35] sm:text-[1.75rem] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[3.75rem] first-letter:leading-[0.8] first-letter:text-accent">
            {personal.summary}
          </p>

          <ul className="flex flex-col self-start border-t border-rule">
            {aboutTags.map((tag) => (
              <li
                key={tag}
                className="border-b border-rule py-2.5 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
