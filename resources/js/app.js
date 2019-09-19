
require('./bootstrap');
window.Vue = require('vue');

// editor support
import 'v-markdown-editor/dist/index.css';
import Editor from 'v-markdown-editor'
Vue.use(Editor);

// Vue Session
import VueSession from 'vue-session'
Vue.use(VueSession);


///slider
import Vue from 'vue';
import VueCarousel from '@chenfengyuan/vue-carousel';

Vue.use(VueCarousel);
// Or
Vue.component(VueCarousel.name, VueCarousel);
// Or
Vue.component('vue-carousel', VueCarousel);
//slider
import { CarouselPlugin } from 'bootstrap-vue'
Vue.use(CarouselPlugin)


//responsive vue tag
import responsive  from 'vue-responsive'
Vue.use(responsive)


// Support vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from "./store/index"
const store = new Vuex.Store(
    storeData
)
//support moment js
import {filter} from './filter'
// vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from './routes';

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('admin-main', require('./components/admin/AdminMaster.vue'));
Vue.component('home-main', require('./components/front/layouts/FrontMaster.vue'));
Vue.component('navbar',require('./components/front/layouts/Navbar.vue'));
// V-form
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form;
// Sweet alert 2
import swal from 'sweetalert2'
window.swal = swal;
const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

window.toast = toast

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode:'hash',

})



const app = new Vue({
    el: '#app',
    router,
    store,
     

});

