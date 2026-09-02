'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { cn } from '@/shared/lib/cn'
import { ContactStatus, contactInitialState } from '@/shared/types'
import { sendContact } from '@/shared/api/sendContact'
import { CONTACT_INPUT_CLASS } from '../constants'

function SubmitButton(): React.ReactElement {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        'self-start inline-flex items-center gap-2.5 px-5 py-3',
        'border border-ink bg-ink text-paper',
        'text-[11px] uppercase tracking-label transition-colors duration-200',
        'hover:border-accent hover:bg-accent',
        'disabled:cursor-not-allowed disabled:opacity-40',
      )}
    >
      {pending ? 'Sending…' : 'Send message'}
    </button>
  )
}

export function ContactForm(): React.ReactElement {
  const [state, action] = useActionState(sendContact, contactInitialState)

  if (state.status === ContactStatus.Success) {
    return (
      <div className="flex flex-col gap-2 border-t border-ink pt-5">
        <span className="text-[11px] uppercase tracking-label text-accent">Message sent</span>
        <p className="font-display text-xl">Thanks — I&apos;ll get back to you soon.</p>
      </div>
    )
  }

  return (
    <form action={action} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="text-[11px] uppercase tracking-label text-ink-faint">Name</label>
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            required
            maxLength={100}
            className={CONTACT_INPUT_CLASS}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[11px] uppercase tracking-label text-ink-faint">Email</label>
          <input
            name="email"
            type="email"
            placeholder="john@company.com"
            required
            className={CONTACT_INPUT_CLASS}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-[11px] uppercase tracking-label text-ink-faint">Message</label>
        <textarea
          name="message"
          placeholder="Tell me about your project or opportunity…"
          required
          minLength={10}
          maxLength={2000}
          rows={4}
          className={cn(CONTACT_INPUT_CLASS, 'resize-none')}
        />
      </div>

      {state.status === ContactStatus.Error && (
        <p className="text-sm text-accent">{state.message}</p>
      )}

      <SubmitButton />
    </form>
  )
}
