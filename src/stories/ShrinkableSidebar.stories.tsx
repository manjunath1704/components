import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  BarChart3,
  Folder,
  Home,
  LifeBuoy,
  Settings,
  Users,
} from "lucide-react"

import { ShrinkableSidebar } from "@/components/shrinkable-sidebar"

const meta = {
  title: "Premium/ShrinkableSidebar",
  component: ShrinkableSidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    brand: {
      name: "Nimbus",
      tagline: "Client Operations",
    },
    items: [
      { id: "home", label: "Overview", icon: Home },
      { id: "projects", label: "Projects", icon: Folder, badge: "12" },
      { id: "insights", label: "Insights", icon: BarChart3 },
      { id: "team", label: "Team", icon: Users },
      { id: "support", label: "Support", icon: LifeBuoy },
      { id: "settings", label: "Settings", icon: Settings },
    ],
    activeItemId: "projects",
  },
  argTypes: {
    brand: { control: "object" },
    items: { control: "object" },
    activeItemId: { control: "text" },
    defaultCollapsed: { control: "boolean" },
  },
} satisfies Meta<typeof ShrinkableSidebar>

export default meta
type Story = StoryObj<typeof meta>

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-[420px] bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -right-32 -top-20 h-[20rem] w-[20rem] rounded-full bg-primary/25 blur-[120px]" />
      <div className="absolute -left-40 bottom-[-20%] h-[24rem] w-[24rem] rounded-full bg-accent/20 blur-[140px]" />
    </div>
    {children}
  </div>
)

export const Default: Story = {
  render: (args) => (
    <Wrapper>
      <ShrinkableSidebar {...args} />
    </Wrapper>
  ),
}

export const Collapsed: Story = {
  args: {
    defaultCollapsed: true,
  },
  render: (args) => (
    <Wrapper>
      <ShrinkableSidebar {...args} />
    </Wrapper>
  ),
}
