"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
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
  const { t } = useLocale()

  return (
    <div
      className={cn(
        "relative rounded-2xl border p-6 md:p-8 transition-all",
        popular
          ? "bg-gradient-to-br from-[#f1d37b]/10 to-[#e3c46a]/5 border-[#f1d37b]/30 shadow-lg shadow-[#f1d37b]/10"
          : "bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 hover:border-white/20",
        className,
      )}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-[#f1d37b] to-[#e3c46a] rounded-full">
          <Sparkles className="w-4 h-4 text-black" />
          <span className="text-black text-sm font-semibold">Popular</span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          {price.match(/^\d/) ? (
            <>
              <span className="text-4xl md:text-5xl font-bold text-white">€{price}</span>
              {period && <span className="text-gray-400">{period}</span>}
            </>
          ) : (
            <span className="text-2xl md:text-3xl font-bold text-white">{price}</span>
          )}
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div
              className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                popular ? "bg-[#f1d37b]/20" : "bg-white/10",
              )}
            >
              <Check className={cn("w-3 h-3", popular ? "text-[#edd67c]" : "text-gray-400")} />
            </div>
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        asChild
        className={cn(
          "w-full",
          popular
            ? "bg-gradient-to-r from-[#f1d37b] to-[#e3c46a] hover:from-[#e3c46a] hover:to-[#bf9246] text-black font-semibold"
            : "bg-white/10 hover:bg-white/20 text-white",
        )}
      >
        <Link href="/contact">{t.services.askQuote}</Link>
      </Button>
    </div>
  )
}
