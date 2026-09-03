import { Button } from '@/shared/ui'
import { ArrowDownIcon } from '@/shared/ui/icons'
import { PERSONAL } from '@/shared/config/cv'

export function PostCta(): React.ReactElement {
  return (
    <aside className="mt-16 border-t border-ink pt-10 sm:mt-20">
      <p className="max-w-measure font-display text-2xl leading-snug sm:text-3xl">
        Looking for a frontend engineer?
        <span className="text-ink-soft"> I&apos;m open to React / React Native work.</span>
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button
          variant="primary"
          href="/api/cv-download"
          download={PERSONAL.cvFileName}
          className="justify-center sm:justify-start"
        >
          <ArrowDownIcon />
          Download CV
        </Button>
        <Button
          variant="ghost"
          href={`mailto:${PERSONAL.email}`}
          className="justify-center sm:justify-start"
        >
          Get in touch
        </Button>
      </div>
    </aside>
  )
}
