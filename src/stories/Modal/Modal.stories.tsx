import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Modal" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

function ModalExample() {
  const [open, setOpen] = useState(true);

  return (
    <div className="relative min-h-[24rem] overflow-hidden rounded-3xl bg-slate-100 p-6 dark:bg-slate-800">
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal show={open} onClose={() => setOpen(false)}>
        <ModalHeader>Review Storybook publish</ModalHeader>
        <ModalBody>
          <p className="text-sm text-slate-600 dark:text-slate-300">This example uses a modal for a lightweight confirmation flow.</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpen(false)}>Approve</Button>
          <Button color="light" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface className="min-h-[30rem]">
        <ModalExample />
      </StorySurface>
    </StoryPage>
  ),
};

export const ConfirmationStyle: Story = {
  render: () => (
    <StoryPage>
      <StorySurface className="min-h-[30rem]">
        <ModalExample />
      </StorySurface>
    </StoryPage>
  ),
};
