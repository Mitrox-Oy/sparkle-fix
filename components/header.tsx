"use client"

import Link from "next/link"
import { useState } from "react"
import { useLocale } from "@/lib/locale-context"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { publicUrl } from "@/lib/utils"

export function Header() {
  const { locale, setLocale, t } = useLocale()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/contact", label: t.nav.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src={publicUrl("sparkle-fix-logo-nobackground.png")}
              alt="Sparkle Fix Oy"
              className="h-12 md:h-16 w-64 md:w-64 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-300 hover:text-[#f1d37b] transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLocale(locale === "fi" ? "en" : "fi")}
              className="px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white border border-white/20 rounded-lg hover:border-[#f1d37b]/50 transition-all"
            >
              {locale === "fi" ? "EN" : "FI"}
            </button>
            <Button
              asChild
              className="bg-gradient-to-r from-[#e3c46a] to-[#bf9246] hover:from-[#bf9246] hover:to-[#bf9246] text-black font-semibold"
            >
              <Link href="/contact">{t.hero.ctaPrimary}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-300 hover:text-[#f1d37b] hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 px-4 pt-4 mt-2 border-t border-white/10">
                <button
                  onClick={() => setLocale(locale === "fi" ? "en" : "fi")}
                  className="px-3 py-1.5 text-sm font-medium text-gray-300 border border-white/20 rounded-lg"
                >
                  {locale === "fi" ? "EN" : "FI"}
                </button>
                <Button
                  asChild
                  className="flex-1 bg-gradient-to-r from-[#e3c46a] to-[#bf9246] text-black font-semibold"
                >
                  <Link href="/contact">{t.hero.ctaPrimary}</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
