"use client"

import { useLocale } from "@/lib/locale-context"
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { BookingEmbed } from "@/components/booking-embed"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactContent() {
  const { t } = useLocale()

  return (
    <div>
      <PageHeader eyebrow={`— ${t.nav.contact}`} title={t.contactPage.title} subtitle={t.contactPage.subtitle} />

      {/* Contact info + form */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 border-t border-white/[0.08] pt-12">
          {/* Info */}
          <div>
            <p className="eyebrow mb-5">{t.contactPage.info.title}</p>
            <p className="text-white/60 mb-10 max-w-sm">{t.contactPage.info.preferredMethod}</p>

            <div className="flex flex-col">
              <a
                href="mailto:sparkle.fix@hotmail.com"
                className="group flex items-center justify-between gap-4 py-5 border-t border-white/[0.08]"
              >
                <span className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[#e3c46a]" />
                  <span className="text-white/80 group-hover:text-white transition-colors">sparkle.fix@hotmail.com</span>
                </span>
                <span className="eyebrow">{t.contactPage.info.email}</span>
              </a>
              <a
                href={PHONE_TEL}
                className="group flex items-center justify-between gap-4 py-5 border-t border-white/[0.08]"
              >
                <span className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-[#e3c46a]" />
                  <span className="text-white/80 group-hover:text-white transition-colors">{PHONE_DISPLAY}</span>
                </span>
                <span className="eyebrow">{t.contactPage.info.phone}</span>
              </a>
              <div className="flex items-center justify-between gap-4 py-5 border-y border-white/[0.08]">
                <span className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-[#e3c46a]" />
                  <span className="text-white/80">Tiistinniityntie 6, Espoo · Rakennus A, Tila 3</span>
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <p className="eyebrow mb-5">{t.contactPage.form.title}</p>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Booking */}
      <Section eyebrow="—" title={t.contactPage.booking.title} subtitle={t.contactPage.booking.description}>
        <BookingEmbed />
      </Section>
    </div>
  )
}
