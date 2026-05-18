import { SectionHeader } from '@/shared/ui'
import { JobCard } from '@/entities/job'
import type { CvData } from '@/shared/types'

export function Experience({ cv }: { cv: CvData }) {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader number="02" title="Experience" />

        <div className="relative">
          <div className="absolute left-3 sm:left-4 top-6 bottom-6 w-px bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent" />

          <div className="space-y-8 sm:space-y-10 pl-9 sm:pl-12">
            {cv.jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
