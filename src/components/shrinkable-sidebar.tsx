import * as React from "react"
import type { LucideIcon } from "lucide-react"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export type SidebarItem = {
  id: string
  label: string
  icon: LucideIcon
  badge?: string
}

export type SidebarBrand = {
  name: string
  tagline?: string
}

export type ShrinkableSidebarProps = {
  brand: SidebarBrand
  items: SidebarItem[]
  activeItemId?: string
  collapsed?: boolean
  defaultCollapsed?: boolean
  collapsedWidth?: string
  expandedWidth?: string
  onCollapsedChange?: (collapsed: boolean) => void
  className?: string
}

export function ShrinkableSidebar({
  brand,
  items,
  activeItemId,
  collapsed,
  defaultCollapsed = false,
  collapsedWidth = "5rem",
  expandedWidth = "16rem",
  onCollapsedChange,
  className,
}: ShrinkableSidebarProps) {
  const [internalCollapsed, setInternalCollapsed] =
    React.useState(defaultCollapsed)
  const isCollapsed = collapsed ?? internalCollapsed

  const toggleCollapsed = () => {
    const next = !isCollapsed
    if (collapsed === undefined) {
      setInternalCollapsed(next)
    }
    onCollapsedChange?.(next)
  }

  return (
    <TooltipProvider delayDuration={120}>
      <aside
        className={cn(
          "flex h-full flex-none flex-col gap-6 overflow-hidden rounded-[24px] border border-border/60 bg-card/60 py-5 shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur transition-[width] duration-300",
          isCollapsed ? "px-3" : "px-4",
          className
        )}
        data-collapsed={isCollapsed ? "true" : "false"}
        style={{
          width: isCollapsed ? collapsedWidth : expandedWidth,
          minWidth: isCollapsed ? collapsedWidth : expandedWidth,
          maxWidth: isCollapsed ? collapsedWidth : expandedWidth,
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_10px_30px_-18px_rgba(96,129,255,0.8)]">
              <Sparkles className="size-5" />
            </div>
            <div className={cn("flex flex-col", isCollapsed && "sr-only")}>
              <span className="text-sm font-semibold">{brand.name}</span>
              <span className="text-xs text-muted-foreground">
                {brand.tagline ?? "Premium workspace"}
              </span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-expanded={!isCollapsed}
            onClick={toggleCollapsed}
          >
            {isCollapsed ? (
              <ChevronRight className="size-4" />
            ) : (
              <ChevronLeft className="size-4" />
            )}
          </Button>
        </div>

        <nav className="flex flex-1 flex-col gap-1" aria-label="Sidebar">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = item.id === activeItemId

            const button = (
              <button
                key={item.id}
                type="button"
                className={cn(
                  "group flex w-full items-center rounded-xl py-2 text-sm font-medium transition",
                  isCollapsed ? "justify-center px-2" : "gap-3 px-3",
                  isActive
                    ? "bg-primary/15 text-primary shadow-[0_0_0_1px_rgba(99,102,241,0.35)]"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="size-4 shrink-0" />
                <span
                  className={cn(
                    "flex-1 text-left",
                    isCollapsed && "sr-only"
                  )}
                >
                  {item.label}
                </span>
                {item.badge && !isCollapsed ? (
                  <Badge variant="secondary" className="bg-muted text-xs">
                    {item.badge}
                  </Badge>
                ) : null}
              </button>
            )

            if (isCollapsed) {
              return (
                <Tooltip key={item.id}>
                  <TooltipTrigger asChild>{button}</TooltipTrigger>
                  <TooltipContent side="right" sideOffset={10}>
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              )
            }

            return button
          })}
        </nav>
      </aside>
    </TooltipProvider>
  )
}
