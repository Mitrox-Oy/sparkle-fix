"use client"

import { useLocale } from "@/lib/locale-context"
import { Section } from "@/components/section"
import { ContactForm } from "@/components/contact-form"
import { BookingEmbed } from "@/components/booking-embed"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactContent() {
  const { t } = useLocale()

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.contactPage.title}
          </h1>
          <p className="text-xl text-gray-400">{t.contactPage.subtitle}</p>
        </div>
      </Section>

      {/* Contact Information & Form */}
      <Section className="bg-gray-950">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">{t.contactPage.info.title}</h2>
            <p className="text-gray-400 mb-8">{t.contactPage.info.preferredMethod}</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f1d37b]/20 to-[#e3c46a]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#edd67c]" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">{t.contactPage.info.email}</h3>
                  <a
                    href="mailto:sparkle.fix@hotmail.com"
                    className="text-gray-400 hover:text-[#edd67c] transition-colors"
                  >
                    sparkle.fix@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f1d37b]/20 to-[#e3c46a]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#edd67c]" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">{t.contactPage.info.phone}</h3>
                  <a
                    href="tel:0451228700"
                    className="text-gray-400 hover:text-[#edd67c] transition-colors"
                  >
                    045 122 8700
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f1d37b]/20 to-[#e3c46a]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#edd67c]" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Tiistinniityntie 6</h3>
                  <p className="text-gray-400">Espoo, Rakennus A, Tila 3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">{t.contactPage.form.title}</h2>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Booking Section */}
      <Section className="bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-white mb-4">{t.contactPage.booking.title}</h2>
            <p className="text-gray-400">{t.contactPage.booking.description}</p>
          </div>
          <BookingEmbed />
        </div>
      </Section>
    </div>
  )
}
