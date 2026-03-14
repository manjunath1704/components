import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    color: "info",
  },
} satisfies Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <StoryPage>
      <StorySurface>
        <Alert {...args} icon={HiInformationCircle}>
          <span className="font-medium">Heads up:</span> This is a controllable Flowbite alert.
        </Alert>
      </StorySurface>
    </StoryPage>
  ),
};

export const Info: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Alert color="info" icon={HiInformationCircle}>
          <span className="font-medium">Heads up:</span> Flowbite styles are applied through the Tailwind v4 integration.
        </Alert>
      </StorySurface>
    </StoryPage>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <StoryPage>
      <div className="space-y-4">
        <StorySurface>
          <Alert color="info" icon={HiInformationCircle}>Informational alert for contextual guidance.</Alert>
        </StorySurface>
        <StorySurface>
          <Alert color="success" icon={HiInformationCircle}>Success alert for completed operations.</Alert>
        </StorySurface>
        <StorySurface>
          <Alert color="warning" icon={HiInformationCircle}>Warning alert for review-required changes.</Alert>
        </StorySurface>
        <StorySurface>
          <Alert color="failure" icon={HiInformationCircle}>Failure alert for blocked or broken actions.</Alert>
        </StorySurface>
      </div>
    </StoryPage>
  ),
};
