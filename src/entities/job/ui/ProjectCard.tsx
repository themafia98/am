import type { Project } from '@/shared/types'

export function ProjectCard({ project }: { project: Project }): React.ReactElement {
  return (
    <div className="border-b border-rule py-4">
      <div className="flex flex-wrap items-baseline gap-x-3">
        <h4 className="font-display text-lg">{project.name}</h4>
        <span className="text-[11px] uppercase tracking-label text-ink-ghost">{project.tech}</span>
      </div>
      <ul className="mt-2 space-y-1">
        {project.highlights.map((h, i) => (
          <li key={i} className="pl-4 -indent-4 text-sm leading-relaxed text-ink-faint">
            <span aria-hidden className="mr-2">·</span>
            {h}
          </li>
        ))}
      </ul>
    </div>
  )
}
