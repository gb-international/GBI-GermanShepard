<!-- List all itinerary template -->
<template>
    <section class="content">
        <div class="row justify-content-around" >
            <div class="col-md-12">
              <div class="container container_admin_body">
                <!-- Start Card -->        

                  <div class="card_view">
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
                      <div class="col-sm-3">
                        <h5>Title</h5>
                        <p>{{itineraryData.title}}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3">
                        <h5>Description</h5>
                        <p>{{itineraryData.description}}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3">
                        <h4><strong>Day 01</strong></h4>
                        <h5>Title</h5>
                        <p>Enter Title</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3">
                        <h5>Description</h5>
                        <p>Enter Description</p>
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
            day_source:[],
            day_destination:[],
            itineraryData:[]
          }
        },
       
       created() {
          axios.get('api/itinerary/view/24').then(response => {
            this.itineraryData = response.data;
            this.day_source = response.data.day_source;
            this.day_destination = response.data.day_destination;
            console.log(string_to_array('now'));
          });
        },
        computed:{
            string_to_array(data){
              return 'hi';
            }
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

<style scoped>
</style>