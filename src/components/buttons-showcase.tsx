import * as React from "react"
import { ArrowRight, Loader2, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export type ButtonsShowcaseLabels = {
  primary?: string
  secondary?: string
  outline?: string
  ghost?: string
  destructive?: string
  link?: string
  icon?: string
  loading?: string
  sizeTitle?: string
  variantTitle?: string
}

export type ButtonsShowcaseProps = {
  title?: string
  subtitle?: string
  labels?: ButtonsShowcaseLabels
  className?: string
}

export function ButtonsShowcase({
  title = "Buttons",
  subtitle = "Premium button variants for core UI actions.",
  labels,
  className,
}: ButtonsShowcaseProps) {
  const mergedLabels: Required<ButtonsShowcaseLabels> = {
    primary: labels?.primary ?? "Primary action",
    secondary: labels?.secondary ?? "Secondary",
    outline: labels?.outline ?? "Outline",
    ghost: labels?.ghost ?? "Ghost",
    destructive: labels?.destructive ?? "Delete",
    link: labels?.link ?? "Inline link",
    icon: labels?.icon ?? "Icon action",
    loading: labels?.loading ?? "Processing",
    sizeTitle: labels?.sizeTitle ?? "Sizes",
    variantTitle: labels?.variantTitle ?? "Variants",
  }

  return (
    <section
      className={cn(
        "rounded-[28px] border border-border/60 bg-card/60 p-6 shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur",
        className
      )}
    >
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {title}
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">{subtitle}</h2>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {mergedLabels.variantTitle}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button>
              {mergedLabels.primary}
              <ArrowRight className="ml-1 size-4" />
            </Button>
            <Button variant="secondary">{mergedLabels.secondary}</Button>
            <Button variant="outline">{mergedLabels.outline}</Button>
            <Button variant="ghost">{mergedLabels.ghost}</Button>
            <Button variant="destructive">{mergedLabels.destructive}</Button>
            <Button variant="link">{mergedLabels.link}</Button>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {mergedLabels.sizeTitle}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button size="xs">XS</Button>
            <Button size="sm">SM</Button>
            <Button>Default</Button>
            <Button size="lg">LG</Button>
            <Button size="icon" aria-label={mergedLabels.icon}>
              <Plus className="size-4" />
            </Button>
            <Button disabled>
              <Loader2 className="mr-2 size-4 animate-spin" />
              {mergedLabels.loading}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
