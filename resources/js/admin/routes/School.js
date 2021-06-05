// // School
const Schools = () => import(/* webpackChunkName: "js/admin/schools" */ '@/admin/pages/school/List-school.vue');
const SchoolAdd = () => import(/* webpackChunkName: "js/admin/schooladd" */ '@/admin/pages/school/New-school.vue');
const SchoolEdit = () => import(/* webpackChunkName: "js/admin/schooledit" */ '@/admin/pages/school/Edit-school.vue');
const SchoolView = () => import(/* webpackChunkName: "js/admin/schoolview" */ '@/admin/pages/school/View-school.vue');

// // Students
// const Students = () => import(/* webpackChunkName: "js/admin/students" */ '@/admin/pages/student/List-student.vue');
// const StudentAdd = () => import(/* webpackChunkName: "js/admin/studentadd" */ '@/admin/pages/student/New-student.vue');
// const StudentEdit = () => import(/* webpackChunkName: "js/admin/studentEdit" */ '@/admin/pages/student/Edit-student.vue');
// const StudentView = () => import(/* webpackChunkName: "js/admin/studentview" */ '@/admin/pages/student/View-student.vue');


// Tour
const Tours = () => import(/* webpackChunkName: "js/admin/schooltours" */ '@/admin/pages/school/tour/List-tour.vue');
const TourAdd = () => import(/* webpackChunkName: "js/admin/schooltouradd" */ '@/admin/pages/school/tour/New-tour.vue');
const TourEdit = () => import(/* webpackChunkName: "js/admin/schooltouredit" */ '@/admin/pages/school/tour/Edit-tour.vue');
const TourView = () => import(/* webpackChunkName: "js/admin/schooltourview" */ '@/admin/pages/school/tour/View-tour.vue');

// School payments
const Userpayments = () => import(/* webpackChunkName: "js/admin/schoolpayments" */ '@/admin/pages/school/tour/userpayment/List-payment.vue');
const UserpaymentsAdd = () => import(/* webpackChunkName: "js/admin/schoolpayadd" */ '@/admin/pages/school/tour/userpayment/New-payment.vue');
const UserpaymentsEdit = () => import(/* webpackChunkName: "js/admin/schoolpayedit" */ '@/admin/pages/school/tour/userpayment/Edit-payment.vue');
const UserpaymentsView = () => import(/* webpackChunkName: "js/admin/schoolpayview" */ '@/admin/pages/school/tour/userpayment/View-payment.vue');

// School booked users Payments
const ListPayment = () => import(/* webpackChunkName: "js/admin/ListschoolPayment" */ '@/admin/pages/bookedtour/school/payment/ListPayment.vue');
const EditPayment = () => import(/* webpackChunkName: "js/admin/EditschoolPayment" */ '@/admin/pages/bookedtour/school/payment/EditPayment');
const ViewPayment = () => import(/* webpackChunkName: "js/admin/ViewschoolPayment" */ '@/admin/pages/bookedtour/school/payment/ViewPayment');


export default[

    // School
    { path: '/schools', component: Schools },
    { path: '/schools/:id', component: SchoolEdit },
    { path: '/add-school', component: SchoolAdd },
    { path: '/view-school/:id', component: SchoolView },

    // { path: '/students', component: Students },
    // { path: '/students/:id', component: StudentEdit },
    // { path: '/add-student', component: StudentAdd },
    // { path: '/view-student/:id', component: StudentView },

    // Tour
    { path: '/school/tours', component: Tours },
    { path: '/school/tours/:id', component: TourEdit },
    { path: '/school/tour-add', component: TourAdd },
    { path: '/school/view-tour/:id', component: TourView },

    // Payments
    { path: '/school/userpayments', component: Userpayments },
    { path: '/school/userpayments/:id', component: UserpaymentsEdit },
    { path: '/school/userpayments-add', component: UserpaymentsAdd },
    { path: '/school/userpayments-view/:id', component: UserpaymentsView },

    // Booked users Payments
    { path: '/school/bookedusers/:school_id/:tour_code',component: ListPayment},
    { path: '/school/bookedusers/:id', component: EditPayment },
    { path: '/school/bookedusers-view/:id', component: ViewPayment },
]