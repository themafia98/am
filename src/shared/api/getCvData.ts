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
import { logger } from '@/shared/lib/logger'

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
  if (!process.env.EDGE_CONFIG) {
    logger.info('cv:static', { reason: 'EDGE_CONFIG env not set' })
    return staticData
  }

  const t0 = Date.now()
  try {
    const { get } = await import('@vercel/edge-config')
    const overrides = await get<Partial<CvData>>('cv')
    const ms = Date.now() - t0

    if (!overrides) {
      logger.info('cv:edge-config-miss', { ms })
      return staticData
    }

    logger.info('cv:edge-config-hit', { ms, keys: Object.keys(overrides) })
    return { ...staticData, ...overrides }
  } catch (err) {
    logger.error('cv:edge-config-error', { ms: Date.now() - t0, error: String(err) })
    return staticData
  }
}