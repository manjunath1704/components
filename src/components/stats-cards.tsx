import * as React from "react"
import type { LucideIcon } from "lucide-react"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

export type StatChange = {
  value: string
  direction: "up" | "down" | "neutral"
  label?: string
}

export type StatItem = {
  id: string
  label: string
  value: string
  change?: StatChange
  icon?: LucideIcon
}

export type StatsCardsProps = {
  title?: string
  subtitle?: string
  items: StatItem[]
  className?: string
}

const changeStyles: Record<StatChange["direction"], string> = {
  up: "text-emerald-400",
  down: "text-rose-400",
  neutral: "text-muted-foreground",
}

export function StatsCards({
  title,
  subtitle,
  items,
  className,
}: StatsCardsProps) {
  return (
    <section className={cn("space-y-6", className)}>
      {(title || subtitle) ? (
        <header className="space-y-2">
          {title ? (
            <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
          ) : null}
          {subtitle ? (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          ) : null}
        </header>
      ) : null}

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon
          const change = item.change
          const isUp = change?.direction === "up"
          const isDown = change?.direction === "down"
          const TrendIcon = isUp ? ArrowUpRight : ArrowDownRight

          return (
            <article
              key={item.id}
              className="rounded-3xl border border-border/60 bg-card/60 p-5 shadow-[0_24px_60px_-45px_rgba(5,8,20,0.85)] backdrop-blur"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold">{item.value}</p>
                </div>
                {Icon ? (
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="size-5" />
                  </span>
                ) : null}
              </div>

              {change ? (
                <div className="mt-4 flex items-center gap-2 text-xs">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full border border-border/60 px-2 py-1",
                      changeStyles[change.direction]
                    )}
                  >
                    {change.direction !== "neutral" ? (
                      <TrendIcon className="size-3" />
                    ) : null}
                    {change.value}
                  </span>
                  {change.label ? (
                    <span className="text-muted-foreground">{change.label}</span>
                  ) : null}
                </div>
              ) : null}
            </article>
          )
        })}
      </div>
    </section>
  )
}
