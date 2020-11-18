
import App from '@/front/pages/layouts/App.vue';
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import { createRouter } from './router'
import axios from 'axios';
import Vuex from 'vuex';
import vueHeadful from "vue-headful";
import LazyLoadDirective from "@/front/components/LazyLoadDirective";
import { filter } from "./filter";
import { createStore } from './store'
import EventBus from '@/front/store/EventBus';
import VueSweetalert2 from 'vue-sweetalert2';
import VueMeta from 'vue-meta';
import api from '@/front/helpers/api';
import vuecookies from 'vue-cookies';
import Viewer from 'v-viewer'
Object.defineProperty(Vue.prototype, '$api', { value: api })


Vue.use(VueMeta)
Vue.use(VueSweetalert2);
Vue.use(Vuex);
Vue.use(Viewer)
Vue.use(vuecookies)
Vue.prototype.$axios = axios
Vue.prototype.$bus = EventBus
Vue.directive("lazyload", LazyLoadDirective);


// client side js
if (process.window == 'undefined') {
    window.$ = window.jQuery = require('jquery')
    const token = localStorage.token;
    if(token){
        Vue.prototype.$axios.defaults.headers.common['Authorization'] = token
    }
}

Vue.config.productionTip = false;
Vue.component("vue-headful", vueHeadful);

Vue.component("ImageSpinner", require("@/front/components/ImageSpinner.vue").default);
Vue.component("gbi-footer", require("@/front/pages/layouts/Footer.vue").default);


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