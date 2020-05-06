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
                    <h3 class="text-center">Hotel Detail #{{ this.$route.params.id }}</h3>
                    <br>
                    <div class="row">
                      <div class="col-sm-3">
                        <h5>Name</h5>
                        <p>{{viewData.name}}</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>Email</h5>
                        <p>{{viewData.email}}</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>Phone Number</h5>
                        <p>{{viewData.phoneno}}</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>Hotel Type</h5>
                        <p>{{viewData.type}}</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>Meal Type</h5>
                        <p>{{viewData.mealType}}</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>Price</h5>
                        <p>{{viewData.price}}/-</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>Location</h5>
                        <p>{{viewData.location}}</p>
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
        name: "View",
        data(){
          return{
            client_view:[]   
          }
        },
        mounted(){
          this.$store.dispatch('getEditData',`/api/hotel/${this.$route.params.id}/edit`)
        },
        computed:{
          viewData(){
            return this.$store.getters.getEditData;// Fill the form with the data
          }
        }
    }


</script>