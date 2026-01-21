import type { Metadata } from "next"
import { generateMetadata as genMetadata } from "@/lib/metadata"
import { getBreadcrumbStructuredData } from "@/lib/structured-data"
import { GalleryContent } from "@/components/pages/gallery-content"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params
  const locale = localeParam as "fi" | "en"
  return genMetadata("gallery", locale)
}

export function generateStaticParams() {
  return [{ locale: "fi" }, { locale: "en" }]
}

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale = localeParam as "fi" | "en"
  const breadcrumbs = getBreadcrumbStructuredData([
    { name: locale === "fi" ? "Etusivu" : "Home", url: `https://sparklefix.fi/${locale}` },
    { name: locale === "fi" ? "Galleria" : "Gallery", url: `https://sparklefix.fi/${locale}/gallery` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <GalleryContent />
    </>
  )
}
