import type { Meta, StoryObj } from "@storybook/react-vite";
import { Datepicker } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Datepicker" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Datepicker minDate={new Date("2026-03-01")} maxDate={new Date("2026-04-30")} />
      </StorySurface>
    </StoryPage>
  ),
};
