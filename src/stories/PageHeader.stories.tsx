import type { Meta, StoryObj } from "@storybook/react-vite"
import { Calendar, Filter, Plus } from "lucide-react"

import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const meta = {
  title: "Premium/PageHeader",
  component: PageHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-24 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -left-40 bottom-[-20%] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[150px]" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <div className="rounded-[32px] border border-border/60 bg-card/60 p-8 shadow-[0_30px_80px_-60px_rgba(5,8,20,0.9)] backdrop-blur md:p-10">
          <PageHeader
            title="Client pipeline"
            description="Track progress across onboarding, in-flight work, and delivery timelines."
            breadcrumbs={[
              { label: "Workspace", href: "#" },
              { label: "Client operations", href: "#" },
              { label: "Pipeline" },
            ]}
            meta={
              <>
                <span>Updated 12 minutes ago</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                <span>24 active clients</span>
              </>
            }
            actions={
              <>
                <Button variant="outline">
                  <Filter className="mr-2 size-4" />
                  Filters
                </Button>
                <Button>
                  <Plus className="mr-2 size-4" />
                  New client
                </Button>
              </>
            }
          />
        </div>

        <Separator className="bg-border/60" />

        <div className="rounded-[28px] border border-border/60 bg-card/60 p-6 shadow-[0_24px_70px_-50px_rgba(5,8,20,0.85)] backdrop-blur md:p-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                label: "Ready for review",
                value: "6 projects",
                detail: "2 overdue",
              },
              {
                label: "In progress",
                value: "14 projects",
                detail: "Avg. 5 days remaining",
              },
              {
                label: "Completed",
                value: "42 this quarter",
                detail: "Up 12%",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/60 bg-background/50 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-border/60 bg-card/60 p-6 shadow-[0_20px_50px_-40px_rgba(5,8,20,0.8)] backdrop-blur">
          <div>
            <p className="text-sm font-medium">March review window</p>
            <p className="text-xs text-muted-foreground">
              4 sessions scheduled across design and strategy.
            </p>
          </div>
          <Button variant="outline">
            <Calendar className="mr-2 size-4" />
            View calendar
          </Button>
        </div>
      </div>
    </div>
  ),
}
