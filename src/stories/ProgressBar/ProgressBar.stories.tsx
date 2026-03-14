import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "flowbite-react";
import { InlineLabelValue, StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Progress bar",
  component: Progress,
  tags: ["autodocs"],
  args: {
    progress: 72,
    color: "info",
    size: "lg",
  },
} satisfies Meta<typeof Progress>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <StoryPage>
      <StorySurface>
        <Progress {...args} />
      </StorySurface>
    </StoryPage>
  ),
};

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="space-y-4">
          <InlineLabelValue label="Design tokens migration" value="72%" />
          <Progress progress={72} labelProgress size="lg" />
        </div>
      </StorySurface>
    </StoryPage>
  ),
};

export const SizesAndColors: Story = {
  render: () => (
    <StoryPage>
      <div className="space-y-6">
        <StorySurface>
          <Progress progress={35} color="info" size="sm" />
        </StorySurface>
        <StorySurface>
          <Progress progress={62} color="warning" size="md" />
        </StorySurface>
        <StorySurface>
          <Progress progress={88} color="success" size="lg" />
        </StorySurface>
      </div>
    </StoryPage>
  ),
};
