// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { ViteSSG } from 'vite-ssg';
import { ssr } from 'vite-plugin-ssr/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ssr()],

});
