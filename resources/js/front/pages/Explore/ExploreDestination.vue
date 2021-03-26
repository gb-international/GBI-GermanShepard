<template>
  <!--************************************************
  Author:@Ajay
  ****************************************************-->
  <div id="exploreDestination">
    <div class="explore_banner text_on_image banner_bg explore_bg_img">
      <div class="content">
        <div class="container-fluid">
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
                  <div class="tab-content explor-content pb-1">
                    <div id="home" class="container tab-pane active">
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

                    <div id="menu1" class="container tab-pane">
                      <br />
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
      upcoming_data: "",
      popular_data: "",
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
