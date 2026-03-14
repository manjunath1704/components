import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileInput, Label } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/File Input" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

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
