import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Footer",
  component: Footer,
  tags: ["autodocs"],
  args: {
    container: true,
  },
  parameters: {
    docs: {
      description: {
        component: "Switch the global Theme toolbar control to preview footer content in light and dark mode.",
      },
    },
  },
} satisfies Meta<typeof Footer>;
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

export const Minimal: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Footer container>
          <div className="w-full text-center text-sm text-slate-600 dark:text-slate-300">Built with Flowbite React for Storybook component review.</div>
        </Footer>
      </StorySurface>
    </StoryPage>
  ),
};

export const MarketingFooter: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Footer container>
          <div className="w-full">
            <div className="grid gap-8 md:grid-cols-[1.3fr_repeat(3,1fr)]">
              <div className="space-y-3">
                <FooterBrand href="https://flowbite.com" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite logo" name="Flowbite" />
                <p className="max-w-sm text-sm text-slate-600 dark:text-slate-300">
                  Ship production-ready interfaces faster with reusable components, docs, and Storybook review workflows.
                </p>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Product</p>
                <FooterLinkGroup col>
                  <FooterLink href="#">Components</FooterLink>
                  <FooterLink href="#">Templates</FooterLink>
                  <FooterLink href="#">Pricing</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Resources</p>
                <FooterLinkGroup col>
                  <FooterLink href="#">Docs</FooterLink>
                  <FooterLink href="#">Storybook</FooterLink>
                  <FooterLink href="#">Guides</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Company</p>
                <FooterLinkGroup col>
                  <FooterLink href="#">About</FooterLink>
                  <FooterLink href="#">Careers</FooterLink>
                  <FooterLink href="#">Contact</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
            <FooterDivider />
            <FooterCopyright href="#" by="Flowbite Workspace" year={2026} />
          </div>
        </Footer>
      </StorySurface>
    </StoryPage>
  ),
};
