import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Button" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button color="light">Secondary</Button>
          <Button color="success">Approve</Button>
          <Button color="gray" outline>
            Outline
          </Button>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};
