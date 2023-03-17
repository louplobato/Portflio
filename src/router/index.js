import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Photo from '../views/PhotoView.vue'
import YAM from '../views/YouAreMine.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/photo', name: 'photo', component: Photo },
    { path: '/yam', name: 'YAM', component: YAM },

  ]
})

export default router
