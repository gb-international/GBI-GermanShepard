import AdminHome from './components/admin/AdminHome.vue'

// ADMIN PANEL
import AdminDashboard from './components/admin/Dashboard.vue'


// Itinerary
import ItineraryList from './components/admin/itinerary/List-itinerary.vue'
import AddItinerary from './components/admin/itinerary/New-itinerary.vue'
import EditItinerary from './components/admin/itinerary/Edit-itinerary.vue'

import ItineraryView from './components/admin/itinerary/View-itinerary.vue'

import AccountItinerary from './components/admin/itinerary/Account-itinerary.vue'
import SendItinerary from './components/admin/itinerary/Send-itinerary.vue'
import AccountItineraryView from './components/admin/itinerary/Account-itinerary-view.vue'
import CalculatorItinerary from './components/admin/itinerary/Calculator-itinerary.vue'


//escort
import EscortList from './components/admin/escort/List-escort.vue'
import AddEscort from './components/admin/escort/New-escort.vue'
import EditEscort from './components/admin/escort/Edit-escort.vue'
import EscortView from './components/admin/escort/View_escort.vue'


//Hotel
import HotelList from './components/admin/hotel/List-hotel.vue'
import HotelAdd from './components/admin/hotel/New-hotel.vue' 
import HotelEdit from './components/admin/hotel/Edit-hotel.vue'
import HotelView from './components/admin/hotel/View_hotel.vue'

//SALES department
import ItineraryFromAccount from './components/admin/sales/ItineraryFromAccount.vue'
import SendDetails from './components/admin/sales/Submit-details.vue'



// School

import Schools from './components/admin/school/List-school.vue'
import SchoolAdd from './components/admin/school/New-school.vue'
import SchoolEdit from './components/admin/school/Edit-school.vue'
import SchoolView from './components/admin/school/View-school.vue'



// School

import Students from './components/admin/student/List-student.vue'
import StudentAdd from './components/admin/student/New-student.vue'
import StudentEdit from './components/admin/student/Edit-student.vue'
import StudentView from './components/admin/student/View-student.vue'


// Tour

import Tours from './components/admin/tour/List-tour.vue'
import TourAdd from './components/admin/tour/New-tour.vue'
import TourEdit from './components/admin/tour/Edit-tour.vue'
import TourView from './components/admin/tour/View-tour.vue'

import Tourtype from './components/admin/tour/tourtype/List-tourtype.vue'
import TourtypeAdd from './components/admin/tour/tourtype/New-tourtype.vue'
import TourtypeEdit from './components/admin/tour/tourtype/Edit-tourtype.vue'

import Tourprogram from './components/admin/website/home/List-tourprogram.vue'
import TourprogramAdd from './components/admin/website/home/New-tourprogram.vue'
import TourprogramEdit from './components/admin/website/home/Edit-tourprogram.vue'



// Booked Tour

import BookedTours from './components/admin/bookedtour/List-reservation.vue'
import BookedEscort from './components/admin/bookedtour/tourmanager/New-tourmanager.vue'
import BookedHotel from './components/admin/bookedtour/New-hotel.vue'
import BookedFlight from './components/admin/bookedtour/New-flight.vue'
import BookedTrain from './components/admin/bookedtour/New-train.vue'
import BookedBus from './components/admin/bookedtour/New-bus.vue'



// Add City 

import ListCity from './components/admin/setting/List-city.vue'
import AddCity from './components/admin/setting/New-city.vue'
// Add State 

import ListState from './components/admin/setting/state/List-state.vue'
import AddState from './components/admin/setting/state/New-state.vue'

// Add Country 

import ListCountry from './components/admin/setting/country/List-country.vue'
import AddCountry from './components/admin/setting/country/New-country.vue'


// Role & permission
import ListRole from './components/admin/setting/role/List-role.vue'
import AddRole from './components/admin/setting/role/New-role.vue'
import EditRole from './components/admin/setting/role/Edit-role.vue'

import ListPermission from './components/admin/setting/permission/List-permission.vue'
import AddPermission from './components/admin/setting/permission/New-permission.vue'
import EditPermission from './components/admin/setting/permission/Edit-permission.vue'

// GBI member

import ListMember from './components/admin/setting/member/List-member.vue'
import AddMember from './components/admin/setting/member/New-member.vue'



// Transport 
// 
//________ Bus 

import BusList from './components/admin/bus/List-bus.vue'
import BusEdit from './components/admin/bus/Edit-bus.vue'
import BusView from './components/admin/bus/View-bus.vue'
import BusAdd from './components/admin/bus/New-bus.vue'

//________ Train 

import TrainList from './components/admin/train/List-train.vue'
import TrainEdit from './components/admin/train/Edit-train.vue'
import TrainView from './components/admin/train/View-train.vue'
import TrainAdd from './components/admin/train/New-train.vue'

//________ Flight 

import FlightList from './components/admin/flight/List-flight.vue'
import FlightEdit from './components/admin/flight/Edit-flight.vue'
import FlightView from './components/admin/flight/View-flight.vue'
import FlightAdd from './components/admin/flight/New-flight.vue'

// ------------ Encyclopedia -----------------// 
import EncyclopediaList from './components/admin/encyclopedia/List-encyclopedia.vue'
import EncyclopediaEdit from './components/admin/encyclopedia/Edit-encyclopedia.vue'
import EncyclopediaView from './components/admin/encyclopedia/View-encyclopedia.vue'
import EncyclopediaAdd from './components/admin/encyclopedia/New-encyclopedia.vue'

