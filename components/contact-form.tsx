"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle, ChevronDown, Check } from "lucide-react"

function CustomerTypeSelect({
  value,
  onChange,
  options,
}: {
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const selected = options.find((o) => o.value === value)

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full h-10 px-3 pr-8 flex items-center justify-between rounded-md bg-white/5 border text-sm text-white transition-colors text-left ${
          open ? "border-[#f1d37b]/50 ring-2 ring-[#f1d37b]/20" : "border-white/10 hover:border-white/20"
        }`}
      >
        <span>{selected?.label}</span>
        <ChevronDown
          className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute z-50 top-[calc(100%+6px)] inset-x-0 bg-[#0c0c0c] border border-white/15 rounded-md overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.8)]">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => { onChange(opt.value); setOpen(false) }}
              className="w-full flex items-center justify-between gap-3 px-4 py-3 text-sm text-left transition-colors hover:bg-white/5"
            >
              <span className={value === opt.value ? "text-[#f1d37b]" : "text-white/80"}>{opt.label}</span>
              {value === opt.value && <Check className="w-3.5 h-3.5 text-[#f1d37b] shrink-0" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

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
      <div className="py-12 border-t border-white/[0.08]">
        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-[#f1d37b]/10 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-[#f1d37b]" />
          </div>
          <div className="text-center max-w-md">
            <h3 className="font-display text-3xl text-white mb-3">{t.contactPage.form.success}</h3>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({ name: "", email: "", phone: "", customerType: "private", message: "" })
              }}
              className="text-[#f1d37b] hover:text-white text-sm underline-offset-[4px] hover:underline transition-colors"
            >
              {locale === "fi" ? "Lähetä uusi viesti" : "Send another message"}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white/80 text-sm">
            {t.contactPage.form.name}
          </Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[#f1d37b]/50"
            placeholder="Matti Meikäläinen"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white/80 text-sm">
            {t.contactPage.form.email}
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[#f1d37b]/50"
            placeholder="matti@example.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white/80 text-sm">
            {t.contactPage.form.phone}
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[#f1d37b]/50"
            placeholder="045 123 4567"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="customerType" className="text-white/80 text-sm">
            {t.contactPage.form.customerType}
          </Label>
          <CustomerTypeSelect
            value={formData.customerType}
            onChange={(v) => setFormData({ ...formData, customerType: v })}
            options={[
              { value: "private", label: t.contactPage.form.private },
              { value: "dealership", label: t.contactPage.form.dealership },
            ]}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-white/80 text-sm">
          {t.contactPage.form.message}
        </Label>
        <Textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[#f1d37b]/50 resize-none"
          placeholder={locale === "fi" ? "Kirjoita viestisi tähän..." : "Write your message here..."}
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#e3c46a] hover:bg-[#f1d37b] text-black font-semibold py-5 text-sm uppercase tracking-wide rounded-full transition-colors"
      >
        <Send className="mr-2 w-4 h-4" />
        {t.contactPage.form.submit}
      </Button>
    </form>
  )
}
