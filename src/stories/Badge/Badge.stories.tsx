import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "flowbite-react";
import { HiSparkles } from "react-icons/hi";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    color: "info",
    size: "sm",
    children: "Badge",
  },
} satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <StoryPage>
      <StorySurface>
        <Badge {...args} />
      </StorySurface>
    </StoryPage>
  ),
};

export const Variants: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="flex flex-wrap gap-3">
          <Badge color="info">Storybook</Badge>
          <Badge color="success">Ready</Badge>
          <Badge color="warning">Review</Badge>
          <Badge color="purple" icon={HiSparkles}>
            New
          </Badge>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};

export const Pills: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="flex flex-wrap gap-3">
          <Badge color="info" size="sm">
            Docs
          </Badge>
          <Badge color="success" size="sm">
            Released
          </Badge>
          <Badge color="purple" size="sm">
            Preview
          </Badge>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};
