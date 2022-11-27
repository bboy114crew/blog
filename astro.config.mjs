import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
	integrations: [preact()],
	site: 'https://bboy114crew.github.io',
	base: '/',
	legacy: {
    astroFlavoredMarkdown: true,
  },
});
