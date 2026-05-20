'use server'

import { Resend } from 'resend'
import { logger } from '@/shared/lib/logger'
import { ContactStatus, type ContactState } from '@/shared/types'

function getField(formData: FormData, key: string): string {
  return String(formData.get(key) ?? '').trim()
}

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name    = getField(formData, 'name')
  const email   = getField(formData, 'email')
  const message = getField(formData, 'message')

  if (!name || !email || !message) {
    return { status: ContactStatus.Error, message: 'All fields are required' }
  }
  if (name.length > 200) {
    return { status: ContactStatus.Error, message: 'Name is too long' }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: ContactStatus.Error, message: 'Invalid email address' }
  }
  if (message.length < 10 || message.length > 2000) {
    return { status: ContactStatus.Error, message: 'Message must be 10-2000 characters' }
  }

  const { RESEND_API_KEY, RESEND_TEMPLATE_ID, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env

  if (!RESEND_API_KEY || !RESEND_TEMPLATE_ID || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    logger.warn('contact:resend-skip', { reason: 'Missing required env vars' })
    return { status: ContactStatus.Error, message: 'Email service not configured' }
  }

  try {
    const resend = new Resend(RESEND_API_KEY)
    await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      template: {
        id: RESEND_TEMPLATE_ID,
        variables: { name, email, message },
      },
    })
    logger.info('contact:sent', { name, email })
    return { status: ContactStatus.Success }
  } catch (err) {
    logger.error('contact:send-error', { error: String(err) })
    return { status: ContactStatus.Error, message: 'Failed to send message' }
  }
}
