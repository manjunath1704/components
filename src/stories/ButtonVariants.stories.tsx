import type { Meta, StoryObj } from "@storybook/react-vite"
import { ArrowRight, Loader2, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"

const meta = {
  title: "Premium/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Button",
  },
  argTypes: {
    children: { control: "text" },
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "outline",
        "ghost",
        "destructive",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "default", "lg", "icon", "icon-xs", "icon-sm"],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: "default",
    children: (
      <>
        Primary action <ArrowRight className="ml-1 size-4" />
      </>
    ),
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
}

export const Link: Story = {
  args: {
    variant: "link",
    children: "Inline link",
  },
}

export const Icon: Story = {
  args: {
    size: "icon",
    children: <Plus className="size-4" />,
  },
}

export const Loading: Story = {
  args: {
    children: (
      <>
        <Loader2 className="mr-2 size-4 animate-spin" />
        Processing
      </>
    ),
    disabled: true,
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">XS</Button>
      <Button size="sm">SM</Button>
      <Button>Default</Button>
      <Button size="lg">LG</Button>
      <Button size="icon" aria-label="Icon button">
        <Plus className="size-4" />
      </Button>
    </div>
  ),
}
