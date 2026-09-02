import type { Certification } from '@/shared/types'

export function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <div className="border-b border-rule py-5">
      <p className="font-display text-xl leading-snug">{cert.name}</p>
      <p className="mt-1 text-sm text-accent">{cert.issuer}</p>
      <p className="tnum mt-2 text-[11px] uppercase tracking-label text-ink-faint">{cert.period}</p>
    </div>
  )
}
