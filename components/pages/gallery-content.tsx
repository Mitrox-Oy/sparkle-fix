"use client"

import { useLocale } from "@/lib/locale-context"
import { Section } from "@/components/section"
import { GalleryGrid } from "@/components/gallery-grid"

export function GalleryContent() {
  const { t } = useLocale()

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.galleryPage.title}
          </h1>
          <p className="text-xl text-gray-400">{t.galleryPage.subtitle}</p>
        </div>
      </Section>

      {/* Gallery Grid */}
      <Section className="bg-gray-950">
        <GalleryGrid showFilters={true} />
      </Section>
    </div>
  )
}
