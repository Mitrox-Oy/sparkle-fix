"use client"

import { useLocale } from "@/lib/locale-context"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { GalleryGrid } from "@/components/gallery-grid"

export function GalleryContent() {
  const { t } = useLocale()

  return (
    <div>
      <PageHeader eyebrow={`— ${t.nav.gallery}`} title={t.galleryPage.title} subtitle={t.galleryPage.subtitle} />
      <Section className="pt-0 md:pt-0">
        <GalleryGrid showFilters={true} />
      </Section>
    </div>
  )
}
