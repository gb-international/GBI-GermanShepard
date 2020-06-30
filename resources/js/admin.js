
require('./bootstrap');
import Vue from 'vue';

// editor support
// import 'v-markdown-editor/dist/index.css';
import Editor from 'v-markdown-editor'
Vue.use(Editor);

// Vue Session
import VueSession from 'vue-session'
Vue.use(VueSession);

import Permissions from './mixins/Permissions';
Vue.mixin(Permissions);
Vue.config.productionTip = false;
//responsive vue tag
import responsive from 'vue-responsive'
Vue.use(responsive)

import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.use(CKEditor);
// Support vuex
import Vuex from 'vuex'
Vue.use(Vuex)


window.$ = window.jQuery = require('jquery');

require('datatables.net');
require('datatables.net-bs');





import storeData from "./store/index"
const store = new Vuex.Store(
    storeData
)
//support moment js
import { filter } from './filter'
// vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { routes } from './admin-routes';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);




// V-form
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.prototype.$Form = Form;
// Sweet alert 2
import swal from 'sweetalert2'
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

