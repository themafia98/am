import { SectionHeader } from '@/shared/ui'
import { EducationCard, CertificationCard } from '@/entities/education'
import type { CvData } from '@/shared/types'

export function Education({ cv }: { cv: CvData }): React.ReactElement {
  const { educations, certifications, languages } = cv

  return (
    <section id="education" className="py-16 sm:py-24 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader number="05" title="Education" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-mono text-[11px] text-white/20 uppercase tracking-[0.25em] mb-5">
              Degree
            </h3>
            <div className="space-y-4">
              {educations.map((edu) => (
                <EducationCard key={edu.degree} edu={edu} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[11px] text-white/20 uppercase tracking-[0.25em] mb-5">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <CertificationCard key={cert.name} cert={cert} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-[11px] text-white/20 uppercase tracking-[0.25em] mb-6">
            Languages
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 max-w-xl">
            {languages.map((lang) => (
              <div key={lang.name} className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-sm text-white/65">{lang.name}</span>
                  <span className="font-mono text-xs text-white/40">{lang.level}</span>
                </div>
                <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    style={{ width: `${lang.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
