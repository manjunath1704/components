import * as React from "react"
import { Mail, Phone } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export type TeamMember = {
  id: string
  name: string
  role: string
  email?: string
  phone?: string
  status?: "active" | "away"
  initials: string
}

export type AvatarTeamListProps = {
  title?: string
  subtitle?: string
  inviteLabel?: string
  members: TeamMember[]
  className?: string
}

export function AvatarTeamList({
  title = "Team",
  subtitle = "Key contacts and collaborators.",
  inviteLabel = "Invite",
  members,
  className,
}: AvatarTeamListProps) {
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
            {title}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">{subtitle}</h2>
        </div>
        <Button variant="outline">{inviteLabel}</Button>
      </div>

      <div className="mt-6 space-y-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-background/50 p-4"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                  {member.initials}
                </div>
                {member.status ? (
                  <span
                    className={cn(
                      "absolute -bottom-0 -right-0 z-10 h-3 w-3 rounded-full  dark:shadow-[0_0_0_2px_rgba(248,250,252,0.6)]",
                      member.status === "away"
                        ? "bg-amber-400"
                        : "bg-emerald-400"
                    )}
                  />
                ) : null}
              </div>
              <div>
                <p className="text-sm font-semibold">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              {member.email ? (
                <span className="flex items-center gap-2">
                  <Mail className="size-3.5" />
                  {member.email}
                </span>
              ) : null}
              {member.phone ? (
                <span className="flex items-center gap-2">
                  <Phone className="size-3.5" />
                  {member.phone}
                </span>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
