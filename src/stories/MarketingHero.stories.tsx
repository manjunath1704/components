import type { Meta, StoryObj } from "@storybook/react-vite"

import { MarketingHero } from "@/components/marketing-hero"

const meta = {
  title: "Premium/MarketingHero",
  component: MarketingHero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    eyebrow: "Launch your next premium client experience",
    title: "Build elegant project portals without hiring a dev team.",
    description:
      "Nimbus gives agencies a modern operating system for delivery, approvals, and reporting. Keep every client aligned with branded portals, automated insights, and real-time updates.",
    badgeText: "New · 2026 Product Release",
    primaryCta: { label: "Start a workspace", href: "#" },
    secondaryCta: { label: "Watch preview", href: "#" },
    features: [
      {
        label: "Strategic playbooks",
        description: "Automated briefs, insights, and coordinated handoffs.",
      },
      {
        label: "Premium client portals",
        description: "Share plans, approvals, and monthly impact reports.",
      },
    ],
    metrics: [
      { label: "Avg. launch time", value: "9 days" },
      { label: "Active workspaces", value: "1,248" },
      { label: "Net retention", value: "128%" },
    ],
    trustedBy: ["Lumen", "Fable", "Keystone", "Northwind", "Arcadia"],
  },
  argTypes: {
    eyebrow: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    badgeText: { control: "text" },
    primaryCta: { control: "object" },
    secondaryCta: { control: "object" },
    features: { control: "object" },
    metrics: { control: "object" },
    trustedBy: { control: "object" },
  },
} satisfies Meta<typeof MarketingHero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <MarketingHero {...args} />
      </div>
    </div>
  ),
}
