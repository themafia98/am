import { SectionHeader, Button } from '@/shared/ui'
import { ContactCard } from '@/entities/contact'
import { ContactForm } from './ContactForm'
import { getFeatures } from '@/shared/api/getFeatures'
import type { CvData } from '@/shared/types'

export async function Contact({ cv }: { cv: CvData }) {
  const { personal, contactItems } = cv
  const features = await getFeatures()

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader number="06" title="Contact" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-5 w-full break-words">
              Let&apos;s build something{' '}
              <span className="gradient-text">great together.</span>
            </h3>
            <p className="text-white/40 leading-relaxed mb-8 w-full">
              Open to interesting frontend challenges, collaborative teams, and B2B contracts.
              Product companies, startups, or ambitious side projects — if clean code and great
              UX matter to you, let&apos;s talk.
            </p>
            {features.contactForm ? (
              <ContactForm />
            ) : (
              <Button variant="primary" href={`mailto:${personal.email}`}>
                ✦ Get in touch
              </Button>
            )}
          </div>

          <div className="space-y-3">
            {contactItems.map((item) => (
              <ContactCard key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}