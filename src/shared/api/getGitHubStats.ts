export interface GitHubStats {
  readonly stars: number
  readonly forks: number
}

export async function getGitHubStats(repo: string): Promise<GitHubStats | null> {
  try {
    const headers: HeadersInit = { Accept: 'application/vnd.github+json' }
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`
    }

    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers,
      next: { revalidate: 3600 },
    })

    if (!res.ok) return null

    const data = (await res.json()) as { stargazers_count: number; forks_count: number }
    return { stars: data.stargazers_count, forks: data.forks_count }
  } catch {
    return null
  }
}
