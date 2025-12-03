import type { Metadata } from "next"
import { PricingContent } from "./pricing-content"

export const metadata: Metadata = {
  title: "Hinnasto",
  description:
    "Sparkle Fix Oy:n hinnasto. Selkeät ja kilpailukykyiset hinnat autopesuelle ja viimeistelylle. Our pricing for car wash and detailing services.",
}

export default function PricingPage() {
  return <PricingContent />
}
