import { cn } from '@/shared/lib/cn'
import type { AnchorHTMLAttributes } from 'react'
import { BUTTON_VARIANT_STYLES, type ButtonVariant } from './constants'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  children: React.ReactNode
}

export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center gap-2.5 px-5 py-3',
        'text-[11px] uppercase tracking-label',
        'transition-colors duration-200 cursor-pointer select-none',
        BUTTON_VARIANT_STYLES[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
