import type { BlogPost } from "@/shared/types";

const POSTS: readonly BlogPost[] = [
  {
    slug: "ai-coding-assistants-2026",
    title: "AI coding assistants in 2026: what actually helps",
    dek: "Autocomplete grew into an agent that reads your codebase, runs your tests, and opens a pull request. Some of that is genuinely useful. Some of it is a new way to ship bugs faster. Notes from daily use of Claude Code, Copilot, and Codex.",
    date: "2026-08-14",
    readingTime: "7 min read",
    tags: ["AI", "Developer Tools", "Claude Code", "Frontend"],
    content: [
      {
        type: "p",
        text: 'A few years ago, "how do I center a div" was the running joke for the most-searched thing in web development. That joke does not really work anymore. In 2026, the most-searched topic in programming is some version of "AI coding assistant," and the joke is not far off, because plenty of people typing that search still do not fully understand what the tool on the other end is doing.',
      },
      {
        type: "h2",
        text: "Autocomplete grew into an agent",
      },
      {
        type: "p",
        text: "The tools started as better autocomplete: finish this line, suggest this function. What changed is scope. Claude Code, GitHub Copilot, and Codex can now read across a whole repository, plan a multi-file change, run the test suite, read the failure, and try again on their own. That loop, plan, edit, run, read the result, repeat, is the actual shift. It is not a smarter autocomplete. It is a junior engineer who never gets tired of running the tests.",
      },
      {
        type: "h2",
        text: "Where it actually saves time",
      },
      {
        type: "list",
        items: [
          "Boilerplate and repetitive edits across many files: renaming a prop through 40 components, adding a new field to a form and its validation schema.",
          "Writing the first draft of tests for code that already exists, especially edge cases you would normally skip because they are tedious to set up by hand.",
          'Reading unfamiliar code. Pointing an agent at a legacy file and asking "what does this do and why" is faster than tracing it yourself, as long as you verify the answer.',
          "Small, well-defined migrations: upgrading a deprecated API call across a codebase, converting class components to function components one file at a time.",
        ],
      },
      {
        type: "p",
        text: "Notice what these have in common: the task is well-defined, and checking the result is easy. A test either passes or it does not. A renamed prop either compiles or it does not. That is where an agent is genuinely faster than typing it yourself.",
      },
      {
        type: "quote",
        text: "The tool is not replacing judgment. It is replacing typing. The moment a task needs judgment instead of typing, you are back to doing the work yourself, just with a very fast intern proposing drafts.",
      },
      {
        type: "h2",
        text: "Where it still gets it wrong",
      },
      {
        type: "p",
        text: 'The honest failure mode has not changed much: an agent will confidently call a function that does not exist, misremember an API from an older version of a library, or "fix" a failing test by weakening the assertion instead of fixing the bug. All three happened to me this month. None of them were obvious from reading the diff quickly. They were obvious from reading it carefully, which is the actual skill now.',
      },
      {
        type: "p",
        text: "Architecture decisions are the other weak spot. An agent can execute a plan well. It is much less reliable at deciding whether a plan is the right one, whether a new dependency is worth adding, or whether a quick fix will cause problems in six months. That kind of judgment still needs a person who understands the whole system, not just the file being edited.",
      },
      {
        type: "h2",
        text: "Vibe coding has a real failure mode",
      },
      {
        type: "p",
        text: '"Vibe coding", accepting whatever the agent produces without reading it closely, works fine for a throwaway prototype. It does not work for anything that will run in production, hold user data, or get maintained by someone else next year. The failure is not dramatic. It is quiet: a security check that got skipped, an edge case the tests never covered because the agent wrote both the code and the tests, a dependency that was never actually needed. Nothing crashes on day one. It shows up three months later as a support ticket nobody can explain.',
      },
      {
        type: "list",
        items: [
          "Read every diff before it merges, the same way you would review a junior engineer's pull request.",
          "Keep tests written or reviewed by a person for anything security- or money-related. Do not let the same agent write the code and grade its own test.",
          "Ask the agent to explain a change you do not understand, and treat a confusing answer as a reason to slow down, not a reason to trust it more.",
          "Use it for the boring 80%, and spend the time it saved you on the 20% that actually needs a human: the architecture call, the edge case, the security review.",
        ],
      },
      {
        type: "p",
        text: "None of this makes the tools less useful. I use Claude Code, Copilot, and Codex every day, and I would not want to go back. But the actual skill in 2026 is not prompting well. It is reviewing well, knowing what a plausible-looking wrong answer looks like, and knowing which 20% of a task you should never fully hand off.",
      },
    ],
  },
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
        text: 'Temporal shipping in browsers this year is the change I doubted the most, and it happened anyway. The old Date object has been broken since 1995: it can be mutated, months start counting from 0, and time zones cause silent bugs. Every team either lived with this or paid for a library like date-fns or Luxon. Temporal.PlainDate, Temporal.ZonedDateTime, and the rest are immutable, clear about time zones and calendars, and turn "add one month, and handle the end of the month correctly" into one line of code instead of a bug report.',
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
        text: "One honest problem: the compiler is a static analysis tool, not magic. It quietly skips patterns it can't understand, like mutating props, closures that escape, or certain higher-order components. So teams still need eslint-plugin-react-compiler in CI to catch the components it missed. But the type of failure changed. Before, a stale closure caused a subtle bug in production. Now, it shows up as a lint warning in a pull request. That is a real improvement, not just marketing.",
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
  {
    slug: "legacy-game-rethinking-2026",
    title:
      "Legacy Game Rethinking: rebuilding an old prototype with cleaner architecture",
    dek: "A 2019 browser game was rebuilt in 2026 with a cleaner structure, fixed-step simulation, and a WebAssembly hot path. The goal was not to make it look nicer. It was to make it easier to reason about, evolve, and debug.",
    date: "2026-09-03",
    readingTime: "7 min read",
    tags: [
      "Game Development",
      "TypeScript",
      "WebAssembly",
      "Architecture",
      "Learning",
    ],
    content: [
      {
        type: "p",
        text: "A lot of old projects are not dead. They are just stuck in the architecture of the time they were built. That is exactly what happened here. The original project was a 2019 canvas game written in JavaScript. For a first project, it worked well: enemies moved, bullets fired, the score was saved, and the game was playable. But the code was also a classic example of student-project architecture: globals, hidden state, tight coupling, and a lot of logic doing several jobs at once.",
      },
      {
        type: "h2",
        text: "The old version was not wrong. It was just messy.",
      },
      {
        type: "p",
        text: "This is a very common pattern. A collision handler also played sounds. Damage logic sometimes wrote to Firebase. Rendering and simulation were mixed together. A few functions had too many responsibilities, and the codebase was hard to extend without breaking something else. That is not a sign of bad engineering. It is a sign of a project built for learning, not for long-term structure.",
      },
      {
        type: "code",
        lang: "ts",
        code: "function update() {\n  player.x += 3\n  checkCollisions()\n  renderPlayer()\n  saveScore()\n  playHitSound()\n}\n\n// This mixes gameplay, rendering, persistence, and audio in one place.",
      },
      {
        type: "p",
        text: "The question was not 'how do I make this prettier?' The real question was: what would this game look like if it were designed around systems instead of convenience?",
      },
      {
        type: "h2",
        text: "The first big change: split responsibilities",
      },
      {
        type: "p",
        text: "The rewrite was not about moving from JavaScript to TypeScript alone. The real change was architectural. The game loop became a dedicated system. Movement, collisions, rendering, and audio each got their own clear boundary. The player, enemies, bullets, and pickups became mostly data containers, not logic-heavy objects that know too much about the world.",
      },
      {
        type: "code",
        lang: "ts",
        code: "const movementSystem = new MovementSystem()\nconst collisionSystem = new CollisionSystem()\nconst renderSystem = new RenderSystem()\nconst audioSystem = new AudioSystem()\n\nconst game = new GameLoop({ fixedStep: 1000 / 60 })\n\ngame.addSystem(movementSystem)\ngame.addSystem(collisionSystem)\ngame.addSystem(renderSystem)\ngame.addSystem(audioSystem)",
      },
      {
        type: "p",
        text: "That is a very practical improvement. A collision system checks collisions. A render system renders. An audio system plays sounds. Nothing is trying to do everything at once. This makes debugging easier, and it makes new mechanics easier to add later.",
      },
      {
        type: "h2",
        text: "A fixed-step loop is much more stable",
      },
      {
        type: "p",
        text: "The next major change was the update loop. Instead of trusting the browser frame timing, the project uses a fixed-step simulation. The game updates at a stable 60 Hz, and rendering happens separately. This is a common pattern in game development and it makes the rules of the game much more predictable.",
      },
      {
        type: "code",
        lang: "ts",
        code: "let accumulator = 0\nconst fixedStep = 1000 / 60\n\nfunction frame(timestamp: number) {\n  const delta = timestamp - lastTimestamp\n  accumulator += delta\n\n  while (accumulator >= fixedStep) {\n    update(fixedStep)\n    accumulator -= fixedStep\n  }\n\n  render()\n  requestAnimationFrame(frame)\n}",
      },
      {
        type: "p",
        text: "This matters because gameplay logic should not depend on tiny timing differences between frames. If one frame is 16ms and the next is 17ms, the game still behaves consistently. That is exactly the kind of issue that creates weird bugs in otherwise simple games.",
      },
      {
        type: "h2",
        text: "Why WebAssembly was interesting here",
      },
      {
        type: "p",
        text: "The hot path of the game was moved into WebAssembly. Movement, projectile physics, enemy decisions, collision checks, pickups, and combat resolution all run inside the compiled module. The browser stays in charge of input, rendering, and DOM work. That separation is useful for both performance and clarity.",
      },
      {
        type: "code",
        lang: "ts",
        code: "export function movePlayer(x: number, dx: number, dt: number): number {\n  return x + dx * dt\n}\n\nexport function resolveHit(a: number, b: number): boolean {\n  return Math.abs(a - b) < 20\n}",
      },
      {
        type: "p",
        text: "This is not only a performance optimization. It also forces the project to define what the real critical logic is. Once the game core is separated from browser APIs, it becomes easier to reason about, easier to test, and easier to optimize later.",
      },
      {
        type: "quote",
        text: "The goal was not to make the same game prettier. It was to make the same game easier to understand, easier to debug, and easier to evolve.",
      },
      {
        type: "h2",
        text: "Why I still like this project",
      },
      {
        type: "p",
        text: "This project is not trying to become a huge production game. It is a learning project with a very clear purpose: take an old prototype, ask what was wrong with the design, and rebuild it with better boundaries. It is a good example of how a 'legacy' project can still be valuable when it is used as an architecture exercise instead of a nostalgia project.",
      },
      {
        type: "list",
        items: [
          "One file should not handle movement, sound, collisions, rendering, and saving at the same time.",
          "A fixed-step loop makes gameplay rules more stable than a raw browser frame loop.",
          "WASM is useful when your logic is CPU-heavy and you want a clean separation from browser code.",
          "A project can be old and still be a great way to practice better architecture.",
        ],
      },
      {
        type: "p",
        text: "If you want to read more on the concepts behind this approach, these are useful starting points: MDN on requestAnimationFrame, MDN on WebAssembly, and ECS patterns in game architecture. The main lesson is simple: even a small game can teach a lot about architecture if you rebuild it with the right questions in mind.",
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
