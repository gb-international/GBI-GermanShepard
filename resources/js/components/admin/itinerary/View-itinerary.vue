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
                  <p v-html="itineraryData.description"></p>
                </div>
              </div>
              <!-- This div will show the itinerary days and its description -->
              <div v-for="data in itineraryData.itinerarydays">
                <hr>
                <div class="row">
                  <div class="col-sm-12">
                    <h4><strong>Day {{ data.day}}</strong></h4>
                    <h5>Title</h5>
                    <p>{{data.day_source }} - {{ data.day_destination }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <h5>Description</h5>
                    <p v-html="data.day_description"></p>
                  </div>
                </div>
              </div>
            </div>
            <!-- End card -->

            <button @click="goBack()" class="btn btn-primary itrn_add_btn back_btn">Back</button>
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
            itineraryData:[]
          }
        },
       
       created() {
        var api = `/api/itinerary/${this.$route.params.id}`;
        
          axios.get(api).then(response => {
            this.itineraryData = response.data; // add data to the itineraryData
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
        },
        goBack(){
          this.$router.go(-1);
        }
       } 
    }


</script>