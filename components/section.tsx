import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  dark?: boolean
  id?: string
  title?: string
  subtitle?: string
  eyebrow?: string
  titleClassName?: string
  actions?: ReactNode
}

export function Section({
  children,
  className,
  dark = true,
  id,
  title,
  subtitle,
  eyebrow,
  titleClassName,
  actions,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32",
        dark ? "bg-black text-white" : "bg-gray-50 text-gray-900",
        className,
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {(title || subtitle || actions || eyebrow) && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div className="max-w-2xl">
              {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
              {title && (
                <h2
                  className={cn(
                    "font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.015em] mb-5",
                    dark ? "text-white" : "text-gray-900",
                    titleClassName,
                  )}
                >
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className={cn("text-base md:text-lg max-w-xl", dark ? "text-white/60" : "text-gray-600")}>
                  {subtitle}
                </p>
              )}
            </div>
            {actions && <div className="shrink-0">{actions}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
