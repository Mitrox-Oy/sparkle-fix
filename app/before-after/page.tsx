import type { Metadata } from "next"
import { BeforeAfterContent } from "./before-after-content"

export const metadata: Metadata = {
  title: "Ennen & jälkeen",
  description:
    "Sparkle Fix Oy:n ennen ja jälkeen -työnäytteitä. Katso, miten huolellinen pesu ja viimeistely muuttavat auton ilmeen.",
}

export default function BeforeAfterPage() {
  return <BeforeAfterContent />
}


