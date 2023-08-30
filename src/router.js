import { createRouter, createWebHistory } from 'vue-router'
// import Home from '@/views/Home.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import NotFoundComponent from './pages/404.vue'
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component:About,
    },
    {
        path: '/404',
        name: 'PageNotExist',
        component:NotFoundComponent,
    },
    {
        path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
        redirect: '/404',
    },
  ],
})
