import { Badge } from '@/shared/ui'
import type { PersonalProject } from '@/shared/types'

export function PersonalProjectCard({ project }: { project: PersonalProject }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col p-6 sm:p-8 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-cyan-500/25 hover:bg-cyan-500/[0.02] transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="font-syne font-bold text-xl text-white group-hover:text-cyan-400 transition-colors leading-tight">
            {project.name}
          </h3>
          <p className="font-mono text-sm text-cyan-400/70 mt-1">{project.tagline}</p>
        </div>

        {project.status === 'in-progress' && (
          <span className="inline-flex items-center gap-2 font-mono text-[10px] text-amber-400/80 border border-amber-400/20 bg-amber-400/[0.06] px-3 py-1.5 rounded-full shrink-0 self-start">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
            In Progress
          </span>
        )}
      </div>

      <p className="text-sm text-white/40 leading-relaxed mb-6">
        {project.description}
      </p>

      {project.arch && (
        <div className="mb-6 rounded-lg border border-white/[0.06] overflow-hidden divide-y divide-white/[0.04]">
          {project.arch.map((layer) => (
            <div key={layer.label} className="flex gap-4 px-4 py-2.5 bg-white/[0.015]">
              <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.2em] w-14 shrink-0 pt-px">
                {layer.label}
              </span>
              <span className="font-mono text-xs text-white/45 leading-relaxed">
                {layer.items.join(' · ')}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="default">{tag}</Badge>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-2 font-mono text-xs text-white/20 group-hover:text-cyan-500/50 transition-colors">
        <span>↗</span>
        <span>{project.url.replace(/^https?:\/\//, '')}</span>
      </div>
    </a>
  )
}
