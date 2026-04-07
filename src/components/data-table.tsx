import * as React from "react"
import { ChevronDown, ChevronUp, Filter, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, type SelectOption } from "@/components/ui/react-select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export type DataTableStatus = "active" | "paused" | "draft"

export type DataTableRow = {
  id: string
  client: string
  project: string
  owner: string
  updated: string
  revenue: string
  status: DataTableStatus
}

export type DataTableProps = {
  rows: DataTableRow[]
  className?: string
}

type SortKey = "client" | "project" | "updated" | "revenue" | "status"
type SortDirection = "asc" | "desc"

const statusStyles: Record<DataTableStatus, string> = {
  active:
    "border-emerald-500/45 bg-emerald-500/20 text-emerald-700 dark:text-emerald-200 shadow-[0_0_0_1px_rgba(16,185,129,0.22)]",
  paused:
    "border-rose-500/45 bg-rose-500/20 text-rose-700 dark:text-rose-200 shadow-[0_0_0_1px_rgba(244,63,94,0.22)]",
  draft:
    "border-violet-500/45 bg-violet-500/20 text-violet-700 dark:text-violet-200 shadow-[0_0_0_1px_rgba(139,92,246,0.22)]",
}

function sortRows(
  rows: DataTableRow[],
  sortKey: SortKey,
  direction: SortDirection
) {
  const multiplier = direction === "asc" ? 1 : -1
  return [...rows].sort((a, b) => {
    const valueA = a[sortKey]
    const valueB = b[sortKey]
    return valueA.localeCompare(valueB) * multiplier
  })
}

export function DataTable({ rows, className }: DataTableProps) {
  const [query, setQuery] = React.useState("")
  const [status, setStatus] = React.useState<DataTableStatus | "all">("all")
  const [sortKey, setSortKey] = React.useState<SortKey>("updated")
  const [sortDirection, setSortDirection] =
    React.useState<SortDirection>("desc")
  const [selectedIds, setSelectedIds] = React.useState<Set<string>>(
    () => new Set()
  )

  const filteredRows = rows.filter((row) => {
    const matchesQuery =
      row.client.toLowerCase().includes(query.toLowerCase()) ||
      row.project.toLowerCase().includes(query.toLowerCase()) ||
      row.owner.toLowerCase().includes(query.toLowerCase())
    const matchesStatus = status === "all" ? true : row.status === status
    return matchesQuery && matchesStatus
  })

  const sortedRows = sortRows(filteredRows, sortKey, sortDirection)
  const visibleIds = React.useMemo(
    () => new Set(sortedRows.map((row) => row.id)),
    [sortedRows]
  )

  const allSelected =
    sortedRows.length > 0 &&
    sortedRows.every((row) => selectedIds.has(row.id))
  const someSelected =
    sortedRows.some((row) => selectedIds.has(row.id)) && !allSelected

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))
      return
    }
    setSortKey(key)
    setSortDirection("desc")
  }

  const SortIcon = sortDirection === "asc" ? ChevronUp : ChevronDown
  const statusOptions: SelectOption[] = [
    { label: "All statuses", value: "all" },
    { label: "Active", value: "active" },
    { label: "Paused", value: "paused" },
    { label: "Draft", value: "draft" },
  ]

  const toggleAll = () => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (allSelected) {
        visibleIds.forEach((id) => next.delete(id))
      } else {
        visibleIds.forEach((id) => next.add(id))
      }
      return next
    })
  }

  const toggleRow = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div
      className={cn(
        "rounded-[28px] border border-border/60 bg-card/60 p-6 shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur",
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Client delivery
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Active engagements
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Review status, owners, and projected revenue in one place.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline">
            <Filter className="mr-2 size-4" />
            Filters
          </Button>
          <Button>New report</Button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Input
          className="h-10 min-w-[220px] flex-1 bg-background/60"
          placeholder="Search by client, project, or owner"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="w-[200px]">
          <Select
            placeholder="Filter status"
            options={statusOptions}
            value={statusOptions.find((option) => option.value === status) ?? null}
            onChange={(option) =>
              setStatus(
                ((option as SelectOption | null)?.value ?? "all") as
                  | DataTableStatus
                  | "all"
              )
            }
          />
        </div>
        <div className="text-xs text-muted-foreground">
          Showing {sortedRows.length} of {rows.length}
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border/60">
        <Table className="text-sm">
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="w-12 px-3">
                <Checkbox
                  checked={allSelected ? true : someSelected ? "indeterminate" : false}
                  onCheckedChange={toggleAll}
                  aria-label="Select all rows"
                />
              </TableHead>
              {[
                { key: "client", label: "Client" },
                { key: "project", label: "Project" },
                { key: "owner", label: "Owner" },
                { key: "updated", label: "Updated" },
                { key: "revenue", label: "Revenue" },
                { key: "status", label: "Status" },
              ].map((column) => (
                <TableHead
                  key={column.key}
                  className="px-4 py-3 text-xs font-semibold"
                >
                  <button
                    className={cn(
                      "inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground transition hover:text-foreground",
                      sortKey === column.key && "text-foreground"
                    )}
                    onClick={() => toggleSort(column.key as SortKey)}
                    type="button"
                  >
                    {column.label}
                    {sortKey === column.key ? (
                      <SortIcon className="size-3" />
                    ) : null}
                  </button>
                </TableHead>
              ))}
              <TableHead className="px-4 py-3 text-xs font-semibold text-muted-foreground">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedRows.map((row) => (
              <TableRow key={row.id} className="hover:bg-muted/30">
                <TableCell className="px-3">
                  <Checkbox
                    checked={selectedIds.has(row.id)}
                    onCheckedChange={() => toggleRow(row.id)}
                    aria-label={`Select ${row.client}`}
                  />
                </TableCell>
                <TableCell className="px-4 py-3 font-medium">
                  {row.client}
                </TableCell>
                <TableCell className="px-4 py-3">{row.project}</TableCell>
                <TableCell className="px-4 py-3 text-muted-foreground">
                  {row.owner}
                </TableCell>
                <TableCell className="px-4 py-3 text-muted-foreground">
                  {row.updated}
                </TableCell>
                <TableCell className="px-4 py-3 font-semibold">
                  {row.revenue}
                </TableCell>
                <TableCell className="px-4 py-3">
                  <Badge
                    className={cn(
                      "rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.18em]",
                      statusStyles[row.status]
                    )}
                  >
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="min-w-[180px] rounded-xl border border-border/60 bg-popover/80 p-2 shadow-[0_18px_45px_-30px_rgba(5,8,20,0.9)] backdrop-blur"
                    >
                      <DropdownMenuItem className="rounded-lg px-3 py-2">
                        View brief
                      </DropdownMenuItem>
                      <DropdownMenuItem className="rounded-lg px-3 py-2">
                        Assign owner
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="my-1" />
                      <DropdownMenuItem
                        className="rounded-lg px-3 py-2 text-destructive"
                      >
                        Archive
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
            {sortedRows.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="py-12 text-center text-sm text-muted-foreground"
                >
                  No results match your filters.
                </TableCell>
              </TableRow>
            ) : null}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
