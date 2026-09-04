import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PostHeader, PostBody, PostCta } from '@/widgets/blog'
import { getAllPosts, getPostBySlug, loadPostContent } from '@/shared/lib/posts'
import { SITE_URL } from '../../constants'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
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

  const Post = await loadPostContent(slug)

  return (
    <article className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <PostHeader post={post} />
      <PostBody>
        <Post />
      </PostBody>
      <PostCta />
    </article>
  )
}
