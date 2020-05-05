<template>


    <!-- start banner area display image for itinerary days detail  -->
    <div id="explorelist">
     <vue-headful
    title="GBI Explore Destination"
    description="@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button"
    keywords="@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs"
    image=""
    lang="en_US"
    ogLocale="en_US,en_UK"
    url="https://www.gowithgbi.com/resources/explore-destination"
   />


    	<section class="banner-block">
             <img class="top-img" :src="`/uploadimage/${itineraryData.detail_photo}`">
         </section>
         {{editData}}
         <div class="container">
            <h1 class="main-head">{{itineraryData.title}}</h1>
            <p class="description" v-html="description"></p>

            <div class="row" id="explore_detail_part">

              <div class="col-sm-4" v-for="data in itineraryData.itinerarydays">

                <h4 class="day_tab">Day {{ data.day}}</h4>
                <h1 class="explor-head" v-if="data.day_source != data.day_destination">{{data.day_source.toUpperCase() }} - {{data.day_destination.toUpperCase()}}</h1>
                <h1 class="explor-head" v-else>{{ data.day_source.toUpperCase() }}</h1>
                <div class="card-text" v-html="data.day_description"></div>
              </div>           
            </div>
            <!-- /.row -->
        </div><!-- /.container-->
       
            
    </div>
</template>

<script>
       export default {
        name: "ExploreDetail",
        data(){
          return{
            day:0,
            description:'',
            itineraryData:[]
          }
        },
       
        mounted(){
          this.$store.dispatch('getEditData',`/api/itinerary/${this.$route.params.id}`)
        },
        computed:{
          editData(){
            this.itineraryData = this.$store.getters.getEditData;// Fill the form with the data
          }
        }
  }

</script>

<style scoped>

.main-head{
  text-decoration: underline;
}
.description{
      font-size: 17px;
    font-family: raleway;
}


</style>