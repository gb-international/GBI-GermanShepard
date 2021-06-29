
// Notification
const NotifPanel = () => import(/* webpackChunkName: "js/admin/NotifPanel" */ '@/admin/pages/notificationPanel/panel.vue');
const NotifView = () => import(/* webpackChunkName: "js/admin/NotifView" */ '@/admin/pages/notificationPanel/view.vue');

export default[
    // Notification
    { path: '/notification-panel', component: NotifPanel },
    { path: '/notification-view', component: NotifView },
]