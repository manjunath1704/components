import type { Meta, StoryObj } from "@storybook/react-vite";
import { FloatingLabel } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Floating Label" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

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
