import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Define the output directory
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"), // Entry point for the build (adjust as necessary)
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@ui": path.resolve(__dirname, "src/components/ui"),
    },
  },
});
