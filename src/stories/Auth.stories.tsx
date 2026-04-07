import type { Meta, StoryObj } from "@storybook/react-vite"
import { GitBranch } from "lucide-react"

import { AuthCard, AuthShell } from "@/components/auth"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

const meta = {
  title: "Premium/Auth",
  component: AuthShell,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AuthShell>

export default meta
type Story = StoryObj<typeof meta>

const marketing = {
  title: "Give your clients a premium onboarding.",
  copy: "Move from kickoff to delivery with a workspace built for executive-level collaboration.",
  highlights: [
    "Branded workspaces for every client",
    "Real-time approvals and feedback",
    "Secure handoffs with audit trails",
  ],
}

export const SignIn: Story = {
  render: () => (
    <AuthShell
      brand={{ name: "Nimbus", tagline: "Client operations" }}
      marketing={marketing}
      fullHeight={false}
    >
      <AuthCard
        title="Welcome back"
        description="Sign in to continue your premium workspace."
        footer={
          <p className="text-xs text-muted-foreground">
            New here?{" "}
            <a className="font-semibold text-primary hover:underline" href="#">
              Create an account
            </a>
          </p>
        }
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="signin-email">Work email</Label>
            <Input
              id="signin-email"
              type="email"
              placeholder="you@studio.com"
              autoComplete="email"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="signin-password">Password</Label>
              <a
                className="text-xs font-medium text-primary hover:underline"
                href="#"
              >
                Forgot password?
              </a>
            </div>
            <Input
              id="signin-password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-xs">
              Remember this device
            </Label>
          </div>
          <Button className="w-full">Sign in</Button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">or</span>
            <Separator className="flex-1" />
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <Button variant="outline">Continue with Google</Button>
            <Button variant="outline">
              <GitBranch className="mr-2 size-4" />
              GitHub
            </Button>
          </div>
        </div>
      </AuthCard>
    </AuthShell>
  ),
}

export const SignUp: Story = {
  render: () => (
    <AuthShell
      brand={{ name: "Nimbus", tagline: "Client operations" }}
      marketing={marketing}
      fullHeight={false}
    >
      <AuthCard
        title="Create your account"
        description="Start a premium workspace for your team."
        footer={
          <p className="text-xs text-muted-foreground">
            Already have an account?{" "}
            <a className="font-semibold text-primary hover:underline" href="#">
              Sign in
            </a>
          </p>
        }
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="signup-name">Full name</Label>
            <Input id="signup-name" placeholder="Avery Mason" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-email">Work email</Label>
            <Input
              id="signup-email"
              type="email"
              placeholder="you@studio.com"
              autoComplete="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-password">Password</Label>
            <Input
              id="signup-password"
              type="password"
              placeholder="Create a secure password"
              autoComplete="new-password"
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs">
              I agree to the terms and privacy policy
            </Label>
          </div>
          <Button className="w-full">Create account</Button>
        </div>
      </AuthCard>
    </AuthShell>
  ),
}

export const ForgotPassword: Story = {
  render: () => (
    <AuthShell
      brand={{ name: "Nimbus", tagline: "Client operations" }}
      marketing={marketing}
      fullHeight={false}
    >
      <AuthCard
        title="Reset your password"
        description="We’ll email you a secure reset link."
        footer={
          <p className="text-xs text-muted-foreground">
            Remembered?{" "}
            <a className="font-semibold text-primary hover:underline" href="#">
              Return to sign in
            </a>
          </p>
        }
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="reset-email">Work email</Label>
            <Input
              id="reset-email"
              type="email"
              placeholder="you@studio.com"
              autoComplete="email"
            />
          </div>
          <Button className="w-full">Send reset link</Button>
          <p className="text-xs text-muted-foreground">
            For security, links expire after 30 minutes.
          </p>
        </div>
      </AuthCard>
    </AuthShell>
  ),
}
