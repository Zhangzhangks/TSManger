import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
    { path: '/', redirect: '/home' },
    { path: '/about', component: () => import('@/views/about.vue') },
    { path: '/home', component: () => import('@/views/home.vue') },
    { path: '/login', component: () => import('@/views/login.vue') },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router