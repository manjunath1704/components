import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle, Badge } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Flowbite accordion variants with interactive root props and copyable docs source.",
      },
    },
  },
  args: {
    collapseAll: false,
    flush: false,
  },
} satisfies Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <StoryPage>
      <StorySurface className="max-w-3xl">
        <Accordion {...args}>
          <AccordionPanel>
            <AccordionTitle>What is Flowbite?</AccordionTitle>
            <AccordionContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">Flowbite is an open-source UI component library built on top of Tailwind CSS.</p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>What can I control here?</AccordionTitle>
            <AccordionContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">Use the Controls panel to toggle props like flush and collapseAll.</p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </StorySurface>
    </StoryPage>
  ),
};

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface className="max-w-3xl">
        <Accordion>
          <AccordionPanel>
            <AccordionTitle>What is Flowbite?</AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-sm text-slate-600 dark:text-slate-300">
                Flowbite is an open-source UI component library built on top of Tailwind CSS with first-class React components.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">This layout matches the standard accordion style from the Flowbite docs.</p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>Why use accordion content?</AccordionTitle>
            <AccordionContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">Accordions help compress FAQs, release notes, filters, and other expandable content blocks.</p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>What is included in this story?</AccordionTitle>
            <AccordionContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">Default, flush, and richer content variants for the same component.</p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </StorySurface>
    </StoryPage>
  ),
};

export const Flush: Story = {
  render: () => (
    <StoryPage>
      <StorySurface className="max-w-3xl">
        <Accordion flush collapseAll>
          <AccordionPanel>
            <AccordionTitle>Can I remove the outer borders?</AccordionTitle>
            <AccordionContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">Yes. The flush variant removes the card-like shell and keeps a lighter divider-based layout.</p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>Where does it work best?</AccordionTitle>
            <AccordionContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">Flush accordions fit well inside settings pages, side panels, and dense documentation views.</p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </StorySurface>
    </StoryPage>
  ),
};

export const RichContent: Story = {
  render: () => (
    <StoryPage>
      <StorySurface className="max-w-3xl">
        <Accordion collapseAll>
          <AccordionPanel>
            <AccordionTitle>Release status</AccordionTitle>
            <AccordionContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge color="success">Ready</Badge>
                  <span className="text-sm text-slate-600 dark:text-slate-300">Core stories reviewed and styled.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge color="warning">In review</Badge>
                  <span className="text-sm text-slate-600 dark:text-slate-300">Expanded variant coverage across the component catalog.</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>Notes</AccordionTitle>
            <AccordionContent>
              <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                <li>Use concise titles so scan-ability stays high.</li>
                <li>Keep body content focused on one expandable topic.</li>
                <li>Prefer default styling unless there is a clear product need.</li>
              </ul>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </StorySurface>
    </StoryPage>
  ),
};
