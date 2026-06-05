"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { Hero } from "@/components/hero"
import { Section } from "@/components/section"
import { ValueCard } from "@/components/value-card"
import { ServiceCard } from "@/components/service-card"
import { AudienceSection } from "@/components/audience-section"
import { GalleryGrid } from "@/components/gallery-grid"
import { Shield, Award, Heart, Sparkles, ArrowRight, ArrowUpRight } from "lucide-react"

export default function HomePage() {
  const { locale, t } = useLocale()

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Value Propositions */}
      <Section eyebrow="01 — Why Sparkle Fix" title={t.values.title} subtitle={t.values.subtitle}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 border-t border-white/[0.08] pt-12">
          <ValueCard
            icon={<Shield />}
            title={t.values.reliable.title}
            description={t.values.reliable.description}
          />
          <ValueCard
            icon={<Award />}
            title={t.values.professional.title}
            description={t.values.professional.description}
          />
          <ValueCard
            icon={<Heart />}
            title={t.values.family.title}
            description={t.values.family.description}
          />
          <ValueCard
            icon={<Sparkles />}
            title={t.values.quality.title}
            description={t.values.quality.description}
          />
        </div>
      </Section>

      {/* Services — editorial numbered list */}
      <Section
        eyebrow="02 — Services"
        title={t.services.title}
        subtitle={t.services.subtitle}
        actions={
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white underline-offset-[6px] hover:underline transition-colors"
          >
            {t.services.viewAll}
            <ArrowRight className="w-4 h-4" />
          </Link>
        }
      >
        <div className="flex flex-col border-b border-white/[0.08]">
          <ServiceCard
            index={0}
            title={t.services.basicWash.title}
            description={t.services.basicWash.description}
            from="35 €"
          />
          <ServiceCard
            index={1}
            title={t.services.premiumDetail.title}
            description={t.services.premiumDetail.description}
            from="299 €"
          />
          <ServiceCard
            index={2}
            title={t.services.interior.title}
            description={t.services.interior.description}
            from="89 €"
          />
          <ServiceCard
            index={3}
            title={t.services.dealership.title}
            description={t.services.dealership.description}
            forDealerships
          />
        </div>
      </Section>

      {/* Audience Sections */}
      <Section eyebrow="03 — Who we serve" title={t.audience.title}>
        <AudienceSection />
      </Section>

      {/* Booking CTA — stripped, editorial */}
      <Section>
        <div className="border-t border-white/[0.08] pt-16 md:pt-20">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-7">
              <p className="eyebrow mb-5">04 — {t.booking.title}</p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-[-0.015em] text-white">
                {t.booking.title}
              </h2>
              <p className="mt-5 text-base md:text-lg text-white/60 max-w-xl">{t.booking.subtitle}</p>
            </div>
            <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 bg-[#e3c46a] hover:bg-[#f1d37b] text-black font-medium uppercase tracking-wide text-sm px-7 py-4 rounded-full transition-colors"
              >
                {t.booking.ctaPrimary}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center text-sm text-white/70 hover:text-white underline-offset-[6px] hover:underline"
              >
                {t.booking.ctaSecondary} →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery Teaser */}
      <Section
        eyebrow="05 — Selected work"
        title={t.gallery.title}
        subtitle={t.gallery.subtitle}
        actions={
          <Link
            href={`/${locale}/gallery`}
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white underline-offset-[6px] hover:underline transition-colors"
          >
            {t.gallery.viewAll}
            <ArrowRight className="w-4 h-4" />
          </Link>
        }
      >
        <GalleryGrid showFilters={false} limit={6} />
      </Section>
    </>
  )
}
