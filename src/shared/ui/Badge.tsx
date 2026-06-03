import { cn } from '@/shared/lib/cn'
import { BadgeVariant } from '@/shared/types'
import { BADGE_VARIANT_STYLES } from './constants'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
  interactive?: boolean
}

export function Badge({
  children,
  variant = BadgeVariant.Default,
  className,
  interactive = false,
}: BadgeProps): React.ReactElement {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-mono border',
        'transition-all duration-200 hover:scale-[1.04]',
        interactive ? 'cursor-pointer' : 'cursor-default',
        BADGE_VARIANT_STYLES[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
