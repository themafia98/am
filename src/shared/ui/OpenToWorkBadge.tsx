import { getFeatures } from '@/shared/api/getFeatures'

export async function OpenToWorkBadge() {
  const { openToWork } = await getFeatures()
  if (!openToWork) return null

  return (
    <span className="inline-flex items-center gap-2 font-mono text-[10px] text-green-400/90 border border-green-400/20 bg-green-400/[0.06] px-3 py-1.5 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      Open to opportunities
    </span>
  )
}
