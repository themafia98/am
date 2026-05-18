import { Badge } from '@/shared/ui'
import type { SkillCategory } from '@/shared/types'

export function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <div className="p-5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-300 group">
      <h3 className="font-mono text-[11px] text-white/25 uppercase tracking-[0.25em] mb-4 group-hover:text-white/45 transition-colors">
        {category.label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Badge key={skill} variant={category.color}>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}
