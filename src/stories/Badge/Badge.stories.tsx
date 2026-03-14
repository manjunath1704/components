import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "flowbite-react";
import { HiSparkles } from "react-icons/hi";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Badge" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

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
