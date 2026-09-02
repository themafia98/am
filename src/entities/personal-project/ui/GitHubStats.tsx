import { getGitHubStats } from '@/shared/api/getGitHubStats'

export async function GitHubStats({ repo }: { repo: string }) {
  const stats = await getGitHubStats(repo)
  if (!stats) return null

  return (
    <dl className="flex items-baseline gap-4 text-[11px] uppercase tracking-label text-ink-faint">
      <div className="flex items-baseline gap-1.5">
        <dd className="tnum text-ink">{stats.stars}</dd>
        <dt>Stars</dt>
      </div>
      <div className="flex items-baseline gap-1.5">
        <dd className="tnum text-ink">{stats.forks}</dd>
        <dt>Forks</dt>
      </div>
    </dl>
  )
}
