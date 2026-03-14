import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, Dropdown, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { PlaceholderImage, StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Navbar" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Navbar fluid rounded>
          <NavbarBrand href="#">
            <PlaceholderImage className="mr-3 h-8 w-8 rounded-full" label="F" />
            <span className="self-center whitespace-nowrap text-xl font-semibold">Flowbite</span>
          </NavbarBrand>
          <div className="flex items-center gap-3 md:order-2">
            <Dropdown arrowIcon={false} inline label={<Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />}>
              <DropdownItem>Dashboard</DropdownItem>
              <DropdownItem>Billing</DropdownItem>
              <DropdownItem>Sign out</DropdownItem>
            </Dropdown>
            <NavbarToggle />
          </div>
          <NavbarCollapse>
            <NavbarLink href="#" active>
              Overview
            </NavbarLink>
            <NavbarLink href="#">Analytics</NavbarLink>
            <NavbarLink href="#">Templates</NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </StorySurface>
    </StoryPage>
  ),
};
