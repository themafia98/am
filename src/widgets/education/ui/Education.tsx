import { SectionHeader } from '@/shared/ui'
import { EducationCard, CertificationCard } from '@/entities/education'
import { LABEL_CLASS } from '@/shared/ui/constants'
import type { CvData } from '@/shared/types'

export function Education({ cv }: { cv: CvData }): React.ReactElement {
  const { educations, certifications, languages } = cv

  return (
    <section id="education" data-reveal className="border-t border-rule py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader index="05" title="Education" />

        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className={`${LABEL_CLASS} mb-4`}>Degree</h3>
            <div className="border-t border-ink">
              {educations.map((edu) => (
                <EducationCard key={edu.degree} edu={edu} />
              ))}
            </div>
          </div>

          <div>
            <h3 className={`${LABEL_CLASS} mb-4`}>Certifications</h3>
            <div className="border-t border-ink">
              {certifications.map((cert) => (
                <CertificationCard key={cert.name} cert={cert} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <h3 className={`${LABEL_CLASS} mb-4`}>Languages</h3>
          <dl className="max-w-xl border-t border-ink">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-baseline justify-between gap-6 border-b border-rule py-3.5"
              >
                <dt className="font-display text-xl">{lang.name}</dt>
                <dd className="text-sm text-ink-faint">{lang.level}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
