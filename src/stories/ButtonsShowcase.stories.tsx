import type { Meta, StoryObj } from "@storybook/react-vite"

import { ButtonsShowcase } from "@/components/buttons-showcase"

const meta = {
  title: "Premium/Buttons",
  component: ButtonsShowcase,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    title: "Buttons",
    subtitle: "Premium button variants for core UI actions.",
    labels: {
      primary: "Primary action",
      secondary: "Secondary",
      outline: "Outline",
      ghost: "Ghost",
      destructive: "Delete",
      link: "Inline link",
      icon: "Icon action",
      loading: "Processing",
      sizeTitle: "Sizes",
      variantTitle: "Variants",
    },
  },
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    labels: { control: "object" },
  },
} satisfies Meta<typeof ButtonsShowcase>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="mx-auto max-w-4xl">
        <ButtonsShowcase {...args} />
      </div>
    </div>
  ),
}
