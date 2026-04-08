import type { Meta, StoryObj } from "@storybook/react-vite"

import { BarChartCard, Charts, DonutChartCard, LineChartCard, PieChartCard } from "@/components/charts"

const meta = {
  title: "Premium/Charts",
  component: Charts,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Charts>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -left-40 bottom-[-20%] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <Charts />
      </div>
    </div>
  ),
}

export const LineChartOnly: Story = {
  render: () => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl">
        <LineChartCard />
      </div>
    </div>
  ),
}

export const BarChartOnly: Story = {
  render: () => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl">
        <BarChartCard />
      </div>
    </div>
  ),
}

export const PieChartOnly: Story = {
  render: () => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -left-40 bottom-[-20%] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-4xl">
        <PieChartCard />
      </div>
    </div>
  ),
}

export const DonutChartOnly: Story = {
  render: () => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -left-40 bottom-[-20%] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-4xl">
        <DonutChartCard />
      </div>
    </div>
  ),
}
