"use client"

import { useLocale } from "@/lib/locale-context"
import { Section } from "@/components/section"
import { ContactForm } from "@/components/contact-form"
import { BookingEmbed } from "@/components/booking-embed"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactContent() {
  const { t, locale } = useLocale()

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-gradient-to-b from-black via-black to-gray-950">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.contactPage.title}</h1>
          <p className="text-xl text-gray-400">{t.contactPage.subtitle}</p>
        </div>
      </Section>

      {/* Contact Info + Form */}
      <Section className="bg-gray-950">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">{t.contactPage.info.title}</h2>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f1d37b]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#edd67c]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t.contactPage.info.email}</p>
                  <a
                    href="mailto:kristjanorav02@gmail.com"
                    className="text-white hover:text-[#edd67c] transition-colors"
                  >
                    kristjanorav02@gmail.com
                  </a>
                  <p className="text-xs text-green-400 mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    {t.contactPage.info.preferredMethod}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f1d37b]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#edd67c]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t.contactPage.info.phone}</p>
                  <a href="tel:0451228680" className="text-white hover:text-[#edd67c] transition-colors">
                    045 122 8680
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f1d37b]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#edd67c]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{locale === "fi" ? "Sijainti" : "Location"}</p>
                  <p className="text-white">Helsinki, Finland</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f1d37b]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#edd67c]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{locale === "fi" ? "Aukioloajat" : "Opening Hours"}</p>
                  <p className="text-white">Ma-Pe: 08:00 - 18:00</p>
                  <p className="text-gray-400 text-sm">La: 09:00 - 15:00</p>
                </div>
              </div>
            </div>

            {/* Contact Person */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <p className="text-sm text-gray-500 mb-2">{locale === "fi" ? "Yhteyshenkilö" : "Contact Person"}</p>
              <p className="text-xl font-semibold text-white">KRISTJAN ORAV</p>
              <p className="text-gray-400 text-sm mt-1">
                {locale === "fi" ? "Yrittäjä / Toimitusjohtaja" : "Founder / CEO"}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">{t.contactPage.form.title}</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      {/* Booking Section */}
      <Section
        id="booking"
        title={t.contactPage.booking.title}
        subtitle={t.contactPage.booking.description}
        className="bg-black"
      >
        <BookingEmbed provider="placeholder" />
      </Section>
    </div>
  )
}
