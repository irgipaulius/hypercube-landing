import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://landing.hypercube.lt",
  output: "static",
  build: {
    format: "directory",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
