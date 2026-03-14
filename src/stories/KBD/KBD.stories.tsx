import type { Meta, StoryObj } from "@storybook/react-vite";
import { Kbd } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/KBD" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Shortcut: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <p className="flex flex-wrap items-center gap-2 text-sm text-slate-700">
          Press <Kbd>Cmd</Kbd> + <Kbd>Shift</Kbd> + <Kbd>P</Kbd> to open the command palette.
        </p>
      </StorySurface>
    </StoryPage>
  ),
};
