import { BadgeVariant } from '@/shared/types'

export const BADGE_VARIANT_STYLES: Record<BadgeVariant, string> = {
  [BadgeVariant.Default]: 'bg-white/5  border-white/10  text-white/60',
  [BadgeVariant.Cyan]:    'bg-cyan-500/10   border-cyan-500/20   text-cyan-400',
  [BadgeVariant.Blue]:    'bg-blue-500/10   border-blue-500/20   text-blue-400',
  [BadgeVariant.Purple]:  'bg-purple-500/10 border-purple-500/20 text-purple-400',
  [BadgeVariant.Green]:   'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  [BadgeVariant.Pink]:    'bg-pink-500/10   border-pink-500/20   text-pink-400',
  [BadgeVariant.Orange]:  'bg-orange-500/10 border-orange-500/20 text-orange-400',
  [BadgeVariant.Yellow]:  'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
  [BadgeVariant.Teal]:    'bg-teal-500/10   border-teal-500/20   text-teal-400',
}

export const BUTTON_VARIANT_STYLES = {
  primary:
    'bg-cyan-500 text-black font-semibold hover:bg-cyan-400 hover:shadow-[0_0_24px_rgba(6,182,212,0.45)] active:scale-[0.98]',
  ghost:
    'border border-white/15 text-white/70 hover:border-white/40 hover:text-white hover:bg-white/5 active:scale-[0.98]',
} as const

export type ButtonVariant = keyof typeof BUTTON_VARIANT_STYLES
