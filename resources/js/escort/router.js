import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import Home from '@/escort/pages/Home.vue'
import Dashboard from '@/escort/pages/Dashboard.vue'
import TourList from '@/escort/pages/TourList.vue'
import Login from '@/escort/pages/Login.vue'
import Sightseeing from '@/escort/pages/Sightseeing.vue'
import Pack from '@/escort/pages/Pack.vue'
import Restaurant from '@/escort/pages/Restaurant.vue'
import Hotel from '@/escort/pages/Hotel.vue'
import Bus from '@/escort/pages/Bus.vue'
import Train from '@/escort/pages/Train.vue'
import Flight from '@/escort/pages/Flight.vue'
import Pax from '@/escort/pages/Pax.vue'

import Error404 from '@/components/front/error/404.vue'
export function createRouter() {
    return new Router({
        // mode: 'history',
        scrollBehavior() { return { x: 0, y: 0 }; },
        routes: [
            { path: '/', component: Home },
            { path: '/login', component: Login },
            { path: '/tour-list', component: TourList },
            { path: '/sightseeing', component: Sightseeing },
            { path: '/dashboard', component: Dashboard },
            
            { path: '/dashbaord/sightseeing', component: Sightseeing },
            { path: '/dashbaord/pack', component: Pack },
            { path: '/dashbaord/restaurant', component: Restaurant },
            { path: '/dashbaord/hotel', component: Hotel },
            { path: '/dashbaord/bus', component: Bus },
            { path: '/dashbaord/train', component: Train },
            { path: '/dashbaord/flight', component: Flight },
            { path: '/dashbaord/pax', component: Pax },
        ]
    })
}
