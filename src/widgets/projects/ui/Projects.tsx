import { SectionHeader } from '@/shared/ui'
import { PersonalProjectCard } from '@/entities/personal-project'
import type { CvData } from '@/shared/types'

export function Projects({ cv }: { cv: CvData }) {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader number="04" title="Projects" />

        <div className="grid md:grid-cols-2 gap-6">
          {cv.personalProjects.map((project) => (
            <PersonalProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
