import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  BarChart3,
  FolderKanban,
  LayoutGrid,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react"

import { AppShell } from "@/components/app-shell"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const meta = {
  title: "Premium/AppShell",
  component: AppShell,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppShell>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AppShell
      brand={{ name: "Nimbus", tagline: "Premium client hub" }}
      user={{ name: "Avery Mason", role: "Design Lead", initials: "AM" }}
      activeItemId="overview"
      fullHeight={false}
      navItems={[
        { id: "overview", label: "Overview", icon: LayoutGrid },
        { id: "projects", label: "Projects", icon: FolderKanban, badge: "12" },
        { id: "team", label: "Team", icon: Users },
        { id: "messages", label: "Messages", icon: MessageSquare, badge: "3" },
        { id: "analytics", label: "Analytics", icon: BarChart3 },
        { id: "settings", label: "Settings", icon: Settings },
      ]}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Executive dashboard
            </p>
            <h1 className="text-2xl font-semibold">Welcome back, Avery</h1>
            <p className="text-sm text-muted-foreground">
              You have 4 projects in motion and 2 awaiting review.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Export</Button>
            <Button>Invite client</Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Client satisfaction",
              value: "9.2",
              detail: "Up 4% from last month",
            },
            {
              title: "Active retainers",
              value: "18",
              detail: "3 renewals pending",
            },
            {
              title: "Avg. delivery",
              value: "2.6 days",
              detail: "Down 12% this quarter",
            },
          ].map((stat) => (
            <Card
              key={stat.title}
              className="border-border/60 bg-card/60 shadow-[0_12px_30px_-24px_rgba(5,8,20,0.8)]"
            >
              <CardHeader>
                <CardDescription>{stat.title}</CardDescription>
                <CardTitle className="text-2xl">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground">
                {stat.detail}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border/60 bg-card/60 shadow-[0_16px_40px_-30px_rgba(5,8,20,0.8)]">
          <CardHeader>
            <CardTitle>Priority reviews</CardTitle>
            <CardDescription>Scheduled for this week</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {[
              {
                name: "Helios Redesign",
                status: "Thursday, 3:30 PM",
                owner: "Product Marketing",
              },
              {
                name: "Atlas Analytics",
                status: "Friday, 11:00 AM",
                owner: "VP Growth",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-border/60 bg-background/50 px-4 py-3"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.owner}</p>
                </div>
                <span className="text-xs font-semibold text-primary">
                  {item.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  ),
}
