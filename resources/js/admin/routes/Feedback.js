// //  Feedback Routes for admin

const Feedbacks = () => import(/* webpackChunkName: "js/admin/feedbacks" */ '@/admin/pages/feedback/feedback-list.vue');
//const FeedbackForm = () => import(/* webpackChunkName: "js/admin/feedbackform" */ '@/admin/pages/feedback/feedback-form.vue');
const SendFeedbackLink = () => import(/* webpackChunkName: "js/admin/sendfeedbacklink" */ '@/admin/pages/feedback/send-feedback-link.vue');

export default[
    { path: '/feedbacks', component: Feedbacks },
    //{ path: '/feedback-link/:userID/:tourID', component: FeedbackForm },
    { path: '/send-feedback-link', component: SendFeedbackLink },

]