"use client"

import { useLocale } from "@/lib/locale-context"
import { PHONE_TEL, PHONE_DISPLAY } from "@/lib/contact"
import { Phone, Mail } from "lucide-react"

const BOOKING_CALENDLY_URL = "https://calendly.com/sparklefix"
const BOOKING_TIMMA_URL = "https://timma.fi/sparklefix"
const BOOKING_GOOGLE_CALENDAR_URL = "https://calendar.google.com/calendar/appointments"

type BookingProvider = "calendly" | "timma" | "google" | "placeholder"

interface BookingEmbedProps {
  provider?: BookingProvider
  url?: string
  className?: string
}

export function BookingEmbed({ provider = "placeholder", url, className }: BookingEmbedProps) {
  const { t } = useLocale()

  const getEmbedUrl = () => {
    if (url) return url
    switch (provider) {
      case "calendly":
        return BOOKING_CALENDLY_URL
      case "timma":
        return BOOKING_TIMMA_URL
      case "google":
        return BOOKING_GOOGLE_CALENDAR_URL
      default:
        return null
    }
  }

  const embedUrl = getEmbedUrl()

  if (!embedUrl || provider === "placeholder") {
    return (
      <div
        className={`border border-white/10 p-8 md:p-12 text-left ${className ?? ""}`}
      >
        <p className="eyebrow mb-5">{t.contactPage.booking.title}</p>
        <h3 className="font-display text-3xl md:text-4xl leading-[1.05] tracking-[-0.01em] text-white mb-3">
          {t.bookingEmbed.title}
        </h3>
        <p className="text-sm text-white/60 mb-8 max-w-md">{t.bookingEmbed.description}</p>
        {/* Phone primary on mobile (flex-col-reverse), email primary on desktop */}
        <div className="flex flex-col-reverse sm:flex-row gap-3">
          <a
            href="mailto:sparkle.fix@hotmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/15 text-white text-sm tracking-wide hover:bg-white/5 transition-colors"
          >
            <Mail className="w-4 h-4" />
            {t.bookingEmbed.emailCta}
          </a>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#e3c46a] hover:bg-[#f1d37b] text-black font-medium uppercase tracking-wide text-sm rounded-full transition-colors"
          >
            <Phone className="w-4 h-4" />
            {t.bookingEmbed.callCta}
            <span className="hidden sm:inline text-black/70 font-normal normal-case">· {PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className={`overflow-hidden border border-white/10 ${className ?? ""}`}>
      <iframe
        src={embedUrl}
        width="100%"
        height="600"
        frameBorder="0"
        className="w-full min-h-[600px] bg-white"
        title="Booking Calendar"
      />
    </div>
  )
}
