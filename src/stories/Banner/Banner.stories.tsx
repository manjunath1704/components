import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, Banner, BannerCollapseButton, Button } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Banner" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Announcement: Story = {
  render: () => (
    <StoryPage>
      <StorySurface className="p-0">
        <Banner>
          <div className="flex w-full flex-col items-start justify-between gap-4 rounded-3xl bg-slate-50 p-4 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <Badge color="info">Update</Badge>
              <p className="text-sm text-slate-700">The component stories are now organized one folder per component.</p>
            </div>
            <div className="flex items-center gap-3">
              <Button size="sm">Review</Button>
              <BannerCollapseButton color="gray" className="border-0 bg-transparent">
                <HiX className="h-4 w-4" />
              </BannerCollapseButton>
            </div>
          </div>
        </Banner>
      </StorySurface>
    </StoryPage>
  ),
};
