

// //Hotel
const HotelList = () => import(/* webpackChunkName: "js/admin/hotel" */ '@/admin/pages/hotel/List-hotel.vue');
const HotelAdd = () => import(/* webpackChunkName: "js/admin/hoteladd" */'@/admin/pages/hotel/New-hotel.vue');
const HotelEdit = () => import(/* webpackChunkName: "js/admin/hoteledit" */ '@/admin/pages/hotel/Edit-hotel.vue');
const HotelView = () => import(/* webpackChunkName: "js/admin/hotelview" */ '@/admin/pages/hotel/View_hotel.vue');

// //Restaurant
const restaurantList = () => import(/* webpackChunkName: "js/admin/restaurant" */ '@/admin/pages/restaurant/List-restaurant.vue');
const restaurantAdd = () => import(/* webpackChunkName: "js/admin/restauradd" */ '@/admin/pages/restaurant/New-restaurant.vue');
const restaurantEdit = () => import(/* webpackChunkName: "js/admin/restauedit" */ '@/admin/pages/restaurant/Edit-restaurant.vue');
const restaurantView = () => import(/* webpackChunkName: "js/admin/restaurantView" */ '@/admin/pages/restaurant/View_restaurant.vue');




export default[
    //Hotel
    { meta: {permId: 60}, path: '/hotel-list', component: HotelList },
    { meta: {permId: 60}, path: '/add-hotel', component: HotelAdd },
    { meta: {permId: 60}, path: '/edit-hotel/:id', component: HotelEdit },
    { meta: {permId: 60}, path: '/hotel-view/:id', component: HotelView },


    //Restaurant
    { meta: {permId: 61}, path: '/restaurant-list', component: restaurantList },
    { meta: {permId: 61}, path: '/add-restaurant', component: restaurantAdd },
    { meta: {permId: 61}, path: '/edit-restaurant/:id', component: restaurantEdit },
    { meta: {permId: 61}, path: '/restaurant-view/:id', component: restaurantView },

]