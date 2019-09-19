<template>
    <div id="frontmaster">
    	<navbar :selectedOption="selectedOption"></navbar>
    	<router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: "FrontMaster",
        data(){
          return{
          	selectedOption:'asdfasdf'
          }
        }
    }

</script>

<style scoped>

</style>