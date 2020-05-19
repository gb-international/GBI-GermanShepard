
// FrontEnd Component
import FrontHome from './components/front/layouts/FrontHome.vue'

export const routes = [
    // Frontend Route
    {  path:'/', component:FrontHome, },
    { path: '/resources/faq',name:'resources.faq', component:()=> System.import(/*webpackChunkName:"faq"*/ "./components/front/Faq.vue")},
    { path:'/explore-destination', component: ()=> System.import(/*webpackChunkName:"explore"*/ "./components/front/ExploreDestination.vue") },
    { path:'/resources/safety-security', component: ()=> System.import(/*webpackChunkName:"safety"*/ "./components/front/SafetySecurity.vue") },
    { path:'/resources/travel-education', component: ()=> System.import(/*webpackChunkName:"education"*/ "./components/front/TravelEducation.vue") },
    { path:'/resources/encyclopedia', component: ()=> System.import(/*webpackChunkName:"encyclopedia"*/ "./components/front/Encyclopedia/States.vue")},
    { path:'/encyclopedia/:id', component: ()=> System.import(/*webpackChunkName:"encyclopedia-view"*/ "./components/front/Encyclopedia/State-view.vue")},

    { path:'/contact-us',  component: ()=> System.import(/*webpackChunkName:"contact-us"*/ "./components/front/ContactUs.vue") },    
    { path:'/about-us/our-story', component: ()=> System.import(/*webpackChunkName:"our-story"*/ "./components/front/OurStory.vue") },
    { path:'/about-us/how-we-work', component: ()=> System.import(/*webpackChunkName:"how-we-work"*/ "./components/front/HowWework.vue")  },
    { path:'/about-us/join-our-team', component: ()=> System.import(/*webpackChunkName:"join-tour-team"*/ "./components/front/JoinOurTeam.vue")},
    { path:'/about-us/image-gallery', component: ()=> System.import(/*webpackChunkName:"image-gallery"*/ "./components/front/ImageGallery.vue")},
    { path:'/explore-list', component: ()=> System.import(/*webpackChunkName:"explore-list-by-id"*/ "./components/front/ExploreList.vue") },

    { path:'/explore-detail/:id', component:()=> System.import(/*webpackChunkName:"explore-details"*/ "./components/front/ExploreDetail.vue") },
    { path:'/lists', component:()=> System.import(/*webpackChunkName:"lists"*/ "./components/front/ListItinerary.vue") },
    { path:'/search', component:()=> System.import(/*webpackChunkName:"search"*/ "./components/front/Search.vue") },
    { path:'/user-information', component:()=> System.import(/*webpackChunkName:"user-info"*/ "./components/front/user/User-information.vue") },
    { path:'/dashboard', component:()=> System.import(/*webpackChunkName:"dashboard"*/ "./components/front/user/Dashboard.vue") },
    { path:'/tour-list',component:()=> System.import(/*webpackChunkName:"tour-list"*/ "./components/front/user/Tour-list.vue") },
    { path:'/profile-edit', component:()=> System.import(/*webpackChunkName:"profile-edit"*/ "./components/front/user/Profile_edit.vue") },

    { path:'/adventure-tour', component:()=> System.import(/*webpackChunkName:"adventure-tour"*/ "./components/front/home-pages/Adventure-tour.vue") },
    { path:'/upcoming-tour', component:()=> System.import(/*webpackChunkName:"upcoming-toup"*/ "./components/front/home-pages/Upcoming-tour.vue") },
    { path:'/asia-tour', component:()=> System.import(/*webpackChunkName:"asia"*/ "./components/front/home-pages/Asia.vue") },
    { path:'/europe-tour', component:()=> System.import(/*webpackChunkName:"europe"*/ "./components/front/home-pages/Europe.vue") },
    { path:'/popular-tour', component:()=> System.import(/*webpackChunkName:"popular-tour"*/ "./components/front/home-pages/Popular-tour.vue") },
    { path:'/usa-tour',component:()=> System.import(/*webpackChunkName:"usa"*/ "./components/front/home-pages/Usa.vue") },

    
    { path:'*',component:()=> System.import(/*webpackChunkName:"404"*/ "./components/front/error/404.vue") }

];


