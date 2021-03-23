// admin dashboard

export default [
    {
        path:'/dashboard',name:"Dashboard",component: () => import(/* webpackChunkName: "js/admin/AdminDashboard" */ '@/admin/pages/Dashboard.vue')
    }
]