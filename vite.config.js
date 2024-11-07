import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true, // Optional: Adjusts SVGs to be used as icons
      },
      include: "**/*.svg", // Process all SVG files
    }),

    Pages({
      extensions: ["jsx", "js"], // Define your file extensions
    }),
  ],

  build: {
    outDir: "dist", // Output directory
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
