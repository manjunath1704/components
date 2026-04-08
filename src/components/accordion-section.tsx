import * as React from "react"
import { ArrowUpRight, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export type AccordionAction = {
  label: string
  href?: string
}

export type AccordionEntry = {
  id: string
  title: string
  summary?: string
  body: string
  highlights?: string[]
  badge?: string
}

export type AccordionSectionProps = {
  eyebrow?: string
  title?: string
  description?: string
  badgeText?: string
  primaryCta?: AccordionAction
  secondaryCta?: AccordionAction
  items?: AccordionEntry[]
  defaultValue?: string
  className?: string
}

const defaultItems: AccordionEntry[] = [
  {
    id: "onboarding",
    title: "Client onboarding that feels personal",
    summary: "Collect brand inputs, timelines, and approvals in one flow.",
    body: "Replace the kickoff doc with a structured intake that syncs directly into your delivery plan. Everything stays visible and signed off.",
    highlights: [
      "Branded intake forms",
      "Auto-approved scope templates",
      "Shareable workspace timeline",
    ],
    badge: "Most used",
  },
  {
    id: "collaboration",
    title: "Shared updates without the inbox drag",
    summary: "Keep stakeholders aligned with real-time progress.",
    body: "Every task, asset, and decision lives inside the portal, so teams always see the same context. No more chasing email threads.",
    highlights: [
      "Threaded approvals",
      "Weekly recap snapshots",
      "Real-time status pings",
    ],
  },
  {
    id: "reporting",
    title: "Premium reporting built in",
    summary: "Deliver weekly impact reports that feel handcrafted.",
    body: "Use curated metrics and client-facing charts to show progress. Export, schedule, and brand each update in minutes.",
    highlights: [
      "Client-ready dashboards",
      "Auto-scheduled exports",
      "Multi-team visibility",
    ],
  },
]

function ActionButton({
  action,
  variant,
}: {
  action?: AccordionAction
  variant?: React.ComponentProps<typeof Button>["variant"]
}) {
  if (!action) return null
  if (action.href) {
    return (
      <Button asChild variant={variant}>
        <a href={action.href}>
          {action.label}
          <ArrowUpRight className="ml-1 size-4" />
        </a>
      </Button>
    )
  }

  return (
    <Button variant={variant}>
      {action.label}
      <ArrowUpRight className="ml-1 size-4" />
    </Button>
  )
}

export function AccordionSection({
  eyebrow = "Why teams choose Nimbus",
  title = "Everything your clients need, in one elevated workspace.",
  description = "A premium experience that keeps timelines, assets, and approvals moving. Replace the inbox chaos with structured collaboration.",
  badgeText = "Updated for 2026",
  primaryCta = { label: "Book a demo", href: "#" },
  secondaryCta = { label: "View pricing", href: "#" },
  items = defaultItems,
  defaultValue = "onboarding",
  className,
}: AccordionSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-[32px] border border-border/60 bg-card/60 px-6 py-12 shadow-[0_30px_90px_-60px_rgba(10,16,40,0.85)] backdrop-blur md:px-10 lg:px-14 lg:py-16",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -left-40 bottom-[-30%] h-96 w-96 rounded-full bg-accent/20 blur-[140px]" />
      </div>

      <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {title}
            </h2>
            <p className="max-w-xl text-sm text-muted-foreground md:text-base">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <ActionButton action={primaryCta} variant="default" />
            <ActionButton action={secondaryCta} variant="outline" />
          </div>
        </div>

        <div className="rounded-[28px] border border-border/60 bg-background/70 p-5 shadow-[0_35px_80px_-60px_rgba(8,15,38,0.8)] backdrop-blur">
          <Accordion type="single" collapsible defaultValue={defaultValue}>
            {items.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="rounded-2xl border border-border/60 bg-card/60 px-4 py-1.5 not-last:mb-3 not-last:border-b-0"
              >
                <AccordionTrigger className="gap-3 py-3 hover:no-underline">
                  <div className="space-y-1 text-left">
                    <div className="flex flex-wrap items-center gap-2">
                      <span>{item.title}</span>
                      {item.badge ? (
                        <Badge
                          variant="secondary"
                          className="bg-secondary/60 text-[10px] uppercase tracking-[0.12em]"
                        >
                          {item.badge}
                        </Badge>
                      ) : null}
                    </div>
                    {item.summary ? (
                      <p className="text-xs text-muted-foreground">
                        {item.summary}
                      </p>
                    ) : null}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-3 text-sm text-muted-foreground">
                  <p>{item.body}</p>
                  {item.highlights && item.highlights.length > 0 ? (
                    <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
