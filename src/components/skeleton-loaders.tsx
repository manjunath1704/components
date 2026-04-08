import * as React from "react"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

export type SkeletonLoadersProps = {
  className?: string
}

export function SkeletonLoaders({ className }: SkeletonLoadersProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-border/60 bg-card/60 p-6 shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur",
        className
      )}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Skeletons
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">
          Loading placeholders
        </h2>
        <p className="text-sm text-muted-foreground">
          Use consistent skeletons while data loads.
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="rounded-2xl border border-border/60 bg-background/50 p-4"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-2xl" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-5/6" />
              <Skeleton className="h-3 w-2/3" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-border/60 bg-background/50 p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-3 w-56" />
          </div>
          <Skeleton className="h-9 w-28 rounded-full" />
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <Skeleton className="h-16 rounded-2xl" />
          <Skeleton className="h-16 rounded-2xl" />
          <Skeleton className="h-16 rounded-2xl" />
        </div>
      </div>
    </div>
  )
}
