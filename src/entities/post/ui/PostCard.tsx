import Link from 'next/link'
import { ArrowUpRightIcon } from '@/shared/ui/icons'
import { LABEL_CLASS } from '@/shared/ui/constants'
import { formatPostDate } from '../lib/formatPostDate'
import type { BlogPost } from '@/shared/types'

export function PostCard({ post }: { post: BlogPost }): React.ReactElement {
  return (
    <article className="group grid gap-x-8 gap-y-3 border-b border-rule py-8 sm:grid-cols-[9rem_1fr] sm:py-10">
      <div className="flex flex-col gap-1">
        <time dateTime={post.date} className={LABEL_CLASS}>
          {formatPostDate(post.date)}
        </time>
        <span className={LABEL_CLASS}>{post.readingTime}</span>
      </div>

      <div>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-baseline gap-2 transition-colors hover:text-accent"
        >
          <h2 className="font-display text-2xl leading-tight sm:text-3xl">{post.title}</h2>
          <ArrowUpRightIcon className="shrink-0 text-ink-ghost transition-colors group-hover:text-accent" />
        </Link>

        <p className="mt-3 max-w-measure leading-relaxed text-ink-soft">{post.dek}</p>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
          {post.tags.map((tag) => (
            <span key={tag} className={LABEL_CLASS}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
