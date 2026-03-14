import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Footer" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Footer container>
          <div className="w-full text-center">
            <div className="w-full justify-between sm:flex sm:items-center">
              <FooterBrand href="https://flowbite.com" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite logo" name="Flowbite" />
              <FooterLinkGroup>
                <FooterLink href="#">Docs</FooterLink>
                <FooterLink href="#">Components</FooterLink>
                <FooterLink href="#">Storybook</FooterLink>
                <FooterLink href="#">Support</FooterLink>
              </FooterLinkGroup>
            </div>
            <FooterDivider />
            <FooterCopyright href="#" by="Flowbite Workspace" year={2026} />
          </div>
        </Footer>
      </StorySurface>
    </StoryPage>
  ),
};
