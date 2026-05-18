import { Card } from '@/shared/ui'
import type { Education } from '@/shared/types'

export function EducationCard({ edu }: { edu: Education }) {
  return (
    <Card className="p-6">
      <p className="font-syne font-bold text-white mb-1 leading-snug">{edu.degree}</p>
      <p className="font-mono text-sm text-cyan-400/80 mb-4">{edu.institution}</p>
      <div className="flex justify-between">
        <span className="font-mono text-xs text-white/25">{edu.location}</span>
        <span className="font-mono text-xs text-white/25">{edu.year}</span>
      </div>
    </Card>
  )
}
