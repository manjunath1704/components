import type { Meta, StoryObj } from "@storybook/react-vite"

import { ActivityFeed } from "@/components/activity-feed"

const meta = {
  title: "Premium/ActivityFeed",
  component: ActivityFeed,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ActivityFeed>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -left-40 bottom-[-20%] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-4xl">
        <ActivityFeed
          items={[
            {
              id: "1",
              title: "Prototype approved",
              description: "Atlas Finance signed off on the homepage flow.",
              time: "Today · 10:24 AM",
              highlight: true,
            },
            {
              id: "2",
              title: "New comment",
              description: "Sofia left feedback on the onboarding checklist.",
              time: "Yesterday · 6:12 PM",
            },
            {
              id: "3",
              title: "User invited",
              description: "Liam added Emma Chen to the workspace.",
              time: "Mar 28 · 2:05 PM",
            },
            {
              id: "4",
              title: "Brief updated",
              description: "Scope updated for the delivery analytics track.",
              time: "Mar 26 · 9:40 AM",
            },
          ]}
        />
      </div>
    </div>
  ),
}
