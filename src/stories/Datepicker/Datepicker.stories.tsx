import type { Meta, StoryObj } from "@storybook/react-vite";
import { Datepicker } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Datepicker",
  component: Datepicker,
  tags: ["autodocs"],
  args: {
    inline: false,
    autoHide: false,
    weekStart: 0,
  },
} satisfies Meta<typeof Datepicker>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <StoryPage>
      <StorySurface>
        <Datepicker {...args} />
      </StorySurface>
    </StoryPage>
  ),
};

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Datepicker minDate={new Date("2026-03-01")} maxDate={new Date("2026-04-30")} />
      </StorySurface>
    </StoryPage>
  ),
};

export const WeekStartsMonday: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Datepicker weekStart={1} />
      </StorySurface>
    </StoryPage>
  ),
};
