import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Card className="w-[340px] border-border/60 bg-card/60 shadow-[0_20px_50px_-35px_rgba(5,8,20,0.85)]">
      <CardHeader>
        <CardTitle>Team summary</CardTitle>
        <CardDescription>Week 14 update</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p>4 projects in flight, 2 shipping this week.</p>
        <p>Design review on Thursday at 3:30 PM.</p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-[360px] border-border/60 bg-card/60 shadow-[0_20px_50px_-35px_rgba(5,8,20,0.85)]">
      <CardHeader>
        <CardTitle>Prototype review</CardTitle>
        <CardDescription>Share your feedback before Friday.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-muted-foreground">
        <p>We wrapped the new sidebar interactions and motion pass.</p>
        <div className="rounded-lg border border-dashed border-muted p-3 text-xs uppercase tracking-wide">
          Next review: Friday, 10:00 AM
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Later</Button>
        <Button>Open notes</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithThumbnail: Story = {
  render: () => (
    <Card className="w-[360px] overflow-hidden border-border/60 bg-card/60 shadow-[0_20px_50px_-35px_rgba(5,8,20,0.85)]">
      <div className="aspect-[16/9] w-full overflow-hidden bg-muted/60">
        <img
          src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='%2310172a'/><stop offset='1' stop-color='%231c2542'/></linearGradient></defs><rect width='640' height='360' fill='url(%23g)'/><circle cx='520' cy='90' r='52' fill='%235f7bff' opacity='0.6'/><path d='M0 280 L140 170 L280 280 L360 210 L520 320 L640 240 L640 360 L0 360 Z' fill='%2331426b'/><rect x='36' y='36' width='148' height='20' rx='10' fill='%23a5b4fc' opacity='0.6'/></svg>"
          alt="Project thumbnail"
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>Interface check-in</CardTitle>
        <CardDescription>Last updated 2 hours ago</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Capture a clean snapshot to share with the wider team.
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="secondary">Open</Button>
      </CardFooter>
    </Card>
  ),
};

export const CardGrid: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div className="relative bg-background p-8 text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-20 h-[22rem] w-[22rem] rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute -left-32 bottom-[-20%] h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-[140px]" />
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {[
          {
            title: 'Weekly pulse',
            description: 'Track sentiment',
            content: 'Score moved up to 8.4/10 after the latest release.',
          },
          {
            title: 'Deploy status',
            description: 'Production',
            content: 'Green across all regions. Next window in 5 days.',
          },
          {
            title: 'Hiring',
            description: 'Design ops',
            content: '3 candidates in final round. 1 offer pending.',
          },
        ].map((card) => (
          <Card
            key={card.title}
            className="border-border/60 bg-card/60 shadow-[0_20px_50px_-35px_rgba(5,8,20,0.85)]"
          >
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {card.content}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  ),
};
