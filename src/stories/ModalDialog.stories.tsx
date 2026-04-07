import type { Meta, StoryObj } from "@storybook/react-vite"

import { ModalDialog } from "@/components/modal-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Premium/ModalDialog",
  component: ModalDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ModalDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ModalDialog
      defaultOpen
      title="Share access"
      description="Invite a collaborator and set their role."
      triggerLabel="Open dialog"
      primaryAction={{ label: "Send invite" }}
      secondaryAction={{ label: "Cancel" }}
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="invite-email">Email address</Label>
          <Input id="invite-email" placeholder="alex@studio.com" />
        </div>
        <div className="rounded-2xl border border-border/60 bg-muted/40 p-3 text-xs text-muted-foreground">
          Invites are valid for 7 days. Recipients can request extended access
          after joining.
        </div>
      </div>
    </ModalDialog>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <ModalDialog
        title="Small modal"
        description="Compact modal for quick confirmations."
        size="sm"
        triggerLabel="Open small"
        primaryAction={{ label: "Confirm" }}
      >
        <p className="text-sm text-muted-foreground">
          Keep concise actions in a small footprint.
        </p>
      </ModalDialog>
      <ModalDialog
        title="Medium modal"
        description="Balanced spacing for forms and summaries."
        size="md"
        triggerLabel="Open medium"
        primaryAction={{ label: "Continue" }}
        secondaryAction={{ label: "Cancel" }}
      >
        <div className="space-y-2">
          <Label htmlFor="size-email">Email</Label>
          <Input id="size-email" placeholder="team@studio.com" />
        </div>
      </ModalDialog>
      <ModalDialog
        title="Large modal"
        description="Room for longer content or multi-field forms."
        size="lg"
        triggerLabel="Open large"
        primaryAction={{ label: "Save" }}
        secondaryAction={{ label: "Dismiss" }}
      >
        <div className="space-y-2">
          <Label htmlFor="size-name">Project name</Label>
          <Input id="size-name" placeholder="Helios Expansion" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="size-owner">Owner</Label>
          <Input id="size-owner" placeholder="Avery Mason" />
        </div>
      </ModalDialog>
    </div>
  ),
}

export const WithCustomTrigger: Story = {
  render: () => (
    <ModalDialog
      title="Archive project"
      description="Archived projects remain accessible for 30 days."
      trigger={
        <Button variant="outline" size="lg">
          Open archive dialog
        </Button>
      }
      footer={
        <>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Archive</Button>
        </>
      }
    >
      <p className="text-sm text-muted-foreground">
        Are you sure you want to archive the “Helios Redesign” workspace? Team
        members will lose edit access immediately.
      </p>
    </ModalDialog>
  ),
}
