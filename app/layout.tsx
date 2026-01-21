import type React from "react"
import type { Metadata, Viewport } from "next"

import { Analytics } from "@vercel/analytics/next"
import { LocaleProvider } from "@/lib/locale-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MitroxAdvisorWidget } from "@/components/mitrox-advisor-widget"
import "./globals.css"

import { Inter, Geist_Mono, Inter as V0_Font_Inter, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _inter = V0_Font_Inter({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const inter = Inter({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: {
    default: "Sparkle Fix Oy – Autopesu ja automeikkaus Helsingissä",
    template: "%s | Sparkle Fix Oy",
  },
  description:
    "Luotettavaa autopesua ja automeikkausta Helsingissä. Palvelemme autoliikkeitä ja yksityisiä asiakkaita ammattitaidolla. Reliable car wash and detailing in Helsinki.",
  keywords: ["autopesu", "car wash", "detailing", "automeikkaus", "Helsinki", "autoliike", "auton puhdistus"],
  authors: [{ name: "Sparkle Fix Oy" }],
  creator: "Sparkle Fix Oy",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "any" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "fi_FI",
    alternateLocale: "en_US",
    url: "https://sparklefix.fi",
    siteName: "Sparkle Fix Oy",
    title: "Sparkle Fix Oy – Autopesu ja automeikkaus Helsingissä",
    description:
      "Luotettavaa autopesua ja automeikkausta Helsingissä. Palvelemme autoliikkeitä ja yksityisiä asiakkaita.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sparkle Fix Oy - Premium Car Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparkle Fix Oy – Autopesu ja automeikkaus",
    description: "Luotettavaa autopesua ja automeikkausta Helsingissä.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fi" className="dark">
      <body className={`${inter.className} ${geistMono.variable} font-sans antialiased bg-black text-white`}>
        <LocaleProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <MitroxAdvisorWidget language="fi" position="bottom-right" />
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  )
}
