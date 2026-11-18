import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The site is served from https://harshil8201.github.io/portfolio/,
// so every asset URL needs the /portfolio/ prefix.
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
});
