"use client"

import { useLocale } from "@/lib/locale-context"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { Shield, Target, Handshake } from "lucide-react"
import { publicUrl } from "@/lib/utils"

export function AboutContent() {
  const { t } = useLocale()

  const steps = [
    { title: t.about.howWeWork.step1.title, description: t.about.howWeWork.step1.description },
    { title: t.about.howWeWork.step2.title, description: t.about.howWeWork.step2.description },
    { title: t.about.howWeWork.step3.title, description: t.about.howWeWork.step3.description },
  ]

  const values = [
    { icon: <Shield className="w-5 h-5" />, ...t.about.values.trust },
    { icon: <Target className="w-5 h-5" />, ...t.about.values.quality },
    { icon: <Handshake className="w-5 h-5" />, ...t.about.values.partnership },
  ]

  return (
    <div>
      <PageHeader eyebrow={`— ${t.nav.about}`} title={t.about.title} subtitle={t.about.subtitle} />

      {/* Story */}
      <Section eyebrow="01 — Our story" title={t.about.story.title}>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center border-t border-white/[0.08] pt-12">
          <div className="space-y-6 text-white/80 text-base md:text-lg leading-relaxed">
            <p>{t.about.story.p1}</p>
            <p>{t.about.story.p2}</p>
            <p>{t.about.story.p3}</p>
          </div>
          <div className="relative">
            <img
              src={publicUrl("sparkle-fix-tietoa-meista.jpg")}
              alt="Sparkle Fix Oy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </Section>

      {/* How we work — numbered editorial list */}
      <Section eyebrow="02 — Process" title={t.about.howWeWork.title}>
        <div className="grid md:grid-cols-3 border-t border-white/[0.08]">
          {steps.map((step, i) => (
            <div
              key={i}
              className="py-10 md:py-12 md:px-10 md:[&:not(:first-child)]:border-l border-white/[0.08]"
            >
              <span className="font-mono text-xs tracking-[0.25em] text-white/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl md:text-3xl leading-[1.05] tracking-[-0.01em] text-white mt-5 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section eyebrow="03 — Values" title={t.about.values.title}>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-12 border-t border-white/[0.08] pt-12">
          {values.map((value, i) => (
            <div key={i} className="flex flex-col">
              <div className="text-[#e3c46a] mb-5">{value.icon}</div>
              <h3 className="font-display text-2xl md:text-3xl leading-[1.05] tracking-[-0.01em] text-white mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed max-w-xs">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
