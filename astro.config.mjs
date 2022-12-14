import { defineConfig } from 'astro/config';

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [image()],
  trailingSlash: 'ignore',
  site: 'https://www.my-site.dev'
});