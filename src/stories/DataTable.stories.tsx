import type { Meta, StoryObj } from "@storybook/react-vite"

import { DataTable } from "@/components/data-table"

const meta = {
  title: "Premium/DataTable",
  component: DataTable,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DataTable>

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
        <DataTable
          rows={[
            {
              id: "row-1",
              client: "Atlas Finance",
              project: "Executive portal",
              owner: "Avery Mason",
              updated: "Today, 2:14 PM",
              revenue: "$48K",
              status: "active",
            },
            {
              id: "row-2",
              client: "Nimbus Health",
              project: "Onboarding refresh",
              owner: "Liam Chen",
              updated: "Yesterday, 4:05 PM",
              revenue: "$32K",
              status: "paused",
            },
            {
              id: "row-3",
              client: "Crescent Labs",
              project: "Quarterly insights",
              owner: "Aria Patel",
              updated: "Mar 22, 2026",
              revenue: "$72K",
              status: "active",
            },
            {
              id: "row-4",
              client: "Northwind Group",
              project: "Delivery analytics",
              owner: "Miles Carter",
              updated: "Mar 19, 2026",
              revenue: "$28K",
              status: "draft",
            },
            {
              id: "row-5",
              client: "Helios Ventures",
              project: "Brand system",
              owner: "Sofia Reyes",
              updated: "Mar 18, 2026",
              revenue: "$54K",
              status: "active",
            },
            {
              id: "row-6",
              client: "Nova Research",
              project: "Product expansion",
              owner: "Noah Kim",
              updated: "Mar 11, 2026",
              revenue: "$39K",
              status: "paused",
            },
          ]}
        />
      </div>
    </div>
  ),
}
