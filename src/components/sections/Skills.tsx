import { SKILL_CATEGORIES } from '@/lib/data/cv'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import type { SkillCategory } from '@/lib/types'

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader number="03" title="Skills" />

        <div className="grid md:grid-cols-2 gap-4">
          {SKILL_CATEGORIES.map((category) => (
            <SkillCategoryCard key={category.label} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCategoryCard({ category }: { category: SkillCategory }) {
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
