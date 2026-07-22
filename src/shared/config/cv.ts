import {
  BadgeVariant,
  ProjectStatus,
  type Personal,
  type Job,
  type SkillCategory,
  type Education,
  type Certification,
  type Language,
  type NavItem,
  type ContactItem,
  type Stat,
  type PersonalProject,
  type ArchLayer,
} from '@/shared/types'
import { CV_PDF_FILENAME } from './cv-pdf'

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
  cvPath: '/api/cv-view',
  cvFileName: CV_PDF_FILENAME,
  summary: `Frontend Engineer with 6+ years of commercial experience building scalable web and
    mobile applications with React, React Native, and TypeScript. Strong background in
    component-driven development, modern state management (Redux / Redux Toolkit, MobX, Zustand),
    and reusable UI systems with Storybook. Experience as SDET with Playwright. Some background in
    Node.js / Express.js with interest in expanding into backend (NestJS, GraphQL). I feel confident
    in cross-functional Agile teams developing features end to end.`,
  yearsOfExperience: 6,
}

export const HERO_STATS: Stat[] = [
  { value: '6+', label: 'Years XP' },
  { value: 'B2', label: 'English' },
]

export const ABOUT_TAGS: readonly string[] = [
  'Component-Driven Dev',
  'TypeScript-first',
  'Agile / Scrum',
  'SOLID · DRY · KISS',
  'Micro-frontends',
  'Feature-Sliced Design',
  'Responsive Design',
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
    title: 'Software Developer - React / React Native',
    company: 'Solbeg_',
    location: 'Warsaw, Poland',
    period: 'Jun 2021 - Present',
    current: true,
    summary:
      'Developed applications of varying complexity using React and React Native across multiple client projects. Worked as an SDET with a focus on automated testing using Playwright.',
    bullets: [
      'Build and maintain scalable web and mobile apps with React, React Native (Expo SDK), and TypeScript; reusable, well-typed components following a component-driven approach.',
      'Collaborate with cross-functional distributed teams (backend, design, QA, PM); participate in code reviews, Agile ceremonies, frontend estimation, and asynchronous communication workflows using modern collaboration tools.',
      'Proposed and introduced code review guidelines and best practices, contributing to team-wide process improvements.',
      'Work as SDET: design and maintain automated end-to-end testing infrastructure with Playwright, improving regression coverage and release confidence.',
    ],
    projects: [
      {
        name: 'Horse Racing Betting App - Cross-Platform',
        tech: 'React Native · Expo SDK · Storybook',
        highlights: [
          'Drove architectural decisions and built a React Native application from scratch; independently designed and implemented a scalable UI Kit supporting white-label configurations and dark/light themes with a focus on maintainability, reusability, and performance optimization.',
          'Applied Component-Driven Development using Storybook to develop and maintain reusable components; collaborated on cross-platform delivery (iOS, Android, Web via Expo).',
          'Contributed to performance optimization and test coverage (unit), ensuring maintainable and reliable codebase.',
        ],
      },
      {
        name: 'Betting Services Admin Panel - Web',
        tech: 'React',
        highlights: [
          'Contributed to the development and maintenance of a web-based admin panel for managing betting services.',
          'Implemented new features, resolved issues, and adapted existing components for an upcoming UI redesign.',
          'Collaborated closely with backend and QA teams in an Agile workflow.',
        ],
      },
      {
        name: 'Horse Racing Betting App - Cordova (iOS) & Web',
        tech: 'React · Apache Cordova · Playwright',
        highlights: [
          'Maintained and extended React-based components for a cross-platform betting app (iOS via Cordova and Web), ensuring stability and consistency across platforms.',
          'Integrated and configured Cordova plugins, working with platform-specific (iOS) capabilities and resolving related issues.',
          'Developed and maintained end-to-end test automation using Playwright, increasing regression coverage and reliability of key user flows.',
        ],
      },
      {
        name: 'Insurance Agent Portal',
        tech: 'React · Micro Frontends · Redux',
        highlights: [
          'Developed React components and feature modules within a micro-frontend architecture.',
          'Improved codebase stability and maintainability through unit and integration testing.',
          'Integrated REST APIs and managed application state with Redux.',
        ],
      },
      {
        name: 'Transport & Logistics App',
        tech: 'React Native',
        highlights: [
          'Built UI components for two React Native applications targeting managers and drivers in the transportation sector.',
          'Improved application stability by resolving defects and supporting consistent release quality across both apps.',
        ],
      },
    ],
  },
  {
    id: 'freelance',
    title: 'Frontend Developer - React',
    company: 'Freelance / Self-Initiated',
    location: 'Remote',
    period: 'Apr 2020 - Dec 2021',
    current: false,
    summary:
      'Contributed to a React app utilizing the Google Maps API, collaborating with backend developers, designers, and stakeholders. Also built a static website with Next.js as a sub-project.',
    bullets: [
      'Cooperated closely with backend developers to define API contracts and integrate REST endpoints.',
      'Worked independently on feature delivery, API integration, and responsive UI implementation across web projects.',
    ],
  },
  {
    id: 'itertech',
    title: 'Frontend Developer',
    company: 'IterTech Innovations',
    location: 'Minsk, Belarus',
    period: 'Sep 2019 - Jun 2021',
    current: false,
    summary:
      'ERP solution for a large enterprise client; participated in migration from class-based components to modern React architecture with hooks and functional components. Contributed to a Next.js sub-project alongside the main product.',
    bullets: [
      'Built reusable UI components and maintained Storybook-based UI systems.',
      'Wrote unit tests with Jest and Enzyme to keep the codebase stable and regression-free.',
      'Worked on application performance and scalability, including bundle size reduction, rendering optimization, and asset optimization.',
    ],
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Languages',
    color: BadgeVariant.Cyan,
    skills: ['JavaScript (ES5, ES6+)', 'TypeScript', 'HTML/HTML5', 'CSS/CSS3'],
  },
  {
    label: 'Frameworks & Libraries',
    color: BadgeVariant.Blue,
    skills: ['React', 'React Native (Expo SDK)', 'Next.js (SSR/SSG/ISR)', 'Node.js', 'Apache Cordova'],
  },
  {
    label: 'State Management',
    color: BadgeVariant.Purple,
    skills: ['Redux', 'Redux Toolkit', 'MobX', 'Zustand'],
  },
  {
    label: 'Data Fetching & Realtime',
    color: BadgeVariant.Green,
    skills: ['Fetch API (native)', 'TanStack React Query', 'Apollo GraphQL', 'WebSockets'],
  },
  {
    label: 'Forms & Validation',
    color: BadgeVariant.Default,
    skills: ['Formik', 'React Hook Form', 'Zod'],
  },
  {
    label: 'UI & Styling',
    color: BadgeVariant.Pink,
    skills: ['Material UI', 'Fluent UI', 'Tailwind CSS', 'SCSS', 'CSS Modules', 'styled-components'],
  },
  {
    label: 'Testing',
    color: BadgeVariant.Orange,
    skills: ['Jest', 'React Testing Library', 'Playwright', 'Vitest'],
  },
  {
    label: 'Build & Tooling',
    color: BadgeVariant.Yellow,
    skills: ['Webpack', 'Babel', 'ESLint', 'Prettier', 'Vite', 'Storybook', 'Monorepo (Turborepo, Nx)', 'Docker', 'Firebase', 'Postman', 'Swagger', 'CI/CD (GitHub, CircleCI, Bitbucket)', 'cloud platforms (GCP)', 'Git'],
  },
  {
    label: 'AI Dev Tools',
    color: BadgeVariant.Teal,
    skills: ['Claude Code', 'GitHub Copilot', 'Codex'],
  },
  {
    label: 'Practices',
    color: BadgeVariant.Cyan,
    skills: ['Component-Driven Development', 'Feature-Sliced Design', 'MVVM', 'MVC', 'Design Patterns', 'Performance Optimization', 'Micro-frontends', 'Responsive Design', 'KISS', 'DRY', 'TypeScript-first', 'Agile/Scrum'],
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
    period: '2018-2019',
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
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/pavel-software-anywhere',
    href: 'https://linkedin.com/in/pavel-software-anywhere',
  },
  {
    label: 'WhatsApp',
    value: '+48 516 532 323',
    href: 'https://wa.me/48516532323',
  },
]

