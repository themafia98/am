import Link from 'next/link'
import { formatPostDate } from '@/entities/post'
import { LABEL_CLASS } from '@/shared/ui/constants'
import type { BlogPost } from '@/shared/types'

export function PostHeader({ post }: { post: BlogPost }): React.ReactElement {
  return (
    <header className="mb-12 sm:mb-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-label text-ink-faint transition-colors hover:text-accent"
      >
        <span aria-hidden>&larr;</span>
        Blog
      </Link>

      <div className="mt-6 flex items-center gap-4">
        <time dateTime={post.date} className={LABEL_CLASS}>
          {formatPostDate(post.date)}
        </time>
        <span className="h-px flex-1 bg-rule" />
        <span className={LABEL_CLASS}>{post.readingTime}</span>
      </div>

      <h1 className="mt-6 max-w-measure font-display text-[2.5rem] leading-[0.98] tracking-[-0.015em] sm:text-6xl">
        {post.title}
      </h1>

      <p className="mt-6 max-w-measure font-display text-xl italic leading-snug text-ink-soft sm:text-2xl">
        {post.dek}
      </p>

      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 border-t border-rule pt-5">
        {post.tags.map((tag) => (
          <span key={tag} className={LABEL_CLASS}>
            {tag}
          </span>
        ))}
      </div>
    </header>
  )
}
