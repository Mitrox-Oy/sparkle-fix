"use client"

import { useLocale } from "@/lib/locale-context"
import { Section } from "@/components/section"
import { ValueCard } from "@/components/value-card"
import { Shield, Award, Users, ClipboardCheck, Wrench, CheckCircle } from "lucide-react"

export function AboutContent() {
  const { t, locale } = useLocale()

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-gradient-to-b from-black via-black to-gray-950">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{t.about.title}</h1>
          <p className="text-xl text-gray-400">{t.about.subtitle}</p>
        </div>
      </Section>

      {/* Story */}
      <Section className="bg-gray-950">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">{t.about.story.title}</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>{t.about.story.p1}</p>
              <p>{t.about.story.p2}</p>
              <p>{t.about.story.p3}</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/sparkle-fix-tietoa-meista.jpg"
                alt="Sparkle Fix team at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#f1d37b]/20 to-[#e3c46a]/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-[#f1d37b]/20 rounded-2xl -z-10" />
          </div>
        </div>
      </Section>

      {/* How We Work */}
      <Section title={t.about.howWeWork.title} className="bg-black">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              icon: <ClipboardCheck className="w-6 h-6 text-[#edd67c]" />,
              title: t.about.howWeWork.step1.title,
              description: t.about.howWeWork.step1.description,
            },
            {
              step: "02",
              icon: <Wrench className="w-6 h-6 text-[#edd67c]" />,
              title: t.about.howWeWork.step2.title,
              description: t.about.howWeWork.step2.description,
            },
            {
              step: "03",
              icon: <CheckCircle className="w-6 h-6 text-[#edd67c]" />,
              title: t.about.howWeWork.step3.title,
              description: t.about.howWeWork.step3.description,
            },
          ].map((item) => (
            <div
              key={item.step}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
            >
              <span className="absolute top-4 right-4 text-5xl font-bold text-white/5">{item.step}</span>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f1d37b]/20 to-[#e3c46a]/10 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section title={t.about.values.title} className="bg-gradient-to-b from-black to-gray-950">
        <div className="grid md:grid-cols-3 gap-6">
          <ValueCard
            icon={<Shield className="w-7 h-7 text-[#edd67c]" />}
            title={t.about.values.trust.title}
            description={t.about.values.trust.description}
          />
          <ValueCard
            icon={<Award className="w-7 h-7 text-[#edd67c]" />}
            title={t.about.values.quality.title}
            description={t.about.values.quality.description}
          />
          <ValueCard
            icon={<Users className="w-7 h-7 text-[#edd67c]" />}
            title={t.about.values.partnership.title}
            description={t.about.values.partnership.description}
          />
        </div>
      </Section>

      {/* Certifications placeholder */}
      <Section className="bg-gray-950">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-8">
            {locale === "fi" ? "Luottamuksen merkit" : "Trust Badges"}
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {["ISO 9001", "Ympäristösertifikaatti", "Luotettava kumppani"].map((cert) => (
              <div key={cert} className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
