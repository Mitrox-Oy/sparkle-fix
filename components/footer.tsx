"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useLocale } from "@/lib/locale-context"
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact"
import { Instagram, Facebook, Linkedin, ArrowUpRight } from "lucide-react"

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

  const switchLocale = (newLocale: "fi" | "en") => {
    setLocale(newLocale)
    const pathWithoutLocale = pathname.replace(/^\/(fi|en)/, "") || ""
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  return (
    <footer className="relative bg-black border-t border-white/10 grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Big CTA band */}
        <div className="py-16 md:py-24 border-b border-white/[0.08]">
          <p className="eyebrow mb-6">{t.ui.getInTouch}</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <Link
              href={`/${locale}/contact`}
              className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.02em] text-white hover:text-[#f1d37b] transition-colors max-w-3xl"
            >
              {t.booking.title}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-[#e3c46a] hover:bg-[#f1d37b] text-black font-medium uppercase tracking-wide text-sm px-7 py-4 rounded-full transition-colors shrink-0"
            >
              {t.ui.bookNow}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Columns */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-12 gap-y-10 gap-x-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <Link href={`/${locale}`} className="font-display text-3xl text-white tracking-[-0.01em]">
              Sparkle Fix
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mt-4 max-w-xs">{t.footer.description}</p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="eyebrow mb-5">{t.footer.quickLinks}</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="eyebrow mb-5">{t.footer.contact}</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:sparkle.fix@hotmail.com" className="text-white/60 hover:text-white transition-colors">
                  sparkle.fix@hotmail.com
                </a>
              </li>
              <li>
                <a href={PHONE_TEL} className="text-white/60 hover:text-white transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="text-white/60 leading-relaxed pt-1">
                Tiistinniityntie 6
                <br />
                Espoo · Rakennus A, Tila 3
              </li>
            </ul>
          </div>

          {/* Social + locale */}
          <div className="md:col-span-2">
            <p className="eyebrow mb-5">{t.footer.followUs}</p>
            <div className="flex gap-3 mb-6">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-white/50 hover:text-[#f1d37b] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-1 text-xs uppercase tracking-[0.15em]">
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
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 pb-[max(2rem,calc(env(safe-area-inset-bottom)+6rem))] md:pb-10 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Sparkle Fix Oy. {t.footer.rights}
          </p>
          <a
            href="https://mitrox.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 text-xs hover:text-white/60 transition-colors"
          >
            Powered by Mitrox Oy
          </a>
        </div>
      </div>
    </footer>
  )
}
