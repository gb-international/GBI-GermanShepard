// admin dashboard

export default [
    {
         path:'/',
        component: () => import(/* webpackChunkName: "js/admin/AdminDashboard" */ '@/admin/pages/Dashboard.vue')
    }
]