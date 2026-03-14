import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Spinner" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="flex items-center gap-4">
          <Spinner aria-label="Default status example" />
          <Spinner aria-label="Large status example" color="purple" size="xl" />
          <span className="text-sm text-slate-600">Loading usage metrics</span>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};
