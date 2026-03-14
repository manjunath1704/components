import type { Meta, StoryObj } from "@storybook/react-vite";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Typography" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-slate-900">Typography styles</h2>
          <p className="text-base text-slate-600">This folder contains the text-oriented stories like Blockquote, HR, and List.</p>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};
