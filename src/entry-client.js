// import { createApp } from 'vue'
// import { createHead } from '@vueuse/head'
// import App from './App.vue'
// import { createRouter } from './router'

// const app = createApp(App)
// const router = createRouter()
// const head = createHead()

// app.use(router)
// app.use(head)

// router.isReady().then(() => {
//   app.mount('#app')
// })

import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import router from "./router";

const app = createApp(App)
// const router = createRouter()
const head = createHead()

app.use(router);
app.use(head);

router.isReady().then(() => {
    app.mount('#app')
})