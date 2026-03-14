import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Tooltip } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Tooltip" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface className="min-h-[18rem]">
        <div className="flex h-full items-center justify-center">
          <Tooltip content="This action exports the latest Storybook build report.">
            <Button color="light">Hover for details</Button>
          </Tooltip>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};

export const MultipleTriggers: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="flex flex-wrap gap-4">
          <Tooltip content="Edit item">
            <Button>Edit</Button>
          </Tooltip>
          <Tooltip content="Duplicate item">
            <Button color="light">Duplicate</Button>
          </Tooltip>
          <Tooltip content="Delete item">
            <Button color="failure">Delete</Button>
          </Tooltip>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};
