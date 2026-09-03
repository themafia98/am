import type { BlogPost } from '@/shared/types'

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: 'react-in-2026',
    title: 'React in 2026: what actually changed',
    dek: 'The compiler took the memoization busywork away, Server Components stopped being a debate, and the framework line between "React" and "your meta-framework" mostly dissolved. Notes from a frontend engineer who has shipped through the transition.',
    date: '2026-09-03',
    readingTime: '9 min read',
    tags: ['React', 'React Compiler', 'Server Components', 'Frontend'],
    content: [
      {
        type: 'p',
        text: 'A few years ago, "modern React" meant knowing when to reach for useMemo, arguing about where state should live, and picking a data-fetching library because the built-in tools weren’t enough. Writing this in late 2026, most of that argument is settled — not because everyone agreed, but because the framework absorbed the decision. The interesting part isn’t any single feature; it’s how much of the day-to-day cognitive overhead of writing React has simply gone away.',
      },
      {
        type: 'h2',
        text: 'The compiler ate the memoization tax',
      },
      {
        type: 'p',
        text: 'React Compiler moved from "opt-in experiment" to the default assumption on any project started this year. In practice that means the useMemo/useCallback/React.memo triad — which used to be half of every code review comment I left — is now something I only reach for in the rare case the compiler can’t prove referential stability on its own (a ref escaping into a non-React API, mostly). The diff is bigger than it sounds:',
      },
      {
        type: 'code',
        lang: 'tsx',
        code: "// 2023: manual memoization everywhere\nconst total = useMemo(() => computeTotal(items), [items])\nconst handleSelect = useCallback((id: string) => {\n  setSelected((prev) => [...prev, id])\n}, [])\n\n// 2026: just write the function\nconst total = computeTotal(items)\nconst handleSelect = (id: string) => {\n  setSelected((prev) => [...prev, id])\n}",
      },
      {
        type: 'p',
        text: 'The honest caveat: the compiler is a static analysis tool, not magic. It bails out silently on patterns it can’t reason about — mutation of props, escaping closures, some higher-order component shapes — so teams still need an eslint-plugin-react-compiler pass in CI to catch components the compiler skipped. But the failure mode changed from "a stale closure causes a subtle bug in production" to "a lint warning in the PR." That’s a real improvement, not a marketing one.',
      },
      {
        type: 'h2',
        text: 'Server Components stopped being a debate',
      },
      {
        type: 'p',
        text: 'For a couple of years, "do you even need Server Components" was a legitimate question — the mental model was new, tooling outside Next.js was thin, and plenty of teams shipped fine without them. That question has quietly closed. Every major meta-framework in the React ecosystem — Next.js, React Router’s framework mode, TanStack Start — now treats server-first rendering with selective client islands as the default shape of an app, not an opt-in.',
      },
      {
        type: 'p',
        text: 'What made it click for most teams I’ve worked with wasn’t the performance pitch, it was Actions. Being able to write a mutation as a plain async function, pass it to a form, and get progressive enhancement, pending states, and optimistic updates without wiring up a client-side data library removed an entire category of boilerplate. useActionState and useOptimistic together cover most of what used to require a hand-rolled fetch-and-setState dance.',
      },
      {
        type: 'quote',
        text: 'The best abstraction is the one you stop thinking about. Nobody asks "should this be a Server Component" anymore — they ask "does this specific piece need interactivity," which is a much smaller, much clearer question.',
      },
      {
        type: 'h2',
        text: 'The client/server line moved, but state management didn’t disappear',
      },
      {
        type: 'p',
        text: 'A common misreading of the Server Components era was "you won’t need client state management anymore." That was never true, and 2026 made it obvious why: server state and client UI state are different problems. TanStack Query (or the framework-native loaders that mimic it) still owns anything that came from the network. Zustand and Redux Toolkit are both alive and well for the state that’s genuinely local to the browser — open/closed panels, multi-step form drafts, undo stacks, real-time cursors. What changed is scope, not necessity: the client-state layer got smaller because a chunk of what used to live there was server state wearing a disguise.',
      },
      {
        type: 'h2',
        text: 'Signals didn’t win, but they didn’t lose either',
      },
      {
        type: 'p',
        text: 'Solid and Svelte kept making the case for fine-grained reactivity, and for a while it looked like signals might land in React core. They didn’t — the React team’s bet stayed on the compiler doing the fine-grained work for you at build time instead of asking developers to adopt a new primitive. Both approaches converged on the same user-facing outcome (fewer wasted re-renders without manual tuning), which mostly ended the framework-holy-war version of that debate. It’s a good example of React’s actual strategy this cycle: solve the problem the ecosystem was fighting about, but solve it in a way that doesn’t require anyone to learn a new mental model.',
      },
      {
        type: 'h2',
        text: 'What this means if you’re hiring or being hired',
      },
      {
        type: 'list',
        items: [
          'Knowing when NOT to add "use client" is now a more useful skill than knowing how to optimize a client-side render tree.',
          'Comfort with async/await patterns in components (Suspense boundaries, streaming, Actions) matters more than deep Redux internals.',
          'TypeScript-first isn’t a preference anymore, it’s table stakes — the compiler and Server Actions both lean hard on accurate types for their guarantees to hold.',
          'The interesting architecture questions moved up a level: not "how do I manage this state" but "does this belong on the server, and if not, why not."',
        ],
      },
      {
        type: 'h2',
        text: 'The unglamorous part: migration debt',
      },
      {
        type: 'p',
        text: 'None of this is free for existing codebases. Most teams I’ve talked to are running a hybrid: new features built the 2026 way, a large body of pre-compiler, pre-RSC code sitting untouched because rewriting a stable admin panel for architectural purity isn’t a good use of a sprint. That’s the actual day-to-day reality behind the conference talks — not a clean break, but a slow, uneven migration where the new patterns win by default on anything greenfield and the old patterns keep working exactly as well as they always did.',
      },
      {
        type: 'p',
        text: 'If there’s one takeaway, it’s that the biggest wins of this era weren’t new capabilities — React could already do most of this with enough manual wiring. The win was removing decisions. Fewer knobs, fewer footguns, more of the framework’s opinion baked in by default. That’s a less exciting story than "React gets signals" or "React gets a new hook," but it’s the one that actually shows up in how much faster a team can ship.',
      },
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}
