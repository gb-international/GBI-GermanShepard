<template>  
  <div class="container">
     <div id="itinerary_detail_list">
      <div v-if="alldata.length" id="roadmap" class="mb-35 w-100">

        <div class="row">
          <div class="col-md-6 offset-md-2">
            <h4>TOUR PATH</h4>
            <ul class="timeline">
              <li v-for="data in itineraryData.itinerarydays">
                <span class="underline"><b>Day {{ data.day}}</b></span>  
                <span v-if="data.day_source != data.day_destination"><b>{{data.day_source.toUpperCase() }} - {{data.day_destination.toUpperCase()}}</b></span>
                <a target="_blank" href="https://www.totoprayogo.com/#" v-else>{{ data.day_source.toUpperCase() }}</a>
                <span class="float-right"></span>
                <p v-html="data.day_description"></p>
              </li>
            </ul>
          </div>
        </div>

        <div class="things-to-carrry mb-35">
          <h3 class="text-center mb-35">THINGS TO CARRY</h3>

          <div class="row align-items-center">
            <div class="col-md-4 col-sm-6 col-6 bottom-border border-right mb-bottom">
              <div class="item">
                <img src="/images/tour/bottel.png" class="bottel">
                <p>Water Bottel</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-6 bottom-border border-right mb-bottom">
              <div class="item text-center">
                <img src="/images/tour/shoes.png" class="common shoes">
                <p>Light Shoes</p>
              </div>
            </div>
            <hr>
            <div class="col-md-4 col-sm-6 col-6 bottom-border mb-bottom mb-right">
              <div class="item">
                <img src="/images/tour/tourch.png" class="common">
                <p>Tourch</p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 col-6 border-right mb-bottom">
              <div class="item text-center">
                <img src="/images/tour/towel.png" class="common">
                <p>Towel</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-6 border-right">
              <div class="item">
                <img src="/images/tour/umbrelaa.png" class="common">
                <p>Umbrelaa</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-6">
              <div class="item">
                <img src="/images/tour/jacket.png" class="common">
                <p>Jacket</p>
              </div>
            </div>
          </div>
                
        </div>  


        <div class="hotel-section mb-35">
          <h3 class="text-center mb-35">YOU WILL STAY HERE</h3>
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
                </div>
              </div>
            </div>
          </div>      
        </div>


        <div class="airline-section mb-35" v-if="alldata[0].bookedflights">
          <h3 class="text-center mb-35">AIRLINES DETAILS</h3>
          <hr>
          <div v-for="air in alldata[0].bookedflights">
            <div class="row align-items-center">
              <div class="col-md-3 col">
                <p>{{ air.flight.code }} <b class="text-upper"> {{ air.source }}</b></p>
                <P>took off from <b class="text-info">{{ air.source }}</b></P>
                <p>{{ dateFormat(air.departure )}}</p>
              </div>

              <div class="col-md-6 col-sm-6 col-xm-12 order-xm-3">
                <i class="fas fa-plane-departure"></i>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width:40%">
                  </div>
                </div>
              </div>

              <div class="col-md-3 col text-right">
                <p>{{ air.flight.code }} <b class="text-upper"> {{ air.destination }}</b></p>
                <P>took off from <b class="text-info">{{ air.destination }}</b></P>
                <p>{{ dateFormat(air.arrival )}}</p>
              </div>
            </div>
            <hr>
          </div>

        </div>

        <div class="map-section mb-35">
          <h3 class="text-center mb-35">LIVE LOCATION</h3>    
          <div class="row">
            <div class="col-sm-3 card">
              
            </div>
            <div class="col-sm-9">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.73907005717!2d76.81307299667618!3d28.646677259922765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1590745497079!5m2!1sen!2sin" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>
        </div>

        <div class="weather-section mb-35">
          <h3 class="text-center mb-35">WEATHER REPORT</h3>    
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.73907005717!2d76.81307299667618!3d28.646677259922765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1590745497079!5m2!1sen!2sin" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>        



      </div>
      <div class="text-center" v-else>
        <a data-toggle="modal" id="tourModel" data-target="#tourCode" class="btn btn-info text-white float-right"> Enter Tour Code </a>
        <h3 class="text-center">You Don't Have Active Tour</h3>
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

    days(date1,date2){
      var date1 = new Date(date1);
      var date2 = new Date(date2);
      var diffTime = Math.abs(date2 - date1);
      var diff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diff-1;
    },

    tourListData(){
      var data = [];
      axios.post("/api/tour-list", data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` } })
        .then((response) => {
          this.alldata = response.data[0];
          if(response.data.length == 0){
            $("#tourModel").click();
          }else{
            this.alldata = response.data;
            this.itineraryData = response.data[0].itinerary;
            this.hotelData = response.data[0].bookedhotels;
            console.log(this.alldata[0].bookedflights);
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