import type { Metadata } from "next"
import { generateMetadata as genMetadata } from "@/lib/metadata"
import { getBreadcrumbStructuredData, getServiceStructuredData } from "@/lib/structured-data"
import { ServicesContent } from "@/components/pages/services-content"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params
  const locale = localeParam as "fi" | "en"
  return genMetadata("services", locale)
}

export function generateStaticParams() {
  return [{ locale: "fi" }, { locale: "en" }]
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale = localeParam as "fi" | "en"
  const breadcrumbs = getBreadcrumbStructuredData([
    { name: locale === "fi" ? "Etusivu" : "Home", url: `https://sparklefix.fi/${locale}` },
    { name: locale === "fi" ? "Palvelut" : "Services", url: `https://sparklefix.fi/${locale}/services` },
  ])

  const serviceData = getServiceStructuredData(
    locale === "fi" ? "Autopesu ja automeikkaus" : "Car Wash and Detailing",
    locale === "fi"
      ? "Kattava valikoima autopesu- ja viimeistelypalveluita Espoossa"
      : "Comprehensive car wash and detailing services in Espoo, Finland",
    locale
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }} />
      <ServicesContent />
    </>
  )
}
