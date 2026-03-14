import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = {
  title: "Flowbite/Table",
  component: Table,
  tags: ["autodocs"],
  args: {
    striped: false,
  },
  parameters: {
    docs: {
      description: {
        component: "The global Theme toolbar control lets you inspect table layouts in light and dark mode.",
      },
    },
  },
} satisfies Meta<typeof Table>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <StoryPage>
      <StorySurface>
        <Table {...args}>
          <TableHead>
            <TableRow>
              <TableHeadCell>Metric</TableHeadCell>
              <TableHeadCell>Value</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            <TableRow>
              <TableCell className="font-medium text-slate-900 dark:text-white">Coverage</TableCell>
              <TableCell>28 components</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-slate-900 dark:text-white">Theme</TableCell>
              <TableCell>Light and dark</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </StorySurface>
    </StoryPage>
  ),
};

export const Default: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Component</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
              <TableHeadCell>Coverage</TableHeadCell>
              <TableHeadCell>Owner</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            <TableRow>
              <TableCell className="font-medium text-slate-900 dark:text-white">Buttons</TableCell>
              <TableCell>Ready</TableCell>
              <TableCell>Variants + groups</TableCell>
              <TableCell>Design Systems</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-slate-900 dark:text-white">Navigation</TableCell>
              <TableCell>Ready</TableCell>
              <TableCell>Navbar + mega menu</TableCell>
              <TableCell>Platform</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </StorySurface>
    </StoryPage>
  ),
};

export const CompactRows: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Table striped>
          <TableHead>
            <TableRow>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Role</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            <TableRow>
              <TableCell>Bonnie Green</TableCell>
              <TableCell>Designer</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jese Leos</TableCell>
              <TableCell>Developer</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </StorySurface>
    </StoryPage>
  ),
};

export const PricingTable: Story = {
  render: () => (
    <StoryPage>
      <StorySurface>
        <Table striped>
          <TableHead>
            <TableRow>
              <TableHeadCell>Plan</TableHeadCell>
              <TableHeadCell>Users</TableHeadCell>
              <TableHeadCell>Price</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            <TableRow>
              <TableCell className="font-medium text-slate-900 dark:text-white">Starter</TableCell>
              <TableCell>3</TableCell>
              <TableCell>$19</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-slate-900 dark:text-white">Growth</TableCell>
              <TableCell>10</TableCell>
              <TableCell>$49</TableCell>
              <TableCell>Popular</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-slate-900 dark:text-white">Enterprise</TableCell>
              <TableCell>Unlimited</TableCell>
              <TableCell>Custom</TableCell>
              <TableCell>Contact sales</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </StorySurface>
    </StoryPage>
  ),
};
