// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { ViteSSG } from 'vite-ssg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  ssr: {
    noExternal: ['vue-router'], // Ensure vue-router is not bundled
  },
  server: {
    host: '0.0.0.0', // Allow access from outside localhost
    port: 8008, // Specify the port you want
  },
});
