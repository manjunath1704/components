import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListGroup, ListGroupItem } from "flowbite-react";
import { HiClipboardCopy, HiCog, HiMail, HiUserCircle } from "react-icons/hi";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/List group" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <ListGroup className="max-w-sm">
          <ListGroupItem icon={HiUserCircle} active>
            Profile
          </ListGroupItem>
          <ListGroupItem icon={HiCog}>Settings</ListGroupItem>
          <ListGroupItem icon={HiMail}>Messages</ListGroupItem>
          <ListGroupItem disabled icon={HiClipboardCopy}>
            Exports pending
          </ListGroupItem>
        </ListGroup>
      </StorySurface>
    </StoryPage>
  ),
};
