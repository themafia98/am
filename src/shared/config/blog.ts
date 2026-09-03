import type { BlogPost } from "@/shared/types";

const POSTS: readonly BlogPost[] = [
  {
    slug: "native-javascript-2026",
    title:
      "Native JavaScript in 2026: what you can finally delete from package.json",
    dek: "Deep cloning, immutable array updates, date math, deep equality, debouncing async work — the language grew a standard library while nobody was looking. A walk through what moved from node_modules into the runtime, and what still hasn’t.",
    date: "2026-09-02",
    readingTime: "8 min read",
    tags: ["JavaScript", "Web APIs", "ECMAScript", "Frontend"],
    content: [
      {
        type: "p",
        text: 'For most of the last decade, "vanilla JS" was a slight exaggeration. Any real project reached for lodash for deep clones, date-fns for date math, uuid for identifiers, and a hand-rolled debounce copied from a Stack Overflow answer everyone’s seen. None of that was a criticism of the language — the standard library genuinely had gaps. Writing this in 2026, a surprising number of those gaps are closed, and closing them changed how a plain, no-framework module looks day to day.',
      },
      {
        type: "h2",
        text: "Cloning and equality stopped needing a library",
      },
      {
        type: "p",
        text: 'structuredClone landed in every major runtime a while back, and by now it is the default answer to "how do I deep clone this," not the seldom-remembered alternative to JSON.parse(JSON.stringify(x)) — which, worth saying again, silently drops functions, Dates, Maps, Sets, and undefined values, and structuredClone doesn’t.',
      },
      {
        type: "code",
        lang: "js",
        code: "// old habit, silently wrong for anything but plain JSON-shaped data\nconst copy = JSON.parse(JSON.stringify(state))\n\n// handles Date, Map, Set, ArrayBuffer, circular refs\nconst copy = structuredClone(state)",
      },
      {
        type: "p",
        text: "Deep equality is the one gap that is still open, honestly. There is no Object.deepEqual in the language, and I don’t expect one — the semantics get political fast (NaN, -0, prototypes, getters). fast-equals or a two-line recursive check earns its place in package.json more than most dependencies I still carry.",
      },
      {
        type: "h2",
        text: "Arrays got their immutable-update methods",
      },
      {
        type: "p",
        text: 'This is the one I reach for most. ES2023 shipped toSorted, toReversed, toSpliced, and with — the non-mutating twins of sort, reverse, splice, and index assignment. Before this, "update one item in an array without mutating state" was a small ritual every React or Redux codebase reinvented slightly differently.',
      },
      {
        type: "code",
        lang: "js",
        code: "// before: spread-and-hope, or a library\nconst next = [...items]\nnext[index] = updated\n\n// now\nconst next = items.with(index, updated)\n\n// same story for sorting without mutating the original\nconst sorted = items.toSorted((a, b) => a.value - b.value)",
      },
      {
        type: "p",
        text: "Object.groupBy and Map.groupBy (ES2024) killed most of my remaining lodash.groupBy calls the same way — one static call instead of a reduce with an accumulator object, and it reads the way you’d explain it out loud.",
      },
      {
        type: "h2",
        text: "Temporal finally gives dates a real API",
      },
      {
        type: "p",
        text: 'Temporal shipping in browsers this cycle is the one I was most skeptical would actually happen, and it did. Date has been broken in well-documented ways since 1995 — mutable instances, a zero-indexed month, silent timezone confusion — and every team either lived with it or paid the date-fns/Luxon tax. Temporal.PlainDate, Temporal.ZonedDateTime, and friends are immutable, explicit about timezone and calendar, and make "add one month, respecting month-end edge cases" a one-liner instead of a bug ticket.',
      },
      {
        type: "quote",
        text: 'The best sign an API design is done right is that the bug reports about it stop making sense as bug reports and start reading as "this is just how it works now." That is roughly where Temporal is a year into adoption.',
      },
      {
        type: "p",
        text: "The honest caveat: Intl and Temporal interop is still catching up in a few libraries, and plenty of codebases have years of Date-based business logic that nobody is rewriting for the sake of elegance. Same migration-debt story as everywhere else in this industry — new code gets the nice API, old code keeps working exactly as it always did.",
      },
      {
        type: "h2",
        text: "The runtime grew async and cancellation primitives too",
      },
      {
        type: "list",
        items: [
          'AbortSignal.any() and AbortSignal.timeout() replaced most hand-rolled "race this promise against a timeout" helpers.',
          'Promise.withResolvers() replaced the "capture resolve/reject outside the executor" pattern that used to need a mutable let above a `new Promise` call.',
          "Array.fromAsync() turns an async iterable into an array without a manual for-await loop and push.",
          "Iterator helpers (.map, .filter, .take, .drop on iterators themselves) mean you can lazily transform a generator without materializing an intermediate array first.",
          "crypto.randomUUID() is now just there — the uuid package is only still installed for v5/namespace UUIDs, which the platform still doesn’t.",
        ],
      },
      {
        type: "h2",
        text: "What this doesn’t replace",
      },
      {
        type: "p",
        text: 'None of this touches the actual hard problems a framework or a utility library solves: reactive state, virtual DOM diffing, routing, schema validation, real internationalization message formatting beyond Intl’s primitives. Native JavaScript closed the gap on small, sharp utilities that used to justify pulling in a whole dependency for one function. It didn’t, and was never going to, replace the tools that solve actual application-shaped problems — and treating every native addition as "now I can delete React" is the same category error as treating every new lodash release as "now I need a framework."',
      },
      {
        type: "p",
        text: "The practical takeaway for a 2026 codebase: before adding a dependency for a data-shape utility — clone, group, dedupe, sort without mutating, race a timeout — check MDN first. There is a real chance the platform already does it, in fewer lines, with fewer edge cases, and zero bytes shipped to the client.",
      },
    ],
  },
  {
    slug: "react-in-2026",
    title: "React in 2026: what actually changed",
    dek: 'The compiler took the memoization busywork away, Server Components stopped being a debate, and the framework line between "React" and "your meta-framework" mostly dissolved. Notes from a frontend engineer who has shipped through the transition.',
    date: "2026-09-01",
    readingTime: "9 min read",
    tags: ["React", "React Compiler", "Server Components", "Frontend"],
    content: [
      {
        type: "p",
        text: 'A few years ago, "modern React" meant knowing when to reach for useMemo, arguing about where state should live, and picking a data-fetching library because the built-in tools weren’t enough. Writing this in late 2026, most of that argument is settled — not because everyone agreed, but because the framework absorbed the decision. The interesting part isn’t any single feature; it’s how much of the day-to-day cognitive overhead of writing React has simply gone away.',
      },
      {
        type: "h2",
        text: "The compiler ate the memoization tax",
      },
      {
        type: "p",
        text: 'React Compiler moved from "opt-in experiment" to the default assumption on any project started this year. In practice that means the useMemo/useCallback/React.memo triad — which used to be half of every code review comment I left — is now something I only reach for in the rare case the compiler can’t prove referential stability on its own (a ref escaping into a non-React API, mostly). The diff is bigger than it sounds:',
      },
      {
        type: "code",
        lang: "tsx",
        code: "// 2023: manual memoization everywhere\nconst total = useMemo(() => computeTotal(items), [items])\nconst handleSelect = useCallback((id: string) => {\n  setSelected((prev) => [...prev, id])\n}, [])\n\n// 2026: just write the function\nconst total = computeTotal(items)\nconst handleSelect = (id: string) => {\n  setSelected((prev) => [...prev, id])\n}",
      },
      {
        type: "p",
        text: 'The honest caveat: the compiler is a static analysis tool, not magic. It bails out silently on patterns it can’t reason about — mutation of props, escaping closures, some higher-order component shapes — so teams still need an eslint-plugin-react-compiler pass in CI to catch components the compiler skipped. But the failure mode changed from "a stale closure causes a subtle bug in production" to "a lint warning in the PR." That’s a real improvement, not a marketing one.',
      },
      {
        type: "h2",
        text: "Server Components stopped being a debate",
      },
      {
        type: "p",
        text: 'For a couple of years, "do you even need Server Components" was a legitimate question — the mental model was new, tooling outside Next.js was thin, and plenty of teams shipped fine without them. That question has quietly closed. Every major meta-framework in the React ecosystem — Next.js, React Router’s framework mode, TanStack Start — now treats server-first rendering with selective client islands as the default shape of an app, not an opt-in.',
      },
      {
        type: "p",
        text: "What made it click for most teams I’ve worked with wasn’t the performance pitch, it was Actions. Being able to write a mutation as a plain async function, pass it to a form, and get progressive enhancement, pending states, and optimistic updates without wiring up a client-side data library removed an entire category of boilerplate. useActionState and useOptimistic together cover most of what used to require a hand-rolled fetch-and-setState dance.",
      },
      {
        type: "quote",
        text: 'The best abstraction is the one you stop thinking about. Nobody asks "should this be a Server Component" anymore — they ask "does this specific piece need interactivity," which is a much smaller, much clearer question.',
      },
      {
        type: "h2",
        text: "The client/server line moved, but state management didn’t disappear",
      },
      {
        type: "p",
        text: 'A common misreading of the Server Components era was "you won’t need client state management anymore." That was never true, and 2026 made it obvious why: server state and client UI state are different problems. TanStack Query (or the framework-native loaders that mimic it) still owns anything that came from the network. Zustand and Redux Toolkit are both alive and well for the state that’s genuinely local to the browser — open/closed panels, multi-step form drafts, undo stacks, real-time cursors. What changed is scope, not necessity: the client-state layer got smaller because a chunk of what used to live there was server state wearing a disguise.',
      },
      {
        type: "h2",
        text: "Signals didn’t win, but they didn’t lose either",
      },
      {
        type: "p",
        text: "Solid and Svelte kept making the case for fine-grained reactivity, and for a while it looked like signals might land in React core. They didn’t — the React team’s bet stayed on the compiler doing the fine-grained work for you at build time instead of asking developers to adopt a new primitive. Both approaches converged on the same user-facing outcome (fewer wasted re-renders without manual tuning), which mostly ended the framework-holy-war version of that debate. It’s a good example of React’s actual strategy this cycle: solve the problem the ecosystem was fighting about, but solve it in a way that doesn’t require anyone to learn a new mental model.",
      },
      {
        type: "h2",
        text: "What this means if you’re hiring or being hired",
      },
      {
        type: "list",
        items: [
          'Knowing when NOT to add "use client" is now a more useful skill than knowing how to optimize a client-side render tree.',
          "Comfort with async/await patterns in components (Suspense boundaries, streaming, Actions) matters more than deep Redux internals.",
          "TypeScript-first isn’t a preference anymore, it’s table stakes — the compiler and Server Actions both lean hard on accurate types for their guarantees to hold.",
          'The interesting architecture questions moved up a level: not "how do I manage this state" but "does this belong on the server, and if not, why not."',
        ],
      },
      {
        type: "h2",
        text: "The unglamorous part: migration debt",
      },
      {
        type: "p",
        text: "None of this is free for existing codebases. Most teams I’ve talked to are running a hybrid: new features built the 2026 way, a large body of pre-compiler, pre-RSC code sitting untouched because rewriting a stable admin panel for architectural purity isn’t a good use of a sprint. That’s the actual day-to-day reality behind the conference talks — not a clean break, but a slow, uneven migration where the new patterns win by default on anything greenfield and the old patterns keep working exactly as well as they always did.",
      },
      {
        type: "p",
        text: 'If there’s one takeaway, it’s that the biggest wins of this era weren’t new capabilities — React could already do most of this with enough manual wiring. The win was removing decisions. Fewer knobs, fewer footguns, more of the framework’s opinion baked in by default. That’s a less exciting story than "React gets signals" or "React gets a new hook," but it’s the one that actually shows up in how much faster a team can ship.',
      },
    ],
  },
];

export const BLOG_POSTS: readonly BlogPost[] = [...POSTS].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
