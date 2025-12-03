"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { Section } from "@/components/section"
import { PricingCard } from "@/components/pricing-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function PricingContent() {
  const { t, locale } = useLocale()
  const packages = t.pricing.packages

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-gradient-to-b from-black via-black to-gray-950">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.pricing.title}</h1>
          <p className="text-xl text-gray-400 mb-2">{t.pricing.subtitle}</p>
          <p className="text-sm text-gray-500">{t.pricing.vatNote}</p>
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section className="bg-gray-950">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <PricingCard
            title={packages.basic.title}
            price={packages.basic.price}
            description={packages.basic.description}
            features={packages.basic.features}
          />
          <PricingCard
            title={packages.premium.title}
            price={packages.premium.price}
            description={packages.premium.description}
            features={packages.premium.features}
            popular
          />
          <PricingCard
            title={packages.ceramic.title}
            price={`${t.pricing.from} ${packages.ceramic.price}`}
            description={packages.ceramic.description}
            features={packages.ceramic.features}
          />
        </div>
      </Section>

      {/* Additional Services */}
      <Section title={locale === "fi" ? "Lisäpalvelut" : "Additional Services"} className="bg-black">
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">{t.pricing.services.polishing.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{t.pricing.services.polishing.description}</p>
            <div className="space-y-1">
              <p className="text-[#edd67c] font-semibold">
                {locale === "fi" ? "Henkilöauto: " : "Passenger car: "}€{t.pricing.services.polishing.price}
              </p>
              <p className="text-[#edd67c] font-semibold">
                {locale === "fi" ? "Maastoauto: " : "SUV: "}€{t.pricing.services.polishing.priceSuv}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">{t.pricing.services.fullDetail.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{t.pricing.services.fullDetail.description}</p>
            <div className="space-y-1">
              <p className="text-[#edd67c] font-semibold">
                {locale === "fi" ? "Henkilöauto: " : "Passenger car: "}€{t.pricing.services.fullDetail.price}
              </p>
              <p className="text-[#edd67c] font-semibold">
                {locale === "fi" ? "Maastoauto: " : "SUV: "}€{t.pricing.services.fullDetail.priceSuv}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-[#f1d37b]/10 via-black to-black">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">{t.pricing.cta}</h2>
          <p className="text-gray-400 mb-8">
            {locale === "fi" ? "Räätälöimme tarjouksen tarpeidesi mukaan." : "We'll tailor a quote to your needs."}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#f1d37b] to-[#e3c46a] hover:from-[#e3c46a] hover:to-[#bf9246] text-black font-semibold px-8"
          >
            <Link href="/contact">
              {locale === "fi" ? "Pyydä tarjous" : "Request quote"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </div>
  )
}
