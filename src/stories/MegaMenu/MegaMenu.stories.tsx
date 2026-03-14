import type { Meta, StoryObj } from "@storybook/react-vite";
import { MegaMenu, MegaMenuDropdown, MegaMenuDropdownToggle, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { HiChevronDown } from "react-icons/hi";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Mega menu" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface className="overflow-hidden">
        <MegaMenu>
          <NavbarBrand href="#">
            <span className="self-center whitespace-nowrap text-xl font-semibold">Flowbite</span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink href="#" active>
              Home
            </NavbarLink>
            <NavbarLink as="div">
              <MegaMenuDropdownToggle>
                Products
                <HiChevronDown className="ml-1 h-4 w-4" />
              </MegaMenuDropdownToggle>
            </NavbarLink>
            <NavbarLink href="#">Pricing</NavbarLink>
          </NavbarCollapse>
          <MegaMenuDropdown toggle={<>Products</>}>
            <ul className="grid gap-4 p-4 sm:grid-cols-3">
              <li className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                <p className="font-semibold text-slate-900 dark:text-white">Design System</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Tokens and reusable UI patterns.</p>
              </li>
              <li className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                <p className="font-semibold text-slate-900 dark:text-white">Blocks</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Landing pages, dashboards, and sections.</p>
              </li>
              <li className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                <p className="font-semibold text-slate-900 dark:text-white">Docs</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Implementation guides and references.</p>
              </li>
            </ul>
          </MegaMenuDropdown>
        </MegaMenu>
      </StorySurface>
    </StoryPage>
  ),
};

export const Compact: Story = {
  render: () => (
    <StoryPage>
      <StorySurface className="overflow-hidden">
        <MegaMenu>
          <NavbarBrand href="#">
            <span className="self-center whitespace-nowrap text-xl font-semibold">Flowbite</span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink href="#" active>
              Docs
            </NavbarLink>
            <NavbarLink href="#">Blocks</NavbarLink>
            <NavbarLink href="#">Pricing</NavbarLink>
          </NavbarCollapse>
        </MegaMenu>
      </StorySurface>
    </StoryPage>
  ),
};
