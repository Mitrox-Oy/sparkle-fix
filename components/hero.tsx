"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { ArrowRight } from "lucide-react"
import { publicUrl } from "@/lib/utils"

export function Hero() {
  const { t, locale } = useLocale()

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-black grain">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={publicUrl("luxury-black-car-in-professional-car-wash-studio-w.jpg")}
          alt=""
          className="w-full h-full object-cover object-[center_35%] opacity-70"
        />
        {/* Scrims: darken top (for masthead) and bottom (for text) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Masthead logo — mobile only (desktop uses the header) */}
      <div className="md:hidden relative z-10 px-5 pt-[max(1.25rem,env(safe-area-inset-top))]">
        <img
          src={publicUrl("sparkle-fix-logo-nobackground.png")}
          alt="Sparkle Fix Oy"
          className="h-9 w-auto max-w-[160px] object-contain opacity-90"
        />
      </div>

      {/* Content — bottom anchored */}
      <div className="relative z-10 flex-1 flex items-end">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-16 md:pb-24">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p className="eyebrow text-[#f1d37b] mb-5">{t.hero.eyebrow}</p>

            {/* Headline — solid white display face */}
            <h1 className="font-display text-[15vw] sm:text-[11vw] lg:text-[8.5vw] xl:text-[7.5vw] leading-[0.92] tracking-[-0.02em] text-white mb-6">
              {t.hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-9 max-w-xl">
              {t.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 bg-[#e3c46a] hover:bg-[#f1d37b] text-black font-medium tracking-wide uppercase text-sm px-7 py-4 rounded-full transition-colors"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center text-sm text-white/70 hover:text-white underline-offset-[6px] hover:underline transition-colors"
              >
                {t.hero.ctaSecondary} →
              </Link>
            </div>

            {/* Trust line */}
            <div className="mt-12 pt-6 border-t border-white/[0.08] flex items-center gap-2 text-xs text-white/55 tracking-wide">
              <span className="text-[#f1d37b]">★</span>
              <span>{t.hero.trustLine}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical caption strip — desktop editorial touch */}
      <div className="hidden lg:flex absolute bottom-24 right-8 z-10 items-center gap-3 -rotate-90 origin-bottom-right">
        <span className="block w-8 h-px bg-white/30" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-mono whitespace-nowrap">
          {t.hero.locationBadge} · Est. 2024
        </span>
      </div>
    </section>
  )
}
