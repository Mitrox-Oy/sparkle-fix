import { cn } from "@/lib/utils"

interface PageHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  note?: string
  className?: string
}

export function PageHeader({ eyebrow, title, subtitle, note, className }: PageHeaderProps) {
  return (
    <section className={cn("relative pt-32 md:pt-44 pb-12 md:pb-16 bg-black", className)}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-[-0.02em] text-white max-w-4xl">
          {title}
        </h1>
        {subtitle && <p className="mt-6 text-base md:text-lg text-white/60 max-w-xl">{subtitle}</p>}
        {note && <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/40">{note}</p>}
      </div>
    </section>
  )
}
