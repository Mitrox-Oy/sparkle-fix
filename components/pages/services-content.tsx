"use client"

import { useLocale } from "@/lib/locale-context"
import { Section } from "@/components/section"
import { Car, Sparkles, Sofa, Droplet, Store, Shield } from "lucide-react"

export function ServicesContent() {
  const { locale, t } = useLocale()

  const services = [
    {
      icon: <Car className="w-8 h-8 text-[#edd67c]" />,
      ...t.servicesPage.services.basicWash,
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#edd67c]" />,
      ...t.servicesPage.services.premiumDetail,
    },
    {
      icon: <Sofa className="w-8 h-8 text-[#edd67c]" />,
      ...t.servicesPage.services.interior,
    },
    {
      icon: <Droplet className="w-8 h-8 text-[#edd67c]" />,
      ...t.servicesPage.services.fullDetail,
    },
    {
      icon: <Store className="w-8 h-8 text-[#edd67c]" />,
      ...t.servicesPage.services.dealership,
    },
    {
      icon: <Shield className="w-8 h-8 text-[#edd67c]" />,
      ...t.servicesPage.services.protection,
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.servicesPage.title}
          </h1>
          <p className="text-xl text-gray-400">{t.servicesPage.subtitle}</p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-gray-950">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all flex flex-col h-full"
            >
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f1d37b]/20 to-[#e3c46a]/10 flex items-center justify-center mb-4 shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 leading-tight min-h-[3.5rem]">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed min-h-[4.5rem] overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                  {service.description}
                </p>
                {service.useCases && service.useCases.length > 0 && (
                  <ul className="space-y-2 mb-4">
                    {service.useCases.map((useCase, i) => (
                      <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#edd67c] mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="min-h-[1.5rem] text-[#edd67c] font-semibold">
                    {service.from ? service.from : <span className="opacity-60">{t.services.askQuote}</span>}
                  </div>
                  <a
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors shrink-0"
                  >
                    {t.services.askQuote} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
