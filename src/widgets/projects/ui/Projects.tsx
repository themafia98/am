import { SectionHeader } from '@/shared/ui'
import { PersonalProjectCard } from '@/entities/personal-project'
import type { CvData } from '@/shared/types'

export function Projects({ cv }: { cv: CvData }) {
  return (
    <section id="projects" data-reveal className="border-t border-rule py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader index="04" title="Projects" note="Personal work" />

        <div className="border-t border-ink">
          {cv.personalProjects.map((project) => (
            <PersonalProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
