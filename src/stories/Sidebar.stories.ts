import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Sidebar } from './Sidebar';

const items = [
  { id: 'overview', label: 'Overview', description: 'Quick stats' },
  { id: 'projects', label: 'Projects', description: '12 active' },
  { id: 'inbox', label: 'Inbox', description: '3 unread' },
  { id: 'settings', label: 'Settings', description: 'Workspace config' },
];

const meta = {
  title: 'Example/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'Design Ops',
    items,
    activeItemId: 'projects',
    onSelect: fn(),
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Collapsed: Story = {
  args: {
    collapsed: true,
  },
};

export const LongLabels: Story = {
  args: {
    items: [
      { id: 'dashboard', label: 'Dashboard and reporting', description: 'Monthly review' },
      { id: 'pipeline', label: 'Pipeline health', description: '5 items flagged' },
      { id: 'roadmap', label: 'Product roadmap', description: 'Q3 focus' },
      { id: 'team', label: 'Team updates', description: '4 new notes' },
    ],
    activeItemId: 'roadmap',
  },
};
