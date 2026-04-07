import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { FormInputs } from "@/components/form-inputs"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, type SelectOption } from "@/components/ui/react-select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const meta = {
  title: "Premium/FormInputs",
  component: FormInputs,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormInputs>

export default meta
type Story = StoryObj<typeof meta>

const Background = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-screen bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
      <div className="absolute -left-40 bottom-[-20%] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[150px]" />
    </div>
    <div className="mx-auto max-w-3xl">{children}</div>
  </div>
)

const FieldCard = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-[28px] border border-border/60 bg-card/60 p-6 shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur">
    {children}
  </div>
)

export const Default: Story = {
  render: () => (
    <Background>
      <FormInputs />
    </Background>
  ),
}

export const TextInput: Story = {
  render: () => (
    <Background>
      <FieldCard>
        <div className="space-y-2">
          <Label htmlFor="text-input">Client name</Label>
          <Input id="text-input" placeholder="Nimbus Health" />
        </div>
      </FieldCard>
    </Background>
  ),
}

export const SelectInput: Story = {
  render: () => {
    const [value, setValue] = React.useState("premium")
    const options: SelectOption[] = [
      { label: "Premium", value: "premium" },
      { label: "Enterprise", value: "enterprise" },
      { label: "Pilot", value: "pilot" },
    ]

    return (
      <Background>
        <FieldCard>
          <div className="space-y-2">
            <Label>Engagement type</Label>
            <Select
              placeholder="Select type"
              options={options}
              value={options.find((option) => option.value === value) ?? null}
              onChange={(option) =>
                setValue((option as SelectOption | null)?.value ?? "premium")
              }
            />
          </div>
        </FieldCard>
      </Background>
    )
  },
}

export const DateInput: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <Background>
        <FieldCard>
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
        </FieldCard>
      </Background>
    )
  },
}

export const ToggleInput: Story = {
  render: () => (
    <Background>
      <FieldCard>
        <div className="flex items-center gap-3">
          <Switch id="toggle-input" />
          <Label htmlFor="toggle-input" className="text-sm">
            Send weekly progress updates to stakeholders
          </Label>
        </div>
      </FieldCard>
    </Background>
  ),
}

export const RadioGroupInput: Story = {
  render: () => (
    <Background>
      <FieldCard>
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
      </FieldCard>
    </Background>
  ),
}

export const CheckboxInput: Story = {
  render: () => (
    <Background>
      <FieldCard>
        <div className="space-y-3">
          <Label>Notification preferences</Label>
          <label className="flex items-center gap-3 text-sm">
            <Checkbox id="checkbox-updates" />
            <span>Send weekly progress updates to stakeholders</span>
          </label>
          <label className="flex items-center gap-3 text-sm">
            <Checkbox id="checkbox-alerts" />
            <span>Enable milestone alerts for the client</span>
          </label>
        </div>
      </FieldCard>
    </Background>
  ),
}

export const TextareaInput: Story = {
  render: () => (
    <Background>
      <FieldCard>
        <div className="space-y-2">
          <Label htmlFor="textarea-input">Project notes</Label>
          <Textarea
            id="textarea-input"
            placeholder="Share context, scope, and critical deadlines."
            className="min-h-[140px]"
          />
        </div>
      </FieldCard>
    </Background>
  ),
}
