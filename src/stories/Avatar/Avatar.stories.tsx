import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Avatar" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Profile: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="flex items-center gap-4">
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded size="lg" status="online" />
          <div>
            <p className="font-semibold text-slate-900">Bonnie Green</p>
            <p className="text-sm text-slate-500">Design systems lead</p>
          </div>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};
