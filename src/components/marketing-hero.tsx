import * as React from "react"
import { ArrowUpRight, Check, Play, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export type HeroAction = {
  label: string
  href?: string
}

export type HeroMetric = {
  label: string
  value: string
}

export type HeroFeature = {
  label: string
  description?: string
}

export type MarketingHeroProps = {
  eyebrow?: string
  title?: string
  description?: string
  badgeText?: string
  primaryCta?: HeroAction
  secondaryCta?: HeroAction
  features?: HeroFeature[]
  metrics?: HeroMetric[]
  trustedBy?: string[]
  className?: string
}

const defaultFeatures: HeroFeature[] = [
  {
    label: "Strategic playbooks",
    description: "Automated briefs, insights, and coordinated handoffs.",
  },
  {
    label: "Premium client portals",
    description: "Share plans, approvals, and monthly impact reports.",
  },
]

const defaultMetrics: HeroMetric[] = [
  { label: "Avg. launch time", value: "9 days" },
  { label: "Active workspaces", value: "1,248" },
  { label: "Net retention", value: "128%" },
]

const defaultTrustedBy = ["Lumen", "Fable", "Keystone", "Northwind", "Arcadia"]

function ActionButton({
  action,
  variant,
  icon,
}: {
  action?: HeroAction
  variant?: React.ComponentProps<typeof Button>["variant"]
  icon?: React.ReactNode
}) {
  if (!action) return null
  if (action.href) {
    return (
      <Button asChild variant={variant}>
        <a href={action.href}>
          {action.label}
          {icon}
        </a>
      </Button>
    )
  }

  return (
    <Button variant={variant}>
      {action.label}
      {icon}
    </Button>
  )
}

export function MarketingHero({
  eyebrow = "Launch your next premium client experience",
  title = "Build elegant project portals without hiring a dev team.",
  description = "Nimbus gives agencies a modern operating system for delivery, approvals, and reporting. Keep every client aligned with branded portals, automated insights, and real-time updates.",
  badgeText = "New · 2026 Product Release",
  primaryCta = { label: "Start a workspace", href: "#" },
  secondaryCta = { label: "Watch preview", href: "#" },
  features = defaultFeatures,
  metrics = defaultMetrics,
  trustedBy = defaultTrustedBy,
  className,
}: MarketingHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-[32px] border border-border/60 bg-card/60 px-6 py-12 shadow-[0_30px_90px_-60px_rgba(10,16,40,0.85)] backdrop-blur md:px-10 lg:px-14 lg:py-16",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-6 h-72 w-72 rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -left-40 bottom-[-30%] h-96 w-96 rounded-full bg-accent/20 blur-[140px]" />
      </div>

      <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <Badge variant="secondary" className="gap-1 bg-secondary/70">
              <Sparkles className="size-3" />
              {badgeText}
            </Badge>
            <span className="font-medium uppercase tracking-[0.18em]">
              {eyebrow}
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <ActionButton
              action={primaryCta}
              variant="default"
              icon={<ArrowUpRight className="ml-1 size-4" />}
            />
            <ActionButton
              action={secondaryCta}
              variant="outline"
              icon={<Play className="ml-1 size-4" />}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="rounded-2xl border border-border/60 bg-background/60 p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{feature.label}</p>
                    {feature.description ? (
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="space-y-1">
                <p className="text-lg font-semibold">{metric.value}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="font-semibold uppercase tracking-[0.18em]">
              Trusted by
            </span>
            {trustedBy.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em]"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-10 -top-10 hidden h-24 w-24 rounded-3xl border border-border/40 bg-background/70 shadow-[0_20px_60px_-45px_rgba(8,15,38,0.8)] lg:block" />
          <div className="rounded-[28px] border border-border/60 bg-background/70 p-5 shadow-[0_35px_80px_-60px_rgba(8,15,38,0.8)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div>
                <p className="text-sm font-semibold">Nimbus Workspace</p>
                <p className="text-xs text-muted-foreground">
                  Client delivery overview
                </p>
              </div>
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-500">
                Live
              </span>
            </div>

            <div className="grid gap-4 pt-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-card/70 p-4">
                  <p className="text-xs text-muted-foreground">
                    Milestones approved
                  </p>
                  <p className="mt-2 text-2xl font-semibold">18 / 22</p>
                  <div className="mt-3 h-1.5 w-full rounded-full bg-muted">
                    <div className="h-1.5 w-4/5 rounded-full bg-primary" />
                  </div>
                </div>
                <div className="rounded-2xl border border-border/60 bg-card/70 p-4">
                  <p className="text-xs text-muted-foreground">
                    Sentiment tracking
                  </p>
                  <p className="mt-2 text-2xl font-semibold">96%</p>
                  <p className="mt-1 text-xs text-emerald-400">
                    +12% this month
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-card/70 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Next review</p>
                    <p className="text-sm font-semibold">
                      Portal refresh sync
                    </p>
                  </div>
                  <span className="rounded-full border border-border/60 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    Wed 10:00
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Asset approvals and launch checklist
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-card/70 p-4">
                <p className="text-xs text-muted-foreground">Signals</p>
                <div className="mt-3 grid gap-2">
                  {[
                    "Stakeholders reviewed the latest sprint",
                    "Brand kit refreshed for Q2 releases",
                    "Two approvals pending in creative",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
