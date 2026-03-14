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
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Typography styles</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">This folder contains the text-oriented stories like Blockquote, HR, and List.</p>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};

export const TextScale: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Heading one</h1>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Heading two</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">Body copy should remain legible, calm, and structurally consistent across stories.</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">Supporting text can be used for metadata and helper content.</p>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};
