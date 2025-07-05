import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://letmefixthis4u.github.io',
  base: 'Portefolio',
  publicDir : './public',
  trailingSlash: "always",
  integrations: [tailwind()],
});
