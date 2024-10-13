import { defineConfig } from "vite";
import path from "path";
import nunjucks from "vite-plugin-nunjucks";

export default defineConfig({
  base: "/vite-project-template",
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  root: path.resolve(__dirname, "src"),
  plugins: [nunjucks()],
  server: {
    port: 4040,
    open: true,
  },
});
