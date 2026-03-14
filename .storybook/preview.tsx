import type { Preview } from "@storybook/react-vite";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    layout: "padded",
    controls: { expanded: true },
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
