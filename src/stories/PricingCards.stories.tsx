import type { Meta, StoryObj } from "@storybook/react-vite"

import { PricingCards } from "@/components/pricing-cards"

const meta = {
  title: "Premium/PricingCards",
  component: PricingCards,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PricingCards>

export default meta
type Story = StoryObj<typeof meta>

const tiers = [
  {
    id: "launch",
    name: "Launch",
    description: "Best for early-stage teams.",
    price: "$1,250",
    cadence: "per month",
    highlights: [
      "2 client workspaces",
      "Weekly analytics digest",
      "Priority onboarding",
    ],
    ctaLabel: "Start launch",
  },
  {
    id: "growth",
    name: "Growth",
    description: "Scale with advanced automation.",
    price: "$3,400",
    cadence: "per month",
    highlights: [
      "10 client workspaces",
      "Automated approvals",
      "Custom reporting",
      "Dedicated success manager",
    ],
    emphasized: true,
    ctaLabel: "Choose growth",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Tailored for global programs.",
    price: "Custom",
    cadence: "annual",
    highlights: [
      "Unlimited workspaces",
      "Security reviews + SSO",
      "Dedicated support pod",
      "Custom SLAs",
    ],
    ctaLabel: "Contact sales",
  },
]

export const Default: Story = {
  render: () => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -left-40 bottom-[-20%] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <PricingCards
          tiers={tiers}
        />
      </div>
    </div>
  ),
}

export const LaunchCard: Story = {
  render: () => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-md">
        <PricingCards title="Plan" subtitle="Launch tier overview" tiers={[tiers[0]]} />
      </div>
    </div>
  ),
}

export const GrowthCard: Story = {
  render: () => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -left-40 bottom-[-20%] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[150px]" />
      </div>
      <div className="mx-auto max-w-md">
        <PricingCards title="Plan" subtitle="Growth tier overview" tiers={[tiers[1]]} />
      </div>
    </div>
  ),
}

export const EnterpriseCard: Story = {
  render: () => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-md">
        <PricingCards
          title="Plan"
          subtitle="Enterprise tier overview"
          tiers={[tiers[2]]}
        />
      </div>
    </div>
  ),
}
