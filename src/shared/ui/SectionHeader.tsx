import { LABEL_CLASS } from './constants'
import { cn } from '@/shared/lib/cn'

interface SectionHeaderProps {
  title: string
  /** Two-digit section number, e.g. "01" - printed in the left margin. */
  index: string
  /** Optional right-hand note, set in the same caps as the number. */
  note?: string
}

export function SectionHeader({ title, index, note }: SectionHeaderProps): React.ReactElement {
  return (
    <header className="mb-10 sm:mb-14">
      <div className="flex items-center gap-4 sm:gap-6">
        <span className={cn(LABEL_CLASS, 'tnum text-ink-ghost')}>{index}</span>
        <span className="h-px flex-1 bg-rule" />
        {note && <span className={LABEL_CLASS}>{note}</span>}
      </div>

      <h2 className="mt-6 font-display text-[2.75rem] sm:text-6xl lg:text-7xl leading-[0.92] tracking-[-0.015em]">
        {title}
      </h2>
    </header>
  )
}
