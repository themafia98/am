import { ArrowUpRightIcon, MailIcon, LinkedInIcon, WhatsAppIcon } from '@/shared/ui/icons'
import type { ContactItem } from '@/shared/types'

const ICON_BY_LABEL: Record<string, React.ComponentType<{ className?: string }>> = {
  Email: MailIcon,
  LinkedIn: LinkedInIcon,
  WhatsApp: WhatsAppIcon,
}

export function ContactCard({ item }: { item: ContactItem }) {
  const isExternal = !item.href.startsWith('mailto')
  const Icon = ICON_BY_LABEL[item.label]

  return (
    <a
      href={item.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-cyan-500/40 hover:bg-cyan-500/[0.05] transition-all duration-200 group overflow-hidden"
    >
      <span className="text-white/25 group-hover:text-cyan-500/60 transition-colors w-5 shrink-0 flex justify-center">
        {Icon && <Icon />}
      </span>
      <div className="min-w-0 flex-1 overflow-hidden">
        <p className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em]">{item.label}</p>
        <p className="font-mono text-xs sm:text-sm text-white/60 group-hover:text-white/85 transition-colors mt-0.5 truncate">
          {item.value}
        </p>
      </div>
      <ArrowUpRightIcon className="shrink-0 text-white/15 group-hover:text-white/40 transition-colors" />
    </a>
  )
}
