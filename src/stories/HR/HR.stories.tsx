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
          <p className="text-sm text-slate-600">Use separators to break long-form docs into readable sections.</p>
          <hr className="border-0 border-t border-slate-200" />
          <p className="text-sm text-slate-600">This story keeps the example intentionally simple.</p>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};
