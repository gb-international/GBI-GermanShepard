const PaymentLink = () => import(/* webpackChunkName: "js/admin/CreatePaymentLink" */ '@/admin/pages/paymentLink/create.vue');

export default [
    { path: '/create-payment-link', component: PaymentLink },
]