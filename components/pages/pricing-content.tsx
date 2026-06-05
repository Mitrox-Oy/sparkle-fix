"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { PricingCard } from "@/components/pricing-card"
import { ArrowUpRight } from "lucide-react"

export function PricingContent() {
  const { locale, t } = useLocale()

  const extras = [t.pricing.services.polishing, t.pricing.services.fullDetail]

  return (
    <div>
      <PageHeader
        eyebrow={`— ${t.nav.pricing}`}
        title={t.pricing.title}
        subtitle={t.pricing.subtitle}
        note={t.pricing.vatNote}
      />

      {/* Packages */}
      <Section eyebrow="01 — Packages" title={t.pricing.title}>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
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
      </Section>

      {/* Additional services */}
      <Section eyebrow="02 — Add-ons" title={t.services.title}>
        <div className="grid md:grid-cols-2 border-t border-white/[0.08]">
          {extras.map((service, i) => (
            <div
              key={i}
              className="py-9 md:py-10 md:px-10 md:[&:nth-child(2)]:border-l border-white/[0.08]"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="font-display text-2xl md:text-3xl leading-tight tracking-[-0.01em] text-white">
                  {service.title}
                </h4>
                <span className="text-[#edd67c] font-medium whitespace-nowrap">
                  {t.pricing.from} {service.price}€
                </span>
              </div>
              <p className="text-sm text-white/55 leading-relaxed mt-3 max-w-md">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-[#e3c46a] hover:bg-[#f1d37b] text-black font-medium uppercase tracking-wide text-sm px-7 py-4 rounded-full transition-colors"
          >
            {t.pricing.cta}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </div>
  )
}
