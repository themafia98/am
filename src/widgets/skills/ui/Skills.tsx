import { SKILL_CATEGORIES } from '@/shared/config/cv'
import { SectionHeader } from '@/shared/ui'
import { SkillCategoryCard } from '@/entities/skill'

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
