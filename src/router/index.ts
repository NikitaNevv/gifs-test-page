import {createRouter, createWebHistory} from 'vue-router'
//@ts-ignore
import PageHome from '../pages/home/index.vue'
//@ts-ignore

import PageDetail from '../pages/detail/index.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'PageHome',
            component: PageHome,
        },
        {
            path: '/detail/:id',
            name: 'PageDetail',
            component: PageDetail,
        }
    ]
})

export default router
