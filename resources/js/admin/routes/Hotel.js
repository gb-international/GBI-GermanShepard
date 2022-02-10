

// //Hotel
const HotelList = () => import(/* webpackChunkName: "js/admin/hotel" */ '@/admin/pages/hotel/List-hotel.vue');
const HotelAdd = () => import(/* webpackChunkName: "js/admin/hoteladd" */'@/admin/pages/hotel/New-hotel.vue');
const HotelEdit = () => import(/* webpackChunkName: "js/admin/hoteledit" */ '@/admin/pages/hotel/Edit-hotel.vue');
const HotelView = () => import(/* webpackChunkName: "js/admin/hotelview" */ '@/admin/pages/hotel/View_hotel.vue');

const HotelBanquet = () => import(/* webpackChunkName: "js/admin/HotelBanquet" */ '@/admin/pages/hotel/New-HotelBanquet.vue');

// //Restaurant
const restaurantList = () => import(/* webpackChunkName: "js/admin/restaurant" */ '@/admin/pages/restaurant/List-restaurant.vue');
const restaurantAdd = () => import(/* webpackChunkName: "js/admin/restauradd" */ '@/admin/pages/restaurant/New-restaurant.vue');
const restaurantEdit = () => import(/* webpackChunkName: "js/admin/restauedit" */ '@/admin/pages/restaurant/Edit-restaurant.vue');
const restaurantView = () => import(/* webpackChunkName: "js/admin/restaurantView" */ '@/admin/pages/restaurant/View_restaurant.vue');




export default[
    //Hotel
<<<<<<< Updated upstream
    { path: '/hotel-list', component: HotelList },
    { path: '/add-hotel', component: HotelAdd },
    { path: '/edit-hotel/:id', component: HotelEdit },
    { path: '/hotel-view/:id', component: HotelView },

=======
    { meta: {permId: 60}, path: '/hotels', component: Hotels },
    { meta: {permId: 60}, path: '/hotel-list/:state', component: HotelList },
    { meta: {permId: 60}, path: '/add-hotel', component: HotelAdd },
    { meta: {permId: 60}, path: '/edit-hotel/:id', component: HotelEdit },
    { meta: {permId: 60}, path: '/hotel-view/:id', component: HotelView },
    { meta: {permId: 60}, path: '/hotel-banquet/add', component: HotelBanquet },
>>>>>>> Stashed changes

    //Restaurant
    { path: '/restaurant-list', component: restaurantList },
    { path: '/add-restaurant', component: restaurantAdd },
    { path: '/edit-restaurant/:id', component: restaurantEdit },
    { path: '/restaurant-view/:id', component: restaurantView },

]