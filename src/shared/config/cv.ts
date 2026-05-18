import type {
  Personal,
  Job,
  SkillCategory,
  Education,
  Certification,
  Language,
  NavItem,
  ContactItem,
  Stat,
  PersonalProject,
  ArchLayer,
} from '@/shared/types'

export const PERSONAL: Personal = {
  name: 'Pavel Piatrovich',
  firstName: 'Pavel',
  lastName: 'Piatrovich',
  title: 'Frontend Engineer',
  subtitle: 'React · React Native · TypeScript',
  location: 'Warsaw, Poland',
  email: 'pasha.petrovich98@gmail.com',
  linkedin: 'pavel-software-anywhere',
  linkedinUrl: 'https://linkedin.com/in/pavel-software-anywhere',
  phone: '+48 516 532 323',
  currentCompany: 'Solbeg_',
  cvPath: '/Pavel_Piatrovich_CV_2026_1405.pdf',
  cvFileName: 'Pavel_Piatrovich_CV.pdf',
  summary: `Frontend Engineer with 6+ years of commercial experience building scalable web and
    mobile applications with React, React Native, and TypeScript. Strong background in
    component-driven development, modern state management (Redux / Redux Toolkit, MobX, Zustand),
    and reusable UI systems with Storybook. Experience as SDET with Playwright. Some background in
    Node.js / Express.js with interest in expanding into backend (NestJS, GraphQL). Comfortable in
    cross-functional Agile teams delivering production-grade features end to end. Open to B2B
    contracts — product companies, startups, and ambitious side projects.`,
  yearsOfExperience: 6,
}

export const HERO_STATS: Stat[] = [
  { value: '6+', label: 'Years XP' },
  { value: 'B2', label: 'English' },
]

export const ABOUT_TAGS = [
  'Component-Driven Dev',
  'TypeScript-first',
  'Agile / Scrum',
  'SOLID · DRY · KISS',
  'Micro-frontends',
  'Feature-Sliced Design',
  'Open to B2B Contracts',
]

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const JOBS: Job[] = [
  {
    id: 'solbeg',
    title: 'Software Developer — React / React Native',
    company: 'Solbeg_',
    location: 'Warsaw, Poland (prev. Minsk, Belarus)',
    period: 'Jun 2021 — Present',
    current: true,
    summary:
      'Developed applications of varying complexity using React and React Native across multiple client projects. Also worked as SDET with a focus on automated testing using Playwright.',
    bullets: [
      'Build and maintain scalable web and mobile apps with React, React Native (Expo SDK), and TypeScript; reusable, well-typed components following a component-driven approach.',
      'Collaborate with cross-functional teams (backend, design, QA, PM); participate in code reviews, Agile ceremonies, and frontend estimation.',
      'Proposed and introduced code review guidelines and best practices, contributing to team-wide process improvements.',
      'Work as SDET: design and maintain automated end-to-end test suites with Playwright.',
    ],
    projects: [
      {
        name: 'Horse Racing Betting App',
        tech: 'React Native · Expo SDK · Storybook',
        highlights: [
          'Drove architectural decisions; built complex UI Kit with white-label and dark/light theme support from scratch.',
          'Applied Component-Driven Development; cross-platform delivery (iOS, Android, Web via Expo).',
          'Contributed to performance optimization and unit test coverage.',
        ],
      },
      {
        name: 'Betting Services Admin Panel',
        tech: 'React',
        highlights: [
          'Developed and maintained web-based admin panel for betting services management.',
          'Implemented new features and adapted existing components for an upcoming UI redesign.',
        ],
      },
      {
        name: 'Horse Racing App — Cordova & Web',
        tech: 'React · Apache Cordova · Playwright',
        highlights: [
          'Maintained and extended React components for cross-platform app (iOS via Cordova and web).',
          'Developed E2E automation with Playwright, increasing regression coverage of key user flows.',
        ],
      },
      {
        name: 'Insurance Agent Portal',
        tech: 'React · Micro Frontends · Redux',
        highlights: [
          'Developed feature modules within a micro-frontend architecture.',
          'Improved codebase stability through unit and integration testing.',
          'Integrated REST APIs and managed application state with Redux.',
        ],
      },
      {
        name: 'Transport & Logistics App',
        tech: 'React Native',
        highlights: [
          'Built UI components for manager and driver-facing React Native apps.',
          'Improved stability by resolving defects and supporting consistent release quality.',
        ],
      },
    ],
  },
  {
    id: 'freelance',
    title: 'Frontend Developer — React',
    company: 'Freelance / Self-Initiated',
    location: 'Remote',
    period: 'Apr 2020 — Dec 2021',
    current: false,
    bullets: [
      'Contributed to a React app utilising the Google Maps API, collaborating with backend developers, designers, and stakeholders.',
      'Cooperated closely with backend developers to define API contracts and integrate REST endpoints.',
      'Built a static marketing website with Next.js as a sub-project.',
      'Translated client requirements into clean, maintainable UI components with a focus on user experience.',
    ],
  },
  {
    id: 'itertech',
    title: 'Frontend Developer',
    company: 'IterTech Innovations',
    location: 'Minsk, Belarus',
    period: 'Sep 2019 — Jun 2021',
    current: false,
    summary:
      'ERP solution for a large enterprise client; migrated codebase from class-based components to functional components and hooks. Contributed to a Next.js sub-project alongside the main product.',
    bullets: [
      'Built reusable UI components and feature modules for an enterprise ERP system.',
      'Migrated codebase from class-based components to functional components with hooks.',
      'Wrote unit and integration tests with Jest and Enzyme to keep the codebase stable.',
      'Integrated Storybook for component-driven UI development.',
      'Worked on app performance and scalability — bundle size, rendering, and asset optimisation.',
      'Used Git-based workflows (feature branches, pull requests) in a team environment.',
    ],
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Languages',
    color: 'cyan',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    label: 'Frameworks & Libraries',
    color: 'blue',
    skills: ['React', 'React Native (Expo SDK)', 'Next.js', 'Node.js', 'Apache Cordova'],
  },
  {
    label: 'State Management',
    color: 'purple',
    skills: ['Redux', 'Redux Toolkit', 'MobX', 'Zustand'],
  },
  {
    label: 'Data Fetching & Realtime',
    color: 'green',
    skills: ['TanStack React Query', 'Apollo GraphQL', 'WebSockets', 'Fetch API'],
  },
  {
    label: 'UI & Styling',
    color: 'pink',
    skills: ['Tailwind CSS', 'Material UI', 'Ant Design', 'styled-components', 'SCSS', 'CSS Modules', 'CSS-in-JS'],
  },
  {
    label: 'Testing',
    color: 'orange',
    skills: ['Jest', 'React Testing Library', 'Enzyme', 'Playwright'],
  },
  {
    label: 'Build & Tooling',
    color: 'yellow',
    skills: ['Webpack', 'Vite', 'Babel', 'Storybook', 'Docker', 'Firebase', 'GitHub CI/CD', 'CircleCI', 'GCP', 'Turborepo', 'Nx', 'ESLint', 'Prettier'],
  },
  {
    label: 'AI Dev Tools',
    color: 'teal',
    skills: ['Claude Code', 'GitHub Copilot', 'Codex'],
  },
]

