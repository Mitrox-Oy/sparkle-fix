import type { Metadata } from "next"

export type Locale = "fi" | "en"

const SITE_URL = "https://sparklefix.fi"
const BUSINESS_NAME = "Sparkle Fix Oy"
const BUSINESS_LOCATION = "Espoo"

// Metadata configuration per page and locale
export const metadataConfig: Record<
  string,
  Record<Locale, { title: string; description: string }>
> = {
  home: {
    fi: {
      title: `${BUSINESS_NAME} – Autopesu ja automeikkaus Espoossa`,
      description: `Luotettavaa autopesua ja automeikkausta Espoossa. Palvelemme autoliikkeitä ja yksityisiä asiakkaita ammattitaidolla. Tiistinniityntie 6, ${BUSINESS_LOCATION}.`,
    },
    en: {
      title: `${BUSINESS_NAME} – Car Detailing and Wash in Espoo, Finland`,
      description: `Reliable car wash and detailing services in Espoo, Finland. Professional service for dealerships and private customers. Located at Tiistinniityntie 6, ${BUSINESS_LOCATION}.`,
    },
  },
  about: {
    fi: {
      title: "Meistä",
      description: `Sparkle Fix Oy:n tarina ja arvot. Luotettava automeikkauskumppani Espoossa. Tiistinniityntie 6, ${BUSINESS_LOCATION}.`,
    },
    en: {
      title: "About Us",
      description: `The Sparkle Fix Oy story and values. Reliable car detailing partner in Espoo, Finland. Located at Tiistinniityntie 6, ${BUSINESS_LOCATION}.`,
    },
  },
  services: {
    fi: {
      title: "Palvelut",
      description: `Kattava valikoima autopesu- ja viimeistelypalveluita Espoossa. Peruspesu, premium-detailing, sisäpesu ja myyntikuntoon-laitto.`,
    },
    en: {
      title: "Services",
      description: `Comprehensive car wash and detailing services in Espoo, Finland. Basic wash, premium detailing, interior cleaning, and dealership prep.`,
    },
  },
  pricing: {
    fi: {
      title: "Hinnasto",
      description: `Selkeät ja kilpailukykyiset hinnat autopesuelle ja viimeistelylle Espoossa. Kovavahaus, kiillotus, keraamivahaus.`,
    },
    en: {
      title: "Pricing",
      description: `Clear and competitive prices for car wash and detailing in Espoo, Finland. Hard wax, polishing, ceramic coating.`,
    },
  },
  gallery: {
    fi: {
      title: "Galleria",
      description: `Katso esimerkkejä Sparkle Fix Oy:n automeikkaustöistä Espoossa. Ennen ja jälkeen -kuvia.`,
    },
    en: {
      title: "Gallery",
      description: `See examples of Sparkle Fix Oy car detailing work in Espoo, Finland. Before and after photos.`,
    },
  },
  "before-after": {
    fi: {
      title: "Ennen & jälkeen",
      description: `Katso projekteja, joissa näkyy selkeä ero ennen ja jälkeen käsittelyn. Automeikkaus Espoossa.`,
    },
    en: {
      title: "Before & After",
      description: `See projects that clearly show transformation before and after our work. Car detailing in Espoo, Finland.`,
    },
  },
  contact: {
    fi: {
      title: "Yhteystiedot",
      description: `Ota yhteyttä Sparkle Fix Oy:hyn Espoossa. Varaa aika autopesuelle tai viimeistelylle. Tiistinniityntie 6, ${BUSINESS_LOCATION}.`,
    },
    en: {
      title: "Contact",
      description: `Contact Sparkle Fix Oy in Espoo, Finland. Book car wash or detailing appointment. Located at Tiistinniityntie 6, ${BUSINESS_LOCATION}.`,
    },
  },
}

export function generateMetadata(page: string, locale: Locale): Metadata {
  const pageMetadata = metadataConfig[page]?.[locale] || metadataConfig.home[locale]
  const currentPath = page === "home" ? "" : `/${page}`
  const canonicalUrl = `${SITE_URL}/${locale}${currentPath}`

  return {
    title: pageMetadata.title,
    description: pageMetadata.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "fi-FI": `${SITE_URL}/fi${currentPath}`,
        "en-FI": `${SITE_URL}/en${currentPath}`,
        "x-default": `${SITE_URL}/fi${currentPath}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fi" ? "fi_FI" : "en_FI",
      url: canonicalUrl,
      siteName: BUSINESS_NAME,
      title: pageMetadata.title,
      description: pageMetadata.description,
      images: [
        {
          url: `${SITE_URL}/sparkle-fix-logo.jpg`,
          width: 1200,
          height: 630,
          alt: `${BUSINESS_NAME} - Premium Car Care`,
        },
      ],
    },
  }
}
