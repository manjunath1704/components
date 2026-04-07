import * as React from "react"
import { CloudUpload, FileText, Trash2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type UploadStatus = "queued" | "uploading" | "complete" | "error"

type UploadItem = {
  id: string
  file: File
  status: UploadStatus
  progress: number
}

export type FileUploaderProps = {
  title?: string
  description?: string
  helperText?: string
  accept?: string
  maxFiles?: number
  maxSizeMB?: number
  labels?: Partial<FileUploaderLabels>
  messages?: Partial<FileUploaderMessages>
  className?: string
}

const statusStyles: Record<UploadStatus, string> = {
  queued:
    "border-border/60 bg-background/60 text-muted-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.06)]",
  uploading:
    "border-sky-500/40 bg-sky-500/15 text-sky-600 dark:text-sky-300 shadow-[0_0_0_1px_rgba(14,165,233,0.22)]",
  complete:
    "border-emerald-500/45 bg-emerald-500/20 text-emerald-700 dark:text-emerald-200 shadow-[0_0_0_1px_rgba(16,185,129,0.22)]",
  error:
    "border-rose-500/45 bg-rose-500/20 text-rose-700 dark:text-rose-200 shadow-[0_0_0_1px_rgba(244,63,94,0.22)]",
}

const statusLabels: Record<UploadStatus, string> = {
  queued: "Queued",
  uploading: "Uploading",
  complete: "Complete",
  error: "Error",
}

export type FileUploaderLabels = {
  browseButton: string
  dropTitle: string
  dropSubtitle: string
  uploadAll: string
  clearAll: string
  uploadedSummary: (complete: number, total: number) => string
  statusLabels: Partial<Record<UploadStatus, string>>
}

export type FileUploaderMessages = {
  maxFiles: (maxFiles: number) => string
  invalidType: (name: string) => string
  maxSize: (name: string, maxSizeMB: number) => string
}

function formatBytes(bytes: number) {
  if (bytes === 0) return "0 B"
  const k = 1024
  const sizes = ["B", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`
}

export function FileUploader({
  title = "Upload files",
  description = "Drop files or browse to add new assets.",
  helperText = "Accepted: PDF, PNG, JPG up to 25MB each.",
  accept = ".pdf,.png,.jpg,.jpeg",
  maxFiles = 5,
  maxSizeMB = 25,
  labels,
  messages,
  className,
}: FileUploaderProps) {
  const mergedLabels: FileUploaderLabels = {
    browseButton: "Browse files",
    dropTitle: "Drop files here",
    dropSubtitle: "or click to browse your device",
    uploadAll: "Upload all",
    clearAll: "Clear all",
    uploadedSummary: (complete, total) =>
      `${complete} of ${total} files uploaded`,
    statusLabels: {},
    ...labels,
    statusLabels: { ...labels?.statusLabels },
  }

  const mergedMessages: FileUploaderMessages = {
    maxFiles: (count) => `Only ${count} files can be uploaded at once.`,
    invalidType: (name) => `${name} is not an accepted file type.`,
    maxSize: (name, maxSize) => `${name} exceeds ${maxSize}MB.`,
    ...messages,
  }

  const [items, setItems] = React.useState<UploadItem[]>([])
  const [isDragging, setIsDragging] = React.useState(false)
  const [errors, setErrors] = React.useState<string[]>([])
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const timeouts = React.useRef<number[]>([])

  React.useEffect(
    () => () => {
      timeouts.current.forEach((id) => window.clearTimeout(id))
    },
    []
  )

  const handleFiles = (files: FileList | File[]) => {
    const fileArray = Array.from(files)
    const nextErrors: string[] = []

    const remainingSlots = Math.max(0, maxFiles - items.length)
    const incoming = fileArray.slice(0, remainingSlots)

    if (fileArray.length > remainingSlots) {
      nextErrors.push(mergedMessages.maxFiles(maxFiles))
    }

    const accepted = incoming.filter((file) => {
      if (accept) {
        const types = accept
          .split(",")
          .map((type) => type.trim().toLowerCase())
        const matches = types.some((type) => {
          if (type.startsWith(".")) {
            return file.name.toLowerCase().endsWith(type)
          }
          return file.type.toLowerCase() === type
        })
        if (!matches) {
          nextErrors.push(mergedMessages.invalidType(file.name))
          return false
        }
      }
      if (file.size > maxSizeMB * 1024 * 1024) {
        nextErrors.push(mergedMessages.maxSize(file.name, maxSizeMB))
        return false
      }
      return true
    })

    if (accepted.length) {
      const mapped = accepted.map((file) => ({
        id: crypto.randomUUID(),
        file,
        status: "queued" as UploadStatus,
        progress: 0,
      }))
      setItems((prev) => [...prev, ...mapped])
    }

    setErrors(nextErrors)
  }

  const startUpload = () => {
    setItems((prev) =>
      prev.map((item) =>
        item.status === "queued"
          ? { ...item, status: "uploading", progress: 5 }
          : item
      )
    )

    timeouts.current.forEach((id) => window.clearTimeout(id))
    timeouts.current = []

    items.forEach((item) => {
      if (item.status !== "queued") return
      const tick = window.setInterval(() => {
        setItems((prev) =>
          prev.map((current) => {
            if (current.id !== item.id) return current
            if (current.status !== "uploading") return current
            const next = Math.min(100, current.progress + 18)
            return {
              ...current,
              progress: next,
              status: next >= 100 ? "complete" : current.status,
            }
          })
        )
      }, 250)
      timeouts.current.push(tick)
    })
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)
    if (event.dataTransfer.files.length > 0) {
      handleFiles(event.dataTransfer.files)
    }
  }

  return (
    <div
      className={cn(
        "rounded-[28px] border border-border/60 bg-card/60 px-6 py-8 shadow-[0_26px_70px_-45px_rgba(5,8,20,0.85)] backdrop-blur",
        className
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {title}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            {description}
          </h2>
          <p className="text-xs text-muted-foreground">{helperText}</p>
        </div>
        <Button onClick={() => inputRef.current?.click()}>
          {mergedLabels.browseButton}
        </Button>
      </div>

      <div
        onDrop={onDrop}
        onDragOver={(event) => {
          event.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        className={cn(
          "mt-6 flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border/70 bg-background/40 px-6 py-12 text-center transition",
          isDragging && "border-primary/60 bg-primary/10"
        )}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">
          <CloudUpload className="size-5" />
        </div>
        <div>
          <p className="text-sm font-medium">{mergedLabels.dropTitle}</p>
          <p className="text-xs text-muted-foreground">
            {mergedLabels.dropSubtitle}
          </p>
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple
        className="hidden"
        onChange={(event) => {
          if (event.target.files) {
            handleFiles(event.target.files)
            event.target.value = ""
          }
        }}
      />

      {errors.length > 0 ? (
        <div className="mt-4 space-y-1 text-xs text-rose-500">
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      ) : null}

      {items.length > 0 ? (
        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/60 bg-background/60 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-muted/60 text-muted-foreground">
                  <FileText className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">{item.file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatBytes(item.file.size)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge
                  className={cn(
                    "rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.18em]",
                    statusStyles[item.status]
                  )}
                >
                  {mergedLabels.statusLabels[item.status] ??
                    statusLabels[item.status]}
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                  aria-label="Remove file"
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
              <div className="w-full">
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted/60">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all",
                      item.status === "error"
                        ? "bg-rose-500/70"
                        : item.status === "complete"
                          ? "bg-emerald-500/80"
                          : "bg-primary/70"
                    )}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {item.status === "complete"
                    ? "Upload complete"
                    : item.status === "error"
                      ? "Upload failed"
                      : `${item.progress}% uploaded`}
                </p>
              </div>
            </div>
          ))}

          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              {mergedLabels.uploadedSummary(
                items.filter((item) => item.status === "complete").length,
                items.length
              )}
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => setItems([])}>
                {mergedLabels.clearAll}
              </Button>
              <Button onClick={startUpload}>{mergedLabels.uploadAll}</Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
