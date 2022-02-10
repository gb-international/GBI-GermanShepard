<template>
  <!--************************************************
  Author:@Ajay
  ****************************************************-->
  <div id="exploreDestination">
    <div class="explore_banner text_on_image banner_bg explore_bg_img">
      <div class="content">
<<<<<<< Updated upstream
        <div class="container-fluid">
=======
        <div class="container-custom" >
>>>>>>> Stashed changes
          <div class="row">
            <div class="col-sm-12 m-0 p-0">
              <form role="form" autocomplete="off">
                <div class="nav-sreach-explo">
                  <ul class="nav nav-tabs serch-explo-menu">
                    <li class="nav-item">
                      <a
                        class="nav-link active border-none"
                        data-toggle="tab"
                        href="#home"
                        v-on:click="multicity = !multicity"
                        >Oneway</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link border-none"
                        data-toggle="tab"
                        href="#menu1"
                        v-on:click="multicity = !multicity"
                        >Multicity</a
                      >
                    </li>
                  </ul>
                  <!-- start single location Tab panes serach bar for source and destination-->
<<<<<<< Updated upstream
                  <div class="tab-content explor-content pb-1">
                    <div id="home" class="container tab-pane active">
=======
                  <div class="explor-content pb-1" v-if="panel == 'Itinerary'" style="padding-top: 1vh !important;">
                    <div class="container" v-if="tripType == 'return'">
