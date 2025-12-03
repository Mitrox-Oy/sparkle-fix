"use client"

import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { Building2, User, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AudienceSection() {
  const { t } = useLocale()

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Dealerships */}
      <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 hover:border-green-500/40 transition-all">
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
          <Building2 className="w-6 h-6 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{t.audience.dealerships.title}</h3>
        <p className="text-gray-400 mb-6">{t.audience.dealerships.description}</p>
        <ul className="space-y-3 mb-6">
          {t.audience.dealerships.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-400" />
              </div>
              <span className="text-gray-300 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
        <Button
          asChild
          variant="outline"
          className="border-green-500/30 text-green-400 hover:bg-green-500/10 bg-transparent"
        >
          <Link href="/contact">
            {t.services.askQuote}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>

      {/* Private Customers */}
      <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#f1d37b]/10 to-[#e3c46a]/5 border border-[#f1d37b]/20 hover:border-[#f1d37b]/40 transition-all">
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#f1d37b]/10 flex items-center justify-center">
          <User className="w-6 h-6 text-[#edd67c]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{t.audience.private.title}</h3>
        <p className="text-gray-400 mb-6">{t.audience.private.description}</p>
        <ul className="space-y-3 mb-6">
          {t.audience.private.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#f1d37b]/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#edd67c]" />
              </div>
              <span className="text-gray-300 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
        <Button
          asChild
          className="bg-gradient-to-r from-[#f1d37b] to-[#e3c46a] hover:from-[#e3c46a] hover:to-[#bf9246] text-black font-semibold"
        >
          <Link href="/contact">
            {t.services.bookNow}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
