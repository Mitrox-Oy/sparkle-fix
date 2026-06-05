import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ValueCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export function ValueCard({ icon, title, description, className }: ValueCardProps) {
  return (
    <div className={cn("group flex flex-col py-2", className)}>
      <div className="text-[#e3c46a] mb-5 [&>svg]:w-5 [&>svg]:h-5">{icon}</div>
      <h3 className="font-display text-2xl md:text-3xl leading-[1.05] tracking-[-0.01em] text-white mb-3">
        {title}
      </h3>
      <p className="text-sm text-white/55 leading-relaxed max-w-xs">{description}</p>
    </div>
  )
}
