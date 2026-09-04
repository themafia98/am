/**
 * Wrapper for the compiled MDX of a post. Element styling lives in the MDX
 * component map; the drop cap stays here because it belongs to the lead
 * paragraph alone. `> p:first-of-type` outranks the map's own paragraph
 * classes, so the colour has to be restated.
 */
export function PostBody({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <div className="flex flex-col gap-7 [&>p:first-of-type]:font-display [&>p:first-of-type]:text-2xl [&>p:first-of-type]:leading-[1.4] [&>p:first-of-type]:text-ink [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:mr-3 [&>p:first-of-type]:first-letter:mt-1 [&>p:first-of-type]:first-letter:text-[3.75rem] [&>p:first-of-type]:first-letter:leading-[0.8] [&>p:first-of-type]:first-letter:text-accent">
      {children}
    </div>
  )
}
