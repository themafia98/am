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
  cvFileName: 'Pavel_Piatrovich_CV_2026_1905.pdf',
  summary: `Frontend Engineer with 6+ years of commercial experience building scalable web and
    mobile applications with React, React Native, and TypeScript. Strong background in
    component-driven development, modern state management (Redux / Redux Toolkit, MobX, Zustand),
    and reusable UI systems with Storybook. Experience as SDET with Playwright. Some background in
    Node.js / Express.js with interest in expanding into backend (NestJS, GraphQL). Comfortable in
    cross-functional Agile teams delivering production-grade features end to end. Open to B2B
    contracts - product companies, startups, and ambitious side projects.`,
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
    location: 'Warsaw, Poland (prev. Minsk, Belarus)',
    period: 'Jun 2021 - Present',
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
        name: 'Horse Racing Betting App - Cross-Platform',
        tech: 'React Native · Expo SDK · Storybook',
        highlights: [
          'Drove architectural decisions and built a React Native application from scratch; independently designed and implemented a complex UI Kit supporting white-label configurations and dark/light themes.',
          'Applied Component-Driven Development using Storybook to develop and maintain reusable components; collaborated on cross-platform delivery (iOS, Android, Web via Expo).',
          'Contributed to performance optimization and test coverage (unit), ensuring maintainable and reliable codebase.',
        ],
      },
      {
        name: 'Betting Services Admin Panel',
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
          'Maintained and extended React-based components for a cross-platform betting app (iOS via Cordova and web), ensuring stability and consistency across platforms.',
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
          'Built UI components for manager and driver-facing React Native apps.',
          'Improved stability by resolving defects and supporting consistent release quality.',
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
      'Translated client requirements into clean, maintainable UI components with a focus on user experience.',
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
      'ERP solution for a large enterprise client; migrated codebase from class-based components to functional components and hooks. Contributed to a Next.js sub-project alongside the main product.',
    bullets: [
      'Built reusable UI components and feature modules for an enterprise ERP system.',
      'Wrote unit and integration tests with Jest and Enzyme to keep the codebase stable and regression-free.',
      'Integrated Storybook for component-driven UI development.',
      'Worked on app performance and scalability - bundle size, rendering, and asset optimization.',
      'Used Git-based workflows (feature branches, pull requests) in a team environment.',
      'Collaborated with cross-functional teams.',
    ],
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Languages',
    color: BadgeVariant.Cyan,
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML/HTML5', 'CSS/CSS3'],
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
    skills: ['Formik', 'Zod'],
  },
  {
    label: 'UI & Styling',
    color: BadgeVariant.Pink,
    skills: ['Material UI', 'Ant Design', 'Tailwind CSS', 'SCSS', 'CSS Modules', 'styled-components', 'CSS-in-JS'],
  },
  {
    label: 'Testing',
    color: BadgeVariant.Orange,
    skills: ['Jest', 'React Testing Library', 'Enzyme', 'Playwright (SDET experience)', 'integration testing'],
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
    skills: ['Component-Driven Development', 'Feature-Sliced Design', 'MVVM', 'MVC', 'OOP', 'Design Patterns', 'Performance Optimization', 'Micro-frontends', 'Responsive Design', 'KISS', 'DRY', 'TypeScript-first', 'Agile/Scrum'],
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
    tagline: 'AI Mock Technical Interviews - Built for Engineers',
    description:
      'Full-stack AI interview simulator with real-time scoring across Technical depth, Communication, ' +
      'Edge cases, and Problem-solving. Supports sandboxed code execution, human-review payments, ' +
      'and an AICoach for personalised feedback. Available in EN, DE, ES, and RU.',
    url: 'https://themafia98.github.io/mentara-ai-landing-page/',
    githubRepo: 'themafia98/mentara-ai-landing-page',
    status: ProjectStatus.InProgress,
    tags: ['React Native', 'Expo 55', 'Fastify', 'TypeScript', 'Redis', 'Postgres', 'Stripe', 'Clerk'],
    arch: [
      { label: 'Client',   items: ['React Native · Expo 55', 'Clerk Auth', 'REST + WebSocket'] },
      { label: 'Backend',  items: ['Fastify', 'Redis (live session state)', 'Postgres (history & reports)'] },
      { label: 'AI',       items: ['Interview Agent', 'Scoring Agent', 'Progress Agent', 'AICoach'] },
      { label: 'Infra',    items: ['Judge0 (code execution)', 'Stripe (human-review payments)'] },
    ] satisfies ArchLayer[],
  },
]

export const MARQUEE_SKILLS: readonly string[] = [
  'React', 'React Native', 'TypeScript', 'Next.js', 'Redux Toolkit',
  'Tailwind CSS', 'Playwright', 'Storybook', 'GraphQL', 'TanStack Query',
  'Node.js', 'Zustand', 'Vite', 'Docker', 'MobX', 'Micro-frontends',
]
