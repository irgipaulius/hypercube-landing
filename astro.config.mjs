import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://landing.hypercube.lt",
  output: "static",
  build: {
    format: "directory",
  },
});
