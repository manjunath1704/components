import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export type BillingPlan = {
  id: string
  name: string
  description: string
  monthlyPrice: string
  annualPrice: string
  highlights: string[]
}

export type BillingPlanSelectorProps = {
  title?: string
  subtitle?: string
  plans: BillingPlan[]
  defaultBilling?: "monthly" | "annual"
  labels?: Partial<BillingPlanSelectorLabels>
  className?: string
}

export type BillingPlanSelectorLabels = {
  monthlyLabel: string
  annualLabel: string
  perMonthLabel: string
  perYearLabel: string
  continueLabel: (planName: string) => string
}

export function BillingPlanSelector({
  title = "Billing plans",
  subtitle = "Choose monthly or annual billing for each workspace.",
  plans,
  defaultBilling = "monthly",
  labels,
  className,
}: BillingPlanSelectorProps) {
  const [billing, setBilling] = React.useState<"monthly" | "annual">(
    defaultBilling
  )
  const [selectedPlan, setSelectedPlan] = React.useState(plans[1]?.id ?? plans[0]?.id)

  const copy: BillingPlanSelectorLabels = {
    monthlyLabel: "Monthly",
    annualLabel: "Annual",
    perMonthLabel: "per month",
    perYearLabel: "per year",
    continueLabel: (planName) => `Continue with ${planName}`,
    ...labels,
  }

  return (
    <section className={cn("space-y-6", className)}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {title}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">{subtitle}</h2>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-border/60 bg-card/60 p-1">
          {[
            { value: "monthly", label: copy.monthlyLabel },
            { value: "annual", label: copy.annualLabel },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setBilling(option.value as "monthly" | "annual")}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition",
                billing === option.value
                  ? "bg-primary text-primary-foreground shadow-[0_10px_30px_-18px_rgba(96,129,255,0.8)]"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const isSelected = selectedPlan === plan.id
          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelectedPlan(plan.id)}
              className={cn(
                "group relative rounded-[24px] border border-border/60 bg-card/60 p-6 text-left shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur transition hover:border-primary/40",
                isSelected &&
                  "border-primary/60 bg-gradient-to-br from-primary/20 via-card/60 to-card/40 shadow-[0_35px_90px_-60px_rgba(96,129,255,0.9)]"
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">{plan.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition",
                    isSelected && "border-primary/60 text-primary"
                  )}
                >
                  <Check className="size-4" />
                </span>
              </div>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl font-semibold">
                  {billing === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                </span>
                <span className="text-xs text-muted-foreground">
                  {billing === "monthly"
                    ? copy.perMonthLabel
                    : copy.perYearLabel}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                {plan.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-3" />
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {isSelected ? (
                <div className="mt-6">
                  <Button className="w-full">
                    {copy.continueLabel(plan.name)}
                  </Button>
                </div>
              ) : null}
            </button>
          )
        })}
      </div>
    </section>
  )
}
