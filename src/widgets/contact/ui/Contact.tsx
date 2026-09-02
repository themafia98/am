import { SectionHeader, Button } from '@/shared/ui'
import { ContactCard } from '@/entities/contact'
import { ContactForm } from './ContactForm'
import { getFeatures } from '@/shared/api/getFeatures'
import { LABEL_CLASS } from '@/shared/ui/constants'
import type { CvData } from '@/shared/types'

export async function Contact({ cv }: { cv: CvData }) {
  const { personal, contactItems } = cv
  const features = await getFeatures()

  return (
    <section id="contact" data-reveal className="border-t border-rule bg-paper-deep py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader index="06" title="Contact" />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <p className="max-w-measure font-display text-3xl leading-[1.15] sm:text-4xl">
              Let&apos;s build something{' '}
              <span className="italic text-accent">great together.</span>
            </p>
            <p className="mt-6 max-w-measure leading-relaxed text-ink-soft">
              Open to interesting frontend challenges, collaborative teams, and B2B contracts.
              Product companies, startups, or ambitious side projects — if clean code and great
              UX matter to you, let&apos;s talk.
            </p>

            <div className="mt-8">
              {features.contactForm ? (
                <ContactForm />
              ) : (
                <Button variant="primary" href={`mailto:${personal.email}`}>
                  Get in touch
                </Button>
              )}
            </div>
          </div>

          <div>
            <h3 className={`${LABEL_CLASS} mb-4`}>Elsewhere</h3>
            <div className="border-t border-ink">
              {contactItems.map((item) => (
                <ContactCard key={item.label} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
