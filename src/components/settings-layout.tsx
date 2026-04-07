import * as React from "react"
import { Check, Lock, SlidersHorizontal, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export type SettingsLayoutProps = {
  className?: string
}

export function SettingsLayout({ className }: SettingsLayoutProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-border/60 bg-card/60 p-6 shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur",
        className
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Settings
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Workspace preferences
          </h2>
          <p className="text-sm text-muted-foreground">
            Manage access, notifications, and data controls for your team.
          </p>
        </div>
        <Button variant="outline">Save changes</Button>
      </div>

      <Tabs defaultValue="profile" className="mt-6">
        <TabsList className="grid w-full grid-cols-3 rounded-2xl border border-border/60 bg-background/60">
          <TabsTrigger value="profile" className="gap-2">
            <Users className="size-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <SlidersHorizontal className="size-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Lock className="size-4" />
            Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6 space-y-6">
          <section className="rounded-2xl border border-border/60 bg-background/50 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold">Workspace profile</h3>
                <p className="text-xs text-muted-foreground">
                  Update the public information shown to clients.
                </p>
              </div>
              <Button size="sm">Save section</Button>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="workspace-name">Workspace name</Label>
                <Input id="workspace-name" placeholder="Nimbus Studio" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="workspace-domain">Workspace URL</Label>
                <Input id="workspace-domain" placeholder="nimbus.studio" />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-border/60 bg-background/50 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold">Branding</h3>
                <p className="text-xs text-muted-foreground">
                  Upload logos and control accent colors.
                </p>
              </div>
              <Button variant="outline" size="sm">
                Manage assets
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                N
              </div>
              <div>
                <p className="text-sm font-medium">Primary logo</p>
                <p className="text-xs text-muted-foreground">
                  512×512 PNG recommended
                </p>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6 space-y-6">
          <section className="rounded-2xl border border-border/60 bg-background/50 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold">Email updates</h3>
                <p className="text-xs text-muted-foreground">
                  Choose how often we should contact you.
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="mt-4 space-y-3">
              {[
                "Weekly workspace summary",
                "Project status changes",
                "New client messages",
              ].map((item) => (
                <label key={item} className="flex items-center gap-3 text-sm">
                  <Switch defaultChecked />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-border/60 bg-background/50 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold">In-app alerts</h3>
                <p className="text-xs text-muted-foreground">
                  Control real-time notifications in the dashboard.
                </p>
              </div>
              <Switch />
            </div>
          </section>
        </TabsContent>

        <TabsContent value="security" className="mt-6 space-y-6">
          <section className="rounded-2xl border border-border/60 bg-background/50 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold">Security checklist</h3>
                <p className="text-xs text-muted-foreground">
                  Recommended actions for enterprise compliance.
                </p>
              </div>
              <Button variant="outline" size="sm">
                View policy
              </Button>
            </div>
            <div className="mt-4 grid gap-3">
              {[
                "Enable two-factor authentication",
                "Rotate API keys every 90 days",
                "Review user access quarterly",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl border border-border/60 bg-card/60 px-3 py-2 text-sm"
                >
                  <span>{item}</span>
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-400">
                    <Check className="size-3" />
                    Done
                  </span>
                </div>
              ))}
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  )
}
