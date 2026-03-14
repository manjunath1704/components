import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast, ToastToggle } from "flowbite-react";
import { HiFire, HiSparkles } from "react-icons/hi";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Toast" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="space-y-4">
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
              <HiFire className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">Storybook build completed successfully.</div>
            <ToastToggle />
          </Toast>
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
              <HiSparkles className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">Visual review comments synced to the release board.</div>
          </Toast>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};

export const Stacked: Story = {
  render: () => (
    <StoryPage>
      <div className="space-y-4">
        <StorySurface>
          <Toast>
            <div className="ml-1 text-sm font-normal">Your changes have been saved.</div>
            <ToastToggle />
          </Toast>
        </StorySurface>
        <StorySurface>
          <Toast>
            <div className="ml-1 text-sm font-normal">A new Storybook build is ready to review.</div>
            <ToastToggle />
          </Toast>
        </StorySurface>
      </div>
    </StoryPage>
  ),
};
