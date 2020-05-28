<template>  
  <div class="container">
     <div id="itinerary_detail_list">
      <a data-toggle="modal" id="tourModel" data-target="#tourCode" class="btn btn-info text-white float-right"> Enter Tour Code </a>
      <div v-if="alldata.length" id="roadmap">

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

      <div class="things-to-carrry">
        <h3 class="text-center">THINGS TO CARRY</h3>
        <div class="row align-items-center">
          <div class="col-sm-4">
            <div class="item">
              <img src="/images/tour/bottel.png" class="bottel">
              <p>Water Bottel</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="item text-center">
              <img src="/images/tour/shoes.png" class="common">
              <p>Light Shoes</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="item">
              <img src="/images/tour/tourch.png" class="common">
              <p>Tourch</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="item text-center">
              <img src="/images/tour/towel.png" class="common">
              <p>Towel</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="item">
              <img src="/images/tour/umbrelaa.png" class="common">
              <p>Umbrelaa</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="item">
              <img src="/images/tour/jacket.png" class="common">
              <p>Jacket</p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
              
      </div>  


      <div class="hotel-section">
        <h3 class="text-center">YOU WILL STAY HERE</h3>
        <div class="row justify-content-center" v-if="hotelData">

          <div class="col-sm-4" v-for="hotel in hotelData">
            <div class="hotel-card">
              <img src="/images/hotel/1590495923.png">
              <div class="row">
                <div class="col hotel_info">
                  <p><b>Hotel Name</b> <span><div class="star-rating">
                      <span v-for="n in max">&star;</span>
                        <div class="star-rating__current" :style="{width: getRating(hotel.hotel.type) + '%'}">
                          <span v-for="n in integer(hotel.hotel.type)">&starf;</span>
                        </div>
                      </div></span>
                  </p>

                  <p>{{ hotel.hotel.name }}<span><b>Check in date</b>: {{ dateFormat(hotel.check_in) }}</span></p>
                  <p><b>Days stay</b> : 2 <span><b>Check out date</b>: {{ dateFormat(hotel.check_out) }}</span></p>
=======


        <div class="airline-section mb-35">
          <h3 class="text-center mb-35">AIRLINES DETAILS</h3>
          <div class="row justify-content-center" v-if="hotelData">
            <div class="col-sm-4" v-for="hotel in hotelData">
              <div class="hotel-card">
                <img src="/images/hotel/1590495923.png">
                <div class="row">
                  <div class="col hotel_info">
                    <div class="rating-hotel">
                      <p><b>Hotel Name</b> <label><div class="star-rating">
                          <span v-for="n in max">&star;</span>
                            <div class="star-rating__current" :style="{width: getRating(hotel.hotel.type) + '%'}">
                              <span v-for="n in integer(hotel.hotel.type)">&starf;</span>
                            </div>
                          </div></label>
                      </p>                    
                    </div>

                    <p>{{ hotel.hotel.name }}<label><b>Check in date</b>: {{ dateFormat(hotel.check_in) }}</label></p>
                    <p><b>Days stay</b> : {{ days(hotel.check_in,hotel.check_out) }} <label><b>Check out date</b>: {{ dateFormat(hotel.check_out) }}</label></p>
                  </div>
>>>>>>> a844d94c... 'ad'
                </div>
              </div>
            </div>
          </div>
          
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

  </div>

</template>

<script>
// import StarRating from './components/partials/StarRating.vue';
export default {

  name: "Tour-detail",

  data(){
    return{
      max:5,
      current:3,
      oddclass:false,
      evenclass:true,
      itineraryData:{},
      hotelData:'',
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
    dateFormat(date){
      return new Date(date).toDateString();
    },
    getRating: function(current) {
      return (current / this.max) * 100
    },
    integer(num){
      return parseInt(num);
    },
    tourListData(){
      var data = [];
      axios.post("/api/tour-list", data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` } })
        .then((response) => {
          this.alldata = response.data;
          console.log(response);
          if(response.data.length == 0){
            $("#tourModel").click();
          }else{
            this.alldata = response.data;
            this.itineraryData = response.data[0].itinerary;
            this.hotelData = response.data[0].bookedhotels;
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