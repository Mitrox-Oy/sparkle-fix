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

export const beforeAfterProjects: BeforeAfterProject[] = [
  {
    slug: "project-1",
    titleFi: "Ford Transit - ennen & jälkeen",
    titleEn: "Ford Transit - before & after",
    descriptionFi: "Esimerkki siitä, miten perusteellinen käsittely muuttaa auton ilmeen.",
    descriptionEn: "An example of how a thorough treatment transforms the look of a work van.",
    beforeImages: [
      publicUrl("IMG-20240330-WA0004.jpg"),
      publicUrl("IMG-20240330-WA0007.jpg"),
      publicUrl("IMG-20240330-WA0010.jpg"),
      publicUrl("IMG-20240330-WA0011.jpg"),
    ],
    afterImages: [
      publicUrl("IMG-20240330-WA0012.jpg"),
      publicUrl("IMG-20240330-WA0019.jpg"),
      publicUrl("IMG-20240330-WA0020.jpg"),
      publicUrl("IMG-20240330-WA0026.jpg"),
    ],
  },
]


