export type BadgeVariant =
  | 'default'
  | 'cyan'
  | 'blue'
  | 'purple'
  | 'green'
  | 'pink'
  | 'orange'
  | 'yellow'
  | 'teal'

export type SkillCategory = {
  label: string
  color: BadgeVariant
  skills: string[]
}

export type Project = {
  name: string
  tech: string
  highlights: string[]
}

export type Job = {
  id: string
  title: string
  company: string
  location: string
  period: string
  current: boolean
  summary?: string
  bullets: string[]
  projects?: Project[]
}

export type Education = {
  degree: string
  institution: string
  location: string
  year: string
}

export type Certification = {
  name: string
  issuer: string
  period: string
}

export type NavItem = {
  label: string
  href: string
}

export type ContactItem = {
  label: string
  value: string
  href: string
  icon: string
}

export type Stat = {
  value: string
  label: string
}
