<template>
  <div>
    <billing-student v-if="isStudent" />
    <billing-teacher v-if="isTeacher" />
  </div>
</template>

<script>
export default {
  data(){
    return{
      isStudent:false,
      isTeacher:false,
    }
  },
  components: {
    BillingStudent: () => import(/* webpackChunkName: "js/front/BillingStudent" */ '@/front/pages/user/student/BillingInformation.vue'),
    BillingTeacher: () => import(/* webpackChunkName: "js/front/BillingTeacher" */ '@/front/pages/user/teacher/BillingInformation.vue')
  },
  created(){
    var user = this.$cookies.get('user');
    if(user.user_profession == 'student'){
      this.isStudent = true;
    }
    
    if(user.user_profession == 'teacher'){
      this.isTeacher = true;
    }

  }

}
</script>
