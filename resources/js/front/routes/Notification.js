//Notifications
const Notifications = () => import(/* webpackChunkName: "js/front/userNotifications" */ '@/front/pages/user/Notifications.vue');

export default [
    { path: '/notifications', name: 'NotificationsPage', meta: { requiresAuth: true }, component: Notifications },
]