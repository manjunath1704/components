import * as React from "react"
import { Clock, MessageSquare, Sparkles, User } from "lucide-react"

import { cn } from "@/lib/utils"

export type ActivityItem = {
  id: string
  title: string
  description: string
  time: string
  icon?: React.ReactNode
  highlight?: boolean
}

export type ActivityFeedProps = {
  title?: string
  subtitle?: string
  items: ActivityItem[]
  className?: string
}

const defaultIcons = [Sparkles, MessageSquare, User, Clock]

export function ActivityFeed({
  title = "Activity feed",
  subtitle = "Track workspace updates and approvals in one stream.",
  items,
  className,
}: ActivityFeedProps) {
  return (
    <section
      className={cn(
        "rounded-[28px] border border-border/60 bg-card/60 p-6 shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur",
        className
      )}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {title}
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">{subtitle}</h2>
      </div>

      <div className="mt-6 space-y-6">
        {items.map((item, index) => {
          const Icon = defaultIcons[index % defaultIcons.length]
          return (
            <div key={item.id} className="relative flex gap-4">
              <div className="relative flex flex-col items-center">
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-2xl border border-border/60 bg-background/60 text-primary",
                    item.highlight &&
                      "border-primary/50 bg-primary/15 shadow-[0_10px_30px_-20px_rgba(96,129,255,0.8)]"
                  )}
                >
                  {item.icon ?? <Icon className="size-4" />}
                </span>
                <span className="mt-3 h-full w-px flex-1 bg-border/60" />
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {item.time}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
