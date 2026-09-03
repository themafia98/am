import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PostHeader, PostBody } from '@/widgets/blog'
import { BLOG_POSTS, getPostBySlug } from '@/shared/config/blog'
import { SITE_URL } from '../../constants'

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} - Pavel Piatrovich`,
    description: post.dek,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.dek,
      type: 'article',
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.dek,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <article className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <PostHeader post={post} />
      <PostBody blocks={post.content} />
    </article>
  )
}
