import { EDUCATIONS, CERTIFICATIONS, LANGUAGES } from '@/lib/data/cv'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'

export function Education() {
  return (
    <section id="education" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader number="04" title="Education" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Degree */}
          <div>
            <h3 className="font-mono text-[11px] text-white/20 uppercase tracking-[0.25em] mb-5">
              Degree
            </h3>
            <div className="space-y-4">
              {EDUCATIONS.map((edu) => (
                <Card key={edu.degree} className="p-6">
                  <p className="font-syne font-bold text-white mb-1 leading-snug">{edu.degree}</p>
                  <p className="font-mono text-sm text-cyan-400/80 mb-4">{edu.institution}</p>
                  <div className="flex justify-between">
                    <span className="font-mono text-xs text-white/25">{edu.location}</span>
                    <span className="font-mono text-xs text-white/25">{edu.year}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-mono text-[11px] text-white/20 uppercase tracking-[0.25em] mb-5">
              Certifications
            </h3>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <Card key={cert.name} className="p-6">
                  <p className="font-syne font-bold text-white text-sm mb-1 leading-snug">
                    {cert.name}
                  </p>
                  <p className="font-mono text-sm text-cyan-400/80 mb-4">{cert.issuer}</p>
                  <span className="font-mono text-xs text-white/25 block">{cert.period}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="font-mono text-[11px] text-white/20 uppercase tracking-[0.25em] mb-6">
            Languages
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 max-w-xl">
            {LANGUAGES.map((lang) => (
              <div key={lang.name} className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-sm text-white/55">{lang.name}</span>
                  <span className="font-mono text-xs text-cyan-500/70">{lang.level}</span>
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
