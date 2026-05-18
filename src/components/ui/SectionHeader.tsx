interface SectionHeaderProps {
  number: string
  title: string
}

export function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="mb-14">
      <span className="block font-mono text-[11px] text-cyan-500/50 tracking-[0.35em] uppercase mb-3">
        {number}
      </span>
      <div className="flex items-end gap-6">
        <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-none tracking-tight">
          {title}
        </h2>
        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-white/15 to-transparent mb-1.5" />
      </div>
    </div>
  )
}
