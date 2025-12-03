"use client"

import { useLocale } from "@/lib/locale-context"
import { Section } from "@/components/section"
import { ServiceCard } from "@/components/service-card"
import { Car, Sparkles, Sofa, Star, Store, Shield } from "lucide-react"

export function ServicesContent() {
  const { t, locale } = useLocale()
  const services = t.servicesPage.services

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-gradient-to-b from-black via-black to-gray-950">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.servicesPage.title}</h1>
          <p className="text-xl text-gray-400">{t.servicesPage.subtitle}</p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-gray-950">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Car className="w-6 h-6 text-[#edd67c]" />}
            title={services.basicWash.title}
            description={services.basicWash.description}
            useCases={services.basicWash.useCases}
            from={services.basicWash.from}
          />
          <ServiceCard
            icon={<Sparkles className="w-6 h-6 text-[#edd67c]" />}
            title={services.premiumDetail.title}
            description={services.premiumDetail.description}
            useCases={services.premiumDetail.useCases}
            from={services.premiumDetail.from}
          />
          <ServiceCard
            icon={<Sofa className="w-6 h-6 text-[#edd67c]" />}
            title={services.interior.title}
            description={services.interior.description}
            useCases={services.interior.useCases}
            from={services.interior.from}
          />
          <ServiceCard
            icon={<Star className="w-6 h-6 text-[#edd67c]" />}
            title={services.fullDetail.title}
            description={services.fullDetail.description}
            useCases={services.fullDetail.useCases}
            from={services.fullDetail.from}
          />
          <ServiceCard
            icon={<Store className="w-6 h-6 text-[#edd67c]" />}
            title={services.dealership.title}
            description={services.dealership.description}
            useCases={services.dealership.useCases}
            from={services.dealership.from}
            forDealerships
          />
          <ServiceCard
            icon={<Shield className="w-6 h-6 text-[#edd67c]" />}
            title={services.protection.title}
            description={services.protection.description}
            useCases={services.protection.useCases}
            from={services.protection.from}
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-[#f1d37b]/10 via-black to-black">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            {locale === "fi" ? "Etkö löytänyt sopivaa?" : "Didn't find what you need?"}
          </h2>
          <p className="text-gray-400 mb-8">
            {locale === "fi"
              ? "Räätälöimme palvelun tarpeidesi mukaan. Ota yhteyttä niin keskustellaan!"
              : "We can customize services to your needs. Contact us to discuss!"}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f1d37b] to-[#e3c46a] hover:from-[#e3c46a] hover:to-[#bf9246] text-black font-semibold rounded-xl transition-all"
          >
            {t.services.askQuote}
          </a>
        </div>
      </Section>
    </div>
  )
}
