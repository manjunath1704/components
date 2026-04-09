import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export type TooltipItem = {
  id: string
  label: string
  content: string
  side?: "top" | "right" | "bottom" | "left"
}

export type TooltipListProps = {
  items: TooltipItem[]
  delayDuration?: number
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
  buttonSize?: React.ComponentProps<typeof Button>["size"]
  className?: string
}

export function TooltipList({
  items,
  delayDuration = 120,
  buttonVariant = "outline",
  buttonSize = "sm",
  className,
}: TooltipListProps) {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <div className={cn("flex flex-wrap items-center gap-3", className)}>
        {items.map((item) => (
          <Tooltip key={item.id}>
            <TooltipTrigger asChild>
              <Button variant={buttonVariant} size={buttonSize}>
                {item.label}
              </Button>
            </TooltipTrigger>
            <TooltipContent side={item.side ?? "top"} sideOffset={8}>
              {item.content}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