import EncyclopediacommentList from './components/admin/encyclopedia/comment/List-encyclopediacomment.vue'
import EncyclopediacommentEdit from './components/admin/encyclopedia/comment/Edit-encyclopediacomment.vue'
import EncyclopediacommentView from './components/admin/encyclopedia/comment/View-encyclopediacomment.vue'
import EncyclopediacommentAdd from './components/admin/encyclopedia/comment/New-encyclopediacomment.vue'

// Home page
import Homepage from './components/admin/website/home/Page.vue'



export const routes = [
    { path:'/', component:AdminDashboard },
      // itinerary
    { path:'/itinerary-list', component:ItineraryList },
    { path:'/add-itinerary', component:AddItinerary },
    { path:'/account-itinerary', component:AccountItinerary },
    
    { path:'/edit-itinerary/:itineraryid', component:EditItinerary },

    { path:'/view-itinerary/:id', component:ItineraryView },
    { path:'/send-itinerary/:id', component:SendItinerary },
    { path:'/account-itinerary-view/:id', component:AccountItineraryView },
    { path:'/calculator/:id', component:CalculatorItinerary },
    //Escort
    { path:'/escort-list', component:EscortList }, 
    { path:'/add-escort', component:AddEscort },
    { path:'/edit-escort/:id', component:EditEscort },
    { path:'/escort-view/:id', component:EscortView },

    //Hotel
    { path:'/hotel-list', component:HotelList },
    { path:'/add-hotel', component:HotelAdd },
    { path:'/edit-hotel/:id', component:HotelEdit },
    { path:'/hotel-view/:id', component:HotelView },

    //Sales Department
    { path:'/itinerary-from-account', component:ItineraryFromAccount },
    { path:'/submit-details/:id', component:SendDetails },


    // School
    { path:'/schools', component:Schools },
    { path:'/schools/:id', component:SchoolEdit },
    { path:'/add-school', component:SchoolAdd },
    { path:'/view-school/:id', component:SchoolView },
    // School
    { path:'/students', component:Students },
    { path:'/students/:id', component:StudentEdit },
    { path:'/add-student', component:StudentAdd },
    { path:'/view-student/:id', component:StudentView },
    
    // Tour
    { path:'/tours', component:Tours },
    { path:'/tours/:id', component:TourEdit },
    { path:'/add-tour', component:TourAdd },
    { path:'/view-tour/:id', component:TourView },
    { path:'/booked-tour/:id', component:BookedTours },
    { path:'/booked-tour-manager/:id', component:BookedEscort },
    { path:'/booked-tour-hotel/:id', component:BookedHotel },
    { path:'/booked-tour-flight/:id', component:BookedFlight },
    { path:'/booked-tour-train/:id', component:BookedTrain },
    { path:'/booked-tour-bus/:id', component:BookedBus },

    // Tour type
    { path:'/tourtype',component:Tourtype},
    { path:'/tourtype/:id',component:TourtypeEdit},
    { path:'/tourtype-add',component:TourtypeAdd},

    // Tour tourprogram
    { path:'/tourprogram',component:Tourprogram},
    { path:'/tourprogram/:id',component:TourprogramEdit},
    { path:'/tourprogram-add',component:TourprogramAdd},

    

    { path:'/list-city', component:ListCity },
    { path:'/add-city', component:AddCity },
    { path:'/list-state', component:ListState },
    { path:'/add-state', component:AddState },
    
    { path:'/list-role', component:ListRole },
    { path:'/add-role', component:AddRole },     
    { path:'/edit-role/:id', component:EditRole },
    { path:'/list-permission', component:ListPermission },
    { path:'/add-permission', component:AddPermission },     
    { path:'/edit-permission/:id', component:EditPermission },
    { path:'/list-member', component:ListMember },
    { path:'/add-member', component:AddMember },

    // Bus
    
    { path:'/bus-list', component:BusList },
    { path:'/bus/:id', component:BusEdit  },
    { path:'/view-bus/:id', component:BusView  },
    { path:'/add-bus', component:BusAdd  },
    // Train
    
    { path:'/train-list', component:TrainList },
    { path:'/train/:id', component:TrainEdit  },
    { path:'/train-view/:id', component:TrainView  },
    { path:'/train-add', component:TrainAdd  },
    // Flight
    
    { path:'/flight-list', component:FlightList },
    { path:'/flight/:id', component:FlightEdit  },
    { path:'/flight-view/:id', component:FlightView  },
    { path:'/flight-add', component:FlightAdd  },
    
    // country
    { path:'/country-list', component:ListCountry },
    { path:'/country-add', component:AddCountry },
     
    { path:'/encyclopedia-list', component: EncyclopediaList},
    { path:'/encyclopedia-view/:id', component:EncyclopediaView},
    { path:'/encyclopedia/:id', component:EncyclopediaEdit},
    { path:'/encyclopedia-add', component:EncyclopediaAdd},
    
    { path:'/encyclopediacomment-list', component:  EncyclopediacommentList},
    { path:'/encyclopediacomment-view/:id', component: EncyclopediacommentView},
    { path:'/encyclopediacomment/:id', component: EncyclopediacommentEdit},
    { path:'/encyclopediacomment-add', component: EncyclopediacommentAdd},
    
    { path:'/homepage', component: Homepage},
    
];


