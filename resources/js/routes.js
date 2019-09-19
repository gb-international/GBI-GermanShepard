import AdminHome from './components/admin/AdminHome.vue'

// FrontEnd Component
import FrontHome from './components/front/layouts/FrontHome.vue'
import ExploreList from './components/front/ExploreList.vue'
import ExploreDetail from './components/front/ExploreDetail.vue'
import ListItinerary from './components/front/ListItinerary.vue'
import Search from './components/front/Search.vue'
import ExploreDestination from './components/front/ExploreDestination.vue'
import Faq from './components/front/Faq.vue'
import SafetySecurity from './components/front/SafetySecurity.vue'
import TravelEducation from './components/front/TravelEducation.vue'
import OurStory from './components/front/OurStory.vue'
import HowWework from './components/front/HowWework.vue'
import JoinOurTeam from './components/front/JoinOurTeam.vue'
import ContactUs from './components/front/ContactUs.vue'
import Login from './components/front/user/Login.vue'
import Dashboard from './components/front/user/Dashboard.vue'
import TourList from './components/front/user/Tour-list.vue'
import Logout from './components/front/user/Logout.vue'

// ADMIN PANEL
import AdminDashboard from './components/admin/Dashboard.vue'


// Itinerary
import ItineraryList from './components/admin/itinerary/List-itinerary.vue'
import AddItinerary from './components/admin/itinerary/New-itinerary.vue'
import EditItinerary from './components/admin/itinerary/Edit-itinerary.vue'
import EditItineraryday from './components/admin/itinerary/Edit-itineraryday.vue'
import AddDayItineraryList from './components/admin/itinerary/Newdayitinerary.vue'
import ItineraryView from './components/admin/itinerary/View-itinerary.vue'
import ItineraryDepartment from './components/admin/itinerary/Department-itinerary.vue'
import ItineraryOld from './components/admin/itinerary/Old-itinerary.vue'
import ItineraryDay from './components/admin/itinerary/Day-itinerary.vue'


//escort
import EscortList from './components/admin/escort/List-escort.vue'
import AddEscort from './components/admin/escort/New-escort.vue'
import EditEscort from './components/admin/escort/Edit-escort.vue'


// Client
import Clients from './components/admin/client/List-client.vue'
import AddClient from './components/admin/client/New-client.vue'


//Hotel
import HotelList from './components/admin/hotel/List-hotel.vue'
import HotelAdd from './components/admin/hotel/New-hotel.vue' 


//Transport
import TransportList from './components/admin/transport/List-transport.vue'
import TransportAdd from './components/admin/transport/New-transport.vue'


//SALES department
import SalesList from './components/admin/sales/List-sale.vue'
import SalesAdd from './components/admin/sales/New-sale.vue'




export const routes = [
    {
        path:'/admin/dashboard',
        component:AdminDashboard
    },
    
      // itinerary
    {
        path:'/itinerary-list',
        component:ItineraryList
    },
    {
        path:'/add-itinerary',
        component:AddItinerary
    },
    {
        path:'/add-itinerary-old',
        component:ItineraryOld
    },
    
    {
        path:'/edit-itinerary/:itineraryid',
        component:EditItinerary
    },
    {
        path:'/edit-itineraryday/:itineraryid',
        component:EditItineraryday
    },
    {
        path:'/add-days-itinerary/:id',
        component:AddDayItineraryList
    },
    {
        path:'/view-itinerary/:id',
        component:ItineraryView
    },
    {
        path:'/itinerary-department',
        component:ItineraryDepartment
    },

    {
        path:'/day',
        component:ItineraryDay
    },
    //Escort
    {
        path:'/escort-list',
        component:EscortList
    }, 
    {
        path:'/add-escort',
        component:AddEscort
    },
    {
        path:'/edit-escort/:id',
        component:EditEscort
    },
    {
        path:'/client-list',
        component:Clients
    },
    {
        path:'/add-client',
        component:AddClient
    },

    //Hotel
    {
        path:'/hotel-list',
        component:HotelList
    },
    {
        path:'/add-hotel',
        component:HotelAdd
    },

    // Transport
    {
        path:'/transport-list',
        component:TransportList
    },
    {
        path:'/add-transport',
        component:TransportAdd
    },
    //Sales Department
    {
        path:'/sales-department-list',
        component:SalesList
    },
    {
        path:'/add-sales-department',
        component:SalesAdd
    },
     

    // Frontend Route
    {
        path:'/',
        component:FrontHome
    },
    {
        path:'/explore-list',
        component:ExploreList
    },
    {
        path:'/explore-datail/:id',
        component:ExploreDetail
    },
    {
        path:'/lists',
        component:ListItinerary
    },
    {
        path:'/search',
        component:Search
    },
    {
        path:'/explore-destination',
        component:ExploreDestination
    },
    {
        path:'/faq',
        component:Faq
    },
    {
        path:'/safety-security',
        component:SafetySecurity
    },
    {
       path:'/travel-education',
       component:TravelEducation 
    },
    {
        path:'/our-story',
        component:OurStory
    },
    {
        path:'/how-we-work',
        component:HowWework
    },
    {
        path:'/join-our-team',
        component:JoinOurTeam
    },
    {
        path:'/contact-us',
        component:ContactUs
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/dashboard',
        component:Dashboard
    },
    {
        path:'/tour-list',
        component:TourList
    },
    {
        path:'/logout',
        component:Logout
    }

];


