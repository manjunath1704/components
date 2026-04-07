import type { Meta, StoryObj } from "@storybook/react-vite"
import { Activity, CreditCard, Sparkles } from "lucide-react"

import { StatsCards } from "@/components/stats-cards"
import { Button } from "@/components/ui/button"

const meta = {
  title: "Premium/StatsCards",
  component: StatsCards,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StatsCards>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative min-h-screen bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -left-40 bottom-[-20%] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[150px]" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Performance snapshot
            </p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Client health metrics
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Real-time KPI signals across retention, growth, and delivery.
            </p>
          </div>
          <Button variant="outline">Export report</Button>
        </div>

        <StatsCards
          title="Quarterly momentum"
          subtitle="Balanced across acquisition, activation, and retention."
          items={[
            {
              id: "retention",
              label: "Retention",
              value: "94.6%",
              icon: Sparkles,
              change: {
                value: "+2.4%",
                direction: "up",
                label: "since last month",
              },
            },
            {
              id: "pipeline",
              label: "Pipeline velocity",
              value: "3.1 days",
              icon: Activity,
              change: {
                value: "-0.6 days",
                direction: "up",
                label: "faster delivery",
              },
            },
            {
              id: "revenue",
              label: "Annualized revenue",
              value: "$2.8M",
              icon: CreditCard,
              change: {
                value: "+11%",
                direction: "up",
                label: "quarter over quarter",
              },
            },
          ]}
        />
      </div>
    </div>
  ),
}
