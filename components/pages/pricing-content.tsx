"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { Section } from "@/components/section"
import { PricingCard } from "@/components/pricing-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function PricingContent() {
  const { locale, t } = useLocale()

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.pricing.title}
          </h1>
          <p className="text-xl text-gray-400 mb-4">{t.pricing.subtitle}</p>
          <p className="text-sm text-gray-500">{t.pricing.vatNote}</p>
        </div>
      </Section>

      {/* Pricing Grid */}
      <Section className="bg-gray-950">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <PricingCard
            title={t.pricing.packages.basic.title}
            price={t.pricing.packages.basic.price}
            period={t.pricing.packages.basic.period}
            description={t.pricing.packages.basic.description}
            features={t.pricing.packages.basic.features}
          />
          <PricingCard
            title={t.pricing.packages.premium.title}
            price={t.pricing.packages.premium.price}
            period={t.pricing.packages.premium.period}
            description={t.pricing.packages.premium.description}
            features={t.pricing.packages.premium.features}
            popular={t.pricing.packages.premium.popular}
          />
          <PricingCard
            title={t.pricing.packages.ceramic.title}
            price={t.pricing.packages.ceramic.price}
            period={t.pricing.packages.ceramic.period}
            description={t.pricing.packages.ceramic.description}
            features={t.pricing.packages.ceramic.features}
          />
        </div>

        {/* Additional Services */}
        <div className="max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            {t.services.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-2">
                {t.pricing.services.polishing.title}
              </h4>
              <p className="text-gray-400 text-sm mb-3">
                {t.pricing.services.polishing.description}
              </p>
              <p className="text-[#edd67c] font-semibold">
                {t.pricing.from} {t.pricing.services.polishing.price}€
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-2">
                {t.pricing.services.fullDetail.title}
              </h4>
              <p className="text-gray-400 text-sm mb-3">
                {t.pricing.services.fullDetail.description}
              </p>
              <p className="text-[#edd67c] font-semibold">
                {t.pricing.from} {t.pricing.services.fullDetail.price}€
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#f1d37b] to-[#e3c46a] hover:from-[#e3c46a] hover:to-[#bf9246] text-black font-semibold px-8"
          >
            <Link href={`/${locale}/contact`}>
              {t.pricing.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </div>
  )
}
