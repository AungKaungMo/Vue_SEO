// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { ViteSSG } from 'vite-ssg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  ssgOptions: {
    // SSG options, e.g., exclude specific routes, formatting, etc.
    script: 'async',  // Script loading strategy
    formatting: 'minify',  // Minifies the generated HTML
  },
});
