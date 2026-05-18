import { Card } from '@/shared/ui'
import type { Certification } from '@/shared/types'

export function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <Card className="p-6">
      <p className="font-syne font-bold text-white text-sm mb-1 leading-snug">{cert.name}</p>
      <p className="font-mono text-sm text-cyan-400/80 mb-4">{cert.issuer}</p>
      <span className="font-mono text-xs text-white/25 block">{cert.period}</span>
    </Card>
  )
}
