<template>
    <div id="app">
        
        <router-view></router-view>
        
    </div>
</template>
<script>
export default {

    watch:{
        isIdle(){
            if(this.$store.state.idleVue.isIdle == true && this.$cookies.get('escort_id') != undefined){
                this.$router.push('/');
                this.$cookies.remove('escort_id');
            }
        }
    },
    computed: {
        isIdle() {
            return this.$store.state.idleVue.isIdle;
        },
    },
}
</script>