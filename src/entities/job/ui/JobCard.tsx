import { Card } from '@/shared/ui'
import { cn } from '@/shared/lib/cn'
import type { Job } from '@/shared/types'
import { ProjectCard } from './ProjectCard'

export function JobCard({ job }: { job: Job }): React.ReactElement {
  return (
    <div className="relative">
      <div
        className={cn(
          'absolute -left-[1.6rem] sm:-left-[2.35rem] top-7 w-3 h-3 rounded-full border-2',
          job.current ? 'bg-cyan-500 border-cyan-400 animate-pulse-dot' : 'bg-[#0a0a0a] border-white/20',
        )}
      />

      <Card className="p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h3 className="font-syne font-bold text-lg text-white leading-tight">
                {job.title}
              </h3>
              {job.current && (
                <span className="font-mono text-[10px] text-cyan-500 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                  Current
                </span>
              )}
            </div>
            <p className="font-mono text-sm text-white/65">{job.company}</p>
          </div>

          <div className="sm:text-right shrink-0">
            <p className="font-mono text-xs text-white/40">{job.period}</p>
            <p className="font-mono text-xs text-white/40 mt-0.5">{job.location}</p>
          </div>
        </div>

        {job.summary && (
          <p className="text-sm text-white/50 italic mb-5 leading-relaxed">{job.summary}</p>
        )}

        <ul className="space-y-2 mb-6">
          {job.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm text-white/60 leading-relaxed">
              <span className="text-white/20 shrink-0 mt-0.5">—</span>
              {bullet}
            </li>
          ))}
        </ul>

        {job.projects && (
          <div className="pt-5 border-t border-white/[0.06]">
            <p className="font-mono text-[10px] text-white/35 uppercase tracking-[0.25em] mb-4">
              Key Projects
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {job.projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
