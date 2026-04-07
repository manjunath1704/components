import type { Meta, StoryObj } from "@storybook/react-vite"

import { UserProfileMenu } from "@/components/user-profile-menu"

const meta = {
  title: "Premium/UserProfileMenu",
  component: UserProfileMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserProfileMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative flex min-h-[280px] items-center justify-center bg-background p-10 text-foreground">
      <UserProfileMenu
        name="Avery Mason"
        email="avery@nimbus.studio"
        role="Design Lead"
        avatarFallback="AM"
      />
    </div>
  ),
}
