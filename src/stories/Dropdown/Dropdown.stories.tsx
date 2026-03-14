import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from "flowbite-react";
import { HiCog, HiHome, HiMail } from "react-icons/hi";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  args: {
    dismissOnClick: false,
    inline: false,
    label: "Workspace",
  },
} satisfies Meta<typeof Dropdown>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <StoryPage>
      <StorySurface>
        <Dropdown {...args}>
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <DropdownItem>Archive</DropdownItem>
        </Dropdown>
      </StorySurface>
    </StoryPage>
  ),
};

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Dropdown dismissOnClick={false} label="Workspace">
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">bonnie@example.com</span>
          </DropdownHeader>
          <DropdownItem icon={HiHome}>Dashboard</DropdownItem>
          <DropdownItem icon={HiMail}>Inbox</DropdownItem>
          <DropdownItem icon={HiCog}>Settings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
      </StorySurface>
    </StoryPage>
  ),
};

export const InlineTrigger: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Dropdown inline label="Actions">
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <DropdownItem>Archive</DropdownItem>
        </Dropdown>
      </StorySurface>
    </StoryPage>
  ),
};
