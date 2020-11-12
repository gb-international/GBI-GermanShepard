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
          <div class="card_view">
            <h3 class="text-center">Restaurant Detail #{{ this.$route.params.id }}</h3>
            <br>
            <div class="row">
              <div class="col-sm-4">
                <h5>Restaurant Name</h5>
                <p>{{viewData.name}}</p>
              </div>
                                    
              <div class="col-sm-4">
                <h5>Restaurant Address</h5>
                <p>{{viewData.address}}</p>
              </div>
              <div class="col-sm-4">
                <h5>Contact Person</h5>
                <p>{{viewData.contact_name}}</p>
              </div>
              
              <div class="col-sm-4">
                <h5>Contact Number</h5>
                <p>{{viewData.contact_number}}</p>
              </div>

            </div>
            <button @click="goBack()" class="btn btn-primary itrn_add_btn back_btn">Back</button>
          </div>
        </div>                          
      </div>
    </div>
  </section>
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
          this.$store.dispatch('getEditData',`/api/restaurants/${this.$route.params.id}/edit`)
        },
        computed:{
          viewData(){
            return this.$store.getters.getEditData;// Fill the form with the data
          }
        },
        methods:{
          goBack(){
            this.$router.go(-1);
          }
        }
    }


</script>