import { getGitHubStats } from '@/shared/api/getGitHubStats'

export async function GitHubStats({ repo }: { repo: string }) {
  const stats = await getGitHubStats(repo)
  if (!stats) return null

  return (
    <div className="flex items-center gap-4 font-mono text-[10px] text-white/35">
      <span className="flex items-center gap-1.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        {stats.stars}
      </span>
      <span className="flex items-center gap-1.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <circle cx="12" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
          <line x1="12" y1="12" x2="12" y2="15" />
        </svg>
        {stats.forks}
      </span>
    </div>
  )
}
