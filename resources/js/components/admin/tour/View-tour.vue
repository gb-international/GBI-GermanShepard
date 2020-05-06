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
            <div class="row" v-if="tour_view.itinerary">
              <div class="col-sm-3">
                <h5>Itinerary Title</h5>
                <p>{{tour_view.itinerary.title }}</p>
              </div>
              <div class="col-sm-3">
                <h5>School Name</h5>
                <p>{{tour_view.school.school_name}}</p>
              </div>
              <div class="col-sm-3">
                <h5>Tour Code</h5>
                <p>{{tour_view.tour.tour_id}}</p>
              </div>
              <div class="col-sm-3">
                <h5>Tour Start Date</h5>
                <p>{{tour_view.tour.tour_start_date}}</p>
              </div>
              <div class="col-sm-3">
                <h5>Tour End Date</h5>
                <p>{{tour_view.tour.tour_end_date}}</p>
              </div>
              <div class="col-sm-3">
                <h5>Tour Price</h5>
                <p>{{tour_view.tour.tour_price }}/-</p>
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
      tour_view:[], 
    }
  },
  created(){
    this.tourData();
  },
  methods:{
    tourData(){
      axios.get(`/api/tour/${this.$route.params.id}`).then((response)=>{
        this.tour_view = response.data;
        console.log(this.tour_view);
      });
    },
    goBack(){
      this.$router.go(-1);
    }
  }
}

</script>