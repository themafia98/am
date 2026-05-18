import { JOBS } from '@/lib/data/cv'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import type { Job, Project } from '@/lib/types'

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader number="02" title="Experience" />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-3 sm:left-4 top-6 bottom-6 w-px bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent" />

          <div className="space-y-8 sm:space-y-10 pl-9 sm:pl-12">
            {JOBS.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function JobCard({ job }: { job: Job }) {
  return (
    <div className="relative">
      {/* Timeline dot */}
      <div
        className={[
          'absolute -left-[1.6rem] sm:-left-[2.35rem] top-7 w-3 h-3 rounded-full border-2',
          job.current
            ? 'bg-cyan-500 border-cyan-400 animate-pulse-dot'
            : 'bg-[#0a0a0a] border-white/20',
        ].join(' ')}
      />

      <Card className="p-4 sm:p-6 lg:p-8">
        {/* Header */}
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
            <p className="font-mono text-sm text-cyan-400/80">{job.company}</p>
          </div>

          <div className="sm:text-right shrink-0">
            <p className="font-mono text-xs text-white/30">{job.period}</p>
            <p className="font-mono text-xs text-white/20 mt-0.5">{job.location}</p>
          </div>
        </div>

        {job.summary && (
          <p className="text-sm text-white/35 italic mb-5 leading-relaxed">{job.summary}</p>
        )}

        {/* Bullets */}
        <ul className="space-y-2 mb-6">
          {job.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm text-white/45 leading-relaxed">
              <span className="text-cyan-500/40 shrink-0 mt-0.5">—</span>
              {bullet}
            </li>
          ))}
        </ul>

        {/* Projects */}
        {job.projects && (
          <div className="pt-5 border-t border-white/[0.06]">
            <p className="font-mono text-[10px] text-white/20 uppercase tracking-[0.25em] mb-4">
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

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-4 rounded-lg bg-white/[0.025] border border-white/[0.06] hover:border-white/[0.1] transition-colors">
      <div className="mb-3">
        <h4 className="font-syne font-semibold text-sm text-white/80">{project.name}</h4>
        <span className="font-mono text-[10px] text-cyan-500/55 mt-0.5 block">{project.tech}</span>
      </div>
      <ul className="space-y-1.5">
        {project.highlights.map((h, i) => (
          <li key={i} className="text-xs text-white/30 leading-relaxed">
            · {h}
          </li>
        ))}
      </ul>
    </div>
  )
}
