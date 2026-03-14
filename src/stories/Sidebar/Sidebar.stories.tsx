import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Sidebar, SidebarCTA, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo } from "flowbite-react";
import { HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Sidebar" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Sidebar aria-label="Sidebar example">
          <SidebarLogo href="#" img="https://flowbite.com/docs/images/logo.svg" imgAlt="Flowbite logo">
            Flowbite
          </SidebarLogo>
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="#" icon={HiChartPie}>
                Dashboard
              </SidebarItem>
              <SidebarItem href="#" icon={HiViewBoards}>
                Kanban
              </SidebarItem>
              <SidebarItem href="#" icon={HiInbox}>
                Inbox
              </SidebarItem>
              <SidebarItem href="#" icon={HiUser}>
                Users
              </SidebarItem>
              <SidebarItem href="#" icon={HiShoppingBag}>
                Products
              </SidebarItem>
              <SidebarItem href="#" icon={HiTable}>
                Reports
              </SidebarItem>
            </SidebarItemGroup>
            <SidebarCTA>
              <p className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">Beta navigation</p>
              <p className="mb-3 text-sm text-slate-600 dark:text-slate-300">Preview the new admin IA before the next release.</p>
              <Button size="xs">Review</Button>
            </SidebarCTA>
          </SidebarItems>
        </Sidebar>
      </StorySurface>
    </StoryPage>
  ),
};

export const WithoutCTA: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Sidebar aria-label="Sidebar example">
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="#" icon={HiChartPie}>
                Dashboard
              </SidebarItem>
              <SidebarItem href="#" icon={HiInbox}>
                Inbox
              </SidebarItem>
              <SidebarItem href="#" icon={HiUser}>
                Users
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </StorySurface>
    </StoryPage>
  ),
};
