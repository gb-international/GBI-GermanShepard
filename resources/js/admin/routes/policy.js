// Policy Category
const PolicyCategory = () => import(/* webpackChunkName: "js/admin/traveller_policy/category/list" */ '@/admin/pages/traveller_policy/category/list.vue');
const PolicyCategoryAdd = () => import(/* webpackChunkName: "js/admin/traveller_policy/category/add" */ '@/admin/pages/traveller_policy/category/add.vue');
const PolicyCategoryEdit = () => import(/* webpackChunkName: "js/admin/traveller_policy/category/edit" */ '@/admin/pages/traveller_policy/category/edit.vue');

// Policy
const Policy = () => import(/* webpackChunkName: "js/admin/traveller_policy/list" */ '@/admin/pages/traveller_policy/list.vue');
const PolicyAdd = () => import(/* webpackChunkName: "js/admin/traveller_policy/add" */ '@/admin/pages/traveller_policy/add.vue');
const PolicyEdit = () => import(/* webpackChunkName: "js/admin/traveller_policy/edit" */ '@/admin/pages/traveller_policy/edit.vue');

export default[
    // Category
    { meta: {permId: 77}, path: '/policy/category/all', component: PolicyCategory},
    { meta: {permId: 77}, path: '/policy/category/add', component: PolicyCategoryAdd},
    { meta: {permId: 77}, path: '/policy/category/edit/:id', component: PolicyCategoryEdit},
    
    //Policy
    { meta: {permId: 77}, path: '/policy/all', component: Policy },
    { meta: {permId: 77}, path: '/policy/add', component: PolicyAdd },
    { meta: {permId: 77}, path: '/policy/edit/:id', component: PolicyEdit },
]