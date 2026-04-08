import type { Meta, StoryObj } from "@storybook/react-vite"

import { AccordionList } from "@/components/accordion-list"

const meta = {
  title: "Premium/AccordionList",
  component: AccordionList,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    type: "single",
    defaultValue: "faq-1",
    items: [
      {
        id: "faq-1",
        title: "Can I white-label the client portal?",
        content:
          "Yes. You can customize logos, colors, and domain settings for each workspace to match your agency brand.",
      },
      {
        id: "faq-2",
        title: "Do clients need a login?",
        content:
          "They can authenticate with email or use secure magic links. Access is fully managed by your team.",
      },
      {
        id: "faq-3",
        title: "How do approvals work?",
        content:
          "Each deliverable has a review workflow with comments, version history, and tracked approvals.",
      },
    ],
  },
  argTypes: {
    type: { control: "radio", options: ["single", "multiple"] },
    defaultValue: { control: "text" },
    items: { control: "object" },
  },
} satisfies Meta<typeof AccordionList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="mx-auto max-w-3xl">
        <AccordionList {...args} />
      </div>
    </div>
  ),
}
