import {createRouter, createWebHistory} from 'vue-router'
import PageHome from '../pages/home/index.vue'
import PageDetail from '../pages/detail/index.vue'
import PageGifOwner from '../pages/gifOwner/index.vue'

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
        },
        {
            path: '/detail/:id/:username',
            name: 'PageGifOwner',
            component: PageGifOwner,
        }
    ]
})

export default router
