// src/router/index.ts
import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes,
});

export default router;
