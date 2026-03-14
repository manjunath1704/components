import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "flowbite-react";
import { InlineLabelValue, StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Progress bar" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="space-y-4">
          <InlineLabelValue label="Design tokens migration" value="72%" />
          <Progress progress={72} labelProgress size="lg" />
        </div>
      </StorySurface>
    </StoryPage>
  ),
};
