"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useLocale } from "@/lib/locale-context"
import { ArrowUpRight } from "lucide-react"
import { publicUrl } from "@/lib/utils"

export function Header() {
  const { locale, setLocale, t } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navLinks = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/pricing`, label: t.nav.pricing },
    { href: `/${locale}/gallery`, label: t.nav.gallery },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const switchLocale = (newLocale: "fi" | "en") => {
    setLocale(newLocale)
    const pathWithoutLocale = pathname.replace(/^\/(fi|en)/, "") || ""
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === href : pathname.startsWith(href)

  return (
    <header
      className={`hidden md:block fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/75 backdrop-blur-xl border-b border-white/[0.08]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center shrink-0">
            <img
              src={publicUrl("sparkle-fix-logo-nobackground.png")}
              alt="Sparkle Fix Oy"
              className="h-12 lg:h-14 w-auto max-w-[220px] object-contain"
            />
          </Link>

          {/* Center nav — small-caps micro labels */}
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.18em] transition-colors ${
                  isActive(link.href) ? "text-[#f1d37b]" : "text-white/65 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Locale + CTA */}
          <div className="flex items-center gap-5 shrink-0">
            <div className="flex items-center gap-1 text-[11px] uppercase tracking-[0.15em]">
              <button
                onClick={() => switchLocale("fi")}
                className={locale === "fi" ? "text-white" : "text-white/40 hover:text-white/70"}
              >
                FI
              </button>
              <span className="text-white/20">/</span>
              <button
                onClick={() => switchLocale("en")}
                className={locale === "en" ? "text-white" : "text-white/40 hover:text-white/70"}
              >
                EN
              </button>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-1.5 bg-[#e3c46a] hover:bg-[#f1d37b] text-black font-medium uppercase tracking-wide text-xs px-5 py-2.5 rounded-full transition-colors"
            >
              {t.ui.bookNow}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
