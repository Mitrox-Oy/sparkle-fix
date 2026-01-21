import type React from "react"
import type { Metadata, Viewport } from "next"

import { Analytics } from "@vercel/analytics/next"
import { LocaleProvider } from "@/lib/locale-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MitroxAdvisorWidget } from "@/components/mitrox-advisor-widget"
import "../globals.css"

import {
  Inter,
  Geist_Mono,
  Inter as V0_Font_Inter,
  Geist_Mono as V0_Font_Geist_Mono,
  Source_Serif_4 as V0_Font_Source_Serif_4,
} from "next/font/google"

// Initialize fonts
const _inter = V0_Font_Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _sourceSerif_4 = V0_Font_Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

const inter = Inter({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export function generateStaticParams() {
  return [{ locale: "fi" }, { locale: "en" }]
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale: localeParam } = await params
  const locale = localeParam as "fi" | "en"

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.className} ${geistMono.variable} font-sans antialiased bg-black text-white`}>
        <LocaleProvider initialLocale={locale}>
          <Header />
          <main>{children}</main>
          <Footer />
          <MitroxAdvisorWidget language={locale} position="bottom-right" />
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  )
}
