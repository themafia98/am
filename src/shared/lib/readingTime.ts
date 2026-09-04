const WORDS_PER_MINUTE = 200

/** Code blocks are dropped rather than counted - a snippet is scanned, not read. */
export function readingTime(markdown: string): string {
  const prose = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_~|-]/g, ' ')

  const words = prose.split(/\s+/).filter(Boolean).length

  return `${Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))} min read`
}
