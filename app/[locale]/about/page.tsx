import type { Metadata } from "next"
import { generateMetadata as genMetadata } from "@/lib/metadata"
import { getBreadcrumbStructuredData } from "@/lib/structured-data"
import { AboutContent } from "@/components/pages/about-content"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params
  const locale = localeParam as "fi" | "en"
  return genMetadata("about", locale)
}

export function generateStaticParams() {
  return [{ locale: "fi" }, { locale: "en" }]
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale = localeParam as "fi" | "en"
  const breadcrumbs = getBreadcrumbStructuredData([
    { name: locale === "fi" ? "Etusivu" : "Home", url: `https://sparklefix.fi/${locale}` },
    { name: locale === "fi" ? "Meistä" : "About Us", url: `https://sparklefix.fi/${locale}/about` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <AboutContent />
    </>
  )
}
