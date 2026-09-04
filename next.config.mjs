import createMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob:",
  "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ')

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Content-Security-Policy', value: csp },
]

/** Widen a `\.(a|b|c)$` extension test to also match `.mdx`. */
function withMdxExtension(test) {
  if (test instanceof RegExp) {
    const widened = test.source.replace(/\\.\(([a-z|]+)\)\$$/, (match, extensions) =>
      extensions.split('|').includes('mdx') ? match : `\.(${extensions}|mdx)$`,
    )
    return widened === test.source ? test : new RegExp(widened, test.flags)
  }
  if (Array.isArray(test)) return test.map(withMdxExtension)
  if (test && typeof test === 'object') {
    return Object.fromEntries(Object.entries(test).map(([key, value]) => [key, withMdxExtension(value)]))
  }
  return test
}

/**
 * Next aliases `react` and `react/jsx-runtime` to its vendored copies, but only
 * on rules matching .ts/.tsx/.js/.jsx. Left out, an .mdx module gets the plain
 * jsx-runtime against the react-server build of `react` and throws at render.
 */
function alignMdxWithReactAliases(rules) {
  for (const rule of rules) {
    if (!rule || typeof rule !== 'object') continue
    if (rule.resolve?.alias?.['react/jsx-runtime$']) rule.test = withMdxExtension(rule.test)
    if (Array.isArray(rule.oneOf)) alignMdxWithReactAliases(rule.oneOf)
    if (Array.isArray(rule.rules)) alignMdxWithReactAliases(rule.rules)
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  allowedDevOrigins: ['192.168.0.232'],
  webpack(config) {
    alignMdxWithReactAliases(config.module.rules)
    return config
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        // immutable hashed assets - safe to cache forever
        source: '/_next/static/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/icon.svg',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
      },
    ]
  },
}

// .mjs rather than .ts: remark-gfm and remark-frontmatter are ESM-only, and
// next.config.ts is compiled down to CommonJS. remark-frontmatter is what keeps
// the YAML block out of the body; gray-matter reads it separately in
// shared/lib/posts.ts.
const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkGfm],
  },
})

export default withMDX(nextConfig)
