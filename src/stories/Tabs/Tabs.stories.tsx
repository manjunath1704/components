import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabItem, Tabs } from "flowbite-react";
import { HiCloudDownload, HiUser } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Tabs" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Tabs aria-label="Tabs with icons" variant="underline">
          <TabItem active title="Profile" icon={HiUser}>
            <p className="text-sm text-slate-600">Profile settings and teammate metadata live here.</p>
          </TabItem>
          <TabItem title="Dashboard" icon={MdDashboard}>
            <p className="text-sm text-slate-600">Dashboards aggregate adoption and release health.</p>
          </TabItem>
          <TabItem title="Downloads" icon={HiCloudDownload}>
            <p className="text-sm text-slate-600">Exports, artifacts, and generated tokens.</p>
          </TabItem>
        </Tabs>
      </StorySurface>
    </StoryPage>
  ),
};
