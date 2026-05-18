import { cn } from '@/lib/utils'
import type { AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'ghost'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  children: React.ReactNode
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-cyan-500 text-black font-semibold hover:bg-cyan-400 hover:shadow-[0_0_24px_rgba(6,182,212,0.45)] active:scale-[0.98]',
  ghost:
    'border border-white/15 text-white/70 hover:border-white/40 hover:text-white hover:bg-white/5 active:scale-[0.98]',
}

export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm',
        'transition-all duration-200 cursor-pointer select-none',
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
