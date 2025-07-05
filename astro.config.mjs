import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://LetMeFixThis4U.github.io",
  base: "Portefolio",
  trailingSlash: "always",
  integrations: [tailwind()],
});
