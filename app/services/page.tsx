import type { Metadata } from "next"
import { ServicesContent } from "./services-content"

export const metadata: Metadata = {
  title: "Palvelut",
  description:
    "Sparkle Fix Oy:n autopesu- ja viimeistelypalvelut. Peruspesu, premium-detailing, sisäpesu ja myyntikuntoon-laitto. Our car wash and detailing services.",
}

export default function ServicesPage() {
  return <ServicesContent />
}
