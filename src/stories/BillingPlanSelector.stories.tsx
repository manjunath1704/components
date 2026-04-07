import type { Meta, StoryObj } from "@storybook/react-vite"

import { BillingPlanSelector } from "@/components/billing-plan-selector"

const meta = {
  title: "Premium/BillingPlanSelector",
  component: BillingPlanSelector,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BillingPlanSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative min-h-screen bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -left-40 bottom-[-20%] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <BillingPlanSelector
          plans={[
            {
              id: "launch",
              name: "Launch",
              description: "For small teams with rapid delivery cycles.",
              monthlyPrice: "$1,250",
              annualPrice: "$12,600",
              highlights: [
                "2 workspaces",
                "Email approvals",
                "Basic analytics",
              ],
            },
            {
              id: "growth",
              name: "Growth",
              description: "Automation and premium support.",
              monthlyPrice: "$3,400",
              annualPrice: "$34,680",
              highlights: [
                "10 workspaces",
                "Automated approvals",
                "Dedicated success manager",
                "Advanced reporting",
              ],
            },
            {
              id: "enterprise",
              name: "Enterprise",
              description: "Custom programs with SLA coverage.",
              monthlyPrice: "Custom",
              annualPrice: "Custom",
              highlights: [
                "Unlimited workspaces",
                "SSO + audit logs",
                "Priority support pod",
                "Custom integrations",
              ],
            },
          ]}
        />
      </div>
    </div>
  ),
}
