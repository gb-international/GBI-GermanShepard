<template>
    <!-- start banner area display image for itinerary days detail  -->
    <div id="explorelist">
    	<section class="banner-block">
             <img class="top-img" v-bind:src="'assets/front/images/faq_banner.jpg'">
         </section>
         <div class="container">
            <div class="row ">
              <div class="col-lg-12">
                <!--start card -->
                <h1 class="main-head">{{itineraryData.title}}</h1>
                <div class="col-lg-4 mt-3" v-for="i in day">
                     <div class="card card-body shadow-none">
                        <h4 class="card-title headback">day {{i}}</h4>
                        <h1 class="explor-head">{{day_source[i-1]}} - {{day_destination[i-1]}}</h1>
                        <p class="card-text textexp">{{day_description[i-1]}}</p>
                      
                      </div>
               </div>
                

                <!-- end card-->
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
            day_source:[],
            day_destination:[],
            day_description:[],
            itineraryData:[]
          }
        },
       
       created() {
          axios.get(`api/itinerary/view/${this.$route.params.id}`).then(response => {
            this.itineraryData = response.data; // add data to the itineraryData
            this.day_source = response.data.day_source.split(","); // Split data to make it array 
            this.day_destination = response.data.day_destination.split(","); 
            this.day_description = response.data.day_description.split(",,");// Split data to make it array
            this.day = this.day_description.length; // get lenght to run the for loop till the lenght of the array
          });
        },
        computed:{
        },

        }
</script>

<style scoped>

</style>