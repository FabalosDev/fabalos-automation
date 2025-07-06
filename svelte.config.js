import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    // You can add other options here like:
    // paths: { base: '/your-subpath' },
    // prerender: { entries: [] },
  }
};