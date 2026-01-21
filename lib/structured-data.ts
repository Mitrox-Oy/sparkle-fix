import type { Locale } from "./metadata"
import type { WithContext, LocalBusiness, Service, BreadcrumbList } from "schema-dts"

const SITE_URL = "https://sparklefix.fi"

export function getLocalBusinessStructuredData(locale: Locale): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: "Sparkle Fix Oy",
    description:
      locale === "fi"
        ? "Luotettavaa autopesua ja automeikkausta Espoossa"
        : "Reliable car wash and detailing services in Espoo, Finland",
    image: `${SITE_URL}/sparkle-fix-logo.jpg`,
    logo: `${SITE_URL}/sparkle-fix-logo-nobackground.png`,
    url: SITE_URL,
    telephone: "+358451228700",
    email: "sparkle.fix@hotmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tiistinniityntie 6, Rakennus A, Tila 3",
      addressLocality: "Espoo",
      addressCountry: "FI",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 60.21, // Approximate - replace with actual if available
      longitude: 24.81,
    },
    areaServed: {
      "@type": "City",
      name: "Espoo",
    },
    priceRange: "€€",
    openingHours: "Mo-Fr 09:00-17:00",
    sameAs: [],
  }
}

export function getServiceStructuredData(
  serviceName: string,
  serviceDescription: string,
  locale: Locale
): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    description: serviceDescription,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "City",
      name: "Espoo",
    },
  }
}

export function getBreadcrumbStructuredData(
  breadcrumbs: Array<{ name: string; url: string }>
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}
