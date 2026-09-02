import { cn } from '@/shared/lib/cn'
import { LABEL_CLASS } from '@/shared/ui/constants'
import type { Job } from '@/shared/types'
import { ProjectCard } from './ProjectCard'

export function JobCard({ job }: { job: Job }): React.ReactElement {
  return (
    <article className="grid gap-x-8 gap-y-4 border-b border-rule py-8 sm:grid-cols-[9rem_1fr] sm:py-10">
      {/* Left margin column: dates, place, status - the way a printed CV sets them */}
      <div className="flex flex-col gap-1">
        <span className={cn(LABEL_CLASS, 'tnum text-ink')}>{job.period}</span>
        <span className={LABEL_CLASS}>{job.location}</span>
        {job.current && (
          <span className="mt-1 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-label text-accent">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
            Current
          </span>
        )}
      </div>

      <div>
        <h3 className="font-display text-2xl leading-tight sm:text-3xl">{job.title}</h3>
        <p className="mt-1 text-sm text-ink-soft">{job.company}</p>

        {job.summary && (
          <p className="mt-4 max-w-measure font-display text-lg italic leading-snug text-ink-soft">
            {job.summary}
          </p>
        )}

        <ul className="mt-5 max-w-measure space-y-2.5">
          {job.bullets.map((bullet, i) => (
            <li key={i} className="pl-5 -indent-5 text-[15px] leading-relaxed text-ink-soft">
              <span aria-hidden className="mr-2 text-ink-ghost">—</span>
              {bullet}
            </li>
          ))}
        </ul>

        {job.projects && (
          <div className="mt-7">
            <p className={cn(LABEL_CLASS, 'mb-3')}>Key projects</p>
            <div className="border-t border-rule">
              {job.projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
