"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { Hero } from "@/components/hero"
import { Section } from "@/components/section"
import { ValueCard } from "@/components/value-card"
import { ServiceCard } from "@/components/service-card"
import { AudienceSection } from "@/components/audience-section"
import { GalleryGrid } from "@/components/gallery-grid"
import { Button } from "@/components/ui/button"
import { Shield, Award, Heart, Sparkles, Car, Sofa, Store, ArrowRight, Calendar } from "lucide-react"

export default function HomePage() {
  const { locale, t } = useLocale()

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Value Propositions */}
      <Section title={t.values.title} subtitle={t.values.subtitle}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard
            icon={<Shield className="w-7 h-7 text-[#edd67c]" />}
            title={t.values.reliable.title}
            description={t.values.reliable.description}
          />
          <ValueCard
            icon={<Award className="w-7 h-7 text-[#edd67c]" />}
            title={t.values.professional.title}
            description={t.values.professional.description}
          />
          <ValueCard
            icon={<Heart className="w-7 h-7 text-[#edd67c]" />}
            title={t.values.family.title}
            description={t.values.family.description}
          />
          <ValueCard
            icon={<Sparkles className="w-7 h-7 text-[#edd67c]" />}
            title={t.values.quality.title}
            description={t.values.quality.description}
          />
        </div>
      </Section>

      {/* Services Overview */}
      <Section
        title={t.services.title}
        subtitle={t.services.subtitle}
        actions={
          <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
            <Link href={`/${locale}/services`}>
              {t.services.viewAll}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        }
        className="bg-gradient-to-b from-black to-gray-950"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <ServiceCard
            icon={<Car className="w-6 h-6 text-[#edd67c]" />}
            title={t.services.basicWash.title}
            description={t.services.basicWash.description}
            from="35 €"
          />
          <ServiceCard
            icon={<Sparkles className="w-6 h-6 text-[#edd67c]" />}
            title={t.services.premiumDetail.title}
            description={t.services.premiumDetail.description}
            from="299 €"
          />
          <ServiceCard
            icon={<Sofa className="w-6 h-6 text-[#edd67c]" />}
            title={t.services.interior.title}
            description={t.services.interior.description}
            from="89 €"
          />
          <ServiceCard
            icon={<Store className="w-6 h-6 text-[#edd67c]" />}
            title={t.services.dealership.title}
            description={t.services.dealership.description}
            forDealerships
          />
        </div>
      </Section>

      {/* Audience Sections */}
      <Section title={t.audience.title} className="bg-gray-950">
        <AudienceSection />
      </Section>

      {/* Booking CTA */}
      <Section className="bg-gradient-to-br from-[#f1d37b]/10 via-black to-black">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f1d37b]/20 to-[#e3c46a]/10 flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-[#edd67c]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.booking.title}</h2>
          <p className="text-gray-400 text-lg mb-8">{t.booking.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#f1d37b] to-[#e3c46a] hover:from-[#e3c46a] hover:to-[#bf9246] text-black font-semibold px-8"
            >
              <Link href={`/${locale}/contact`}>
                {t.booking.ctaPrimary}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              <Link href={`/${locale}/contact`}>{t.booking.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Gallery Teaser */}
      <Section
        title={t.gallery.title}
        subtitle={t.gallery.subtitle}
        actions={
          <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
            <Link href={`/${locale}/gallery`}>
              {t.gallery.viewAll}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        }
      >
        <GalleryGrid showFilters={false} limit={6} />
      </Section>
    </>
  )
}
