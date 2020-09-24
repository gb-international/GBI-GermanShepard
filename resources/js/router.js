import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/front/layouts/FrontHome.vue'
import faq from  './components/front/Resources/Faq.vue'
import ExploreDestination from  './components/front/Explore/ExploreDestination.vue'
import SafetySecurity from  './components/front/Resources/SafetySecurity.vue'
import TravelEducation from  './components/front/Resources/TravelEducation.vue'
import States from  './components/front/Encyclopedia/States.vue'
import StateView from  './components/front/Encyclopedia/State-view.vue'
import ContactUs from  './components/front/ContactUs/ContactUs.vue'
import OurStory from  './components/front/AboutUs/OurStory.vue'
import HowWework from  './components/front/AboutUs/HowWework.vue'
import JoinOurTeam from  './components/front/AboutUs/JoinOurTeam.vue'
import ImageGallery from  './components/front/AboutUs/ImageGallery.vue'
import ExploreList from  './components/front/Explore/ExploreList.vue'
import ExploreDetail from  './components/front/Explore/ExploreDetail.vue'
import UserInformation from  './components/front/user/User-information.vue'
import Dashboard from  './components/front/user/Dashboard.vue'
import ProfileEdit from  './components/front/user/Profile_edit.vue'
import UpdatePassword from  './components/front/user/UpdatePassword.vue'
import ViewGroup from  './components/front/user/group/GroupView.vue'
import TourDetail from  './components/front/user/tour/Tour-detail.vue'
import TourList from  './components/front/user/tour/Tour-list.vue'
import TourPayment from  './components/front/user/tour/Tour-payment.vue'
import PaymentMode from  './components/front/user/tour/Payment-mode.vue'
import Error404 from  './components/front/error/404.vue'
import PaymentCancel from  './components/front/extra/PaymentCancel.vue'
import PaymentSuccess from  './components/front/extra/PaymentSuccess.vue'

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home, name: 'Home' },
        { path: '/resources/faq', component: faq },
        { path: '/explore-destination', component: ExploreDestination },
        { path: '/resources/safety-security', component: SafetySecurity },
        { path: '/resources/travel-education', component:TravelEducation },
        { path: '/resources/travel-encyclopedia', component: States },
        { path: '/encyclopedia/:id', component: StateView },
        { path: '/contact-us', component: ContactUs },
        { path: '/about-us/our-story', component: OurStory },
        { path: '/about-us/how-we-work', component: HowWework },
        { path: '/about-us/join-our-team', component: JoinOurTeam },
        { path: '/about-us/image-gallery', component: ImageGallery },
        { path: '/explore-list', component: ExploreList },
        { path: '/explore-detail/:id', component: ExploreDetail },
        { path: '/user-information', component: UserInformation },
        { path: '/dashboard', component: Dashboard },
        { path: '/tour-list', component: TourList },
        { path: '/tour-detail/:id', component: TourDetail },
        { path: '/profile-edit',component: ProfileEdit },
        { path: '/update-password',component: UpdatePassword },
        { path: '/group-member/:id',component: ViewGroup },
        { path: '/tour-payment/:id', component: TourPayment },
        { path: '/payment-mode/:id', component: PaymentMode },
        { path: '/payment-cancel', component: PaymentCancel },
        { path: '/payment-success', component: PaymentSuccess },
        { path: '*', component: Error404 }
    ]
});


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/')
    } else {
        next()
    }
})

export default router