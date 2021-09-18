require('./bootstrap');
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import { createRouter } from './routes/Index.js'
import axios from 'axios';
import Vuex from 'vuex';
import vueHeadful from "vue-headful";
import LazyLoadDirective from "@/front/components/LazyLoadDirective";
import { filter } from "./filter";
import { createStore } from './store'
import EventBus from '@/front/store/EventBus';
import VueSweetalert2 from 'vue-sweetalert2';
import { BootstrapVue,TablePlugin } from 'bootstrap-vue';
import swal from 'sweetalert2';
import VueMeta from 'vue-meta';
import vuecookies from 'vue-cookies';
import UniversalSocialauth from 'universal-social-auth';
import App from '@/front/pages/layouts/App.vue';
import VueGtag from "vue-gtag";

import api from '@/front/helpers/api';
Object.defineProperty(Vue.prototype, '$api', { value: api })


Vue.use(VueMeta)
Vue.use(VueSweetalert2);
Vue.use(Vuex);
Vue.use(vuecookies)
Vue.prototype.$axios = axios
Vue.prototype.$bus = EventBus
Vue.directive("lazyload", LazyLoadDirective);

// bootstrapvue
Vue.use(BootstrapVue);
Vue.use(TablePlugin);
// end bootstrapvue


// client side js
if (process.window == 'undefined') {
    window.$ = window.jQuery = require('jquery')
    const token = localStorage.token;
    if(token){
        Vue.prototype.$axios.defaults.headers.common['Authorization'] = token
    }
}

Vue.config.productionTip = false;

//Dsiabled Console messages
Vue.config.devtools = false;
Vue.config.debug = false;
Vue.config.silent = true;
console.log = function() {};
// End


Vue.component("vue-headful", vueHeadful);
Vue.component("ImageSpinner", require("@/front/components/ImageSpinner.vue").default);
Vue.component("gbi-footer", require("@/front/pages/layouts/Footer.vue").default);
Vue.component("front", require("@/front/pages/layouts/App.vue").default);


const router = createRouter();
const store = createStore();
// Sweet alert 2
Vue.prototype.$swal = swal;
const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
Vue.prototype.$toast = toast;
Vue.prototype.$gbiAssets = 'https://gbi-assets.s3.ap-south-1.amazonaws.com';
sync(store, router);

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (vuecookies.get('access_token') == null) {
            next({
                path: '/',
                name: 'home' 
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
});

const options = {
  providers: {
    // github: {
    //   clientId: '78bfc07e1f25b5e22c26',
    //   redirectUri: 'https://diadal.com.ng/auth/github/callback'
    // },
    // google: {
    //   clientId: '***************',
    //   redirectUri: 'https://myapp.com/auth/google/callback'
    // },
    facebook: {
      clientId: '926183941276141',
      redirectUri: 'http://localhost:8000/auth/facebook/callback'
    },
    // twitter: {
    //   url: 'https://myapp.com/auth/twitter',
    //   clientId: '********',
    //   redirectUri: 'https://myapp.com/auth/twitter/callback'
    // }
  }
}

const Oauth = new UniversalSocialauth(axios, options);
Vue.prototype.$Oauth = Oauth

Vue.use(VueGtag, {
  config: { id: "UA-138734768-1" }
}, router);

const app = new Vue({
    //el:'#app',
    store,
    router,
    render: h => h(App)
}).$mount('#app')


