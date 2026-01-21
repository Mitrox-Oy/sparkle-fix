"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useLocale } from "@/lib/locale-context"
import { Sparkles, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  const { locale, setLocale, t } = useLocale()
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

  const handleLocaleSwitch = (newLocale: "fi" | "en") => {
    setLocale(newLocale)
    const pathWithoutLocale = pathname.replace(/^\/(fi|en)/, "") || ""
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#edd67c] to-[#e3c46a] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold text-white">Sparkle Fix Oy</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{t.footer.description}</p>
            {/* Language Switcher */}
            <div className="flex gap-2">
              <button
                onClick={() => handleLocaleSwitch("fi")}
                className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                  locale === "fi"
                    ? "bg-[#f1d37b] text-black font-medium"
                    : "text-gray-400 hover:text-white border border-white/20"
                }`}
              >
                FI
              </button>
              <button
                onClick={() => handleLocaleSwitch("en")}
                className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                  locale === "en"
                    ? "bg-[#f1d37b] text-black font-medium"
                    : "text-gray-400 hover:text-white border border-white/20"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#edd67c] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#edd67c] mt-0.5 shrink-0" />
                <a href="mailto:sparkle.fix@hotmail.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                  sparkle.fix@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#edd67c] mt-0.5 shrink-0" />
                <a href="tel:0451228700" className="text-gray-400 hover:text-white text-sm transition-colors">
                  045 122 8700
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#edd67c] mt-0.5 shrink-0" />
                <div className="text-gray-400 text-sm">
                  <div>Tiistinniityntie 6</div>
                  <div>Espoo Rakennus A</div>
                  <div>Tila 3</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.followUs}</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#f1d37b]/20 border border-white/10 hover:border-[#f1d37b]/50 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-[#edd67c]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#f1d37b]/20 border border-white/10 hover:border-[#f1d37b]/50 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-[#edd67c]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#f1d37b]/20 border border-white/10 hover:border-[#f1d37b]/50 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#edd67c]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sparkle Fix Oy. {t.footer.rights}
          </p>
          <a
            href="https://mitrox.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 text-xs hover:text-gray-400 transition-colors"
          >
            Powered by Mitrox Oy
          </a>
        </div>
      </div>
    </footer>
  )
}
