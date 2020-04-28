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

                    <br>
                    <div class="row">
                      <div class="col-sm-3">
                        <h5>Code</h5>
                        <p>{{flight_view.code}}</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>Name</h5>
                        <p>{{flight_view.name}}</p>
                      </div>
                      


                      <div class="col-sm-3">
                        <h5>Created At</h5>
                        <p>{{flight_view.created_at}}</p>
                      </div>

                      <div class="col-sm-3">
                        <h5>Updated At</h5>
                        <p>{{flight_view.updated_at}}</p>
                      </div>

                      
                    </div>
                    <button @click="goBack()" class="btn btn-primary itrn_add_btn back_btn">Back</button>
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
      flight_view:[]   
    }
  },
  created(){

    this.busView();
  },
  methods:{
    busView(){
      axios.get(`/api/flight/${this.$route.params.id}`).then((response)=>{
        this.flight_view = response.data;
      });
    },
    goBack(){
      this.$router.go(-1);
    }
  }
}


</script>