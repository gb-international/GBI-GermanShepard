<template>  
  <div class="container" id="itinerary_detail_list">
    <a data-toggle="modal" id="tourModel" data-target="#tourCode" class="btn btn-info text-white float-right"> Enter Tour Code </a>
    <div v-if="alldata.length">
      <h1 class="main-head">{{itineraryData.title}}</h1>
      <div class="text-center description">
        <p v-html="itineraryData.description"></p>            
      </div>
      <div class="row" id="explore_detail_part">
        <div class="col-sm-4" v-for="data in itineraryData.itinerarydays">
          <h4 class="day_tab">Day {{ data.day}}</h4>
          <h1 class="explor-head" v-if="data.day_source != data.day_destination">{{data.day_source.toUpperCase() }} - {{data.day_destination.toUpperCase()}}</h1>
          <h1 class="explor-head" v-else>{{ data.day_source.toUpperCase() }}</h1>
          <div class="card-text" v-html="data.day_description"></div>
        </div>           
      </div>
    </div>
    <div class="text-center" v-else>
      <h3 class="text-center">You Don't Have Active Tour</h3>
    </div>

    <div class="row">
      <div class="text-center">THINGS TO CARRY</div>
      <div class="col-sm-4">
        
      </div>
    </div>








    <div class="modal fade" id="tourCode" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form class="form" method="post" @submit.prevent="UserTourSave()">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="tour_code">Travel Code</label>
                <input type="text" class="form-control input-border" placeholder="Enter travel code" v-model="form.travel_code" required="">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" id="CloseModel" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tour-detail",
  data(){
    return{
      oddclass:false,
      evenclass:true,
      itineraryData:{},
      alldata:[],
      form:new Form({
        travel_code:'',
      })
    }
  },
  created(){
    if(localStorage.getItem('login') == '0'){
      this.$router.push('/login')
    }
    this.tourListData();
  },
   methods:{
    tourListData(){
      var data = [];
      axios.post("/api/tour-list", data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` } })
        .then((response) => {
          this.alldata = response.data;
          if(response.data.length == 0){
            $("#tourModel").click();
          }else{
            this.alldata = response.data;
            this.itineraryData = response.data[0].itinerary;
          }
        })
        .catch(error => {
          this.handleError(error);
        });
    },


    UserTourSave(){
      var data = {'travel_code':this.form.travel_code};
      axios.post("/api/tour-travel-save", data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` } })
        .then((response) => {
          // this.alldata = response.data;
          if(response.data == 'error'){
            swal.fire({
              title: 'Try again',
              text: "Please enter valid travel code!",
              type: 'error',
            });
          }else{
            $("#tourModel").click();        
            swal.fire({
              title: 'Welcome on your tour',
              type: 'success',
            });
            this.tourListData(); 
          }
        })
        .catch(error => {
          this.handleError(error);
        });
    },
  } 
}

</script>
<style scoped>
  .main-head{
    text-decoration: underline;
  }
  .description{
    width: 100%;
  }
</style>