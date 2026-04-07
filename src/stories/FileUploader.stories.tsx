import type { Meta, StoryObj } from "@storybook/react-vite"

import { FileUploader } from "@/components/file-uploader"

const meta = {
  title: "Premium/FileUploader",
  component: FileUploader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FileUploader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative min-h-screen bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -left-40 bottom-[-20%] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-4xl">
        <FileUploader
          accept=".pdf,.png,.jpg,.jpeg"
          helperText="Accepted: PDF, PNG, JPG up to 25MB each."
        />
      </div>
    </div>
  ),
}
