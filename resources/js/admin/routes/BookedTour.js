// Booked Tour
const BookedTours = () => import(/* webpackChunkName: "js/admin/BookedTours" */ '@/admin/pages/bookedtour/List-reservation.vue');
const BookedEscort = () => import(/* webpackChunkName: "js/admin/BookedEscort" */ '@/admin/pages/bookedtour/tourmanager/New-tourmanager.vue');
const BookedHotel = () => import(/* webpackChunkName: "js/admin/BookedHotel" */ '@/admin/pages/bookedtour/New-hotel.vue');
const BookedRestaurant = () => import(/* webpackChunkName: "js/admin/bookedRestaurant" */ '@/admin/pages/bookedtour/New-restaurant.vue');
const BookedSightseen = () => import(/* webpackChunkName: "js/admin/bookedsightseeing" */ '@/admin/pages/bookedtour/New-sightseen.vue');
const BookedFlight = () => import(/* webpackChunkName: "js/admin/bookedflight" */ '@/admin/pages/bookedtour/New-flight.vue');
const BookedTrain = () => import(/* webpackChunkName: "js/admin/bookedtrain" */ '@/admin/pages/bookedtour/New-train.vue');

const BookedBus = () => import(/* webpackChunkName: "js/admin/bookedbus" */ '@/admin/pages/bookedtour/New-bus.vue');
const BookedFood = () => import(/* webpackChunkName: "js/admin/bookedfood" */ '@/admin/pages/bookedtour/Food.vue');
const BookedPnr = () => import(/* webpackChunkName: "js/admin/bookpnr" */ '@/admin/pages/bookedtour/Pnr-List.vue');
const PnrUser = () => import(/* webpackChunkName: "js/admin/PnrUser" */ '@/admin/pages/bookedtour/PnrUser.vue');
const EscortUpdate = () => import(/* webpackChunkName: "js/admin/EscortList" */ '@/admin/pages/bookedtour/New-EscortUpdate.vue');

// Corporate Group
const BookedCorp = () => import(/* webpackChunkName: "js/admin/BookedCorpGroup" */ '@/admin/pages/bookedtour/corporate/Groupmember-list.vue');

//School Group
const BookedStudent = () => import(/* webpackChunkName: "js/admin/BookedStudent" */ '@/admin/pages/bookedtour/Groupmember-list.vue');

//School Payment
const SchoolPaymentList = () => import(/* webpackChunkName: "js/admin/schoolpaymentlist" */ '@/admin/pages/bookedtour/school/payment/List.vue');
const addPaymentMethodSchool = () => import(/* webpackChunkName: "js/admin/AddPaymethodSchool" */ '@/admin/pages/bookedtour/school/payment/Add-payment.vue');
const UpdatePaymentMethodSchool = () => import(/* webpackChunkName: "js/admin/UpdatePaymethodSchool" */ '@/admin/pages/bookedtour/school/payment/Update-payment.vue');

// Corporate Payment
const CorpPaymentList = () => import(/* webpackChunkName: "js/admin/corppaymentlist" */ '@/admin/pages/bookedtour/corporate/payment/List.vue');
const addPaymentMethodCorp = () => import(/* webpackChunkName: "js/admin/AddPaymethodCorp" */ '@/admin/pages/bookedtour/corporate/payment/Add-payment.vue');
const UpdatePaymentMethodCorp = () => import(/* webpackChunkName: "js/admin/UpdatePaymethodCorp" */ '@/admin/pages/bookedtour/corporate/payment/Update-payment.vue');


const PaymentPage = () => import(/* webpackChunkName: "js/admin/AdminPaymentPage" */ '@/admin/pages/bookedtour/school/payment/PaymentPage.vue');

export default[
    { path: '/booked-tour/:id', component: BookedTours },
    { path: '/booked-tour-manager/:id', component: BookedEscort },
    { path: '/booked-tour-hotel/:id', component: BookedHotel },
    { path: '/booked-tour-restaurant/:id/:tour_code', component: BookedRestaurant },
    { path: '/booked-sightseen/:id/:tour_code/:itinerary_id', component: BookedSightseen },
    { path: '/booked-tour-flight/:id', component: BookedFlight },
    { path: '/booked-tour-train/:id', component: BookedTrain },
    { path: '/booked-tour-bus/:id', component: BookedBus },
    { path: '/booked-tour-pnr/:transport/:id/:tour_id', component: BookedPnr },

    { path: '/pnr-users/:transport/:id/:tour_id', component: PnrUser },

    // Corporate Group
    { path: '/booked-corp-group/:entity_id/:id', component: BookedCorp },

    //School Group
    { path: '/booked-tour-group/:school_id/:id', component: BookedStudent },

    //school payment
    { path: '/payments-school/:school_id/:tour_code', component: SchoolPaymentList },
    { path: '/add-paymentmethod-school/:school_id/:tour_code', component: addPaymentMethodSchool },
    { path: '/update-paymentmethod-school/:id', component: UpdatePaymentMethodSchool },

    //corporate payment
    { path: '/payments-corporate/:company_id/:tour_code', component: CorpPaymentList },
    { path: '/add-paymentmethod-coporate/:company_id/:tour_code', component: addPaymentMethodCorp },
    { path: '/update-paymentmethod-coporate/:id', component: UpdatePaymentMethodCorp },

    { path: '/escort-update/:id/:tour_code', component: EscortUpdate },

    { path: '/foods/:tour_id/:tour_code', component: BookedFood },

    { path: '/payment-page', component: PaymentPage },
   
]

