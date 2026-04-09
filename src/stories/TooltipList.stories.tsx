import type { Meta, StoryObj } from "@storybook/react-vite"

import { TooltipList } from "@/components/tooltip-list"

const meta = {
  title: "Premium/Tooltip",
  component: TooltipList,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    delayDuration: 120,
    items: [
      {
        id: "analytics",
        label: "Analytics",
        content: "See weekly KPIs and channel performance.",
        side: "top",
      },
      {
        id: "reports",
        label: "Reports",
        content: "Download client-ready snapshots instantly.",
        side: "bottom",
      },
      {
        id: "settings",
        label: "Settings",
        content: "Manage branding, access, and workspace rules.",
        side: "right",
      },
    ],
  },
  argTypes: {
    delayDuration: { control: "number" },
    items: { control: "object" },
  },
} satisfies Meta<typeof TooltipList>

export default meta
type Story = StoryObj<typeof meta>

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -right-24 top-10 h-[18rem] w-[18rem] rounded-full bg-primary/25 blur-[120px]" />
      <div className="absolute -left-32 bottom-[-20%] h-[22rem] w-[22rem] rounded-full bg-accent/20 blur-[140px]" />
    </div>
    <div className="mx-auto max-w-4xl">{children}</div>
  </div>
)

export const Default: Story = {
  render: (args) => (
    <Wrapper>
      <TooltipList {...args} />
    </Wrapper>
  ),
}

export const Top: Story = {
  args: {
    items: [
      {
        id: "top",
        label: "Top tooltip",
        content: "This tooltip appears on top.",
        side: "top",
      },
    ],
  },
  render: (args) => (
    <Wrapper>
      <TooltipList {...args} />
    </Wrapper>
  ),
}

export const Right: Story = {
  args: {
    items: [
      {
        id: "right",
        label: "Right tooltip",
        content: "This tooltip appears on the right.",
        side: "right",
      },
    ],
  },
  render: (args) => (
    <Wrapper>
      <TooltipList {...args} />
    </Wrapper>
  ),
}

export const Bottom: Story = {
  args: {
    items: [
      {
        id: "bottom",
        label: "Bottom tooltip",
        content: "This tooltip appears at the bottom.",
        side: "bottom",
      },
    ],
  },
  render: (args) => (
    <Wrapper>
      <TooltipList {...args} />
    </Wrapper>
  ),
}

export const Left: Story = {
  args: {
    items: [
      {
        id: "left",
        label: "Left tooltip",
        content: "This tooltip appears on the left.",
        side: "left",
      },
    ],
  },
  render: (args) => (
    <Wrapper>
      <TooltipList {...args} />
    </Wrapper>
  ),
}
