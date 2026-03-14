import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Popover } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Popover" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Popover
          content={
            <div className="w-64 p-4 text-sm text-slate-600 dark:text-slate-300">
              <p className="font-semibold text-slate-900 dark:text-white">Area filters</p>
              <p className="mt-2">Use popovers for compact controls that stay close to their trigger.</p>
            </div>
          }
        >
          <Button color="light">Open popover</Button>
        </Popover>
      </StorySurface>
    </StoryPage>
  ),
};

export const RichContent: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Popover
          content={
            <div className="w-72 space-y-2 p-4 text-sm text-slate-600 dark:text-slate-300">
              <p className="font-semibold text-slate-900 dark:text-white">Keyboard shortcuts</p>
              <p>Use <span className="font-medium">Cmd + K</span> to open global search and jump between stories.</p>
            </div>
          }
        >
          <Button>Open help popover</Button>
        </Popover>
      </StorySurface>
    </StoryPage>
  ),
};
