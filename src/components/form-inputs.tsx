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
  labels?: Partial<FormInputsLabels>
}

export type FormInputsLabels = {
  eyebrow: string
  title: string
  subtitle: string
  clientNameLabel: string
  clientNamePlaceholder: string
  contactLabel: string
  contactPlaceholder: string
  engagementLabel: string
  engagementPlaceholder: string
  engagementOptions: { label: string; value: string }[]
  priorityLabel: string
  priorityOptions: { label: string; value: string }[]
  kickoffLabel: string
  kickoffPlaceholder: string
  notesLabel: string
  notesPlaceholder: string
  notificationsLabel: string
  updatesLabel: string
  alertsLabel: string
  extrasLabel: string
  extrasItems: { id: string; label: string }[]
}

const defaultLabels: FormInputsLabels = {
  eyebrow: "Form inputs",
  title: "Client onboarding form",
  subtitle: "Capture a mix of inputs with a consistent, premium appearance.",
  clientNameLabel: "Client name",
  clientNamePlaceholder: "Nimbus Health",
  contactLabel: "Primary contact",
  contactPlaceholder: "you@studio.com",
  engagementLabel: "Engagement type",
  engagementPlaceholder: "Select type",
  engagementOptions: [
    { label: "Premium", value: "premium" },
    { label: "Enterprise", value: "enterprise" },
    { label: "Pilot", value: "pilot" },
  ],
  priorityLabel: "Priority",
  priorityOptions: [
    { label: "Standard", value: "standard" },
    { label: "Express", value: "express" },
    { label: "VIP", value: "vip" },
  ],
  kickoffLabel: "Kickoff date",
  kickoffPlaceholder: "Pick a date",
  notesLabel: "Project notes",
  notesPlaceholder: "Share context, scope, and critical deadlines.",
  notificationsLabel: "Notifications",
  updatesLabel: "Send weekly progress updates to stakeholders",
  alertsLabel: "Enable milestone alerts for the client",
  extrasLabel: "Extras",
  extrasItems: [
    { id: "form-checklist", label: "Create a delivery checklist for this client" },
    { id: "form-nda", label: "Request an NDA signature on kickoff" },
  ],
}

export function FormInputs({ className, labels }: FormInputsProps) {
  const copy = React.useMemo(
    () => ({
      ...defaultLabels,
      ...labels,
      engagementOptions:
        labels?.engagementOptions ?? defaultLabels.engagementOptions,
      priorityOptions: labels?.priorityOptions ?? defaultLabels.priorityOptions,
      extrasItems: labels?.extrasItems ?? defaultLabels.extrasItems,
    }),
    [labels]
  )

  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [type, setType] = React.useState(copy.engagementOptions[0]?.value ?? "premium")

  return (
    <div
      className={cn(
        "rounded-[28px] border border-border/60 bg-card/60 p-6 shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur",
        className
      )}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {copy.eyebrow}
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">{copy.title}</h2>
        <p className="text-sm text-muted-foreground">{copy.subtitle}</p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="form-name">{copy.clientNameLabel}</Label>
          <Input id="form-name" placeholder={copy.clientNamePlaceholder} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="form-email">{copy.contactLabel}</Label>
          <Input
            id="form-email"
            placeholder={copy.contactPlaceholder}
            type="email"
          />
        </div>

        <div className="space-y-2">
          <Label>{copy.engagementLabel}</Label>
          <Select
            placeholder={copy.engagementPlaceholder}
            options={copy.engagementOptions}
            value={
              copy.engagementOptions.find((option) => option.value === type) ??
              null
            }
            onChange={(option) =>
              setType(
                (option as SelectOption | null)?.value ??
                  copy.engagementOptions[0]?.value ??
                  "premium"
              )
            }
          />
        </div>

        <div className="space-y-3">
          <Label>{copy.priorityLabel}</Label>
          <RadioGroup defaultValue="standard" className="grid gap-3">
            {copy.priorityOptions.map((option) => (
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
          <Label>{copy.kickoffLabel}</Label>
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
                {date ? format(date, "PPP") : copy.kickoffPlaceholder}
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
          <Label htmlFor="form-notes">{copy.notesLabel}</Label>
          <Textarea
            id="form-notes"
            placeholder={copy.notesPlaceholder}
            className="min-h-[120px]"
          />
        </div>

        <div className="grid gap-3 lg:col-span-2">
          <Label>{copy.notificationsLabel}</Label>
          <div className="flex items-center gap-3">
            <Switch id="form-updates" />
            <Label htmlFor="form-updates" className="text-sm">
              {copy.updatesLabel}
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="form-alerts" />
            <Label htmlFor="form-alerts" className="text-sm">
              {copy.alertsLabel}
            </Label>
          </div>
        </div>

        <div className="grid gap-3 lg:col-span-2">
          <Label>{copy.extrasLabel}</Label>
          {copy.extrasItems.map((item) => (
            <label key={item.id} className="flex items-center gap-3 text-sm">
              <Checkbox id={item.id} />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
