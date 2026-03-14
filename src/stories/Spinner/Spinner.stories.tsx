import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  args: {
    color: "info",
    size: "md",
  },
} satisfies Meta<typeof Spinner>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <StoryPage>
      <StorySurface>
        <Spinner {...args} />
      </StorySurface>
    </StoryPage>
  ),
};

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="flex items-center gap-4">
          <Spinner aria-label="Default status example" />
          <Spinner aria-label="Large status example" color="purple" size="xl" />
          <span className="text-sm text-slate-600 dark:text-slate-300">Loading usage metrics</span>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};

export const Colors: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="flex items-center gap-4">
          <Spinner color="info" />
          <Spinner color="success" />
          <Spinner color="warning" />
          <Spinner color="purple" />
        </div>
      </StorySurface>
    </StoryPage>
  ),
};
