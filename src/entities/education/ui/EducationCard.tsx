import type { Education } from '@/shared/types'

export function EducationCard({ edu }: { edu: Education }) {
  return (
    <div className="border-b border-rule py-5">
      <p className="font-display text-xl leading-snug">{edu.degree}</p>
      <p className="mt-1 text-sm text-accent">{edu.institution}</p>
      <p className="mt-2 text-[11px] uppercase tracking-label text-ink-faint">
        <span className="tnum">{edu.year}</span>
        <span aria-hidden className="mx-2 text-ink-ghost">/</span>
        {edu.location}
      </p>
    </div>
  )
}
