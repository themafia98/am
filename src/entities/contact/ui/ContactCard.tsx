import { ArrowUpRightIcon } from '@/shared/ui/icons'
import type { ContactItem } from '@/shared/types'

export function ContactCard({ item }: { item: ContactItem }) {
  const isExternal = !item.href.startsWith('mailto')

  return (
    <a
      href={item.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group flex items-baseline gap-4 border-b border-rule py-4 transition-colors hover:text-accent"
    >
      <span className="w-24 shrink-0 text-[11px] uppercase tracking-label text-ink-faint transition-colors group-hover:text-accent">
        {item.label}
      </span>
      <span className="min-w-0 flex-1 truncate font-display text-lg">{item.value}</span>
      <ArrowUpRightIcon className="shrink-0 text-ink-ghost transition-colors group-hover:text-accent" />
    </a>
  )
}
