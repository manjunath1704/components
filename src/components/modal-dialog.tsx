import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export type ModalDialogProps = {
  title: string
  description?: string
  trigger?: React.ReactNode
  triggerLabel?: string
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  size?: "sm" | "md" | "lg"
  children?: React.ReactNode
  footer?: React.ReactNode
  primaryAction?: {
    label: string
    onClick?: () => void
  }
  secondaryAction?: {
    label: string
    onClick?: () => void
  }
}

const sizeClasses: Record<NonNullable<ModalDialogProps["size"]>, string> = {
  sm: "max-w-sm",
  md: "max-w-xl",
  lg: "max-w-2xl",
}

export function ModalDialog({
  title,
  description,
  trigger,
  triggerLabel = "Open dialog",
  defaultOpen,
  open,
  onOpenChange,
  size = "md",
  children,
  footer,
  primaryAction,
  secondaryAction,
}: ModalDialogProps) {
  return (
    <Dialog defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange}>
      {trigger ? (
        <DialogTrigger asChild>{trigger}</DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <Button>{triggerLabel}</Button>
        </DialogTrigger>
      )}

      <DialogContent
        className={cn(
          "overflow-hidden border border-border/60 bg-card/70 p-0 shadow-[0_30px_80px_-55px_rgba(5,8,20,0.9)] backdrop-blur",
          sizeClasses[size]
        )}
      >
        <div className="relative px-7 pb-6 pt-7 sm:px-8 sm:pb-7 sm:pt-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary/60 via-accent/60 to-transparent" />
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-lg sm:text-xl">{title}</DialogTitle>
            {description ? (
              <DialogDescription>{description}</DialogDescription>
            ) : null}
          </DialogHeader>
          {children ? <div className="mt-5 space-y-4">{children}</div> : null}
        </div>

        {footer ? (
          <DialogFooter className="border-border/60 bg-background/60 px-6 py-5 sm:px-8 sm:py-6">
            {footer}
          </DialogFooter>
        ) : primaryAction || secondaryAction ? (
          <DialogFooter className="border-border/60 bg-background/60 px-6 py-5 sm:px-8 sm:py-6">
            {secondaryAction ? (
              <Button variant="outline" onClick={secondaryAction.onClick}>
                {secondaryAction.label}
              </Button>
            ) : null}
            {primaryAction ? (
              <Button onClick={primaryAction.onClick}>
                {primaryAction.label}
              </Button>
            ) : null}
          </DialogFooter>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
