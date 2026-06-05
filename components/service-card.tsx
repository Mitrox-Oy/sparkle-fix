"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  from?: string
  useCases?: readonly string[]
  forDealerships?: boolean
  href?: string
  index?: number
  className?: string
}

export function ServiceCard({
  title,
  description,
  from,
  useCases,
  forDealerships,
  href = "/contact",
  index,
  className,
}: ServiceCardProps) {
  const { t, locale } = useLocale()
  const resolvedHref = href.startsWith("/") && !href.startsWith(`/${locale}`) ? `/${locale}${href}` : href
  const indexLabel = typeof index === "number" ? String(index + 1).padStart(2, "0") : null

  return (
    <Link
      href={resolvedHref}
      className={cn(
        "group relative grid grid-cols-[auto_1fr_auto] items-baseline gap-x-6 md:gap-x-10 gap-y-2 py-7 md:py-9 border-t border-white/[0.08] hover:border-white/20 transition-colors",
        className,
      )}
    >
      {/* Numeral */}
      <span className="font-mono text-xs tracking-[0.25em] text-white/40 self-start mt-2">
        {indexLabel}
      </span>

      {/* Title + description */}
      <div className="min-w-0">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="font-display text-2xl md:text-4xl leading-[1.05] tracking-[-0.01em] text-white group-hover:text-[#f1d37b] transition-colors">
            {title}
          </h3>
          {forDealerships && (
            <span className="eyebrow text-[#e3c46a]/80 border border-[#e3c46a]/30 rounded-full px-2.5 py-1">
              {t.services.forDealerships}
            </span>
          )}
        </div>
        <p className="mt-3 text-sm text-white/55 leading-relaxed max-w-xl">{description}</p>
        {useCases && useCases.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {useCases.map((useCase, i) => (
              <span key={i} className="text-xs text-white/40">
                {useCase}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Price + arrow */}
      <div className="flex items-center gap-4 self-start mt-2 shrink-0">
        <span className="hidden sm:block text-sm text-[#edd67c] font-medium whitespace-nowrap">
          {from ?? t.services.askQuote}
        </span>
        <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#f1d37b] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>

      {/* Mobile price row */}
      {from && (
        <span className="sm:hidden col-start-2 -mt-1 text-xs text-[#edd67c] font-medium">{from}</span>
      )}
    </Link>
  )
}
