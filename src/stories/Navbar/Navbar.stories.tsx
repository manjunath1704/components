import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, Button, Dropdown, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { PlaceholderImage, StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Preview navbar layouts in light and dark mode using the global Theme toolbar control.",
      },
    },
  },
} satisfies Meta<typeof Navbar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Navbar fluid rounded>
          <NavbarBrand href="#">
            <PlaceholderImage className="mr-3 h-8 w-8 rounded-full" label="F" />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-slate-900 dark:text-white">Flowbite</span>
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

export const Minimal: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Navbar fluid rounded>
          <NavbarBrand href="#">
            <span className="self-center whitespace-nowrap text-xl font-semibold text-slate-900 dark:text-white">Flowbite</span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink href="#" active>
              Home
            </NavbarLink>
            <NavbarLink href="#">Docs</NavbarLink>
            <NavbarLink href="#">Support</NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </StorySurface>
    </StoryPage>
  ),
};

export const MarketingNavbar: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Navbar fluid rounded>
          <NavbarBrand href="#">
            <PlaceholderImage className="mr-3 h-9 w-9 rounded-full" label="F" />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-slate-900 dark:text-white">Flowbite Studio</span>
          </NavbarBrand>
          <div className="flex items-center gap-3 md:order-2">
            <Button size="sm">Get started</Button>
            <NavbarToggle />
          </div>
          <NavbarCollapse>
            <NavbarLink href="#" active>
              Product
            </NavbarLink>
            <NavbarLink href="#">Solutions</NavbarLink>
            <NavbarLink href="#">Pricing</NavbarLink>
            <NavbarLink href="#">Resources</NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </StorySurface>
    </StoryPage>
  ),
};
