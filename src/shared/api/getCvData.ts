import type { CvData } from '@/shared/types'
import {
  PERSONAL,
  HERO_STATS,
  ABOUT_TAGS,
  JOBS,
  SKILL_CATEGORIES,
  PERSONAL_PROJECTS,
  EDUCATIONS,
  CERTIFICATIONS,
  LANGUAGES,
  CONTACT_ITEMS,
  MARQUEE_SKILLS,
} from '@/shared/config/cv'

const staticData: CvData = {
  personal: PERSONAL,
  heroStats: HERO_STATS,
  aboutTags: ABOUT_TAGS,
  jobs: JOBS,
  skillCategories: SKILL_CATEGORIES,
  personalProjects: PERSONAL_PROJECTS,
  educations: EDUCATIONS,
  certifications: CERTIFICATIONS,
  languages: LANGUAGES,
  contactItems: CONTACT_ITEMS,
  marqueeSkills: MARQUEE_SKILLS,
}

/**
 * Edge Config stores only the fields that change often (personal, projects, contacts).
 * Static content (jobs, skills, education) lives in cv.ts and serves as the fallback.
 * Anything present in Edge Config under the key "cv" overrides the static default.
 */
export async function getCvData(): Promise<CvData> {
  if (!process.env.EDGE_CONFIG) return staticData
  try {
    const { get } = await import('@vercel/edge-config')
    const overrides = await get<Partial<CvData>>('cv')
    if (!overrides) return staticData
    return { ...staticData, ...overrides }
  } catch {
    return staticData
  }
}
