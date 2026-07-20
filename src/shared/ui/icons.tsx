interface IconProps {
  className?: string
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  )
}

export function ArrowDownIcon({ className }: IconProps) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  )
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.94 8.5H3.56V20H6.94V8.5ZM5.25 7c1.15 0 1.9-.76 1.9-1.72C7.13 4.32 6.4 3.6 5.28 3.6c-1.13 0-1.9.72-1.9 1.68C3.38 6.24 4.13 7 5.25 7ZM20.44 20h-3.38v-6.14c0-1.54-.55-2.59-1.93-2.59-1.05 0-1.68.71-1.96 1.4-.1.24-.13.58-.13.92V20H9.66s.05-10.5 0-11.5h3.38v1.63c.45-.7 1.25-1.68 3.05-1.68 2.23 0 3.9 1.46 3.9 4.58V20Z" />
    </svg>
  )
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.37-1.47-.87-.78-1.46-1.74-1.63-2.03-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.26 4.86L2 22l5.34-1.29a9.9 9.9 0 0 0 4.7 1.2h.01c5.5 0 9.96-4.47 9.96-9.97S17.54 2 12.04 2Zm0 18.14h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.17.77.85-3.09-.2-.32a8.17 8.17 0 0 1-1.26-4.36c0-4.53 3.7-8.22 8.29-8.22 2.21 0 4.29.87 5.86 2.43a8.15 8.15 0 0 1 2.42 5.81c0 4.53-3.7 8.31-8.29 8.31Z" />
    </svg>
  )
}
