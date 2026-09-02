import { BadgeVariant } from '@/shared/types'

/**
 * Tags are deliberately monochrome - the page carries one accent colour and it
 * belongs to links, not to a nine-colour taxonomy of technologies. The variant
 * map is kept so cv.ts keeps compiling without touching content.
 */
const TAG_STYLE = 'border-rule bg-transparent text-ink-soft hover:border-ink hover:text-ink'

export const BADGE_VARIANT_STYLES: Record<BadgeVariant, string> = {
  [BadgeVariant.Default]: TAG_STYLE,
  [BadgeVariant.Cyan]: TAG_STYLE,
  [BadgeVariant.Blue]: TAG_STYLE,
  [BadgeVariant.Purple]: TAG_STYLE,
  [BadgeVariant.Green]: TAG_STYLE,
  [BadgeVariant.Pink]: TAG_STYLE,
  [BadgeVariant.Orange]: TAG_STYLE,
  [BadgeVariant.Yellow]: TAG_STYLE,
  [BadgeVariant.Teal]: TAG_STYLE,
}

export const BUTTON_VARIANT_STYLES = {
  primary: 'bg-ink text-paper border border-ink hover:bg-accent hover:border-accent',
  ghost: 'border border-rule text-ink hover:border-ink bg-transparent',
} as const

export type ButtonVariant = keyof typeof BUTTON_VARIANT_STYLES

/** Small letterspaced caps used for every meta label on the page. */
export const LABEL_CLASS =
  'text-[10px] sm:text-[11px] uppercase tracking-label text-ink-faint'
