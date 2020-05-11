require("./bootstrap"), 
window.Vue = require("vue");
import "v-markdown-editor/dist/index.css";
import Editor from "v-markdown-editor";
Vue.use(Editor);
import VueSession from "vue-session";
Vue.use(VueSession);
import Permissions from "./mixins/Permissions";
Vue.mixin(Permissions);
import Vue from "vue";
import VueCarousel from "@chenfengyuan/vue-carousel";
Vue.use(VueCarousel), Vue.component(VueCarousel.name, VueCarousel), Vue.component("vue-carousel", VueCarousel);
import {
    CarouselPlugin
} from "bootstrap-vue";
Vue.use(CarouselPlugin);
import responsive from "vue-responsive";
Vue.use(responsive);
import Vuex from "vuex";
Vue.use(Vuex);
import storeData from "./store/index";
const store = new Vuex.Store(storeData);
import { filter } from "./filter";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import vueHeadful from "vue-headful";





let token = document.head.querySelector('meta[name="csrf-token"]');




import { routes } from "./routes";

Vue.component("vue-headful", vueHeadful),
Vue.component("admin-main", require("./components/admin/AdminMaster.vue")),
Vue.component("home-main", require("./components/front/layouts/App.vue")),
Vue.component("gbi-navbar", require("./components/front/layouts/Navbar.vue")),
Vue.component("gbi-footer", require("./components/front/layouts/Footer.vue")),
Vue.component("login", require("./components/front/user/Login.vue"));



import {
    Form,
    HasError,
    AlertError
} from "vform";
Vue.component(HasError.name, HasError), Vue.component(AlertError.name, AlertError), window.Form = Form;
import swal from "sweetalert2";
window.swal = swal;


const toast = swal.mixin({
    toast: !0,
    position: "top-end",
    showConfirmButton: !1,
    timer: 3e3
});


window.toast = toast;

const router = new VueRouter({
    mode: "history",
    routes: routes
}),
app = new Vue({
    el: "#app",
    router: router,
    store: store
});