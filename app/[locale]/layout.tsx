import type React from "react"
import type { Metadata, Viewport } from "next"

import { Analytics } from "@vercel/analytics/next"
import { LocaleProvider } from "@/lib/locale-context"
import { Header } from "@/components/header"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/footer"
import { MitroxAdvisorWidget } from "@/components/mitrox-advisor-widget"
import "../globals.css"

import { Inter, Geist_Mono, Instrument_Serif } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
})

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
      <body className={`${inter.className} ${geistMono.variable} ${instrumentSerif.variable} font-sans antialiased bg-black text-white`}>
        <LocaleProvider initialLocale={locale}>
          <Header />
          <main className="pb-16 md:pb-0">{children}</main>
          <Footer />
          <MobileNav />
          <MitroxAdvisorWidget language={locale} position="bottom-right" />
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  )
}
