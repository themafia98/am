import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { ComponentType } from 'react'
import matter from 'gray-matter'
import type { BlogPost } from '@/shared/types'
import { readingTime } from './readingTime'

const POSTS_DIR = join(process.cwd(), 'src', 'content', 'blog')

/** An unquoted YAML date parses as a Date, but BlogPost.date is a string. */
function toIsoDate(value: unknown, file: string): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value.trim())) {
    return value.trim().slice(0, 10)
  }
  throw new Error(`${file}: "date" must be a YYYY-MM-DD string`)
}

function requireString(value: unknown, field: string, file: string): string {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`${file}: "${field}" is required`)
  }
  return value.trim()
}

function requireTags(value: unknown, file: string): readonly string[] {
  if (!Array.isArray(value) || value.some((tag) => typeof tag !== 'string')) {
    throw new Error(`${file}: "tags" must be an array of strings`)
  }
  return value as readonly string[]
}

function readPost(file: string): BlogPost {
  // gray-matter returns empty data if a BOM sits in front of the `---`.
  const raw = readFileSync(join(POSTS_DIR, file), 'utf8').replace(/^\uFEFF/, '')
  const { data, content } = matter(raw)

  return {
    slug: file.replace(/\.mdx$/, ''),
    title: requireString(data.title, 'title', file),
    dek: requireString(data.dek, 'dek', file),
    date: toIsoDate(data.date, file),
    tags: requireTags(data.tags, file),
    readingTime: readingTime(content),
  }
}

function readAllPosts(): readonly BlogPost[] {
  return readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map(readPost)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

let cache: readonly BlogPost[] | undefined

/** Cached in production only - in dev, front matter edits should show up on reload. */
export function getAllPosts(): readonly BlogPost[] {
  if (process.env.NODE_ENV !== 'production') return readAllPosts()

  cache ??= readAllPosts()
  return cache
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug)
}

/**
 * Relative rather than aliased, and the `.mdx` spelled out: webpack builds a
 * context module from the static part of the path, and neither the `@/` alias
 * nor an implicit extension survives that.
 */
export async function loadPostContent(slug: string): Promise<ComponentType> {
  const mod = (await import(`../../content/blog/${slug}.mdx`)) as { default: ComponentType }
  return mod.default
}
