import * as React from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { cn } from "@/lib/utils"

const lineData = [
  { name: "Jan", value: 18 },
  { name: "Feb", value: 28 },
  { name: "Mar", value: 26 },
  { name: "Apr", value: 38 },
  { name: "May", value: 42 },
  { name: "Jun", value: 48 },
]

const barData = [
  { name: "Strategy", value: 24 },
  { name: "Design", value: 32 },
  { name: "Build", value: 18 },
  { name: "Launch", value: 12 },
]

const pieData = [
  { name: "Active", value: 64 },
  { name: "Paused", value: 22 },
  { name: "Draft", value: 14 },
]

const palette = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
]

export type ChartsProps = {
  className?: string
}

export function LineChartCard({ className }: ChartsProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-border/60 bg-card/60 p-6 shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur",
        className
      )}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Line chart
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">Velocity</h2>
        <p className="text-sm text-muted-foreground">
          Weekly delivery trend across engagements.
        </p>
      </div>
      <div className="mt-6 rounded-2xl border border-border/60 bg-background/50 p-4">
        <div className="mb-3">
          <p className="text-sm font-medium">Velocity</p>
          <p className="text-xs text-muted-foreground">
            Weekly delivery trend
          </p>
        </div>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{
                  background: "var(--popover)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  color: "var(--foreground)",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="var(--chart-1)"
                strokeWidth={3}
                dot={{ r: 3, fill: "var(--chart-1)" }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export function BarChartCard({ className }: ChartsProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-border/60 bg-card/60 p-6 shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur",
        className
      )}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Bar chart
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">Workload</h2>
        <p className="text-sm text-muted-foreground">
          Distribution by discipline.
        </p>
      </div>
      <div className="mt-6 rounded-2xl border border-border/60 bg-background/50 p-4">
        <div className="mb-3">
          <p className="text-sm font-medium">Workload</p>
          <p className="text-xs text-muted-foreground">
            Distribution by discipline
          </p>
        </div>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{
                  background: "var(--popover)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  color: "var(--foreground)",
                }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {barData.map((_, index) => (
                  <Cell
                    key={`bar-${index}`}
                    fill={palette[index % palette.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export function PieChartCard({ className }: ChartsProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-border/60 bg-card/60 p-6 shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur",
        className
      )}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Pie & donut
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">Pipeline mix</h2>
        <p className="text-sm text-muted-foreground">
          Active vs paused engagements.
        </p>
      </div>
      <div className="mt-6 rounded-2xl border border-border/60 bg-background/50 p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium">Pipeline mix</p>
            <p className="text-xs text-muted-foreground">
              Active vs paused engagements
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            {pieData.map((entry, index) => (
              <span key={entry.name} className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: palette[index % palette.length] }}
                />
                {entry.name}
              </span>
            ))}
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                contentStyle={{
                  background: "var(--popover)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  color: "var(--foreground)",
                }}
              />
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                paddingAngle={4}
              >
                {pieData.map((_, index) => (
                  <Cell
                    key={`pie-${index}`}
                    fill={palette[index % palette.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export function DonutChartCard({ className }: ChartsProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-border/60 bg-card/60 p-6 shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur",
        className
      )}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Donut chart
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">Engagement mix</h2>
        <p className="text-sm text-muted-foreground">
          Breakdown by engagement status.
        </p>
      </div>
      <div className="mt-6 rounded-2xl border border-border/60 bg-background/50 p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium">Engagement mix</p>
            <p className="text-xs text-muted-foreground">
              Active vs paused engagements
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            {pieData.map((entry, index) => (
              <span key={entry.name} className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: palette[index % palette.length] }}
                />
                {entry.name}
              </span>
            ))}
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                contentStyle={{
                  background: "var(--popover)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  color: "var(--foreground)",
                }}
              />
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={4}
              >
                {pieData.map((_, index) => (
                  <Cell
                    key={`donut-${index}`}
                    fill={palette[index % palette.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export function Charts({ className }: ChartsProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-border/60 bg-card/60 p-6 shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur",
        className
      )}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Charts
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">
          Insights overview
        </h2>
        <p className="text-sm text-muted-foreground">
          Line, bar, and donut visualizations for analytics dashboards.
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-background/50 p-4">
          <div className="mb-3">
            <p className="text-sm font-medium">Velocity</p>
            <p className="text-xs text-muted-foreground">
              Weekly delivery trend
            </p>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    color: "var(--foreground)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="var(--chart-1)"
                  strokeWidth={3}
                  dot={{ r: 3, fill: "var(--chart-1)" }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-background/50 p-4">
          <div className="mb-3">
            <p className="text-sm font-medium">Workload</p>
            <p className="text-xs text-muted-foreground">
              Distribution by discipline
            </p>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    color: "var(--foreground)",
                  }}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {barData.map((_, index) => (
                    <Cell
                      key={`bar-${index}`}
                      fill={palette[index % palette.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-background/50 p-4 lg:col-span-2">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium">Pipeline mix</p>
              <p className="text-xs text-muted-foreground">
                Active vs paused engagements
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              {pieData.map((entry, index) => (
                <span key={entry.name} className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: palette[index % palette.length] }}
                  />
                  {entry.name}
                </span>
              ))}
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    color: "var(--foreground)",
                  }}
                />
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={4}
                >
                  {pieData.map((_, index) => (
                    <Cell
                      key={`pie-${index}`}
                      fill={palette[index % palette.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
