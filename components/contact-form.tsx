"use client"

import type React from "react"

import { useState } from "react"
import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const { t, locale } = useLocale()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    customerType: "private",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{t.contactPage.form.success}</h3>
        <button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({ name: "", email: "", phone: "", customerType: "private", message: "" })
          }}
          className="text-green-400 hover:text-green-300 text-sm mt-4"
        >
          {locale === "fi" ? "Lähetä uusi viesti" : "Send another message"}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-300">
            {t.contactPage.form.name}
          </Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#f1d37b]/50"
            placeholder="Matti Meikäläinen"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-300">
            {t.contactPage.form.email}
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#f1d37b]/50"
            placeholder="matti@example.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-300">
            {t.contactPage.form.phone}
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#f1d37b]/50"
            placeholder="045 123 4567"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="customerType" className="text-gray-300">
            {t.contactPage.form.customerType}
          </Label>
          <select
            id="customerType"
            value={formData.customerType}
            onChange={(e) => setFormData({ ...formData, customerType: e.target.value })}
            className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-[#f1d37b]/50 focus:outline-none focus:ring-2 focus:ring-[#f1d37b]/20"
          >
            <option value="private" className="bg-gray-900">
              {t.contactPage.form.private}
            </option>
            <option value="dealership" className="bg-gray-900">
              {t.contactPage.form.dealership}
            </option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-gray-300">
          {t.contactPage.form.message}
        </Label>
        <Textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#f1d37b]/50 resize-none"
          placeholder={locale === "fi" ? "Kirjoita viestisi tähän..." : "Write your message here..."}
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-[#f1d37b] to-[#e3c46a] hover:from-[#e3c46a] hover:to-[#bf9246] text-black font-semibold py-6"
      >
        <Send className="mr-2 w-4 h-4" />
        {t.contactPage.form.submit}
      </Button>
    </form>
  )
}
