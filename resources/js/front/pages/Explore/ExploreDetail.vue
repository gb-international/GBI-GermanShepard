<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->

  <div id="explorelist">
    <section class="banner-block">
      <img
        
        :src="itineraryData.detail_photo"
        loading="lazy"
        alt="itinerary"
      />
    </section>
    <div class="container">
      <div class="w-100 text-right mt-2">
        <button
          v-if="login"
          class="btn profile_button text-white book_btn"
          data-toggle="modal"
          data-target="#bookModal"
        >Book Now</button>

        <button v-else class="btn profile_button text-white book_btn" id="loginButton"
                data-toggle="modal"
                data-target="#LoginForm">Book Now</button>
      </div>
      <div class="w-100 pt-2 text-center">
        <h1 class="font-20 text-lowercase text-capitalize pt-2 pb-2"><u>{{itineraryData.title | CapitalizeString}}</u></h1>
      </div>
      <div class="description" v-html="description"></div>
      <div class="row w-100 pt-3" id="explore_detail_part">
        <div class="col-sm-4" v-for="data in itineraryData.itinerarydays" :key="data.id">
          <h4 class="day_tab">Day {{ data.day}}</h4>
          <h1
            class="explor-head text-capitalize"
            v-if="data.day_source != data.day_destination"
          >{{data.day_source }} - {{data.day_destination }}</h1>
          <h1 class="explor-head" v-else>{{ data.day_source }}</h1>
          <div class="card-text card-text-ul" v-html="data.day_description"></div>
        </div>
      </div>
    </div>

    <!-- Booking Modal -->
    <div class="modal" id="bookModal">
      <div class="modal-dialog">
        <div class="modal-content modal-color">
          <div class="modal-body" v-if="itineraryData.itinerarydays">
            <button type="button" class="close" data-dismiss="modal">&times;</button>

            <booking 
              v-if="loading== false"
              :title="itineraryData.title"
              :selected_cities="selected_cities"
              :city_list="city_list"
              ></booking>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import  booking  from "@/front/components/Booking.vue";

export default {
  name: "ExploreDetail",
  components: {
    booking
  },
  metaInfo: {
    title: "GBI Explore Destination",
    meta: [
      {
        name: "description",
        content:
          "@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button"
      },
      {
        name: "keywords",
        content:
          "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs"
      },
      {
        name: "url",
        content: "https://www.gowithgbi.com/resources/explore-destination"
      }
    ]
  },
  data() {
    return {
      day: 0,
      description: "",
      itineraryData: [],
      selected_cities:[],
      city_list:[],
      login:false,
      loading:true,
    };
  },

  mounted() {
    if (this.$cookies.get('access_token') != null) {
      this.login = true;
    }
  },
  created(){
    this.getItinerary();
  },
  methods: {
    getItinerary(){
      this.$axios.get(`/api/itinerary/${this.$route.params.id}`).then((res)=>{
        this.itineraryData = res.data;
        if(this.itineraryData.itinerarydays){
          var data = this.itineraryData.itinerarydays;
          let selected=[];
          this.selected_cities = [];
          if(data){
            this.selected_cities = [];
            for(let i=0;i<data.length;i++){
              selected.push(data[i].day_source);
              selected.push(data[i].day_destination);
            }
          }
          this.selected_cities = [...new Set(selected)];
        }
        this.getRelatedCities(this.itineraryData.destination);
      });
    },
    getRelatedCities(destination){
      this.$axios.get(`/api/related-cities/${destination}`).then((res)=>{
        this.city_list = res.data;
        this.loading = false;
      });
    }
  }
};
</script>
