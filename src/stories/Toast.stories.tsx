import type { Meta, StoryObj } from "@storybook/react-vite"
import { Bell, Check, Sparkles, X } from "lucide-react"

import { NotificationsProvider, notify } from "@/components/notifications"
import { Button } from "@/components/ui/button"

const meta = {
  title: "Premium/Toast",
  component: NotificationsProvider,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NotificationsProvider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -left-40 bottom-[-20%] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[150px]" />
      </div>

      <NotificationsProvider />

      <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[28px] border border-border/60 bg-card/60 p-6 shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Toast notifications
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">
            Moment-to-moment feedback
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Trigger success, error, and info notifications for quick user
            feedback.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() =>
              notify.success("Client updated", {
                description: "Nimbus Health status set to active.",
              })
            }
          >
            <Check className="mr-2 size-4" />
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              notify.info("New activity", {
                description: "Avery left a note on Atlas Analytics.",
              })
            }
          >
            <Bell className="mr-2 size-4" />
            Info
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              notify.loading("Syncing workspace", {
                description: "Fetching the latest activity.",
              })
            }
          >
            <Sparkles className="mr-2 size-4" />
            Loading
          </Button>
          <Button
            variant="destructive"
            onClick={() =>
              notify.error("Sync failed", {
                description: "Check your connection and retry.",
              })
            }
          >
            <X className="mr-2 size-4" />
            Error
          </Button>
        </div>
      </div>
    </div>
  ),
}
