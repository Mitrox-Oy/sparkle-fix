"use client"

import { useLocale } from "@/lib/locale-context"
import { Section } from "@/components/section"
import { ServiceCard } from "@/components/service-card"

export function ServicesContent() {
  const { t } = useLocale()

  const services = [
    t.servicesPage.services.basicWash,
    t.servicesPage.services.premiumDetail,
    t.servicesPage.services.interior,
    t.servicesPage.services.fullDetail,
    t.servicesPage.services.dealership,
    t.servicesPage.services.protection,
  ]

  return (
    <div>
      {/* Page header */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="eyebrow mb-5">— {t.nav.services}</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-[-0.02em] text-white max-w-4xl">
            {t.servicesPage.title}
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/60 max-w-xl">{t.servicesPage.subtitle}</p>
        </div>
      </section>

      {/* Services — editorial list */}
      <Section>
        <div className="flex flex-col border-b border-white/[0.08]">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              from={service.from}
              useCases={service.useCases}
            />
          ))}
        </div>
      </Section>
    </div>
  )
}
