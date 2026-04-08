import type { Meta, StoryObj } from "@storybook/react-vite"

import { AvatarTeamList } from "@/components/avatar-team-list"

const meta = {
  title: "Premium/AvatarTeamList",
  component: AvatarTeamList,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    title: "Team",
    subtitle: "Key contacts and collaborators.",
    inviteLabel: "Invite",
  },
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    inviteLabel: { control: "text" },
  },
} satisfies Meta<typeof AvatarTeamList>

export default meta
type Story = StoryObj<typeof meta>

const members = [
  {
    id: "1",
    name: "Avery Mason",
    role: "Design Lead",
    email: "avery@nimbus.studio",
    phone: "+1 (415) 555-0182",
    status: "active" as const,
    initials: "AM",
  },
  {
    id: "2",
    name: "Sofia Reyes",
    role: "Client Success",
    email: "sofia@nimbus.studio",
    phone: "+1 (415) 555-0145",
    status: "away" as const,
    initials: "SR",
  },
  {
    id: "3",
    name: "Miles Carter",
    role: "Strategy Director",
    email: "miles@nimbus.studio",
    status: "active" as const,
    initials: "MC",
  },
]

export const Default: Story = {
  render: (args) => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -left-40 bottom-[-20%] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-4xl">
        <AvatarTeamList members={members} {...args} />
      </div>
    </div>
  ),
}

export const SingleMember: Story = {
  render: () => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-3xl">
        <AvatarTeamList members={[{ ...members[0], status: undefined }]} />
      </div>
    </div>
  ),
}

export const ActiveStatus: Story = {
  render: () => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-3xl">
        <AvatarTeamList members={[{ ...members[0], status: "active" }]} />
      </div>
    </div>
  ),
}

export const AwayStatus: Story = {
  render: () => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-3xl">
        <AvatarTeamList members={[{ ...members[1], status: "away" }]} />
      </div>
    </div>
  ),
}

export const NoPhone: Story = {
  render: () => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-3xl">
        <AvatarTeamList members={[members[2]]} />
      </div>
    </div>
  ),
}

export const NoContact: Story = {
  render: () => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-3xl">
        <AvatarTeamList
          members={[
            {
              id: "4",
              name: "Jules Nguyen",
              role: "Research Analyst",
              initials: "JN",
              status: "away",
            },
          ]}
        />
      </div>
    </div>
  ),
}

export const NoPhoneEmail: Story = {
  render: () => (
    <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-3xl">
        <AvatarTeamList
          members={[
            { ...members[0], email: undefined, phone: undefined },
            { ...members[1], email: undefined, phone: undefined },
          ]}
        />
      </div>
    </div>
  ),
}

export const Playground: Story = {
  args: {
    status: "active",
  },
  argTypes: {
    status: {
      control: "radio",
      options: ["active", "away", "none"],
    },
  },
  render: (args) => {
    const { status: statusArg, ...rest } = args as {
      status?: "active" | "away" | "none"
      title?: string
      subtitle?: string
      inviteLabel?: string
    }
    const status =
      statusArg === "none" ? undefined : (statusArg as "active" | "away")

    return (
      <div className="relative bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-3xl">
          <AvatarTeamList members={[{ ...members[0], status }]} {...rest} />
        </div>
      </div>
    )
  },
}
