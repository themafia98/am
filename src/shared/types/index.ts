export enum BadgeVariant {
  Default = "default",
  Cyan = "cyan",
  Blue = "blue",
  Purple = "purple",
  Green = "green",
  Pink = "pink",
  Orange = "orange",
  Yellow = "yellow",
  Teal = "teal",
}

export enum ProjectStatus {
  InProgress = "in-progress",
  Live = "live",
}

export enum ContactStatus {
  Idle = "idle",
  Success = "success",
  Error = "error",
}

export type ContactState =
  | { readonly status: ContactStatus.Idle }
  | { readonly status: ContactStatus.Success }
  | { readonly status: ContactStatus.Error; readonly message: string };

export const contactInitialState: ContactState = { status: ContactStatus.Idle };

export interface Personal {
  readonly name: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly title: string;
  readonly subtitle: string;
  readonly location: string;
  readonly email: string;
  readonly github: string;
  readonly githubUrl: string;
  readonly linkedin: string;
  readonly linkedinUrl: string;
  readonly phone: string;
  readonly currentCompany: string;
  readonly cvPath: string;
  readonly cvFileName: string;
  readonly summary: string;
  readonly yearsOfExperience: number;
}

export interface Stat {
  readonly value: string;
  readonly label: string;
}

export interface SkillCategory {
  readonly label: string;
  readonly color: BadgeVariant;
  readonly skills: readonly string[];
}

export interface Project {
  readonly name: string;
  readonly tech: string;
  readonly highlights: readonly string[];
}

export interface Job {
  readonly id: string;
  readonly title: string;
  readonly company: string;
  readonly location: string;
  readonly period: string;
  readonly current: boolean;
  readonly summary?: string;
  readonly bullets: readonly string[];
  readonly projects?: readonly Project[];
}

export interface Education {
  readonly degree: string;
  readonly institution: string;
  readonly location: string;
  readonly year: string;
}

export interface Certification {
  readonly name: string;
  readonly issuer: string;
  readonly period: string;
}

export interface Language {
  readonly name: string;
  readonly level: string;
  readonly percent: number;
}

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface ContactItem {
  readonly label: string;
  readonly value: string;
  readonly href: string;
}

export interface ArchLayer {
  readonly label: string;
  readonly items: readonly string[];
}

export interface RelatedLink {
  readonly label: string;
  readonly url: string;
}

export interface PersonalProject {
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly url: string;
  readonly status: ProjectStatus;
  readonly statusLabel?: string;
  readonly tags: readonly string[];
  readonly arch?: readonly ArchLayer[];
  readonly githubRepo?: string;
  readonly relatedLinks?: readonly RelatedLink[];
}

export interface CvData {
  readonly personal: Personal;
  readonly heroStats: readonly Stat[];
  readonly aboutTags: readonly string[];
  readonly jobs: readonly Job[];
  readonly skillCategories: readonly SkillCategory[];
  readonly personalProjects: readonly PersonalProject[];
  readonly sideProjects?: readonly PersonalProject[];
  readonly educations: readonly Education[];
  readonly certifications: readonly Certification[];
  readonly languages: readonly Language[];
  readonly contactItems: readonly ContactItem[];
}

export type BlogBlock =
  | { readonly type: "p"; readonly text: string }
  | { readonly type: "h2"; readonly text: string }
  | { readonly type: "quote"; readonly text: string; readonly cite?: string }
  | { readonly type: "list"; readonly items: readonly string[] }
  | { readonly type: "code"; readonly code: string; readonly lang?: string };

export interface BlogPost {
  readonly slug: string;
  readonly title: string;
  readonly dek: string;
  readonly date: string;
  readonly readingTime: string;
  readonly tags: readonly string[];
  readonly content: readonly BlogBlock[];
}
