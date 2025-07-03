import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/default-app',
    name: 'Default App',
    component: () => import('./00-default-app/App.vue'),
  },
  {
    path: '/single-component',
    name: 'Single Component',
    component: () => import('./01-single-component/App.vue'),
  },
  {
    path: '/multi-component',
    name: 'Multi-Component',
    component: () => import('./02-multi-component/App.vue'),
  },
  {
    path: '/vuetify',
    name: 'Vuetify',
    component: () => import('./07-vuetify/App.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
