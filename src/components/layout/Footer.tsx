import { PERSONAL } from '@/lib/data/cv'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] py-8 mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-white/20">
          © {year} {PERSONAL.name}
        </p>
        <p className="font-mono text-xs text-white/15">
          Built with Next.js & TypeScript
        </p>
      </div>
    </footer>
  )
}
