"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useLocale } from "@/lib/locale-context"
import { PHONE_TEL, PHONE_DISPLAY } from "@/lib/contact"
import { Menu, X, Phone, ArrowUpRight } from "lucide-react"
import { publicUrl } from "@/lib/utils"

export function MobileNav() {
  const { locale, setLocale, t } = useLocale()
  const [open, setOpen] = useState(false)
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
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const switchLocale = (newLocale: "fi" | "en") => {
    setLocale(newLocale)
    const pathWithoutLocale = pathname.replace(/^\/(fi|en)/, "") || ""
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  return (
    <>
      {/* ── Floating pill dock ───────────────────────────────────────── */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 flex justify-center pb-[max(1rem,env(safe-area-inset-bottom))] px-6 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full bg-black/85 backdrop-blur-xl border border-white/12 p-1.5 shadow-[0_8px_40px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Menu */}
          <button
            onClick={() => setOpen(true)}
            aria-label={t.ui.menu}
            className="w-11 h-11 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Call */}
          <a
            href={PHONE_TEL}
            aria-label={t.ui.call}
            className="w-11 h-11 rounded-full flex items-center justify-center text-[#f1d37b] hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
          </a>

          {/* Book — compact pill */}
          <Link
            href={`/${locale}/contact`}
            className="h-11 rounded-full bg-[#e3c46a] hover:bg-[#f1d37b] text-black font-medium uppercase tracking-wide text-xs px-5 flex items-center gap-1.5 transition-colors"
          >
            {t.ui.bookNow}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* ── Full-screen sheet ────────────────────────────────────────── */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60] bg-black flex flex-col animate-in fade-in slide-in-from-bottom-6 duration-300">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 h-20 border-b border-white/[0.08]">
            <Link href={`/${locale}`} onClick={() => setOpen(false)}>
              <img
                src={publicUrl("sparkle-fix-logo-nobackground.png")}
                alt="Sparkle Fix Oy"
                className="h-9 w-auto max-w-[150px] object-contain"
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label={t.ui.close}
              className="w-11 h-11 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col justify-center px-6 gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 py-2 animate-in fade-in slide-in-from-bottom-2"
                style={{ animationDelay: `${80 + i * 45}ms`, animationFillMode: "backwards" }}
              >
                <span className="font-mono text-[11px] tracking-[0.25em] text-white/30 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-4xl leading-tight tracking-[-0.01em] text-white group-hover:text-[#f1d37b] transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Footer of sheet */}
          <div className="px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
            <a href={PHONE_TEL} className="flex items-center gap-3 text-[#f1d37b] group">
              <Phone className="w-5 h-5" />
              <span className="font-display text-2xl leading-none group-hover:text-white transition-colors">
                {PHONE_DISPLAY}
              </span>
            </a>
            <div className="flex items-center gap-1 text-sm">
              <button
                onClick={() => switchLocale("fi")}
                className={locale === "fi" ? "text-white font-medium" : "text-white/40"}
              >
                FI
              </button>
              <span className="text-white/20">/</span>
              <button
                onClick={() => switchLocale("en")}
                className={locale === "en" ? "text-white font-medium" : "text-white/40"}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
