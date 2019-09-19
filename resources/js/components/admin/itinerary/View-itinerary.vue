<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
    <section class="content">
      <!--************************************************
      Template Type: View Itinerary Deatails
      Author:@Ajay

      ****************************************************-->
        <div class="row justify-content-around" >
            <div class="col-md-12">
              <div class="container container_admin_body">
                <!-- Start Card -->        
                  <div class="card_view">
                    <!-- This row will show the itinerary detail -->
                    <div class="row">
                      <div class="col-sm-3">
                        <h5>Source</h5>
                        <p>{{itineraryData.source}}</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>Destination</h5>
                        <p>{{itineraryData.destination}}</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>Number of Days</h5>
                        <p>{{itineraryData.noofdays}}</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>Tour Type</h5>
                        <p>{{itineraryData.tourtype}}</p>
                      </div>
                    </div>
                  
                    <div class="row">
                      <div class="col-sm-12">
                        <h5>Title</h5>
                        <p>{{itineraryData.title}}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <h5>Description</h5>
                        <p>{{itineraryData.description}}</p>
                      </div>
                    </div>
                    <!-- This div will show the itinerary days and its description -->
                    <div v-for="i in day">
                      <hr>
                      <div class="row">
                        <div class="col-sm-12">
                          <h4><strong>Day {{i}}</strong></h4>
                          <h5>Title</h5>
                          <p>{{day_source[i-1]}} - {{day_destination[i-1]}}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <h5>Description</h5>
                          <p>{{day_description[i-1]}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End card -->

                </div>                          
                <!-- end -->
            </div>
        </div>
    </section>
    <!-- /.content -->
</template>

<script>
    export default {
        name: "List",
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

       methods:
       {
       
        deleteItinerary(id){
        axios.get('/delete/'+id)
        .then(()=>{
        this.$store.dispatch('getAllitinerary')
        toast({
        type: 'success',
        title: 'Itinerary Deleted successfully'
        })
        })
        .catch(()=>{
        })
        }
       } 
    }


</script>