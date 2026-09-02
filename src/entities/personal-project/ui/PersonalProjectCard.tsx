import { Badge } from '@/shared/ui'
import { ArrowUpRightIcon } from '@/shared/ui/icons'
import { LABEL_CLASS } from '@/shared/ui/constants'
import { cn } from '@/shared/lib/cn'
import { BadgeVariant, ProjectStatus, type PersonalProject } from '@/shared/types'
import { GitHubStats } from './GitHubStats'

export function PersonalProjectCard({ project }: { project: PersonalProject }) {
  return (
    <article className="group border-b border-rule py-8 sm:py-10">
      <div className="grid gap-x-8 gap-y-4 sm:grid-cols-[9rem_1fr]">
        <div className="flex flex-col gap-2">
          {project.status === ProjectStatus.InProgress ? (
            <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-label text-accent">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
              {project.statusLabel ?? 'In progress'}
            </span>
          ) : (
            <span className={LABEL_CLASS}>Live</span>
          )}
          {project.githubRepo && <GitHubStats repo={project.githubRepo} />}
        </div>

        <div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline gap-2 transition-colors hover:text-accent"
          >
            <h3 className="font-display text-3xl leading-tight sm:text-4xl">{project.name}</h3>
            <ArrowUpRightIcon className="shrink-0 text-ink-ghost transition-colors group-hover:text-accent" />
          </a>
          <p className="mt-1 font-display text-lg italic text-ink-soft">{project.tagline}</p>

          <p className="mt-4 max-w-measure leading-relaxed text-ink-soft">{project.description}</p>

          {project.arch && (
            <dl className="mt-6 border-t border-rule">
              {project.arch.map((layer) => (
                <div
                  key={layer.label}
                  className="flex flex-col gap-1 border-b border-rule py-2.5 sm:flex-row sm:gap-4"
                >
                  <dt className={cn(LABEL_CLASS, 'w-20 shrink-0')}>{layer.label}</dt>
                  <dd className="text-sm leading-relaxed text-ink-soft">
                    {layer.items.join(' · ')}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant={BadgeVariant.Default}>
                {tag}
              </Badge>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm text-ink-faint underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            {project.url.replace(/^https?:\/\//, '')}
          </a>
        </div>
      </div>
    </article>
  )
}
