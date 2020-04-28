<template>
  <div id="frontmaster">


    <gbi-navbar></gbi-navbar>
    
    <router-view></router-view>

    <gbi-footer></gbi-footer>


  </div>
</template>

<script>
   
export default {
    name: "FrontMaster",
    data(){
      return{
      }
    }
}

</script>

<style scoped>

</style>