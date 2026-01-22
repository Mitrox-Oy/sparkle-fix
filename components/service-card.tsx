"use client"

import type React from "react"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { ArrowRight, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  from?: string
  useCases?: readonly string[]
  forDealerships?: boolean
  href?: string
  className?: string
}

export function ServiceCard({
  title,
  description,
  icon,
  from,
  useCases,
  forDealerships,
  href = "/contact",
  className,
}: ServiceCardProps) {
  const { t } = useLocale()

  return (
    <div
      className={cn(
        "group relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10 hover:border-[#f1d37b]/30 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#f1d37b]/5",
        className,
      )}
    >
      <div className="flex flex-col h-full">
        {/* Dealership Badge */}
        {forDealerships && (
          <div className="absolute -top-3 right-4 flex items-center gap-1.5 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
            <Building2 className="w-3 h-3 text-green-400" />
            <span className="text-green-400 text-xs font-medium">{t.services.forDealerships}</span>
          </div>
        )}

        {/* Icon */}
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f1d37b]/20 to-[#e3c46a]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shrink-0">
            {icon}
          </div>
        )}

        {/* Title + Description (consistent block height) */}
        <h3 className="text-xl font-semibold text-white mb-2 leading-tight min-h-[3rem]">{title}</h3>
        <p
          className="text-gray-400 text-sm leading-relaxed mb-4 min-h-[3.75rem] overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]"
        >
          {description}
        </p>

        {/* Use Cases */}
        {useCases && useCases.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {useCases.map((useCase, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400"
              >
                {useCase}
              </span>
            ))}
          </div>
        )}

        {/* Footer (pinned to bottom) */}
        <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="min-h-[1.5rem] text-[#edd67c] font-semibold">
            {from ? from : <span className="opacity-60">{t.services.askQuote}</span>}
          </div>
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-sm text-gray-300 hover:text-[#edd67c] transition-colors group/link shrink-0"
          >
            {t.services.askQuote}
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
