//GBI Hotels
const HotelSearch = () => import(/* webpackChunkName: "js/front/HotelSearch" */ '@/front/pages/Hotel/hotel-search.vue');

export default [
    { path: '/hotel-search', component: HotelSearch },
]