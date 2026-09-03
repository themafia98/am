import type { BlogBlock } from '@/shared/types'

function Block({ block, isLead }: { block: BlogBlock; isLead: boolean }): React.ReactElement {
  switch (block.type) {
    case 'p':
      return (
        <p
          className={
            isLead
              ? 'max-w-measure font-display text-2xl leading-[1.4] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[3.75rem] first-letter:leading-[0.8] first-letter:text-accent'
              : 'max-w-measure text-[17px] leading-relaxed text-ink-soft'
          }
        >
          {block.text}
        </p>
      )
    case 'h2':
      return (
        <h2 className="max-w-measure pt-2 font-display text-3xl leading-tight sm:text-4xl">
          {block.text}
        </h2>
      )
    case 'quote':
      return (
        <blockquote className="max-w-measure border-l-2 border-accent pl-6">
          <p className="font-display text-xl italic leading-snug text-ink sm:text-2xl">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.cite && <cite className="mt-3 block text-sm not-italic text-ink-faint">{block.cite}</cite>}
        </blockquote>
      )
    case 'list':
      return (
        <ul className="max-w-measure space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="pl-5 -indent-5 text-[17px] leading-relaxed text-ink-soft">
              <span aria-hidden className="mr-2 text-ink-ghost">
                —
              </span>
              {item}
            </li>
          ))}
        </ul>
      )
    case 'code':
      return (
        <pre className="overflow-x-auto border border-rule bg-paper-card p-5">
          <code className="font-mono text-[13px] leading-relaxed text-ink-soft">{block.code}</code>
        </pre>
      )
  }
}

export function PostBody({ blocks }: { blocks: readonly BlogBlock[] }): React.ReactElement {
  let leadAssigned = false

  return (
    <div className="flex flex-col gap-7">
      {blocks.map((block, i) => {
        const isLead = block.type === 'p' && !leadAssigned
        if (isLead) leadAssigned = true
        return <Block key={i} block={block} isLead={isLead} />
      })}
    </div>
  )
}
