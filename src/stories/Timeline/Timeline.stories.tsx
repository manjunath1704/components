import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Timeline, TimelineBody, TimelineContent, TimelineItem, TimelinePoint, TimelineTime, TimelineTitle } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Timeline" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Timeline>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>March 14, 2026</TimelineTime>
              <TimelineTitle>Scaffolded Flowbite Storybook workspace</TimelineTitle>
              <TimelineBody>Created Vite, Storybook, Tailwind, and Flowbite integration for a fresh repository.</TimelineBody>
              <Button color="gray">
                Review setup
                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
              </Button>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>March 14, 2026</TimelineTime>
              <TimelineTitle>Split stories into per-component folders</TimelineTitle>
              <TimelineBody>Each component now has its own Storybook entry and directory.</TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </StorySurface>
    </StoryPage>
  ),
};
