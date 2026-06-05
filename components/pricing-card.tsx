"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { Check, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  title: string
  price: string
  period?: string
  description: string
  features: readonly string[]
  popular?: boolean
  className?: string
}

export function PricingCard({ title, price, period, description, features, popular, className }: PricingCardProps) {
  const { t, locale } = useLocale()

  return (
    <div
      className={cn(
        "relative flex flex-col h-full border border-white/10 rounded-md p-7 md:p-8 transition-colors hover:border-white/20",
        popular && "border-[#e3c46a]/40",
        className,
      )}
    >
      {/* Gold top hairline for the popular tier */}
      {popular && (
        <>
          <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e3c46a] to-transparent" />
          <span className="eyebrow text-[#f1d37b] mb-4">Suosituin · Popular</span>
        </>
      )}

      {/* Header */}
      <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-[-0.01em] text-white mb-2">{title}</h3>
      <p className="text-sm text-white/55 mb-7">{description}</p>

      {/* Price */}
      <div className="mb-7 flex items-baseline gap-1">
        {price.match(/^\d/) ? (
          <>
            <span className="font-display text-5xl md:text-6xl leading-none text-white">€{price}</span>
            {period && <span className="text-white/40 text-sm">{period}</span>}
          </>
        ) : (
          <span className="font-display text-3xl md:text-4xl leading-none text-white">{price}</span>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-white/70">
            <Check className={cn("w-4 h-4 shrink-0 mt-0.5", popular ? "text-[#f1d37b]" : "text-white/40")} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={`/${locale}/contact`}
        className={cn(
          "mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm tracking-wide uppercase transition-colors rounded-full",
          popular
            ? "bg-[#e3c46a] hover:bg-[#f1d37b] text-black font-medium"
            : "border border-white/15 text-white hover:bg-white/5",
        )}
      >
        {t.services.askQuote}
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  )
}