>>>>>>> Stashed changes
                      <div class="row search-radio">
                        <div class="col-sm-6">
                          <div class="row pt-3 pb-3">
                            <div class="col">
                              <div class="custom-control custom-radio">
                                <input
                                  type="radio"
                                  id="national"
                                  name="customRadio"
                                  value="national"
                                  class="custom-control-input"
                                  v-model="region"
                                />
                                <label
                                  class="custom-control-label"
                                  for="national"
                                  >National</label
                                >
                              </div>
                            </div>

                            <div class="col">
                              <div class="custom-control custom-radio">
                                <input
                                  type="radio"
                                  id="international"
                                  name="customRadio"
                                  value="international"
                                  class="custom-control-input"
                                  v-model="region"
                                />
                                <label
                                  class="custom-control-label"
                                  for="international"
                                  >International</label
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row p-0 parent_padding">
                        <div class="col-6 col-sm-4 col-lg-4 input-p nopadding">
                          <model-select
                            :options="options"
                            v-model="sources"
                            placeholder="Leave from"
                            autocomplete="off"
                          ></model-select>
                        </div>
                        <div class="col-6 col-sm-4 col-lg-4 input-p nopadding">
                          <model-select
                            :options="destinationCities"
                            v-model="destinations"
                            placeholder="Arrive at"
                          ></model-select>
                        </div>

                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                            <select
                              class="placeholder_color ui fluid search selection dropdown"
                              name="typetour"
                              @change="tourtypeOnChange($event)"
                            >
                              <option selected disabled>In mood for</option>
                              <option
                                v-for="index in tourtype_option"
                                :key="index.id"
                                :value="index.id"
                              >
                                {{ index.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                            <select
                              class="selectpicker ui selection dropdown"
                              name="noofday"
                              @change="noofdaysOnChange($event)"
                            >
                              <option selected>No. of days</option>
                              <option
                                v-for="index in noofdays_option"
                                :key="index.id"
                                :value="index"
                              >
                                {{ index }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end single location Tab panes serach bar for source and destination-->
                    <!-- start multiple location Tab panes serach bar for source and destination-->

<<<<<<< Updated upstream
                    <div id="menu1" class="container tab-pane">
                      <br />
=======
                    <div v-else class="container">
                      <div class="row search-radio">
                        <div class="col-sm-6">
                          <div class="row pt-3 pb-3">
                            <div class="col">
                              <div class="custom-control custom-radio">
                                <input
                                  type="radio"
                                  id="national"
                                  name="customRadio"
                                  value="return"
                                  class="custom-control-input"
                                  v-model="tripType"
                                />
                                <label
                                  class="custom-control-label"
                                  for="national"
                                  >Return</label
                                >
                              </div>
                            </div>

                            <div class="col">
                              <div class="custom-control custom-radio">
                                <input
                                  type="radio"
                                  id="international"
                                  name="customRadio"
                                  value="multicity"
                                  class="custom-control-input"
                                  v-model="tripType"
                                />
                                <label
                                  class="custom-control-label"
                                  for="international"
                                  >Multicity</label
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
>>>>>>> Stashed changes
                      <div class="row p-0 parent_padding">
                        <div class="col-6 col-sm-4 col-lg-4 input-p nopadding">
                          <model-select
                            :options="options"
                            v-model="multi_source"
                            placeholder="Leave from"
                          ></model-select>
                        </div>
                        <div class="col-6 col-sm-4 col-lg-4 input-p nopadding">
                          <model-select
                            :options="options"
                            v-model="multi_destination"
                            placeholder="Arrive at"
                          ></model-select>
                        </div>
                      </div>

                      <div class="row p-0 parent_padding">
                        <div
                          class="col-lg-8"
                          v-for="(row, index) in rows"
                          :key="index"
                        >
                          <div class="row">
                            <div class="col-6 col-sm-6 input-p nopadding">
                              <model-select
                                :options="options"
                                v-model="row['source']"
                                placeholder="Leave from"
                              ></model-select>
                            </div>
                            <div class="col-6 col-sm-6 input-p nopadding">
                              <model-select
                                :options="options"
                                v-model="row['destination']"
                                placeholder="Arrive at"
                              ></model-select>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-2">
                          <div class="row button_group">
                            <div class="col-12">
                              <div
                                class="buttons save_btn link"
                                v-if="city_button == current_counter"
                              >
                                <img
                                  src="/images/icons/multiple_add.png"
                                  v-if="city_button == current_counter"
                                  class=""
                                  v-bind:class="{ disable: save_disable_btn }"
                                  @click="addRow"
                                />
                              </div>

                              <div
                                class="buttons remove_btn link"
                                v-if="city_button == current_counter"
                              >
                                <img
                                  src="/images/icons/multiple_minus.png"
                                  class=""
                                  v-bind:class="{ disable: remove_disable_btn }"
                                  @click="deleteRow(current_counter - 1)"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- tyype of tour and no of days -->
                      <div class="row parent_padding">
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                            <select
                              class="placeholder_color ui fluid search selection dropdown"
                              name="typetour"
                              @change="tourtypeOnChange($event)"
                            >
                              <option selected>In mood for</option>
                              <option
                                v-for="index in tourtype_option"
                                :key="index.id"
                                :value="index"
                              >
                                {{ index.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                            <select
                              class="selectpicker ui selection dropdown"
                              name="noofday"
                              @change="noofdaysOnChange($event)"
                            >
                              <option selected>No. of days</option>
                              <option
                                v-for="index in tourtype_option"
                                :key="index.id"
                                :value="index.id"
                              >
                                {{ index.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--End menu1-->
                    <!-- end multiple location Tab panes serach bar for source and destination-->
                  </div>
<<<<<<< Updated upstream
=======
                  <!--Start menu2 -->
                  <div class="explor-content pb-1" style="padding-top: 2.4vh !important;" v-else>
                    
                    <div class="container">
                      <div class="row search-radio">
                        <div class="col-sm-6">
                          <div class="row pb-3">
                            <div class="col">
                              <div class="custom-control custom-radio">
                                <input
                                  type="radio"
                                  id="hotel"
                                  name="customRadio3"
                                  value="hotel"
                                  class="custom-control-input"
                                  v-model="hotelType"
                                />
                                <label
                                  class="custom-control-label"
                                  for="hotel"
                                  >Hotels</label
                                >
                              </div>
                            </div>

                            <div class="col">
                              <div class="custom-control custom-radio">
                                <input
                                  type="radio"
                                  id="banquet"
                                  name="customRadio3"
                                  value="banquet"
                                  class="custom-control-input"
                                  v-model="hotelType"
                                />
                                <label
                                  class="custom-control-label"
                                  for="banquet"
                                  >Banquets</label
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row p-0 parent_padding">
                        <div class="col-12 col-lg-6 input-p nopadding">
                          <model-select
                            :options="optionsHotel"
                            v-model="sources"
                            placeholder="Location"
                            autocomplete="off"
                          ></model-select>
                        </div>

                        <div class="col-12 col-lg-6 input-p nopadding" v-if="hotelType == 'hotel'">
                            <input
                              type="text"
                              class="form-control"
                              id="number_of_person"
                              data-toggle="modal"
                              data-target="#personsModal"
                              @click="showPersonModal = true"
                              v-model="people"
                              placeholder="Guests"
                              readonly
                            />
                            <has-error :form="form" field="start_date"></has-error>
                            <div class="modal" tabindex="-1" role="dialog" id="personsModal" v-if="showPersonModal">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" style="color: black">Guests</h5>
                                  <button type="button" class="close" aria-label="Close" @click="showPersonModal = false">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <div class="marginT">
                                      <label for="number_of_adults" class="personLables">Adults(>12 years)</label>
                                       <fieldset>
                                          <input type="button" value="-" class="decrease" @click="decrVal('adults')"/>
                                          <input type="passengers" id="incrdcr" v-model="adults" readonly/>
                                          <input type="button" value="+" class="increase" @click="incrVal('adults')"/>
                                       </fieldset>
                                    </div>
                                    <div class="marginT">
                                      <label for="number_of_children" class="personLables">Children(2 to 12 years)</label>
                                      <fieldset>
                                          <input type="button" value="-" class="decrease" @click="decrVal('children')"/>
                                          <input type="passengers" id="incrdcr" v-model="children" readonly/>
                                          <input type="button" value="+" class="increase" @click="incrVal('children')"/>
                                       </fieldset>
                                    </div>
                                    <div class="marginT">
                                      <label for="number_of_infants" class="personLables">Infants(3 days to 2 years)</label>
                                     <fieldset>
                                          <input type="button" value="-" class="decrease" @click="decrVal('infants')"/>
                                          <input type="passengers" id="incrdcr" v-model="infants" readonly/>
                                          <input type="button" value="+" class="increase" @click="incrVal('infants')"/>
                                       </fieldset>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-primary" @click="savePersons">Confirm</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-lg-3 input-p nopadding" v-if="hotelType == 'hotel'">
                          <div class="select">
                            <select
                              class="selectpicker ui selection dropdown"
                              name="noofday"
                              @change="changeRoomType($event)"
                            >
                              <option selected>Room Category</option>
                              <option
                                v-for="index in room_types"
                                :key="index.id"
                                :value="index"
                              >
                                {{ index }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-12 col-lg-3 input-p nopadding" v-if="hotelType == 'hotel'">
                          <input
                              type="text"
                              class="form-control"
                              id="number_of_rooms"
                              data-toggle="modal"
                              data-target="#roomsModal"
                              @click="showRoomModal = true"
                              v-model="room_text"
                              placeholder="No. of Rooms"
                              readonly
                            />
                          <div class="modal" tabindex="-1" role="dialog" id="roomsModal" v-if="showRoomModal">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" style="color: black">No. of Rooms</h5>
                                  <button type="button" class="close" aria-label="Close" @click="showRoomModal = false">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                    <div class="marginT">
                                      <label for="number_of_infants" class="personLables" style="color: gray">Number of rooms required?</label>
                                     <fieldset>
                                          <input type="button" value="-" class="decrease" @click="decrVal('rooms')"/>
                                          <input type="passengers" id="incrdcr" v-model="rooms" readonly/>
                                          <input type="button" value="+" class="increase" @click="incrVal('rooms')"/>
                                       </fieldset>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-primary" @click="saveRooms">Confirm</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-sm-12 col-lg-6 input-p nopadding">
                         <HotelDatePicker />
                        </div>
                        <div class="col-12 col-lg-6 input-p nopadding" v-if="hotelType == 'banquet'">
                          <div class="select">
                            <select
                              class="selectpicker ui selection dropdown"
                              name="star_category"
                              @change="changeStarType($event)"
                            >
                              <option selected>Star Category</option>
                              <option
                                v-for="index in banquet_types"
                                :key="index.id"
                                :value="index"
                              >
                                {{ index }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-12 col-lg-6 input-p nopadding" v-if="hotelType == 'banquet'">
                          <div class="select">
                            <select
                              class="selectpicker ui selection dropdown"
                              name="banquetGuests"
                              @change="changeBanquetGuests($event)"
                            >
                              <option selected>No. of Guests</option>
                              <option
                                v-for="index in GuestsList"
                                :key="index.id"
                                :value="index"
                              >
                                {{ index }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-6 ml-2">
                          <div class="row search-radio">
                            <div class="col-sm-12">
                              <custLabel2 class="pt-3">Customer type</custLabel2>
                              <div class="row pb-3">
                                <div class="col-md-4 col-6">
                                  <div class="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      id="student"
                                      name="customRadio2"
                                      value="student"
                                      class="custom-control-input"
                                      v-model="searchForm.clientType"
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="student"
                                      >Student</label
                                    >
                                  </div>
                                </div>

                                <div class="col-md-4 col-6">
                                  <div class="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      id="corporate"
                                      name="customRadio2"
                                      value="corporate"
                                      class="custom-control-input"
                                      v-model="searchForm.clientType"
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="corporate"
                                      >Corporate</label
                                    >
                                  </div>
                                </div>

                                <div class="col-md-4 col-6">
                                  <div class="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      id="family"
                                      name="customRadio2"
                                      value="family"
                                      class="custom-control-input"
                                      v-model="searchForm.clientType"
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="family"
                                      >Family</label
                                    >
                                  </div>
                                </div>

                              </div>

                            </div>
                          </div>
                        </div>                           
                      </div>
                      <p class="text-center">
                        <button
                          class="btn-defalt btn-lg center-block explore_custom_button"
                          @click.prevent="searchHotels()"
                          type="submit"
                          @click="show = !show"
                        >
                          SEARCH
                        </button>
                      </p>
                    </div>
                    <!-- end single location Tab panes serach bar for source and destination-->
                  </div>
>>>>>>> Stashed changes
                </div>
                <p class="text-center">
                  <button
                    class="btn btn-defalt btn-lg center-block profile_button"
                    @click.prevent="searchAll()"
                    type="submit"
                    @click="show = !show"
                  >
                    Search
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <main class="pl-2 pr-2">
      <div class="container">
        <div class="p-0" v-if="allSearchdata == ''">
          <heading class="text-center" text="Upcoming Tour" />
          <itinerary-list :list="upcoming_data" />
          <div class="nopadding m-b-15">
            <router-link to="/explore-list" class="listexplore"
              >View More</router-link
            >
          </div>
          <heading class="text-center" text="Popular Tour" />
          <itinerary-list :list="popular_data" />
          <div class="nopadding m-b-15">
            <router-link to="/explore-list" class="listexplore"
              >View More</router-link
            >
          </div>
        </div>
        <div v-else>
          <itinerary-list :list="allSearchdata"></itinerary-list>
        </div>

        <alert-modals 
          
          :sources="sources" 
          :destinations="destinations"
          :noofdays="noofday" 
          :tourtypes="tour_type_text"
        />

      </div>
    </main>
  </div>
</template>

<script>
import Heading from "@/front/components/layout/Heading.vue";
import SubHeading from "@/front/components/layout/SubHeading.vue";
import ExploreSearchMixin from "@/front/mixins/user/ExploreSearchMixin";
import AlertModals from '@/front/components/Explore/AlertModals.vue';
export default {
  name: "exploreDestination",
  mixins: [ExploreSearchMixin],
  metaInfo: {
    title: "GBI Explore Destination",
    meta: [
      {
        name: "description",
        content:
          "@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button",
      },
      {
        name: "keywords",
        content:
          "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs",
      },
      {
        name: "url",
        content: "https://www.gowithgbi.com/resources/explore-destination",
      },
    ],
  },

  components: {
    Heading,
    SubHeading,
    'alert-modals':AlertModals
  },
  data() {
    return {
<<<<<<< Updated upstream
      upcoming_data: "",
      popular_data: "",
=======
      upcoming_data: null,
      popular_data: null,
      CheckInOut: [],
      room_options: [],
      room_types: ["Single", "Double", "Triple", "Quad"],
      banquet_types: ["2 Star", "3 Star", "4 Star", "5 Star"],
      showPersonModal: false,
      showRoomModal: false,
      person: 2,
      adults: 2,
      children: 0,
      infants: 0,
      room: '',
      room_text: '',
      rooms: 1,
      apiFailed: false,
      //travel_Loaded: false
>>>>>>> Stashed changes
    };
  },

  created() {
    this.UpcomingData();
    this.popularTour();
  },
  methods: {
    popularTour() {
      this.$axios.get("/api/travel-program/popular-tour").then((response) => {
        this.popular_data = response.data;
      });
    },
    UpcomingData() {
      this.$axios.get("/api/travel-program/upcoming-tour").then((response) => {
        this.upcoming_data = response.data;
      });
    },
<<<<<<< Updated upstream
=======

    searchHotels(){
      if(this.hotelType == 'hotel'){
        this.$cookies.set("hotelSearch_Location", this.sources.city);
        this.$cookies.set("hotelSearch_rooms", this.room);
        this.$cookies.set("hotelSearch_room_type", this.room_type);
        this.$cookies.set("hotelSearch_guests", this.person);
        this.$router.push('/hotel-search')
      } else if(this.hotelType == 'banquet'){
        this.$cookies.set("hotelSearch_Location", this.sources.city);
        this.$cookies.set("hotelSearch_Stars", this.star_type);
        this.$router.push('/banquet-search')
      }
    },

>>>>>>> Stashed changes
    searchAll() {
      // Submit form
      let vm = this;
      vm.searchForm.reset();
      let source = [];
      let destination = [];
      vm.searchForm.noofday = vm.noofday;
      vm.searchForm.tourtype = vm.tourtype;
      // if multicity search or simple search
      if (vm.multicity) {
        //Multiple city search
        destination = vm.multi_destination.text;
        source = vm.multi_source.text;
        if (source.length > 1 && destination.length > 1) {
          vm.searchForm.source.push(source);
          vm.searchForm.destination.push(destination);
        } else {
          this.$swal.fire("Error", "Please select all the fields", "error");
        }
        var rows_length = vm.rows.length;
        for (var i = 0; i <= rows_length - 1; i++) {
          vm.searchForm.source.push(vm.rows[i].source.text);
          vm.searchForm.destination.push(vm.rows[i].destination.text);
        }
      } else {
        //Simple search
        vm.searchForm.source.push(vm.sources.text);
        vm.searchForm.destination.push(vm.destinations.text);
      }

      if (
        vm.searchForm.destination[0] != "" &&
        vm.searchForm.destination[0] != ""
      ) {
        vm.searchForm
          .post("api/search-itinerary")
          .then((res) => {
            vm.allSearchdata = res.data.data;
            if (vm.allSearchdata.length == 0) {
              this.modoals_show = true;
              $("#AlertModalForExplore").modal('show');
            }
          })
          .catch((error) => {
            this.$swal.fire("Alert", "please select the fields", "error");
          });
      } else {
        this.$swal.fire("Alert", "please select locations", "error");
      }
    },
  },
};
</script>         
