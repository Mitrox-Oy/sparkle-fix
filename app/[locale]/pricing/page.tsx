import type { Metadata } from "next"
import { generateMetadata as genMetadata } from "@/lib/metadata"
import { getBreadcrumbStructuredData } from "@/lib/structured-data"
import { PricingContent } from "@/components/pages/pricing-content"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params
  const locale = localeParam as "fi" | "en"
  return genMetadata("pricing", locale)
}

export function generateStaticParams() {
  return [{ locale: "fi" }, { locale: "en" }]
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale = localeParam as "fi" | "en"
  const breadcrumbs = getBreadcrumbStructuredData([
    { name: locale === "fi" ? "Etusivu" : "Home", url: `https://sparklefix.fi/${locale}` },
    { name: locale === "fi" ? "Hinnasto" : "Pricing", url: `https://sparklefix.fi/${locale}/pricing` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <PricingContent />
    </>
  )
}
