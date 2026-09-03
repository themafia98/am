import type { BlogPost } from "@/shared/types";

const POSTS: readonly BlogPost[] = [
  {
    slug: "native-javascript-2026",
    title:
      "Native JavaScript in 2026: what you can finally delete from package.json",
    dek: "Cloning objects, updating arrays without mutating them, working with dates, checking equality — JavaScript quietly grew its own standard library. Here's what you can now do without a dependency, and what you still can't.",
    date: "2026-09-02",
    readingTime: "8 min read",
    tags: ["JavaScript", "Web APIs", "ECMAScript", "Frontend"],
    content: [
      {
        type: "p",
        text: 'For years, "plain JavaScript" was not really plain. Every real project used lodash for deep clones, date-fns for dates, uuid for IDs, and a debounce function copied from a Stack Overflow answer everyone has seen. That was never the language\'s fault — the standard library genuinely had gaps. Writing this in 2026, a lot of those gaps are closed. That changes what a simple, framework-free file of JavaScript looks like day to day.',
      },
      {
        type: "h2",
        text: "You don't need a library to clone or compare objects",
      },
      {
        type: "p",
        text: 'structuredClone is built into every major browser and into Node.js now. It is the normal answer to "how do I deep clone this object," not some obscure alternative to JSON.parse(JSON.stringify(x)). That old trick quietly breaks on functions, Dates, Maps, Sets, and undefined values. structuredClone handles all of them correctly.',
      },
      {
        type: "code",
        lang: "js",
        code: "// old habit, silently wrong for anything but plain JSON-shaped data\nconst copy = JSON.parse(JSON.stringify(state))\n\n// handles Date, Map, Set, ArrayBuffer, circular refs\nconst copy = structuredClone(state)",
      },
      {
        type: "p",
        text: "Deep equality is still missing, though. JavaScript has no built-in Object.deepEqual, and I don't expect one — the rules get messy fast (NaN, -0, prototypes, getters). A small library like fast-equals, or a short recursive function, is one of the few dependencies I still think is worth keeping.",
      },
      {
        type: "h2",
        text: "Arrays got new methods that don't mutate",
      },
      {
        type: "p",
        text: "This is the change I use the most. ES2023 added toSorted, toReversed, toSpliced, and with. They work like sort, reverse, splice, and direct index assignment, but they return a new array instead of changing the old one. Before this, updating one item in an array without mutating state took a few lines of code, and every React or Redux project wrote those lines slightly differently.",
      },
      {
        type: "code",
        lang: "js",
        code: "// before: spread-and-hope, or a library\nconst next = [...items]\nnext[index] = updated\n\n// now\nconst next = items.with(index, updated)\n\n// same story for sorting without mutating the original\nconst sorted = items.toSorted((a, b) => a.value - b.value)",
      },
      {
        type: "p",
        text: "Object.groupBy and Map.groupBy (ES2024) removed most of my remaining lodash.groupBy calls in the same way. One function call replaces a reduce with an accumulator object, and the code reads almost like plain English.",
      },
      {
        type: "h2",
        text: "Temporal finally fixes dates",
      },
      {
        type: "p",
        text: "Temporal shipping in browsers this year is the change I doubted the most, and it happened anyway. The old Date object has been broken since 1995: it can be mutated, months start counting from 0, and time zones cause silent bugs. Every team either lived with this or paid for a library like date-fns or Luxon. Temporal.PlainDate, Temporal.ZonedDateTime, and the rest are immutable, clear about time zones and calendars, and turn \"add one month, and handle the end of the month correctly\" into one line of code instead of a bug report.",
      },
      {
        type: "quote",
        text: 'A good sign that an API is well designed: the bug reports about it stop sounding like bugs and start sounding like "this is just how it works now." That is close to where Temporal is, a year after it shipped.',
      },
      {
        type: "p",
        text: "One honest problem: a few libraries still haven't caught up with Temporal yet. And plenty of codebases have years of Date-based logic that nobody wants to rewrite just to make it cleaner. It's the same story everywhere in this industry — new code gets the nice new API, old code keeps working the way it always has.",
      },
      {
        type: "h2",
        text: "New tools for async work and cancelling it",
      },
      {
        type: "list",
        items: [
          "AbortSignal.any() and AbortSignal.timeout() replace most hand-written helpers for timing out a promise.",
          "Promise.withResolvers() replaces the old trick of declaring a mutable let above new Promise, just to grab resolve and reject.",
          "Array.fromAsync() turns an async iterable into an array, without writing a for-await loop yourself.",
          "Iterator helpers — .map, .filter, .take, .drop, used directly on iterators — let you transform a generator lazily, without building an array in between.",
          "crypto.randomUUID() is built in now. I only still install the uuid package for v5, namespace-based UUIDs, which the platform doesn't support yet.",
        ],
      },
      {
        type: "h2",
        text: "What this doesn't replace",
      },
      {
        type: "p",
        text: 'None of this solves the hard problems that a framework or a library is actually for: reactive state, virtual DOM diffing, routing, form validation, or real translation and formatting beyond what Intl gives you. Native JavaScript closed the gap on small utility functions, the kind that used to justify adding a whole dependency for one function. It was never going to replace the tools that solve real application problems. Thinking "now I can delete React" because of these changes is the same mistake as thinking "now I need a framework" because lodash released a new version.',
      },
      {
        type: "p",
        text: "The practical lesson for a 2026 codebase: before adding a dependency for a simple data utility — cloning, grouping, removing duplicates, sorting without mutating, timing out a promise — check MDN first. There is a good chance the platform already does it, in less code, with fewer bugs, and no extra bytes sent to the browser.",
      },
    ],
  },
  {
    slug: "react-in-2026",
    title: "React in 2026: what actually changed",
    dek: 'The compiler removed most manual memoization. Server Components stopped being controversial. And the line between "React" and "your framework" almost disappeared. Notes from a frontend engineer who has lived through this shift.',
    date: "2026-09-01",
    readingTime: "9 min read",
    tags: ["React", "React Compiler", "Server Components", "Frontend"],
    content: [
      {
        type: "p",
        text: 'A few years ago, "modern React" meant knowing when to use useMemo, arguing about where state should live, and picking a data-fetching library because the built-in tools weren\'t enough. In late 2026, most of that debate is over — not because everyone agreed, but because React made the decision for us. The interesting part is not any single feature. It is how much of the daily mental effort of writing React has simply disappeared.',
      },
      {
        type: "h2",
        text: "The compiler removes the memoization work",
      },
      {
        type: "p",
        text: "React Compiler went from an optional experiment to the default choice on any new project this year. In practice, that means useMemo, useCallback, and React.memo, which used to fill half of my code review comments, are now things I rarely write by hand. I only add them when the compiler can't prove a value is stable on its own, usually when a ref escapes into a non-React API. The difference is bigger than it sounds:",
      },
      {
        type: "code",
        lang: "tsx",
        code: "// 2023: manual memoization everywhere\nconst total = useMemo(() => computeTotal(items), [items])\nconst handleSelect = useCallback((id: string) => {\n  setSelected((prev) => [...prev, id])\n}, [])\n\n// 2026: just write the function\nconst total = computeTotal(items)\nconst handleSelect = (id: string) => {\n  setSelected((prev) => [...prev, id])\n}",
      },
      {
        type: "p",
        text: 'One honest problem: the compiler is a static analysis tool, not magic. It quietly skips patterns it can\'t understand, like mutating props, closures that escape, or certain higher-order components. So teams still need eslint-plugin-react-compiler in CI to catch the components it missed. But the type of failure changed. Before, a stale closure caused a subtle bug in production. Now, it shows up as a lint warning in a pull request. That is a real improvement, not just marketing.',
      },
      {
        type: "h2",
        text: "Server Components stopped being a debate",
      },
      {
        type: "p",
        text: 'For a couple of years, "do you even need Server Components" was a fair question. The idea was new, tooling outside Next.js was thin, and many teams shipped fine without them. That question is mostly settled now. Every major React framework — Next.js, React Router\'s framework mode, TanStack Start — now treats server-first rendering, with small interactive client parts, as the default. It is no longer something you opt into.',
      },
      {
        type: "p",
        text: "What convinced most teams I've worked with was not the performance pitch. It was Actions. You can write a mutation as a plain async function, pass it to a form, and get progressive enhancement, pending states, and optimistic updates, all without setting up a client-side data library. That removed a whole category of boilerplate. useActionState and useOptimistic together cover most of what used to need a hand-written fetch-and-setState dance.",
      },
      {
        type: "quote",
        text: 'The best abstraction is the one you stop thinking about. Nobody asks "should this be a Server Component" anymore. They ask "does this one piece need interactivity" — a smaller, clearer question.',
      },
      {
        type: "h2",
        text: "The client/server line moved, but state management didn't disappear",
      },
      {
        type: "p",
        text: 'A common misunderstanding about Server Components was "you won\'t need client state management anymore." That was never true, and 2026 made it clear why: server state and client UI state are different problems. TanStack Query, or the framework-native loaders that copy it, still handles anything that comes from the network. Zustand and Redux Toolkit are still doing well for state that truly lives in the browser: open or closed panels, multi-step form drafts, undo history, live cursors. What changed is the size of the job, not whether it exists. The client-state layer got smaller because part of what lived there was really server state in disguise.',
      },
      {
        type: "h2",
        text: "Signals didn't win, but they didn't lose either",
      },
      {
        type: "p",
        text: "Solid and Svelte kept making the case for fine-grained reactivity. For a while, it looked like signals might land in React itself. They didn't. The React team bet on the compiler doing that fine-grained work at build time, instead of asking developers to learn a new primitive. Both approaches reached the same result for users, fewer wasted re-renders without manual tuning, which mostly ended the framework debate about it. This is a good example of React's real strategy in this period: solve the problem people were arguing about, but in a way that doesn't require anyone to learn a new mental model.",
      },
      {
        type: "h2",
        text: "What this means if you're hiring or being hired",
      },
      {
        type: "list",
        items: [
          'Knowing when to leave out "use client" is now more useful than knowing how to optimize a client-side render tree.',
          "Being comfortable with async/await in components (Suspense boundaries, streaming, Actions) matters more than knowing Redux internals deeply.",
          "TypeScript-first is no longer a preference. It's required now — the compiler and Server Actions both depend on accurate types to work correctly.",
          'The interesting architecture questions moved up a level: not "how do I manage this state" but "does this belong on the server, and if not, why not."',
        ],
      },
      {
        type: "h2",
        text: "The unglamorous part: migration debt",
      },
      {
        type: "p",
        text: "None of this is free for existing codebases. Most teams I've talked to run a mix: new features built the 2026 way, and a large amount of older, pre-compiler code left untouched. Rewriting a stable admin panel just for architectural purity is not a good use of a sprint. That is the real day-to-day story behind the conference talks, not a clean break, but a slow and uneven migration. New patterns win by default on anything built from scratch. Old patterns keep working exactly as they always did.",
      },
      {
        type: "p",
        text: "If there's one takeaway, it's this: the biggest wins of this period were not new capabilities. React could already do most of this with enough manual work. The real win was removing decisions. Fewer settings, fewer ways to make mistakes, more of the framework's opinion built in by default. That's a less exciting story than \"React gets signals\" or \"React gets a new hook.\" But it's the one that actually shows up in how fast a team can ship.",
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
