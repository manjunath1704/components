import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Pagination } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Pagination" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

function PaginationExample() {
  const [page, setPage] = useState(4);
  return <Pagination currentPage={page} totalPages={12} onPageChange={setPage} showIcons />;
}

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <PaginationExample />
      </StorySurface>
    </StoryPage>
  ),
};

export const LargeDataset: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Pagination currentPage={8} totalPages={32} onPageChange={() => undefined} showIcons />
      </StorySurface>
    </StoryPage>
  ),
};
