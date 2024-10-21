// import { ViteSSG } from 'vite-ssg';
// import App from './App.vue';
// import router from './router'; // Make sure to import your router
// import { createHead } from '@vueuse/head';

// const head = createHead()
// export const createApp = ViteSSG(
//   App,
//   { routes: router.options.routes }, // Pass routes from your Vue Router
//   ({ app }) => {
//     // No need to mount the app here; ViteSSG handles it
//   }
// );

import { createSSRApp } from 'vue'
import { createHead } from '@vueuse/head'
import router from './router'
import App from './App.vue'

export const createApp = () => {
  const app = createSSRApp(App)
  const head = createHead()
  app.use(head)

  app.use(router)

  return { app, head, router }
}
