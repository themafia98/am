import { SectionHeader } from '@/shared/ui'
import { JobCard } from '@/entities/job'
import type { CvData } from '@/shared/types'

export function Experience({ cv }: { cv: CvData }) {
  return (
    <section id="experience" data-reveal className="border-t border-rule py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          index="02"
          title="Experience"
          note={`${cv.jobs.length} positions`}
        />

        <div className="border-t border-ink">
          {cv.jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}