export const EDUCATIONS: Education[] = [
  {
    degree: 'Bachelor of Engineering in Software Engineering',
    institution: 'ISEI BSU',
    location: 'Minsk, Belarus',
    year: 'Jul 2020',
  },
]

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'React / Angular / TypeScript / JavaScript',
    issuer: 'IT Academy, Minsk',
    period: '2018–2019',
  },
]

export const LANGUAGES: Language[] = [
  { name: 'Russian', level: 'Native', percent: 100 },
  { name: 'English', level: 'B2', percent: 68 },
]

export const CONTACT_ITEMS: ContactItem[] = [
  {
    label: 'Email',
    value: 'pasha.petrovich98@gmail.com',
    href: 'mailto:pasha.petrovich98@gmail.com',
    icon: '✦',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/pavel-software-anywhere',
    href: 'https://linkedin.com/in/pavel-software-anywhere',
    icon: '◈',
  },
  {
    label: 'WhatsApp',
    value: '+48 516 532 323',
    href: 'https://wa.me/48516532323',
    icon: '◎',
  },
]

export const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    name: 'Mentara',
    tagline: 'AI Mock Technical Interviews — Built for Engineers',
    description:
      'Full-stack AI interview simulator with real-time scoring across Technical depth, Communication, ' +
      'Edge cases, and Problem-solving. Supports sandboxed code execution, human-review payments, ' +
      'and an AICoach for personalised feedback. Available in EN, DE, ES, and RU.',
    url: 'https://themafia98.github.io/mentara-ai-landing-page/',
    status: 'in-progress',
    tags: ['React Native', 'Expo 55', 'Fastify', 'TypeScript', 'Redis', 'Postgres', 'Stripe', 'Clerk'],
    arch: [
      { label: 'Client',   items: ['React Native · Expo 55', 'Clerk Auth', 'REST + WebSocket'] },
      { label: 'Backend',  items: ['Fastify', 'Redis (live session state)', 'Postgres (history & reports)'] },
      { label: 'AI',       items: ['Interview Agent', 'Scoring Agent', 'Progress Agent', 'AICoach'] },
      { label: 'Infra',    items: ['Judge0 (code execution)', 'Stripe (human-review payments)'] },
    ] satisfies ArchLayer[],
  },
]

export const MARQUEE_SKILLS = [
  'React', 'React Native', 'TypeScript', 'Next.js', 'Redux Toolkit',
  'Tailwind CSS', 'Playwright', 'Storybook', 'GraphQL', 'TanStack Query',
  'Node.js', 'Zustand', 'Vite', 'Docker', 'MobX', 'WebSockets',
]
