import * as React from "react"
import { Search, SlidersHorizontal, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, type SelectOption } from "@/components/ui/react-select"

export type FilterChip = {
  id: string
  label: string
  value?: string
}

export type SelectFilter = {
  id: string
  label: string
  placeholder: string
  options: { label: string; value: string }[]
  value?: string
  onValueChange?: (value: string) => void
  isSearchable?: boolean
}

export type SearchFilterBarProps = {
  title?: string
  subtitle?: string
  resultCount?: string
  placeholder?: string
  searchValue?: string
  onSearchChange?: (value: string) => void
  selects?: SelectFilter[]
  filters?: FilterChip[]
  onRemoveFilter?: (id: string) => void
  onClearFilters?: () => void
  actions?: React.ReactNode
  className?: string
}

export function SearchFilterBar({
  title = "Search",
  subtitle,
  resultCount,
  placeholder = "Search by name, tag, or owner",
  searchValue,
  onSearchChange,
  selects = [],
  filters = [],
  onRemoveFilter,
  onClearFilters,
  actions,
  className,
}: SearchFilterBarProps) {
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
          {subtitle ? (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          ) : null}
          {resultCount ? (
            <p className="text-xs text-muted-foreground">{resultCount}</p>
          ) : null}
        </div>
        <div className="flex flex-wrap items-center gap-2">{actions}</div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <div className="relative flex min-w-[220px] flex-1 items-center">
          <Search className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
          <Input
            className="h-11 pl-9 text-sm"
            placeholder={placeholder}
            value={searchValue}
            onChange={(event) => onSearchChange?.(event.target.value)}
          />
        </div>

        {selects.map((select) => (
          <div key={select.id} className="min-w-[180px]">
            <Select
              placeholder={select.placeholder}
              options={select.options}
              value={
                select.options.find((option) => option.value === select.value) ??
                null
              }
              onChange={(option) =>
                select.onValueChange?.((option as SelectOption | null)?.value ?? "")
              }
              isSearchable={select.isSearchable ?? false}
            />
          </div>
        ))}

        <Button variant="outline" className="h-11">
          <SlidersHorizontal className="mr-2 size-4" />
          Filters
        </Button>
      </div>

      {filters.length > 0 ? (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {filters.map((chip) => (
            <Badge
              key={chip.id}
              className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-foreground"
            >
              <span className="mr-2 text-muted-foreground">{chip.label}</span>
              <span>{chip.value ?? ""}</span>
              <button
                type="button"
                className="ml-2 inline-flex size-4 items-center justify-center rounded-full text-muted-foreground transition hover:text-foreground"
                onClick={() => onRemoveFilter?.(chip.id)}
                aria-label={`Remove ${chip.label}`}
              >
                <X className="size-3" />
              </button>
            </Badge>
          ))}
          {onClearFilters ? (
            <Button variant="ghost" size="sm" onClick={onClearFilters}>
              Clear all
            </Button>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
