"use client"

import { useLocale } from "@/lib/locale-context"
import { Section } from "@/components/section"
import { Shield, Target, Handshake, CheckCircle2 } from "lucide-react"
import { publicUrl } from "@/lib/utils"

export function AboutContent() {
  const { t } = useLocale()

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.about.title}
          </h1>
          <p className="text-xl text-gray-400">{t.about.subtitle}</p>
        </div>
      </Section>

      {/* Story Section */}
      <Section title={t.about.story.title} className="bg-gray-950">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-center">
          <div className="space-y-6 text-white text-lg leading-relaxed">
            <p>{t.about.story.p1}</p>
            <p>{t.about.story.p2}</p>
            <p>{t.about.story.p3}</p>
          </div>
          <div className="relative">
            <img
              src={publicUrl("sparkle-fix-tietoa-meista.jpg")}
              alt="Sparkle Fix Oy"
              className="w-full h-auto rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* How We Work */}
      <Section title={t.about.howWeWork.title} className="bg-black">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f1d37b]/20 to-[#e3c46a]/10 flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-[#edd67c]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {t.about.howWeWork.step1.title}
            </h3>
            <p className="text-gray-400">{t.about.howWeWork.step1.description}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f1d37b]/20 to-[#e3c46a]/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#edd67c]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {t.about.howWeWork.step2.title}
            </h3>
            <p className="text-gray-400">{t.about.howWeWork.step2.description}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f1d37b]/20 to-[#e3c46a]/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-[#edd67c]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {t.about.howWeWork.step3.title}
            </h3>
            <p className="text-gray-400">{t.about.howWeWork.step3.description}</p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section title={t.about.values.title} className="bg-gradient-to-b from-gray-950 to-black">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <Shield className="w-10 h-10 text-[#edd67c] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              {t.about.values.trust.title}
            </h3>
            <p className="text-gray-400">{t.about.values.trust.description}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <Target className="w-10 h-10 text-[#edd67c] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              {t.about.values.quality.title}
            </h3>
            <p className="text-gray-400">{t.about.values.quality.description}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <Handshake className="w-10 h-10 text-[#edd67c] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              {t.about.values.partnership.title}
            </h3>
            <p className="text-gray-400">{t.about.values.partnership.description}</p>
          </div>
        </div>
      </Section>
    </div>
  )
}
