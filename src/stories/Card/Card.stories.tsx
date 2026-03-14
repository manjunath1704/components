import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "flowbite-react";
import { PlaceholderImage, StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Card" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Card className="max-w-sm" href="#" renderImage={() => <PlaceholderImage className="h-48 w-full" label="Card Preview" />}>
          <h5 className="text-2xl font-bold tracking-tight text-slate-900">Reusable card layouts</h5>
          <p className="font-normal text-slate-600">Cards work well for previews, summaries, and entry points.</p>
        </Card>
      </StorySurface>
    </StoryPage>
  ),
};
