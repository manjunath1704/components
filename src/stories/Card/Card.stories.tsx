import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Card } from "flowbite-react";
import { HiArrowRight } from "react-icons/hi";
import { StoryGrid, StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;

export const FeatureCard: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Card
          className="max-w-sm"
          renderImage={() => (
            <img
              alt="Mountain landscape"
              className="h-48 w-full object-cover"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
            />
          )}
        >
          <h5 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Mountain retreat workspace</h5>
          <p className="font-normal text-slate-600 dark:text-slate-300">
            A clean editorial-style card with imagery, supporting copy, and a clear button CTA.
          </p>
          <Button>
            Read more
            <HiArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </StorySurface>
    </StoryPage>
  ),
};

export const ProductCards: Story = {
  render: () => (
    <StoryPage>
      <StoryGrid>
        <StorySurface>
          <Card
            className="max-w-sm"
            renderImage={() => (
              <img
                alt="Headphones product"
                className="h-56 w-full object-cover"
                src="https://flowbite.com/docs/images/blog/image-4.jpg"
              />
            )}
          >
            <h5 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Noise cancelling headphones</h5>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Premium wireless audio with a compact card layout suitable for e-commerce and featured products.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">$299</span>
              <Button size="sm">Add to cart</Button>
            </div>
          </Card>
        </StorySurface>
        <StorySurface>
          <Card
            className="max-w-sm"
            renderImage={() => (
              <img
                alt="Camera product"
                className="h-56 w-full object-cover"
                src="https://flowbite.com/docs/images/blog/image-2.jpg"
              />
            )}
          >
            <h5 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Mirrorless travel camera</h5>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Lightweight hardware storytelling with enough room for product copy and a prominent action button.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">$899</span>
              <Button color="light" size="sm">
                Compare
              </Button>
            </div>
          </Card>
        </StorySurface>
      </StoryGrid>
    </StoryPage>
  ),
};

export const HorizontalLayout: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Card
          className="max-w-3xl md:flex-row"
          renderImage={() => (
            <img
              alt="Desk setup"
              className="h-96 w-full object-cover md:h-auto md:w-80"
              src="https://flowbite.com/docs/images/blog/image-3.jpg"
            />
          )}
        >
          <h5 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Horizontal content card</h5>
          <p className="font-normal text-slate-600 dark:text-slate-300">
            Use wider cards when copy, metadata, and actions need more room than a simple tile.
          </p>
          <Button className="w-fit">
            View project
            <HiArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </StorySurface>
    </StoryPage>
  ),
};

export const EditorialCard: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Card
          className="max-w-2xl"
          renderImage={() => (
            <img
              alt="Editorial article cover"
              className="h-64 w-full object-cover"
              src="https://flowbite.com/docs/images/blog/image-5.jpg"
            />
          )}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">Case study</p>
          <h5 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Designing a scalable Storybook workflow</h5>
          <p className="font-normal text-slate-600 dark:text-slate-300">
            Combine photography, strong titles, supporting descriptions, and a single CTA to make cards feel intentional rather than generic.
          </p>
          <Button color="dark">
            Read case study
            <HiArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </StorySurface>
    </StoryPage>
  ),
};
