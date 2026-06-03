import { Badge } from '@/shared/ui'
import type { SkillCategory } from '@/shared/types'
import { SKILL_DOC_URLS } from '../constants'

export function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <div className="p-5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-300 group">
      <h3 className="font-mono text-[11px] text-white/40 uppercase tracking-[0.25em] mb-4 group-hover:text-white/60 transition-colors">
        {category.label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => {
          const docsUrl = SKILL_DOC_URLS[skill]

          if (!docsUrl) {
            return (
              <Badge key={skill} variant={category.color}>
                {skill}
              </Badge>
            )
          }

          return (
            <a
              key={skill}
              href={docsUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${skill} documentation`}
              title={`Open ${skill} documentation`}
              className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              <Badge variant={category.color} interactive>
                {skill}
              </Badge>
            </a>
          )
        })}
      </div>
    </div>
  )
}
