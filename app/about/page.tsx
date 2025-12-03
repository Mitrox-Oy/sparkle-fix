import type { Metadata } from "next"
import { AboutContent } from "./about-content"

export const metadata: Metadata = {
  title: "Meistä",
  description:
    "Sparkle Fix Oy:n tarina ja arvot. Luotettavaa autopesua ja automeikkausta Helsingissä. Our story and values.",
}

export default function AboutPage() {
  return <AboutContent />
}
