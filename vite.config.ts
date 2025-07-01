import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
      svgr({
    svgrOptions: {
      exportType: "default",
      ref: true,
      svgo: false,
      titleProp: true,
      icon: true,
    },
    include: "**/*.svg?react",
  }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
