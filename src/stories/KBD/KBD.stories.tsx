import type { Meta, StoryObj } from "@storybook/react-vite";
import { Kbd } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/KBD",
  component: Kbd,
  tags: ["autodocs"],
  args: {
    children: "Cmd",
  },
} satisfies Meta<typeof Kbd>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <StoryPage>
      <StorySurface>
        <Kbd {...args} />
      </StorySurface>
    </StoryPage>
  ),
};

export const Shortcut: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <p className="flex flex-wrap items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
          Press <Kbd>Cmd</Kbd> + <Kbd>Shift</Kbd> + <Kbd>P</Kbd> to open the command palette.
        </p>
      </StorySurface>
    </StoryPage>
  ),
};

export const ComplexShortcut: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <p className="flex flex-wrap items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
          Save and publish with <Kbd>Shift</Kbd> + <Kbd>Alt</Kbd> + <Kbd>P</Kbd>.
        </p>
      </StorySurface>
    </StoryPage>
  ),
};
