import type { Project } from '@/shared/types'

export function ProjectCard({ project }: { project: Project }): React.ReactElement {
  return (
    <div className="p-4 rounded-lg bg-white/[0.025] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200">
      <div className="mb-3">
        <h4 className="font-syne font-semibold text-sm text-white/85">{project.name}</h4>
        <span className="font-mono text-[10px] text-white/35 mt-0.5 block">{project.tech}</span>
      </div>
      <ul className="space-y-1.5">
        {project.highlights.map((h, i) => (
          <li key={i} className="text-xs text-white/50 leading-relaxed">
            · {h}
          </li>
        ))}
      </ul>
    </div>
  )
}
