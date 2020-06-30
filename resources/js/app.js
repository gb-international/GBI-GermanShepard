
import App from './components/front/layouts/App.vue';
import Vue from 'vue';
import router from './router';
import axios from 'axios';
import Vuex from 'vuex';
import vueHeadful from "vue-headful";
import LazyLoadDirective from "./components/partials/LazyLoadDirective";
import { filter } from "./filter";
import storeData from "./store/index";
import EventBus from './store/EventBus';
import VueSweetalert2 from 'vue-sweetalert2';


Vue.use(VueSweetalert2);
Vue.use(Vuex);
Vue.prototype.$axios = axios
Vue.prototype.$bus = EventBus
Vue.directive("lazyload", LazyLoadDirective);
const store = new Vuex.Store(storeData);

if (process.window == 'undefined') {
    window.$ = window.jQuery = require('jquery')
    const token = localStorage.token;
    console.log(token);
    if(token){
        Vue.prototype.$axios.defaults.headers.common['Authorization'] = token
    }
}

Vue.config.productionTip = false;
Vue.component("vue-headful", vueHeadful);
Vue.component("ImageSpinner", require("./components/partials/ImageSpinner.vue").default);
Vue.component("gbi-footer", require("./components/front/layouts/Footer.vue").default);




export default new Vue({
    router,
    store,
    render: h => h(App)
});