import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	integrations: [preact()],
	site: 'https://bboy114crew.github.io',
	base: '/blog-astro'
});
