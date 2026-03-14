import type { Meta, StoryObj } from "@storybook/react-vite";
import { Clipboard, TextInput } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Clipboard" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const CopyField: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="grid max-w-md grid-cols-8 gap-2">
          <TextInput className="col-span-6" value="npm install flowbite-react" readOnly />
          <Clipboard className="col-span-2" label="Copy" valueToCopy="npm install flowbite-react" />
        </div>
      </StorySurface>
    </StoryPage>
  ),
};
