import { publicUrl } from "./utils"

export interface BeforeAfterProject {
  slug: string
  titleFi: string
  titleEn: string
  descriptionFi?: string
  descriptionEn?: string
  beforeImages: string[]
  afterImages: string[]
}

export const beforeAfterProjects: BeforeAfterProject[] = []


