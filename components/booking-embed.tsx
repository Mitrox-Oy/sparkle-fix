"use client"

// Configuration - Update these URLs when you have your actual booking links
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
        className={`bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 text-center ${className}`}
      >
        <div className="w-16 h-16 rounded-full bg-[#f1d37b]/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[#edd67c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Ajanvaraus tulossa pian</h3>
        <p className="text-gray-400 text-sm mb-6">
          Online-ajanvaraus otetaan käyttöön pian. Sillä välin voit varata ajan ottamalla yhteyttä.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:kristjanorav02@gmail.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#f1d37b] to-[#e3c46a] text-black font-semibold rounded-xl hover:from-[#e3c46a] hover:to-[#bf9246] transition-all"
          >
            Lähetä sähköpostia
          </a>
          <a
            href="tel:0451228680"
            className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-all"
          >
            Soita meille
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className={`rounded-2xl overflow-hidden ${className}`}>
      <iframe
        src={embedUrl}
        width="100%"
        height="600"
        frameBorder="0"
        className="w-full min-h-[600px] bg-white rounded-2xl"
        title="Booking Calendar"
      />
    </div>
  )
}
