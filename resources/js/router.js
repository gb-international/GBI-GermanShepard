import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'

import AllRoutes from './modules/route';

Vue.use(Router);
Vue.use(VueMeta);

export function createRouter() {
    return new Router({
        mode: 'history',
        scrollBehavior() {
            return { x: 0, y: 0 };
        },
        routes: [
            ...AllRoutes
        ]
    })
}

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.getters.isLoggedIn) {
//             next()
//             return
//         }
//         next('/')
//     } else {
//         next()
//     }
// })

// export default router