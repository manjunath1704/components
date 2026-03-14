import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, ButtonGroup } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Button group",
  component: ButtonGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <ButtonGroup>
          <Button color="light">Preview</Button>
          <Button color="light">Share</Button>
          <Button color="light">Export</Button>
        </ButtonGroup>
      </StorySurface>
    </StoryPage>
  ),
};

export const MixedActions: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <ButtonGroup>
          <Button>Overview</Button>
          <Button color="light">Analytics</Button>
          <Button color="success">Publish</Button>
        </ButtonGroup>
      </StorySurface>
    </StoryPage>
  ),
};
