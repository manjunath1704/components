import * as React from "react"
import { Toaster, toast } from "sonner"
import "sonner/dist/styles.css"

export type NotificationOptions = {
  description?: string
}

export const notify = {
  success: (title: string, options?: NotificationOptions) =>
    toast.success(title, options),
  error: (title: string, options?: NotificationOptions) =>
    toast.error(title, options),
  info: (title: string, options?: NotificationOptions) =>
    toast.message(title, options),
  loading: (title: string, options?: NotificationOptions) =>
    toast.loading(title, options),
  dismiss: (id?: string | number) => toast.dismiss(id),
}

export type NotificationsProviderProps = {
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
}

export function NotificationsProvider({
  position = "top-right",
}: NotificationsProviderProps) {
  return (
    <Toaster
      position={position}
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast:
            "rounded-2xl border border-border/60 bg-card/80 text-foreground shadow-[0_18px_45px_-30px_rgba(5,8,20,0.9)] backdrop-blur",
          title: "text-sm font-semibold",
          description: "text-xs text-muted-foreground",
          actionButton:
            "rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground",
          cancelButton:
            "rounded-full border border-border/60 px-3 py-1 text-xs text-foreground",
          closeButton:
            "text-muted-foreground hover:text-foreground transition-colors",
        },
      }}
    />
  )
}
