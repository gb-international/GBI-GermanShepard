
import App from '@/components/escort/App.vue';
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import { createRouter } from './router'
import axios from 'axios';
import Vuex from 'vuex';
import LazyLoadDirective from "@/components/partials/LazyLoadDirective";
import { filter } from "./filter";
import { createStore } from './store'
import EventBus from '@/store/EventBus';
import VueSweetalert2 from 'vue-sweetalert2';
import VueMeta from 'vue-meta';
import api from '@/escort/helpers/api';
import vuecookies from 'vue-cookies';
Object.defineProperty(Vue.prototype, '$api', { value: api })


Vue.use(VueMeta)
Vue.use(VueSweetalert2);
Vue.use(Vuex);
Vue.use(vuecookies)
Vue.prototype.$axios = axios
Vue.prototype.$bus = EventBus
Vue.directive("lazyload", LazyLoadDirective);


Vue.config.productionTip = false;
Vue.component("App", require("@/escort/App.vue").default);


export function createApp() {
    const router = createRouter()
    const store = createStore()
    sync(store, router);
    const app = new Vue({
        store,
        router,
        render: h => h(App)
    })
    return { app, router, store }
}