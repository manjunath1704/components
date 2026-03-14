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
            <div className="w-64 p-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Area filters</p>
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
