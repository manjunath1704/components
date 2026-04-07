import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export type PricingTier = {
  id: string
  name: string
  description: string
  price: string
  cadence: string
  highlights: string[]
  emphasized?: boolean
  ctaLabel?: string
}

export type PricingCardsProps = {
  title?: string
  subtitle?: string
  tiers: PricingTier[]
  className?: string
}

export function PricingCards({
  title = "Pricing",
  subtitle = "Flexible plans that scale with your client work.",
  tiers,
  className,
}: PricingCardsProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <div className="space-y-2 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {title}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {subtitle}
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={cn(
              "relative rounded-[28px] border border-border/60 bg-card/60 p-6 shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur",
              tier.emphasized &&
                "border-primary/60 bg-gradient-to-br from-primary/20 via-card/60 to-card/40 shadow-[0_35px_90px_-60px_rgba(96,129,255,0.9)]"
            )}
          >
            {tier.emphasized ? (
              <span className="absolute right-6 top-6 rounded-full bg-primary/20 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-primary">
                Most popular
              </span>
            ) : null}
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold">{tier.name}</p>
                <p className="text-xs text-muted-foreground">
                  {tier.description}
                </p>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-semibold">{tier.price}</span>
                <span className="text-xs text-muted-foreground">
                  {tier.cadence}
                </span>
              </div>
            </div>
            <Button
              className={cn(
                "mt-5 w-full",
                tier.emphasized ? "" : "bg-secondary text-secondary-foreground"
              )}
            >
              {tier.ctaLabel ?? "Select plan"}
            </Button>
            <div className="mt-6 space-y-3">
              {tier.highlights.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3" />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
