import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, Banner, BannerCollapseButton, Button } from "flowbite-react";
import { HiArrowRight, HiX } from "react-icons/hi";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Banner",
  component: Banner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Use the global Theme toolbar control to preview these banner layouts in light and dark mode.",
      },
    },
  },
} satisfies Meta<typeof Banner>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Announcement: Story = {
  render: () => (
    <StoryPage>
      <StorySurface className="p-0">
        <Banner>
          <div className="flex w-full flex-col items-start justify-between gap-4 rounded-3xl bg-slate-50 p-4 text-slate-800 dark:bg-slate-800 dark:text-slate-100 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <Badge color="info">Update</Badge>
              <p className="text-sm text-slate-700 dark:text-slate-200">The component stories are now organized one folder per component.</p>
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

export const Minimal: Story = {
  render: () => (
    <StoryPage>
      <StorySurface className="p-0">
        <Banner>
          <div className="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            A compact banner works well for inline product announcements and status messages.
          </div>
        </Banner>
      </StorySurface>
    </StoryPage>
  ),
};

export const MarketingCTA: Story = {
  render: () => (
    <StoryPage>
      <StorySurface className="p-0">
        <Banner>
          <div className="flex w-full flex-col items-start justify-between gap-5 rounded-3xl bg-slate-900 p-6 text-white dark:bg-sky-950 md:flex-row md:items-center">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">New release</p>
              <h3 className="text-2xl font-semibold">Explore richer Flowbite component documentation in Storybook.</h3>
              <p className="max-w-xl text-sm text-slate-300">Pair announcement copy with a direct CTA to move users into docs, onboarding, or product updates.</p>
            </div>
            <Button color="light">
              Open docs
              <HiArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Banner>
      </StorySurface>
    </StoryPage>
  ),
};
