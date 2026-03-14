import type { Meta, StoryObj } from "@storybook/react-vite";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/HR" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="space-y-4">
          <p className="text-sm text-slate-600 dark:text-slate-300">Use separators to break long-form docs into readable sections.</p>
          <hr className="border-0 border-t border-slate-200 dark:border-slate-700" />
          <p className="text-sm text-slate-600 dark:text-slate-300">This story keeps the example intentionally simple.</p>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};

export const LabelledSection: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Release notes</span>
          <hr className="border-0 border-t border-slate-300 dark:border-slate-600" />
          <p className="text-sm text-slate-600 dark:text-slate-300">Use stronger separators when splitting major content sections.</p>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};
