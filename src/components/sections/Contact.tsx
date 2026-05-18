import { PERSONAL, CONTACT_ITEMS } from '@/lib/data/cv'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import type { ContactItem } from '@/lib/types'

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader number="05" title="Contact" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: headline + CTA */}
          <div>
            <h3 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-5 w-full break-words">
              Let&apos;s build something{' '}
              <span className="gradient-text">great together.</span>
            </h3>
            <p className="text-white/40 leading-relaxed mb-8 w-full">
              Open to interesting frontend challenges, collaborative teams, and projects where
              clean code and great UX actually matter.
            </p>
            <Button variant="primary" href={`mailto:${PERSONAL.email}`}>
              ✦ Get in touch
            </Button>
          </div>

          {/* Right: contact links */}
          <div className="space-y-3">
            {CONTACT_ITEMS.map((item) => (
              <ContactCard key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ item }: { item: ContactItem }) {
  const isExternal = !item.href.startsWith('mailto')

  return (
    <a
      href={item.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-cyan-500/30 hover:bg-cyan-500/[0.03] transition-all duration-200 group overflow-hidden"
    >
      <span className="font-mono text-lg text-white/15 group-hover:text-cyan-500/50 transition-colors w-5 shrink-0 text-center">
        {item.icon}
      </span>
      <div className="min-w-0 flex-1 overflow-hidden">
        <p className="font-mono text-[10px] text-white/25 uppercase tracking-[0.2em]">{item.label}</p>
        <p className="font-mono text-xs sm:text-sm text-white/60 group-hover:text-white/85 transition-colors mt-0.5 truncate">
          {item.value}
        </p>
      </div>
      <span className="shrink-0 font-mono text-white/15 group-hover:text-white/40 transition-colors text-sm">↗</span>
    </a>
  )
}
