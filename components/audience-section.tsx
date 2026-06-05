"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { Building2, User, Check, ArrowUpRight } from "lucide-react"

export function AudienceSection() {
  const { t, locale } = useLocale()

  const blocks = [
    {
      icon: <Building2 className="w-5 h-5" />,
      title: t.audience.dealerships.title,
      description: t.audience.dealerships.description,
      benefits: t.audience.dealerships.benefits,
      cta: t.services.askQuote,
    },
    {
      icon: <User className="w-5 h-5" />,
      title: t.audience.private.title,
      description: t.audience.private.description,
      benefits: t.audience.private.benefits,
      cta: t.services.bookNow,
    },
  ]

  return (
    <div className="grid lg:grid-cols-2 border-t border-white/[0.08]">
      {blocks.map((block, i) => (
        <Link
          key={i}
          href={`/${locale}/contact`}
          className="group relative flex flex-col py-10 md:py-12 lg:px-10 lg:[&:nth-child(2)]:border-l border-white/[0.08] hover:bg-white/[0.02] transition-colors"
        >
          <div className="flex items-start justify-between gap-6 mb-6">
            <div className="text-[#e3c46a]">{block.icon}</div>
            <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#f1d37b] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
          </div>
          <h3 className="font-display text-3xl md:text-4xl leading-[1.05] tracking-[-0.01em] text-white mb-4">
            {block.title}
          </h3>
          <p className="text-sm text-white/55 leading-relaxed max-w-md mb-8">{block.description}</p>
          <ul className="space-y-3">
            {block.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-white/70">
                <Check className="w-3.5 h-3.5 text-[#e3c46a] shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <span className="mt-8 text-xs uppercase tracking-[0.2em] text-white/50 group-hover:text-[#f1d37b] transition-colors">
            {block.cta} →
          </span>
        </Link>
      ))}
    </div>
  )
}
