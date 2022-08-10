import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
	integrations: [preact()],
	site: 'https://bboy114crew.github.io',
	base: '/blog-astro',
	legacy: {
    astroFlavoredMarkdown: true,
  },
});
