import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Accordion" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Accordion collapseAll>
          <AccordionPanel>
            <AccordionTitle>What is included?</AccordionTitle>
            <AccordionContent>
              <p className="text-sm text-slate-600">This story shows a standard Flowbite accordion layout.</p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>Why split stories by folder?</AccordionTitle>
            <AccordionContent>
              <p className="text-sm text-slate-600">Separate folders make Storybook navigation cleaner for a large component catalog.</p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </StorySurface>
    </StoryPage>
  ),
};
