
// FrontEnd Component
import FrontHome from './components/front/layouts/FrontHome.vue'
import ExploreList from './components/front/ExploreList.vue'
import ExploreDetail from './components/front/ExploreDetail.vue'
import ListItinerary from './components/front/ListItinerary.vue'
import Search from './components/front/Search.vue'
import ExploreDestination from './components/front/ExploreDestination.vue'
import Faq from './components/front/Faq.vue'
import Encyclopedia from './components/front/Encyclopedia/States.vue'
import ViewEncyclopedia from './components/front/Encyclopedia/State-view.vue'

import SafetySecurity from './components/front/SafetySecurity.vue'
import TravelEducation from './components/front/TravelEducation.vue'
import OurStory from './components/front/OurStory.vue'
import HowWework from './components/front/HowWework.vue'
import JoinOurTeam from './components/front/JoinOurTeam.vue'
import ImageGallery from './components/front/ImageGallery.vue'
import ContactUs from './components/front/ContactUs.vue'
import Login from './components/front/user/Login.vue'
import Dashboard from './components/front/user/Dashboard.vue'
import TourList from './components/front/user/Tour-list.vue'
import ProfileEdit from './components/front/user/Profile_edit.vue'

// Home Page Card Links

import AdventureTour from './components/front/home-pages/Adventure-tour.vue'
import Asia from './components/front/home-pages/Asia.vue'
import Europe from './components/front/home-pages/Europe.vue'
import PopularTour from './components/front/home-pages/Popular-tour.vue'
import UpcomingTour from './components/front/home-pages/Upcoming-tour.vue'
import Usa from './components/front/home-pages/Usa.vue'


// Home page Card link End
// 404
import Error404 from './components/front/error/404.vue'


export const routes = [
    // Frontend Route
    {  path:'/', component:FrontHome, },
    { path: '/resources/faq',name:'resources.faq', component: Faq },
    { path:'/explore-destination', component:ExploreDestination },
    { path:'/resources/safety-security', component:SafetySecurity },
    { path:'/resources/travel-education', component:TravelEducation },
    { path:'/resources/encyclopedia', component:Encyclopedia},
    { path:'/encyclopedia/:id', component:ViewEncyclopedia},

    { path:'/contact-us',  component:ContactUs },    
    { path:'/about-us/our-story', component:OurStory },
    { path:'/about-us/how-we-work', component:HowWework  },
    { path:'/about-us/join-our-team', component:JoinOurTeam },
    { path:'/about-us/image-gallery', component:ImageGallery },
    { path:'/explore-list', component:ExploreList },
    { path:'/explore-detail/:id', component:ExploreDetail },
    { path:'/lists', component:ListItinerary },
    { path:'/search', component:Search },
    { path:'/dashboard', component:Dashboard },
    { path:'/tour-list',component:TourList },
    { path:'/profile-edit', component:ProfileEdit },
    { path:'/adventure-tour', component:AdventureTour },
    { path:'/upcoming-tour', component:UpcomingTour },
    { path:'/asia-tour', component:Asia },
    { path:'/europe-tour', component:Europe },
    { path:'/popular-tour', component:PopularTour },
    { path:'/usa-tour',component:Usa },

    
    { path:'*', component:Error404 }

];


