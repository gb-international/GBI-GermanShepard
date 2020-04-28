<template>
    <div id="error404">
          <vue-headful
              title="Page Not Found"
              description="GBI is unable to find the page you are searching for"
           />
    	<main>
    <section class="banner-block">
        <img class="img-responsive error404" :src="`assets/front/images/404error.png`" alt="404 error">
         
  
    </section>
  </main>
    </div>
</template>

<script>
   
    export default {
        name: "Error404",
        data(){
          return{
          }
        }
    }

</script>

<style scoped>

</style>
