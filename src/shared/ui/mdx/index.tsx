import type { MDXComponents } from 'mdx/types'
import { cn } from '@/shared/lib/cn'

const BODY_TEXT = 'text-[17px] leading-relaxed text-ink-soft'

/** Article typography - one entry per element the markdown can produce. */
const components: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2 className="max-w-measure pt-2 font-display text-3xl leading-tight sm:text-4xl" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="max-w-measure pt-1 font-display text-2xl leading-tight sm:text-3xl" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className={cn('max-w-measure', BODY_TEXT)} {...props}>
      {children}
    </p>
  ),
  // `[&>li>p]:inline` keeps the hanging indent when a list is authored loose.
  ul: ({ children, ...props }) => (
    <ul className="max-w-measure space-y-2.5 [&>li>p]:inline" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="max-w-measure list-inside list-decimal space-y-2.5 [&>li>p]:inline" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className={cn('pl-5 -indent-5', BODY_TEXT)} {...props}>
      <span aria-hidden className="mr-2 text-ink-ghost">
        —
      </span>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="max-w-measure border-l-2 border-accent pl-6 [&>p]:max-w-none [&>p]:font-display [&>p]:text-xl [&>p]:italic [&>p]:leading-snug [&>p]:text-ink sm:[&>p]:text-2xl"
      {...props}
    >
      {children}
    </blockquote>
  ),
  pre: ({ children, ...props }) => (
    <pre className="overflow-x-auto border border-rule bg-paper-card p-5" {...props}>
      {children}
    </pre>
  ),
  code: ({ className, children, ...props }) => {
    const isBlock = typeof className === 'string' && className.startsWith('language-')
    return (
      <code
        className={cn(
          className,
          'font-mono leading-relaxed text-ink-soft',
          isBlock ? 'text-[13px]' : 'text-[0.9em]',
        )}
        {...props}
      >
        {/* A fenced block keeps its closing newline, which shows as a blank last line. */}
        {isBlock && typeof children === 'string' ? children.replace(/\n+$/, '') : children}
      </code>
    )
  },
  a: ({ children, ...props }) => (
    <a className="text-accent underline underline-offset-4 hover:text-ink" {...props}>
      {children}
    </a>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-ink" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="font-display italic text-accent" {...props}>
      {children}
    </em>
  ),
  hr: (props) => <hr className="max-w-measure border-0 border-t border-rule" {...props} />,
}

export function useMDXComponents(inherited?: MDXComponents): MDXComponents {
  return { ...inherited, ...components }
}
