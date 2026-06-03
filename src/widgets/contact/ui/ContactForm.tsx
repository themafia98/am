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
        'self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-lg',
        'font-mono text-sm font-semibold transition-all duration-200',
        'bg-cyan-500 text-black hover:bg-cyan-400 active:scale-[0.98]',
        'hover:shadow-[0_0_24px_rgba(6,182,212,0.45)]',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none',
      )}
    >
      {pending ? 'Sending…' : '✦ Send message'}
    </button>
  )
}

export function ContactForm(): React.ReactElement {
  const [state, action] = useActionState(sendContact, contactInitialState)

  if (state.status === ContactStatus.Success) {
    return (
      <div className="flex flex-col gap-2 p-5 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.04]">
        <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">Message sent</span>
        <p className="font-mono text-sm text-white/50">
          Thanks - I&apos;ll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="flex flex-col gap-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[10px] text-white/25 tracking-[0.2em] uppercase">Name</label>
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            required
            maxLength={100}
            className={CONTACT_INPUT_CLASS}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[10px] text-white/25 tracking-[0.2em] uppercase">Email</label>
          <input
            name="email"
            type="email"
            placeholder="john@company.com"
            required
            className={CONTACT_INPUT_CLASS}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[10px] text-white/25 tracking-[0.2em] uppercase">Message</label>
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
        <p className="font-mono text-xs text-red-400/80">{state.message}</p>
      )}

      <SubmitButton />
    </form>
  )
}
