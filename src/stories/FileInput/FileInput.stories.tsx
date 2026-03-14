import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileInput, Label } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/File Input",
  component: FileInput,
  tags: ["autodocs"],
  args: {
    sizing: "md",
    color: "gray",
  },
} satisfies Meta<typeof FileInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <StoryPage>
      <StorySurface>
        <FileInput {...args} />
      </StorySurface>
    </StoryPage>
  ),
};

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="space-y-2">
          <Label htmlFor="design-upload">Upload design snapshot</Label>
          <FileInput id="design-upload" helperText="PNG, JPG, or PDF up to 10MB." />
        </div>
      </StorySurface>
    </StoryPage>
  ),
};

export const HelperStates: Story = {
  render: () => (
    <StoryPage>
      <div className="space-y-6">
        <StorySurface>
          <div className="space-y-2">
            <Label htmlFor="small-upload">Small upload</Label>
            <FileInput id="small-upload" sizing="sm" helperText="Use this for lightweight attachments." />
          </div>
        </StorySurface>
        <StorySurface>
          <div className="space-y-2">
            <Label htmlFor="large-upload">Large upload</Label>
            <FileInput id="large-upload" sizing="lg" helperText="Ideal for final exports and design snapshots." />
          </div>
        </StorySurface>
      </div>
    </StoryPage>
  ),
};
