import { cn } from '@/shared/lib/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  hoverable?: boolean
}

export function Card({ children, className, hoverable = true }: CardProps): React.ReactElement {
  return (
    <div
      className={cn(
        'rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm',
        hoverable && 'transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]',
        className,
      )}
    >
      {children}
    </div>
  )
}
