import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head';
// import { ViteSSG } from 'vite-ssg';

const app = createApp(App);
const head = createHead();
app.use(router);
app.use(head)
app.mount('#app')
// export const createApp = ViteSSG(
//     App,
//     {routes},
// )


// import { ViteSSG } from 'vite-ssg';
// import App from './App.vue';
// import router from './router'; // Make sure to import your router

// export const createApp = ViteSSG(
//   App,
//   { routes: router.options.routes }, // Pass routes from your Vue Router
//   ({ app }) => {
//     // No need to mount the app here; ViteSSG handles it
//   }
// );