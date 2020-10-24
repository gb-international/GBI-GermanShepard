<template>
    <div class="bg-blue height-100">
        <router-link to='/'>Home</router-link>
        <router-link to='/dashboard'>Dashboard</router-link>
        <router-link to='/tour-list'>Tour List</router-link>
        <login />
    </div>
</template>
<script>
import login from '@/escort/pages/Login'
export default {
    components:{
        login
    }
}
</script>