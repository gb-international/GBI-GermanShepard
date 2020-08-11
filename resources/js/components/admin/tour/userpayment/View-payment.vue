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
            <br>
            <div class="row" v-if="tour_view.tour_code">

              <div class="col-sm-4">
                <h5>School Name</h5>
                <p>
                  <router-link :to="`/view-school/${tour_view.school_id}`">
                  {{tour_view.school_name}}</router-link></p>
              </div>

              <div class="col-sm-4">
                <h5>Tour Code</h5>
                <p>{{tour_view.tour_code}}</p>
              </div>
              <br>

              <div class="col-sm-4">
                <h5>Tour Price</h5>
                <p>{{tour_view.amount }}/-</p>
              </div>

              <div class="col-sm-4">
                <h5>User Name</h5>
                <p>
                  <router-link :to="`/view-school/${tour_view.user_id}`">
                  {{tour_view.user_name}}</router-link></p>
              </div>

              
              <div class="col-sm-4">
                <h5>Added By</h5>
                <p>{{ tour_view.added_by }}</p>
              </div>
              
              <div class="col-sm-4">
                <h5>School Bank Detail ID</h5>
                <p>{{ tour_view.schoolbankdetail_id }}</p>
              </div>

              
              <div class="col-sm-4">
                <h5>Payment Type</h5>
                <p>{{ tour_view.payment_mode }}</p>
              </div>
              
              <div class="col-sm-4">
                <h5>Payment Type</h5>
                <p>{{ tour_view.payment_type }}</p>
              </div>
              <div class="col-sm-4">
                <h5>IFSC Code</h5>
                <p>{{ tour_view.ifsc_code }}</p>
              </div>
              <div class="col-sm-4">
                <h5>Amount</h5>
                <p>{{ tour_view.amount }}</p>
              </div>
             
              <div class="col-sm-4">
                <h5>Cheque Bank Name</h5>
                <p>{{ tour_view.cheque_bank_name }}</p>
              </div>
              <div class="col-sm-4">
                <h5>Date of Issue</h5>
                <p>{{ tour_view.date_of_issue }}</p>
              </div>
              
              <div class="col-sm-4">
                <h5>Status</h5>
                <p>{{ tour_view.status }}</p>
              </div>
              <div class="col-sm-4">
                <h5>Added At</h5>
                <p>{{ tour_view.created_at }}</p>
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
  name: "ViewTour",
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
      axios.get(`/api/userpayments/${this.$route.params.id}`).then((response)=>{
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