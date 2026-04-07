import * as React from "react"
import type { LucideIcon } from "lucide-react"
import { Bell, ChevronDown, Search, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export type AppShellNavItem = {
  id: string
  label: string
  icon: LucideIcon
  badge?: string
}

export type AppShellUser = {
  name: string
  role: string
  initials: string
}

export type AppShellBrand = {
  name: string
  tagline?: string
}

export type AppShellProps = {
  brand: AppShellBrand
  user: AppShellUser
  navItems: AppShellNavItem[]
  activeItemId?: string
  copy?: Partial<AppShellCopy>
  fullHeight?: boolean
  children?: React.ReactNode
}

export type AppShellCopy = {
  searchPlaceholder: string
  newRequestLabel: string
  workspaceLabel: string
  usageLabel: string
  usageHint: string
  upgradeLabel: string
  notificationsAriaLabel: string
  searchAriaLabel: string
  newRequestAriaLabel: string
}

const defaultCopy: AppShellCopy = {
  searchPlaceholder: "Search components, teams, or files",
  newRequestLabel: "New request",
  workspaceLabel: "Workspace",
  usageLabel: "Usage",
  usageHint: "Upgrade to unlock unlimited projects.",
  upgradeLabel: "Upgrade plan",
  notificationsAriaLabel: "Notifications",
  searchAriaLabel: "Search",
  newRequestAriaLabel: "New request",
}

export function AppShell({
  brand,
  user,
  navItems,
  activeItemId,
  copy,
  fullHeight = true,
  children,
}: AppShellProps) {
  const labels = { ...defaultCopy, ...copy }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-background text-foreground",
        fullHeight ? "min-h-screen" : "min-h-0"
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-[140px]" />
        <div className="absolute -bottom-48 -left-32 h-[32rem] w-[32rem] rounded-full bg-accent/30 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/75 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_10px_30px_-18px_rgba(96,129,255,0.8)]">
              <Sparkles className="size-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{brand.name}</span>
              <span className="text-xs text-muted-foreground">
                {brand.tagline ?? "Premium workspace"}
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <label className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                className="h-10 w-64 rounded-full border border-border/60 bg-card/60 pl-9 pr-3 text-sm text-foreground shadow-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/40"
                placeholder={labels.searchPlaceholder}
                type="search"
              />
            </label>
            <Button
              variant="outline"
              size="icon"
              aria-label={labels.notificationsAriaLabel}
            >
              <Bell className="size-4" />
            </Button>
            <Button>{labels.newRequestLabel}</Button>
            <button className="flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-sm shadow-sm transition hover:bg-card/80">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-xs font-semibold">
                {user.initials}
              </span>
              <span className="hidden text-left sm:block">
                <span className="block text-xs font-medium">{user.name}</span>
                <span className="block text-[11px] text-muted-foreground">
                  {user.role}
                </span>
              </span>
              <ChevronDown className="size-4 text-muted-foreground" />
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="outline"
              size="icon"
              aria-label={labels.searchAriaLabel}
            >
              <Search className="size-4" />
            </Button>
            <Button
              size="icon"
              aria-label={labels.newRequestAriaLabel}
            >
              <Sparkles className="size-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-6 px-6 py-6">
        <aside className="hidden w-64 shrink-0 flex-col gap-6 lg:flex">
          <div className="rounded-2xl border border-border/60 bg-card/60 p-4 shadow-[0_20px_50px_-35px_rgba(5,8,20,0.9)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {labels.workspaceLabel}
            </p>
            <nav className="mt-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = item.id === activeItemId
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition",
                      isActive
                        ? "bg-primary/15 text-primary shadow-[0_0_0_1px_rgba(99,102,241,0.35)]"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="size-4" />
                      {item.label}
                    </span>
                    {item.badge ? (
                      <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                        {item.badge}
                      </span>
                    ) : null}
                  </button>
                )
              })}
            </nav>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/60 p-4 shadow-[0_20px_50px_-35px_rgba(5,8,20,0.9)] backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">{labels.usageLabel}</p>
              <span className="text-xs text-muted-foreground">72%</span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-muted">
              <div className="h-2 w-[72%] rounded-full bg-primary" />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              {labels.usageHint}
            </p>
            <Button className="mt-3 w-full" size="sm">
              {labels.upgradeLabel}
            </Button>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <div className="rounded-3xl border border-border/60 bg-card/60 p-6 shadow-[0_30px_80px_-50px_rgba(5,8,20,0.9)] backdrop-blur">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
