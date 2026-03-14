import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "flowbite-react";
import { PlaceholderImage, StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Carousel" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

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
