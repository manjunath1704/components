import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabItem, Tabs } from "flowbite-react";
import { HiCloudDownload, HiUser } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    variant: "underline",
  },
} satisfies Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Tabs aria-label="Tabs with icons" variant="underline">
          <TabItem active title="Profile" icon={HiUser}>
            <p className="text-sm text-slate-600 dark:text-slate-300">Profile settings and teammate metadata live here.</p>
          </TabItem>
          <TabItem title="Dashboard" icon={MdDashboard}>
            <p className="text-sm text-slate-600 dark:text-slate-300">Dashboards aggregate adoption and release health.</p>
          </TabItem>
          <TabItem title="Downloads" icon={HiCloudDownload}>
            <p className="text-sm text-slate-600 dark:text-slate-300">Exports, artifacts, and generated tokens.</p>
          </TabItem>
        </Tabs>
      </StorySurface>
    </StoryPage>
  ),
};

export const PillsStyle: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Tabs aria-label="Pill tabs" variant="pills">
          <TabItem active title="Overview">
            <p className="text-sm text-slate-600 dark:text-slate-300">Overview content for the current component set.</p>
          </TabItem>
          <TabItem title="Usage">
            <p className="text-sm text-slate-600 dark:text-slate-300">Usage guidelines and implementation notes.</p>
          </TabItem>
          <TabItem title="Code">
            <p className="text-sm text-slate-600 dark:text-slate-300">Code examples and integration references.</p>
          </TabItem>
        </Tabs>
      </StorySurface>
    </StoryPage>
  ),
};
