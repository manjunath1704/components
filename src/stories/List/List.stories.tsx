import type { Meta, StoryObj } from "@storybook/react-vite";
import { List } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/List" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <List>
          <List.Item>At least one visual example per component</List.Item>
          <List.Item>Representative content instead of empty placeholders</List.Item>
          <List.Item>Stories grouped into separate component folders</List.Item>
        </List>
      </StorySurface>
    </StoryPage>
  ),
};

export const OrderedStyle: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-200">
          <li>Review component behavior.</li>
          <li>Validate visual styling.</li>
          <li>Approve Storybook coverage.</li>
        </ol>
      </StorySurface>
    </StoryPage>
  ),
};
