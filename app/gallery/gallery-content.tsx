"use client"

import { useLocale } from "@/lib/locale-context"
import { Section } from "@/components/section"
import { GalleryGrid } from "@/components/gallery-grid"

export function GalleryContent() {
  const { t, locale } = useLocale()

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-gradient-to-b from-black via-black to-gray-950">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.galleryPage.title}</h1>
          <p className="text-xl text-gray-400">{t.galleryPage.subtitle}</p>
        </div>
      </Section>

      {/* Gallery */}
      <Section className="bg-gray-950">
        <GalleryGrid showFilters={true} />
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-[#f1d37b]/10 via-black to-black">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            {locale === "fi" ? "Haluatko autosi tänne?" : "Want your car here?"}
          </h2>
          <p className="text-gray-400 mb-8">
            {locale === "fi"
              ? "Varaa aika ja anna meidän huolehtia autostasi."
              : "Book an appointment and let us take care of your car."}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f1d37b] to-[#e3c46a] hover:from-[#e3c46a] hover:to-[#bf9246] text-black font-semibold rounded-xl transition-all"
          >
            {t.hero.ctaPrimary}
          </a>
        </div>
      </Section>
    </div>
  )
}
