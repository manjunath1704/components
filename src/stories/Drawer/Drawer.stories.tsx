import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button, Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import { HiCollection } from "react-icons/hi";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Drawer" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

function DrawerExample() {
  const [open, setOpen] = useState(true);

  return (
    <div className="relative min-h-[28rem] overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800">
      <div className="flex h-full items-center justify-center p-6">
        <Button onClick={() => setOpen(true)}>Show drawer</Button>
      </div>
      <Drawer open={open} onClose={() => setOpen(false)} position="right">
        <DrawerHeader title="Drawer panel" titleIcon={HiCollection} />
        <DrawerItems>
          <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">Use drawers for filters, secondary navigation, and side actions.</p>
          <div className="grid gap-3">
            <Button color="light">Invite teammate</Button>
            <Button>Publish changes</Button>
          </div>
        </DrawerItems>
      </Drawer>
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface className="min-h-[30rem]">
        <DrawerExample />
      </StorySurface>
    </StoryPage>
  ),
};
