import * as React from "react"

import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export type AccordionListItem = {
  id: string
  title: string
  content: string
}

export type AccordionListProps = {
  items: AccordionListItem[]
  type?: "single" | "multiple"
  defaultValue?: string
  className?: string
}

export function AccordionList({
  items,
  type = "single",
  defaultValue,
  className,
}: AccordionListProps) {
  return (
    <Accordion
      type={type}
      collapsible={type === "single"}
      defaultValue={defaultValue}
      className={cn("space-y-3", className)}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="rounded-2xl border border-border/60 bg-card/60 px-4 py-1.5"
        >
          <AccordionTrigger className="gap-3 py-3 hover:no-underline">
            <span className="text-sm font-semibold">{item.title}</span>
          </AccordionTrigger>
          <AccordionContent className="pb-3 text-sm text-muted-foreground">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
