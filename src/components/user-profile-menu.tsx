import * as React from "react"
import { ChevronDown, LogOut, Settings, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type UserProfileMenuProps = {
  name: string
  email: string
  role?: string
  avatarFallback?: string
  className?: string
}

export function UserProfileMenu({
  name,
  email,
  role = "Workspace admin",
  avatarFallback = "AM",
  className,
}: UserProfileMenuProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="h-12 gap-3 rounded-full border-border/60 bg-card/60 px-3 sm:min-w-[220px]"
          >
            <span className="flex aspect-1/1 p-2 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
              {avatarFallback}
            </span>
            <span className="hidden flex-col items-start text-left sm:flex">
              <span className="text-sm font-medium">{name}</span>
              <span className="text-xs text-muted-foreground">{role}</span>
            </span>
            <ChevronDown className="size-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-[260px] rounded-2xl border border-border/60 bg-popover/80 p-2 shadow-[0_18px_45px_-30px_rgba(5,8,20,0.9)] backdrop-blur"
        >
          <div className="px-3 py-2">
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs text-muted-foreground">{email}</p>
          </div>
          <DropdownMenuSeparator className="my-2" />
          <DropdownMenuItem className="rounded-xl px-3 py-2">
            <User className="size-4" />
            View profile
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-xl px-3 py-2">
            <Settings className="size-4" />
            Account settings
          </DropdownMenuItem>
          <DropdownMenuSeparator className="my-2" />
          <DropdownMenuItem className="rounded-xl px-3 py-2 text-destructive">
            <LogOut className="size-4" />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
