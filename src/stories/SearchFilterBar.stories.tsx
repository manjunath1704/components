import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { SearchFilterBar } from "@/components/search-filter-bar"
import { Button } from "@/components/ui/button"

const meta = {
  title: "Premium/SearchFilterBar",
  component: SearchFilterBar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchFilterBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [query, setQuery] = React.useState("")
    const [status, setStatus] = React.useState("active")
    const [owner, setOwner] = React.useState("all")
    const [filters, setFilters] = React.useState([
      { id: "status", label: "Status", value: "Active" },
      { id: "owner", label: "Owner", value: "All teams" },
    ])

    const removeFilter = (id: string) => {
      setFilters((prev) => prev.filter((item) => item.id !== id))
    }

    return (
      <div className="relative min-h-screen bg-background px-6 py-12 text-foreground md:px-10 lg:px-14">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-primary/25 blur-[120px]" />
          <div className="absolute -left-40 bottom-[-20%] h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[150px]" />
        </div>

        <div className="mx-auto max-w-6xl">
          <SearchFilterBar
            title="Search & filters"
            subtitle="Locate workstreams by client, status, or engagement owner."
            resultCount="128 results"
            searchValue={query}
            onSearchChange={setQuery}
            selects={[
              {
                id: "status",
                label: "Status",
                placeholder: "Status",
                value: status,
                onValueChange: (value) => {
                  setStatus(value)
                  setFilters((prev) =>
                    prev.map((item) =>
                      item.id === "status"
                        ? { ...item, value: value === "all" ? "All" : value }
                        : item
                    )
                  )
                },
                options: [
                  { label: "All", value: "all" },
                  { label: "Active", value: "active" },
                  { label: "Paused", value: "paused" },
                  { label: "Draft", value: "draft" },
                ],
              },
              {
                id: "owner",
                label: "Owner",
                placeholder: "Owner",
                value: owner,
                onValueChange: (value) => {
                  setOwner(value)
                  setFilters((prev) =>
                    prev.map((item) =>
                      item.id === "owner"
                        ? {
                            ...item,
                            value: value === "all" ? "All teams" : value,
                          }
                        : item
                    )
                  )
                },
                options: [
                  { label: "All teams", value: "all" },
                  { label: "Design", value: "Design" },
                  { label: "Strategy", value: "Strategy" },
                  { label: "Delivery", value: "Delivery" },
                ],
              },
            ]}
            filters={filters}
            onRemoveFilter={removeFilter}
            onClearFilters={() => setFilters([])}
            actions={
              <>
                <Button variant="outline">Saved views</Button>
                <Button>Create view</Button>
              </>
            }
          />
        </div>
      </div>
    )
  },
}
