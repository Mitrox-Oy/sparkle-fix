import type { Metadata } from "next"
import { generateMetadata as genMetadata } from "@/lib/metadata"
import { getLocalBusinessStructuredData } from "@/lib/structured-data"
import HomePage from "../page-content"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params
  const locale = localeParam as "fi" | "en"
  return genMetadata("home", locale)
}

export function generateStaticParams() {
  return [{ locale: "fi" }, { locale: "en" }]
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale = localeParam as "fi" | "en"
  const structuredData = getLocalBusinessStructuredData(locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomePage />
    </>
  )
}
