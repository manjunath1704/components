import * as React from "react"
import { FolderOpen } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export type EmptyStateProps = {
  title?: string
  description?: string
  actionLabel?: string
  onAction?: () => void
  secondaryActionLabel?: string
  onSecondaryAction?: () => void
  className?: string
}

export function EmptyState({
  title = "No projects yet",
  description = "Start your first workspace to track deliverables and approvals.",
  actionLabel = "Create project",
  onAction,
  secondaryActionLabel = "Learn more",
  onSecondaryAction,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-border/60 bg-card/60 p-6 text-center shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur",
        className
      )}
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary shadow-[0_12px_30px_-20px_rgba(96,129,255,0.7)]">
        <FolderOpen className="size-6" />
      </div>
      <h2 className="mt-6 text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Button onClick={onAction}>{actionLabel}</Button>
        <Button variant="outline" onClick={onSecondaryAction}>
          {secondaryActionLabel}
        </Button>
      </div>
    </div>
  )
}
