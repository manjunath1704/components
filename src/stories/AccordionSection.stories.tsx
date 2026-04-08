import type { Meta, StoryObj } from "@storybook/react-vite"

import { AccordionSection } from "@/components/accordion-section"

const meta = {
  title: "Premium/AccordionSection",
  component: AccordionSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    eyebrow: "Why teams choose Nimbus",
    title: "Everything your clients need, in one elevated workspace.",
    description:
      "A premium experience that keeps timelines, assets, and approvals moving. Replace the inbox chaos with structured collaboration.",
    badgeText: "Updated for 2026",
    primaryCta: { label: "Book a demo", href: "#" },
    secondaryCta: { label: "View pricing", href: "#" },
    items: [
      {
        id: "onboarding",
        title: "Client onboarding that feels personal",
        summary: "Collect brand inputs, timelines, and approvals in one flow.",
        body: "Replace the kickoff doc with a structured intake that syncs directly into your delivery plan. Everything stays visible and signed off.",
        highlights: [
          "Branded intake forms",
          "Auto-approved scope templates",
          "Shareable workspace timeline",
        ],
        badge: "Most used",
      },
      {
        id: "collaboration",
        title: "Shared updates without the inbox drag",
        summary: "Keep stakeholders aligned with real-time progress.",
        body: "Every task, asset, and decision lives inside the portal, so teams always see the same context. No more chasing email threads.",
        highlights: [
          "Threaded approvals",
          "Weekly recap snapshots",
          "Real-time status pings",
        ],
      },
      {
        id: "reporting",
        title: "Premium reporting built in",
        summary: "Deliver weekly impact reports that feel handcrafted.",
        body: "Use curated metrics and client-facing charts to show progress. Export, schedule, and brand each update in minutes.",
        highlights: [
          "Client-ready dashboards",
          "Auto-scheduled exports",
          "Multi-team visibility",
        ],
      },
    ],
    defaultValue: "onboarding",
  },
  argTypes: {
    eyebrow: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    badgeText: { control: "text" },
    primaryCta: { control: "object" },
    secondaryCta: { control: "object" },
    items: { control: "object" },
    defaultValue: { control: "text" },
  },
} satisfies Meta<typeof AccordionSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <AccordionSection {...args} />
      </div>
    </div>
  ),
}
