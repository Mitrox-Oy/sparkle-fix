import type { Metadata } from "next"
import { ContactContent } from "./contact-content"

export const metadata: Metadata = {
  title: "Yhteystiedot",
  description:
    "Ota yhteyttä Sparkle Fix Oy:hyn. Varaa aika autopesuelle tai viimeistelylle. Contact us to book car wash or detailing.",
}

export default function ContactPage() {
  return <ContactContent />
}
