import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;
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

export const LongPath: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Breadcrumb aria-label="breadcrumb">
          <BreadcrumbItem href="#">Dashboard</BreadcrumbItem>
          <BreadcrumbItem href="#">Design System</BreadcrumbItem>
          <BreadcrumbItem href="#">Components</BreadcrumbItem>
          <BreadcrumbItem href="#">Navigation</BreadcrumbItem>
          <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </StorySurface>
    </StoryPage>
  ),
};
