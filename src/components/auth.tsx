import * as React from "react"
import { Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export type AuthShellProps = {
  brand: {
    name: string
    tagline?: string
  }
  marketing: {
    title: string
    copy: string
    highlights: string[]
  }
  children: React.ReactNode
  fullHeight?: boolean
}

export function AuthShell({
  brand,
  marketing,
  children,
  fullHeight = true,
}: AuthShellProps) {
  return (
    <div
      className={cn(
        "relative bg-background text-foreground",
        fullHeight ? "min-h-screen" : "min-h-0"
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 top-[-10%] h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-[140px]" />
        <div className="absolute -left-32 bottom-[-20%] h-[30rem] w-[30rem] rounded-full bg-accent/25 blur-[160px]" />
      </div>

      <div
        className={cn(
          "grid lg:grid-cols-[1.1fr_0.9fr]",
          fullHeight ? "min-h-screen" : "min-h-0"
        )}
      >
        <section className="relative hidden items-center overflow-hidden border-r border-border/60 bg-gradient-to-br from-primary/15 via-background to-background px-10 py-12 lg:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,129,255,0.18),_transparent_55%)]" />
          <div className="relative z-10 max-w-md space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_10px_30px_-18px_rgba(96,129,255,0.8)]">
                <Sparkles className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">{brand.name}</p>
                <p className="text-xs text-muted-foreground">
                  {brand.tagline ?? "Premium workspace"}
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                {marketing.title}
              </h1>
              <p className="mt-3 text-sm text-muted-foreground">
                {marketing.copy}
              </p>
            </div>

            <ul className="space-y-2 text-sm text-muted-foreground">
              {marketing.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">{children}</div>
        </section>
      </div>
    </div>
  )
}

export type AuthCardProps = {
  title: string
  description: string
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export function AuthCard({
  title,
  description,
  children,
  footer,
  className,
}: AuthCardProps) {
  return (
    <Card
      className={cn(
        "border-border/60 bg-card/60 shadow-[0_30px_70px_-50px_rgba(5,8,20,0.9)] backdrop-blur",
        className
      )}
    >
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">{children}</CardContent>
      {footer ? <CardFooter>{footer}</CardFooter> : null}
    </Card>
  )
}
