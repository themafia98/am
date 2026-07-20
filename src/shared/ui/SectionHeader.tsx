interface SectionHeaderProps {
  title: string
}

export function SectionHeader({ title }: SectionHeaderProps): React.ReactElement {
  return (
    <div className="mb-14">
      <div className="flex items-end gap-6">
        <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-none tracking-tight">
          {title}
        </h2>
        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-white/10 to-transparent mb-1.5" />
      </div>
    </div>
  )
}
