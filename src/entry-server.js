import { createSSRApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import { renderToString } from "@vue/server-renderer";
import router from "./router";

export async function render(url) {
    const app = createSSRApp(App);
    const head = createHead();

    app.use(router);
    app.use(head);

    router.push(url);
    await router.isReady();

    const appContent = await renderToString(app);
    const headTags = head.renderHeadToString();

    return {appContent, headTags}
}