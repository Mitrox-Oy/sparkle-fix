import type { Metadata } from "next"
import { generateMetadata as genMetadata } from "@/lib/metadata"
import { getBreadcrumbStructuredData } from "@/lib/structured-data"
import { BeforeAfterContent } from "@/components/pages/before-after-content"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params
  const locale = localeParam as "fi" | "en"
  return genMetadata("before-after", locale)
}

export function generateStaticParams() {
  return [{ locale: "fi" }, { locale: "en" }]
}

export default async function BeforeAfterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale = localeParam as "fi" | "en"
  const breadcrumbs = getBreadcrumbStructuredData([
    { name: locale === "fi" ? "Etusivu" : "Home", url: `https://sparklefix.fi/${locale}` },
    { name: locale === "fi" ? "Ennen & jälkeen" : "Before & After", url: `https://sparklefix.fi/${locale}/before-after` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BeforeAfterContent />
    </>
  )
}
