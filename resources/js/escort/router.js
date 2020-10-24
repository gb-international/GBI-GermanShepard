import Vue from 'vue'
import Router from 'vue-router'
// import AllRoutes from './modules/route';
Vue.use(Router);

// const Home = () => import(/* webpackChunkName: "Home" */ '@/components/front/layouts/FrontHome.vue');
import Home from '@/escort/pages/Home.vue'
import Dashboard from '@/escort/pages/Dashboard.vue'
import TourList from '@/escort/pages/TourList.vue'
import Login from '@/escort/pages/Login.vue'

import Error404 from '@/components/front/error/404.vue'

export function createRouter() {
    return new Router({
        // mode: 'history',
        scrollBehavior() {
            return { x: 0, y: 0 };
        },
        routes: [
            { path: '/', component: Home },
            { path: '/login', component: Login },
            { path: '/tour-list', component: TourList },
            { 
                path: '/dashboard', 
                component: Dashboard
                // children: [
                //     {
                //         path:'/'
                //     }
                // ]
                
            }

            // { path: '*', component: Error404 }
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