import { defineConfig } from "vite";
import nunjucks from "vite-plugin-nunjucks";

export default defineConfig({
  base: "/vite-project-template",
  build: {
    outDir: "dist",
  },
  root: "./src",
  plugins: [nunjucks()],
  server: {
    port: 4040,
    open: true,
  },
});
