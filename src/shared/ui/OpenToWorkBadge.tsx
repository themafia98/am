import { getFeatures } from '@/shared/api/getFeatures'

export async function OpenToWorkBadge() {
  const { openToWork } = await getFeatures()
  if (!openToWork) return null

  return (
    <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-label text-accent">
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
      Open to opportunities
    </span>
  )
}
