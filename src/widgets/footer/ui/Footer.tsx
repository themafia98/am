import { PERSONAL } from '@/shared/config/cv'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-[11px] uppercase tracking-label text-ink-faint sm:flex-row">
        <p className="tnum">
          © {year} {PERSONAL.name}
        </p>
        <p>Software Engineer</p>
      </div>
    </footer>
  )
}
