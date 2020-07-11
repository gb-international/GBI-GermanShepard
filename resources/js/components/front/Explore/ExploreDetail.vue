<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  
  <div id="explorelist">
    <section class="banner-block">
      <img
        class="top-img"
        :src="`/uploadimage/${itineraryData.detail_photo}`"
        loading="lazy"
        alt="itinerary"
      />
    </section>
    {{editData}}
    <div class="container">
      <h1 class="main-head">{{itineraryData.title}}<a href="#" class="btn float-right profile_button text-white book_btn" data-toggle="modal" data-target="#bookModal">Book Now</a></h1>
      <p class="description" v-html="description"></p>
      <div class="row" id="explore_detail_part">
        <div class="col-sm-4" v-for="data in itineraryData.itinerarydays" :key="data.id">
          <h4 class="day_tab">Day {{ data.day}}</h4>
          <h1
            class="explor-head"
            v-if="data.day_source != data.day_destination"
          >{{data.day_source.toUpperCase() }} - {{data.day_destination.toUpperCase()}}</h1>
          <h1 class="explor-head" v-else>{{ data.day_source.toUpperCase() }}</h1>
          <div class="card-text" v-html="data.day_description"></div>
        </div>
      </div>
    </div>
    
    <!-- Booking Modal -->
    <div class="modal" id="bookModal">
      <div class="modal-dialog">
        <div class="modal-content modal-color">
          <div class="modal-body">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <div class="booking-form grey-form">
              <p>When would you like to go?</p>
              <form class="form" @submit-prevent="BookingSubmit()">
                <div class="row">

                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="startdate">Start Journy Date</label>
                      <input type="date" class="form-control" id="startdate">
                    </div>
                  </div>

                  
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="enddate">End Journy Date</label>
                      <input type="date" class="form-control" id="enddate">
                    </div>
                  </div>

                  
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="traveltype">Travel Type</label>
                      <select class="form-control" id="traveltype">
                        <option v-for="(type,i) in travel_type_list" :key="i">{{ type }}</option>
                      </select>
                    </div>
                  </div>

                  
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="number_of_person">Number of Persion</label>
                      <input type="number" class="form-control" id="number_of_person" min="2" value="2" required>
                    </div>
                  </div>

                </div>
                <div class="text-center">
                  <button type="submit" class="btn profile_button">BOOK</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import { Form, HasError, AlertError } from "vform";

export default {
  name: "ExploreDetail",
  components:{
    'has-error':HasError,
    'alert-error':AlertError
  },
  metaInfo: {
    title: 'GBI Explore Destination',
    meta:[
      { name: 'description', content: '@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button' },
      { name: 'keywords', content: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs' },
      { name: 'url', content: 'https://www.gowithgbi.com/resources/explore-destination' },
    ]
  },
  data() {
    return {
      day: 0,
      description: "",
      itineraryData: [],
      travel_type_list:['Train','AC Bus','Flight','Train','Flight','Train','AC Bus'],
    };
  },

  mounted() {
    this.$store.dispatch(
      "getEditData",
      `/api/itinerary/${this.$route.params.id}`
    );
  },

  computed: {
    editData() {
      this.itineraryData = this.$store.getters.getEditData;
    }
  },
  methods:{
    BookingSubmit(){
      alert('submited');
    }
  }
  
};
</script>
