import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "flowbite-react";
import { PlaceholderImage, StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  args: {
    slideInterval: 4000,
  },
} satisfies Meta<typeof Carousel>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <StoryPage>
      <StorySurface className="min-h-[28rem]">
        <div className="h-72">
          <Carousel {...args}>
            <PlaceholderImage className="h-full w-full" label="Slide 1" />
            <PlaceholderImage className="h-full w-full" label="Slide 2" />
            <PlaceholderImage className="h-full w-full" label="Slide 3" />
          </Carousel>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface className="min-h-[28rem]">
        <div className="h-72">
          <Carousel slideInterval={4000}>
            <PlaceholderImage className="h-full w-full" label="Release Notes" />
            <PlaceholderImage className="h-full w-full" label="Admin Dashboard" />
            <PlaceholderImage className="h-full w-full" label="Checkout Flow" />
          </Carousel>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};

export const TallSlides: Story = {
  render: () => (
    <StoryPage>
      <StorySurface className="min-h-[34rem]">
        <div className="h-96">
          <Carousel slideInterval={5000}>
            <PlaceholderImage className="h-full w-full" label="Landing Page" />
            <PlaceholderImage className="h-full w-full" label="Analytics View" />
          </Carousel>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};
