import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Checkbox, HelperText, Label, Radio, RangeSlider, Select, Textarea, TextInput, ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import { StoryGrid, StoryPage, StorySurface } from "../story-helpers";

const meta = { title: "Flowbite/Forms" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

function ToggleExample() {
  const [enabled, setEnabled] = useState(true);
  return <ToggleSwitch checked={enabled} label="Enable review mode" onChange={setEnabled} />;
}

export const Overview: Story = {
  render: () => (
    <StoryPage>
      <StoryGrid>
        <StorySurface>
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <TextInput id="email" type="email" placeholder="name@company.com" />
            <HelperText>Use a team inbox for notifications.</HelperText>
          </div>
        </StorySurface>
        <StorySurface>
          <div className="space-y-2">
            <Label htmlFor="framework">Framework</Label>
            <Select id="framework">
              <option>React + Vite</option>
              <option>Next.js</option>
              <option>Astro</option>
            </Select>
          </div>
        </StorySurface>
        <StorySurface>
          <div className="space-y-2">
            <Label htmlFor="notes">Review notes</Label>
            <Textarea id="notes" rows={4} placeholder="Leave QA notes..." />
          </div>
        </StorySurface>
        <StorySurface>
          <div className="space-y-4">
            <RangeSlider min={0} max={100} defaultValue={85} />
            <ToggleExample />
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <Checkbox defaultChecked />
                <span className="text-sm text-slate-700">Accessibility checks</span>
              </label>
              <label className="flex items-center gap-2">
                <Radio name="deploy" defaultChecked />
                <span className="text-sm text-slate-700">Deploy to staging</span>
              </label>
            </div>
            <Button>Submit</Button>
          </div>
        </StorySurface>
      </StoryGrid>
    </StoryPage>
  ),
};
