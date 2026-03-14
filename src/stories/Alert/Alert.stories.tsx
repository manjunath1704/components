import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Alert" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Alert color="info" icon={HiInformationCircle}>
          <span className="font-medium">Heads up:</span> Flowbite styles are applied through the Tailwind v4 integration.
        </Alert>
      </StorySurface>
    </StoryPage>
  ),
};
