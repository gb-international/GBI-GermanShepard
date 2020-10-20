require('./bootstrap');
import Vue from 'vue';
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import responsive from 'vue-responsive'
import Permissions from './mixins/Permissions';
import VueSession from 'vue-session'
import { routes } from './admin-routes';
import { createStore } from "./admin/store/index"
import VueHtmlToPaper from 'vue-html-to-paper';
import { filter } from './filter'
import swal from 'sweetalert2'
import { Form, HasError, AlertError } from 'vform'


Vue.use(VueSession);
Vue.mixin(Permissions);
Vue.config.productionTip = false;
Vue.use(responsive)
Vue.use(Vuex)
window.$ = window.jQuery = require('jquery');
require('datatables.net');
require('datatables.net-bs');
Vue.use(VueRouter)
const options = {
    name: '_blank',
    specs: [
        'fullscreen=yes',
        'titlebar=yes',
        'scrollbars=yes'
    ],
    styles: [
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        'https://unpkg.com/kidlat-css/css/kidlat.css'
    ]
}
Vue.use(VueHtmlToPaper, options);
const store = new createStore();

Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.prototype.$Form = Form;
// Sweet alert 2
Vue.prototype.$swal = swal;
const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

Vue.prototype.$toast = toast

const router = new VueRouter({
    // mode : 'history',
    routes, // short for `routes: routes`
    mode: 'hash'
})



const app = new Vue({
    el: '#app',
    router,
    store
});

