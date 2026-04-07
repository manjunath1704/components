import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, type SelectOption } from "@/components/ui/react-select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export type FormInputsProps = {
  className?: string
}

export function FormInputs({ className }: FormInputsProps) {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [type, setType] = React.useState("premium")

  return (
    <div
      className={cn(
        "rounded-[28px] border border-border/60 bg-card/60 p-6 shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur",
        className
      )}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Form inputs
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">
          Client onboarding form
        </h2>
        <p className="text-sm text-muted-foreground">
          Capture a mix of inputs with a consistent, premium appearance.
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="form-name">Client name</Label>
          <Input id="form-name" placeholder="Nimbus Health" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="form-email">Primary contact</Label>
          <Input id="form-email" placeholder="you@studio.com" type="email" />
        </div>

        <div className="space-y-2">
          <Label>Engagement type</Label>
          <Select
            placeholder="Select type"
            options={[
              { label: "Premium", value: "premium" },
              { label: "Enterprise", value: "enterprise" },
              { label: "Pilot", value: "pilot" },
            ]}
            value={
              [
                { label: "Premium", value: "premium" },
                { label: "Enterprise", value: "enterprise" },
                { label: "Pilot", value: "pilot" },
              ].find((option) => option.value === type) ?? null
            }
            onChange={(option) =>
              setType((option as SelectOption | null)?.value ?? "premium")
            }
          />
        </div>

        <div className="space-y-3">
          <Label>Priority</Label>
          <RadioGroup defaultValue="standard" className="grid gap-3">
            {[
              { value: "standard", label: "Standard" },
              { value: "express", label: "Express" },
              { value: "vip", label: "VIP" },
            ].map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/60 px-3 py-2 text-sm"
              >
                <RadioGroupItem value={option.value} />
                <span>{option.label}</span>
              </label>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Kickoff date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "h-11 w-full justify-start bg-background/60 text-left",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 size-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2 lg:col-span-2">
          <Label htmlFor="form-notes">Project notes</Label>
          <Textarea
            id="form-notes"
            placeholder="Share context, scope, and critical deadlines."
            className="min-h-[120px]"
          />
        </div>

        <div className="grid gap-3 lg:col-span-2">
          <Label>Notifications</Label>
          <div className="flex items-center gap-3">
            <Switch id="form-updates" />
            <Label htmlFor="form-updates" className="text-sm">
              Send weekly progress updates to stakeholders
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="form-alerts" />
            <Label htmlFor="form-alerts" className="text-sm">
              Enable milestone alerts for the client
            </Label>
          </div>
        </div>

        <div className="grid gap-3 lg:col-span-2">
          <Label>Extras</Label>
          <label className="flex items-center gap-3 text-sm">
            <Checkbox id="form-checklist" />
            <span>Create a delivery checklist for this client</span>
          </label>
          <label className="flex items-center gap-3 text-sm">
            <Checkbox id="form-nda" />
            <span>Request an NDA signature on kickoff</span>
          </label>
        </div>
      </div>
    </div>
  )
}
