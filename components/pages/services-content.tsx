"use client"

import { useLocale } from "@/lib/locale-context"
import { Section } from "@/components/section"
import { Car, Sparkles, Sofa, Droplet, Store, Shield } from "lucide-react"

export function ServicesContent() {
  const { t } = useLocale()

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f1d37b]/20 to-[#e3c46a]/10 flex items-center justify-center mb-4 shrink-0">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3 leading-tight">{service.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed flex-grow">{service.description}</p>
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
              <p className="text-[#edd67c] font-semibold mt-auto pt-2">{service.from}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