export const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    name: 'Mentara',
    tagline: 'AI Mock Interview Training - Multi-Agent System',
    description:
      'Full-stack AI interview-training app (Expo/React Native + Fastify) powered by 3 orchestrated ' +
      'LLM agents, with real-time token streaming over WebSocket for live interview conversations. ' +
      'Adding voice input (speech-to-text) and voice output (text-to-speech) for a hands-free mode, ' +
      'backed by a type-safe shared contract (TypeScript + Zod) across REST/WS.',
    url: 'https://mentara-ai-landing.web.app/',
    // githubRepo: 'themafia98/mentara-ai-landing-page',
    status: ProjectStatus.InProgress,
    tags: ['React Native', 'Expo', 'Fastify', 'TypeScript', 'PostgreSQL', 'WebSockets', 'Zod', 'Zustand', 'TanStack Query', 'Turborepo', 'Clerk', 'Stripe', 'RevenueCat'],
    arch: [
      { label: 'Client',   items: ['React Native · Expo', 'Clerk Auth', 'REST + WebSocket', 'Voice I/O (in progress)'] },
      { label: 'Backend',  items: ['Fastify', 'PostgreSQL', 'Redis', 'Real-time WebSocket token streaming'] },
      { label: 'AI',       items: ['Interview Agent', 'Scoring Agent', 'Progress Agent', 'AICoach'] },
      { label: 'Infra',    items: ['GitHub Actions', 'EAS cloud builds', 'Storybook workflow', 'Stripe', 'RevenueCat', 'Judge0 (code execution)'] },
    ] satisfies ArchLayer[],
  },
  {
    name: 'Space View',
    tagline: 'Immersive Single-Page Space Experience',
    description:
      'A single-page space-themed experience built with Next.js and Three.js, featuring an ' +
      'interactive 3D scene rendered directly in the browser.',
    url: 'https://space-view-one.vercel.app/',
    status: ProjectStatus.Live,
    tags: ['Next.js', 'Three.js', 'TypeScript'],
  },
]
