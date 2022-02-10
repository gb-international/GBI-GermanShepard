import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'
Vue.use(Router);
Vue.use(VueMeta);


import Home from '@/front/routes/Home.js';
import Resources from '@/front/routes/Resources.js';
import GBIBlog from '@/front/routes/GBIBlog.js';
import AboutUs from '@/front/routes/AboutUs.js';
import ContactUs from '@/front/routes/ContactUs.js';
import ExploreDestination from '@/front/routes/ExploreDestination.js';
import ErrorPage from '@/front/routes/Error.js';
<<<<<<< Updated upstream
=======
import Hotel from '@/front/routes/Hotel.js';
import Banquet from '@/front/routes/Banquet.js';
import Notification from '@/front/routes/Notification.js';
import PaymentLink from '@/front/routes/PaymentLink.js';
>>>>>>> Stashed changes
import User from '@/front/routes/User.js';

export function createRouter() {
    return new Router({
        mode: 'history',
        scrollBehavior() { return { x: 0, y: 0 }; },
        linkActiveClass: "nav-link-active",
        routes : [
            ...Home,
            ...Resources,
            ...GBIBlog,
            ...AboutUs,
            ...Banquet,
            ...ContactUs,
            ...ExploreDestination,
            ...User,
            ...ErrorPage,
        ]
    })
}
