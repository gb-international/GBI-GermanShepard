<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->
  <div class="booking-form grey-form">
    <p v-if="first_form">When would you like to go?</p>
    <p v-if="second_form">Please Specify Your Requirements.</p>
    <form class="form" @submit-prevent="BookingSubmit()">
      <div class="row" v-if="first_form">

        <div class="col-sm-6">
          <div class="form-group">
            <label for="startdate">Start Journy Date</label>
            <input type="date" class="form-control" id="startdate" />
          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label for="enddate">End Journy Date</label>
            <input type="date" class="form-control" id="enddate" />
          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label for="number_of_person">Number of Persion</label>
            <input
              type="number"
              class="form-control"
              id="number_of_person"
              min="2"
              value="2"
              required
            />
          </div>
        </div>
        
        <div class="col-sm-6">
          <div class="form-group">
            <label for="number_of_person">Number of Rooms</label>
            <input
              type="number"
              class="form-control"
              id="number_of_person"
              min="1"
              value="1"
              required
            />
          </div>
        </div>

        <div class="col-sm-12">
            <div class="form-group">
                <label for="occupancy">Occupancy Types</label>
                <div class="row">
                    <div class="col-sm-3" v-for="(occupancy,i) in occupancy_list" :key="i">
                        <div class="form-check">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input h-16" name="optradio">{{ occupancy }}
                            </label>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

      </div>

      <div class="row" v-if="second_form">
        <div class="col-sm-12">
          <div class="form-group">
            <label for="cities">Cities</label>
            <multiselect :options="options" :multiple="true" :close-on-select="true" v-model="city" placeholder="To"></multiselect>
          </div>
        </div>
        
        <div class="col-sm-12">
          <div class="form-group">
            <label for="sightseeing">Places(Sightseeing)</label>
            <multiselect :options="options" :multiple="true" :close-on-select="true" v-model="sightseen" placeholder="To"></multiselect>
          </div>
        </div>

        <div class="col-sm-12">
          <div class="form-group">
            <label for="transport">Mode of Transport</label>
            <multiselect :options="options" :multiple="true" :close-on-select="true" v-model="transport" placeholder="To"></multiselect>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label for="numofday">Number of Days</label>
            <div class="row align-content-center">
              <div class="col">
                <button @click="down()" class="btn btn-info circle-btn f-12" type="button"><i class="fas fa-minus"></i></button>
              </div>
              
              <div class="col">
                {{ noofday }}
              </div>
              
              <div class="col">
                <button @click="up()" class="btn btn-info circle-btn f-12" type="button"><i class="fas fa-plus"></i></button>
              </div>

            </div>
          </div>
        </div>

        

        <div class="col-sm-6">
          <label for="accommodation">Accommodation Preference</label>
          <select id="accomodation" v-model="accommodation">
            <option value="2" selected>2 Star</option>
            <option value="3">3 Star</option>
            <option value="3">4 Star</option>
            <option value="3">5 Star</option>
          </select>
        </div>

      </div>
      <div class="text-center">
                
        <button type="button" v-if="two_buttons" class="btn profile_button" @click="secondForm()">Customize</button><span class="mr-10"></span>
        <button type="button" v-if="two_buttons" class="btn profile_button">Book</button>

      </div>
    </form>
  </div>
</template>
<script>
import  ModelSelect  from "vue-multiselect";

export default {
  name:"Booking",
  components:{ 
    'multiselect':ModelSelect,
  },
  props: ["list"],
  data() {
    return {
      options: ['Delhi','Mumbai','Lucknow'],
      city:'',
      sightseen:'',
      noofday:0,
      transport:'',
      accommodation:'',
      travel_type_list: [
        "Train",
        "AC Bus",
        "Flight",
        "Train",
        "Flight",
        "Train",
        "AC Bus"
      ],
      occupancy_list:[
          "Single",
          "Double",
          "Triple",
          "Quad"
      ],
      two_buttons:true,
      first_form:true,
      second_form:false,

    };
  },
  mounted(){
    // this.cityList();
  },
  methods:{
    BookingSubmit() {
      alert("submited");
    },
    otherButton(){
      this.first_button = false;
      this.two_buttons = true;
    },
    secondForm(){
      this.first_form = false;
      this.second_form = true;
    },
    down(){
      if(this.noofday>1){
        this.noofday = this.noofday - 1;
      }
    },
    up(){
      this.noofday = this.noofday + 1;
    },
    cityList() {
      this.$axios.get("/api/city").then(response => {
        for (var i = 0; i < response.data.data.length; i++) {
          console.log(response);
          this.options.push({
            value: response.data.data[i].name,
          });
        }
      });
    },
  }
};
</script>
