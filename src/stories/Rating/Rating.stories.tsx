import type { Meta, StoryObj } from "@storybook/react-vite";
import { Rating, RatingAdvanced, RatingStar } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Rating" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <div className="space-y-4">
          <Rating>
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar filled={false} />
            <p className="ml-2 text-sm font-medium text-slate-700">4.0 from 73 reviews</p>
          </Rating>
          <div className="space-y-2">
            <RatingAdvanced percentFilled={70}>5 star</RatingAdvanced>
            <RatingAdvanced percentFilled={17}>4 star</RatingAdvanced>
            <RatingAdvanced percentFilled={9}>3 star</RatingAdvanced>
          </div>
        </div>
      </StorySurface>
    </StoryPage>
  ),
};
