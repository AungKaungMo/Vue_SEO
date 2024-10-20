import { ViteSSG } from "vite-ssg";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { createRouter, createWebHistory } from "vue-router";
import { useHead } from "@unhead/vue";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Testing HOME",
      meta: [
        { name: "description", content: "Testing with my home bby" },
        // Open Graph / Facebook
        { property: "og:url", content: "https://helpful-lokum-b47748.netlify.app" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Testing" },
        { property: "og:description", content: "Testing with my home bby" },
        { property: "og:image", content: "https://helpful-lokum-b47748.netlify.app/030f8798-7e96-48d7-a0c2-682a0fbdc6d3.png" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { property: "twitter:domain", content: "helpful-lokum-b47748.netlify.app" },
        { property: "twitter:url", content: "https://helpful-lokum-b47748.netlify.app" },
        { name: "twitter:title", content: "Testing" },
        { name: "twitter:description", content: "Testing with my home bby" },
        { name: "twitter:image", content: "https://helpful-lokum-b47748.netlify.app/030f8798-7e96-48d7-a0c2-682a0fbdc6d3.png" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Welcome to the Home Page</h1></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Testing",
      meta: [
        { name: "description", content: "Testing with my purple" },
        // Open Graph / Facebook
        { property: "og:url", content: "https://helpful-lokum-b47748.netlify.app" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Testing" },
        { property: "og:description", content: "Testing with my purple" },
        { property: "og:image", content: "https://helpful-lokum-b47748.netlify.app/030f8798-7e96-48d7-a0c2-682a0fbdc6d3.png" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { property: "twitter:domain", content: "helpful-lokum-b47748.netlify.app" },
        { property: "twitter:url", content: "https://helpful-lokum-b47748.netlify.app" },
        { name: "twitter:title", content: "Testing" },
        { name: "twitter:description", content: "Testing with my purple" },
        { name: "twitter:image", content: "https://helpful-lokum-b47748.netlify.app/030f8798-7e96-48d7-a0c2-682a0fbdc6d3.png" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>About Us</h1></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const routes = [
  {
    path: "/",
    name: "Home",
    component: _sfc_main$1
  },
  {
    path: "/about",
    name: "About",
    component: _sfc_main
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
const createApp = ViteSSG(
  App,
  { routes: router.options.routes },
  // Pass routes from your Vue Router
  ({ app }) => {
  }
);
export {
  createApp
};
