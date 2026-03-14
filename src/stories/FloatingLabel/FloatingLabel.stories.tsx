import type { Meta, StoryObj } from "@storybook/react-vite";
import { FloatingLabel } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Floating Label",
  component: FloatingLabel,
  tags: ["autodocs"],
  args: {
    variant: "filled",
    label: "Repository name",
    sizing: "md",
    color: "default",
  },
} satisfies Meta<typeof FloatingLabel>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <StoryPage>
      <StorySurface>
        <FloatingLabel {...args} />
      </StorySurface>
    </StoryPage>
  ),
};

export const Variants: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="space-y-4">
          <FloatingLabel variant="filled" label="Repository name" />
          <FloatingLabel variant="outlined" label="Storybook title" />
          <FloatingLabel variant="standard" label="Package scope" />
        </div>
      </StorySurface>
    </StoryPage>
  ),
};

export const WithPresetValues: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="space-y-4">
          <FloatingLabel variant="filled" label="Project name" defaultValue="Flowbite Storybook" />
          <FloatingLabel variant="outlined" label="Owner" defaultValue="Design Systems" />
        </div>
      </StorySurface>
    </StoryPage>
  ),
};
