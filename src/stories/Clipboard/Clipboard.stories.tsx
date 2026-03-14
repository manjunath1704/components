import type { Meta, StoryObj } from "@storybook/react-vite";
import { Clipboard, TextInput } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Clipboard",
  component: Clipboard,
  tags: ["autodocs"],
  args: {
    label: "Copy",
    valueToCopy: "npm install flowbite-react",
  },
} satisfies Meta<typeof Clipboard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <StoryPage>
      <StorySurface>
        <Clipboard {...args} />
      </StorySurface>
    </StoryPage>
  ),
};

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

export const FullWidthField: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="grid grid-cols-10 gap-2">
          <TextInput className="col-span-8" value="https://storybook.example.com/review/flowbite" readOnly />
          <Clipboard className="col-span-2" label="Copy URL" valueToCopy="https://storybook.example.com/review/flowbite" />
        </div>
      </StorySurface>
    </StoryPage>
  ),
};
