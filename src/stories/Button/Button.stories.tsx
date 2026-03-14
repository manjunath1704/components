import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "flowbite-react";
import { HiArrowRight, HiCloudDownload, HiHeart, HiPlus, HiTrash } from "react-icons/hi";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    color: "info",
    pill: false,
    outline: false,
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <StoryPage>
      <StorySurface>
        <Button {...args} />
      </StorySurface>
    </StoryPage>
  ),
};

export const Variants: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button color="light">Secondary</Button>
          <Button color="success">Approve</Button>
          <Button color="gray" outline>
            Outline
          </Button>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};

export const Sizes: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra large</Button>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};

export const PillAndOutline: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="flex flex-wrap gap-3">
          <Button pill>Rounded primary</Button>
          <Button color="light" pill>
            Rounded light
          </Button>
          <Button color="gray" outline pill>
            Outline pill
          </Button>
          <Button color="success" outline>
            Success outline
          </Button>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="flex flex-wrap gap-3">
          <Button>
            <HiPlus className="mr-2 h-4 w-4" />
            Create item
          </Button>
          <Button color="success">
            Download
            <HiCloudDownload className="ml-2 h-4 w-4" />
          </Button>
          <Button color="light">
            Favorite
            <HiHeart className="ml-2 h-4 w-4" />
          </Button>
          <Button color="gray" outline>
            Continue
            <HiArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="flex flex-wrap gap-3">
          <Button pill>
            <HiPlus className="h-5 w-5" />
          </Button>
          <Button color="success" pill>
            <HiCloudDownload className="h-5 w-5" />
          </Button>
          <Button color="failure" pill>
            <HiTrash className="h-5 w-5" />
          </Button>
          <Button color="light" outline pill>
            <HiHeart className="h-5 w-5" />
          </Button>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};
