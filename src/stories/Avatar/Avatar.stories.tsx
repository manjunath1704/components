import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    rounded: true,
    size: "lg",
    status: "online",
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  },
} satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <StoryPage>
      <StorySurface>
        <Avatar {...args} />
      </StorySurface>
    </StoryPage>
  ),
};

export const Profile: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="flex items-center gap-4">
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded size="lg" status="online" />
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">Bonnie Green</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Design systems lead</p>
          </div>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};

export const Sizes: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="flex items-center gap-4">
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded size="xs" />
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded size="sm" />
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded size="lg" />
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded size="xl" />
        </div>
      </StorySurface>
    </StoryPage>
  ),
};

export const StatusVariants: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="flex items-center gap-6">
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded status="online" />
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded status="busy" />
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded status="away" />
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded status="offline" />
        </div>
      </StorySurface>
    </StoryPage>
  ),
};
