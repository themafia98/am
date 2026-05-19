import { cn } from '@/shared/lib/cn'
import { BadgeVariant } from '@/shared/types'

const variantStyles: Record<BadgeVariant, string> = {
  [BadgeVariant.Default]: 'bg-white/5  border-white/10  text-white/60',
  [BadgeVariant.Cyan]:    'bg-cyan-500/10   border-cyan-500/20   text-cyan-400',
  [BadgeVariant.Blue]:    'bg-blue-500/10   border-blue-500/20   text-blue-400',
  [BadgeVariant.Purple]:  'bg-purple-500/10 border-purple-500/20 text-purple-400',
  [BadgeVariant.Green]:   'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  [BadgeVariant.Pink]:    'bg-pink-500/10   border-pink-500/20   text-pink-400',
  [BadgeVariant.Orange]:  'bg-orange-500/10 border-orange-500/20 text-orange-400',
  [BadgeVariant.Yellow]:  'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
  [BadgeVariant.Teal]:    'bg-teal-500/10   border-teal-500/20   text-teal-400',
}

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

export function Badge({ children, variant = BadgeVariant.Default, className }: BadgeProps): React.ReactElement {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-mono border',
        'transition-all duration-200 hover:scale-[1.04] cursor-default',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
