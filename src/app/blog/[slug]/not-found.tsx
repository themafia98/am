import Link from 'next/link'

export default function PostNotFound() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <p className="text-[11px] uppercase tracking-label text-ink-faint">404</p>
      <h1 className="mt-4 font-display text-5xl leading-none sm:text-6xl">Post not found</h1>
      <p className="mt-5 max-w-measure text-ink-soft">
        This one either moved or never existed. Back to the index.
      </p>
      <Link
        href="/blog"
        className="mt-8 inline-block text-sm underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
      >
        &larr; All posts
      </Link>
    </div>
  )
}
