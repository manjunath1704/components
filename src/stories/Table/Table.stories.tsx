import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Table" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

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
              <TableCell className="font-medium text-slate-900">Buttons</TableCell>
              <TableCell>Ready</TableCell>
              <TableCell>Variants + groups</TableCell>
              <TableCell>Design Systems</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-slate-900">Navigation</TableCell>
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
