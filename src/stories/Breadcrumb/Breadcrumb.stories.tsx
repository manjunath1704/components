import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Breadcrumb" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Breadcrumb aria-label="breadcrumb">
          <BreadcrumbItem href="#">Libraries</BreadcrumbItem>
          <BreadcrumbItem href="#">Flowbite</BreadcrumbItem>
          <BreadcrumbItem>Storybook</BreadcrumbItem>
        </Breadcrumb>
      </StorySurface>
    </StoryPage>
  ),
};
