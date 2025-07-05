import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://LetMeFixThis4U.github.io",
  base: "portefolio",
  trailingSlash: "always",
  integrations: [tailwind()],
});
