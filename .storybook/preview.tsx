import { useEffect, type ReactNode } from "react";
import type { Preview } from "@storybook/react-vite";
import "../src/index.css";

function ThemeFrame({
  children,
  isDark,
}: {
  children: ReactNode;
  isDark: boolean;
}) {
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.body.classList.toggle("dark", isDark);

    return () => {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    };
  }, [isDark]);

  return (
    <div className={isDark ? "min-h-screen bg-slate-950 p-6 text-white" : "min-h-screen bg-slate-50 p-6 text-slate-900"}>
      {children}
    </div>
  );
}

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global color theme",
      defaultValue: "light",
      toolbar: {
        icon: "mirror",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.theme === "dark";

      return (
        <ThemeFrame isDark={isDark}>
          <Story />
        </ThemeFrame>
      );
    },
  ],
  parameters: {
    layout: "padded",
    controls: { expanded: true },
    docs: {
      source: {
        state: "open",
      },
    },
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas", value: "#f8fafc" },
        { name: "white", value: "#ffffff" },
        { name: "slate", value: "#0f172a" }
      ]
    }
  }
};

export default preview;
