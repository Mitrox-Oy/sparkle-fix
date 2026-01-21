"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { publicUrl } from "@/lib/utils"

export function Hero() {
  const { t, locale } = useLocale()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={publicUrl("luxury-black-car-in-professional-car-wash-studio-w.jpg")} alt="" className="w-full h-full object-cover opacity-40" />
        {/* Gold Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-[#bf9246]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        {/* Animated Gold Accent */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#e3c46a]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#f1d37b]/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e3c46a]/10 border border-[#e3c46a]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[#f1d37b] text-sm font-medium">Helsinki, Finland</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            <span className="block">{t.hero.headline.split(" ").slice(0, 1).join(" ")}</span>
            <span className="block bg-gradient-to-r from-[#f1d37b] via-[#e3c46a] to-[#bf9246] bg-clip-text text-transparent">
              {t.hero.headline.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">{t.hero.subheadline}</p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#e3c46a] to-[#bf9246] hover:from-[#bf9246] hover:to-[#bf9246] text-black font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#e3c46a]/25 hover:shadow-[#e3c46a]/40 transition-all"
            >
              <Link href="/contact">
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 py-6 text-lg rounded-xl bg-transparent"
            >
              <Link href="/services">
                <Play className="mr-2 w-5 h-5" />
                {t.hero.ctaSecondary}
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-black"
                  />
                ))}
              </div>
              <span className="text-gray-400 text-sm">
                100+ {locale === "fi" ? "tyytyväistä asiakasta" : "happy customers"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-[#f1d37b] fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-400 text-sm">5.0 / 5.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-500 text-xs uppercase tracking-wider">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#f1d37b] rounded-full" />
        </div>
      </div>
    </section>
  )
}
