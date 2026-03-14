import type { PropsWithChildren, ReactNode } from "react";

export function StorySurface({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function StoryPage({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`mx-auto max-w-6xl px-6 py-10 ${className}`}>
      {children}
    </div>
  );
}

export function StoryStack({ children }: PropsWithChildren) {
  return <div className="flex w-full max-w-5xl flex-col gap-6">{children}</div>;
}

export function StoryGrid({ children }: PropsWithChildren) {
  return <div className="grid gap-6 md:grid-cols-2">{children}</div>;
}

export function SectionLabel({ children }: PropsWithChildren) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{children}</p>;
}

export function PlaceholderImage({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-sky-200 text-sm font-medium text-sky-900 ${className}`}
    >
      {label}
    </div>
  );
}

export function InlineLabelValue({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm text-slate-600">
      <span>{label}</span>
      <span className="font-medium text-slate-900">{value}</span>
    </div>
  );
}
