import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, Blockquote } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Blockquote" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <figure className="mx-auto max-w-3xl text-center">
          <Blockquote>
              <p className="text-2xl font-medium italic text-slate-900 dark:text-white">
              “Flowbite gives this Storybook a fast, consistent baseline for interactive React component demos.”
            </p>
          </Blockquote>
          <figcaption className="mt-6 flex items-center justify-center gap-3">
            <Avatar rounded size="xs" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
            <div className="text-left">
              <p className="font-medium text-slate-900 dark:text-white">Bonnie Green</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Design systems lead</p>
            </div>
          </figcaption>
        </figure>
      </StorySurface>
    </StoryPage>
  ),
};

export const Minimal: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Blockquote>
          <p className="text-xl font-semibold text-slate-900 dark:text-white">“Strong component examples should look like product UI, not placeholder wireframes.”</p>
        </Blockquote>
      </StorySurface>
    </StoryPage>
  ),
};
