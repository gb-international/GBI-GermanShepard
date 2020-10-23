<!--
This Template is for listing for the Hotel profile using function to get the 
data from the api to display the data about the Hotel from the backend .
-->
<template>
  <section class="content">
    <!--************************************************
      Template Type: Reservation List
      Author:@Ajay

    ****************************************************-->
    <div class="row justify-content-around">
      <div class="col-md-12">
        <div class="container container_admin_body">
          <div class="reservation">
            <div
              class="row w-100 p-3 card-layout"
              v-for="(itinerary, index) in itineraryday_list"
              :key="itinerary.id"
            >
              <div class="col-sm-5">
                <p><label for="name">Sightseeing Day {{ itinerary.day }} (<small>{{ itinerary.day_source }} - {{ itinerary.day_destination }}</small>)</label></p>
                
              </div>
              <div class="col-sm-5">
                <div
                  class="row w-100"
                  v-for="(row, i) in total_row[index]"
                  :key="i"
                >
                  <div class="col-sm-12">
                    <model-select
                      :options="options"
                      v-model="total_row[index][i].sightseeing_id"
                      placeholder="From"
                    ></model-select>
                  </div>
                </div>
              </div>
              <div class="col-sm-2">
                <button
                  type="button"
                  class="btn btn-primary btn_plus"
                  @click="removeRow(index)"
                >
                  <i class="fas fa-minus" aria-hidden="true"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-info btn_plus"
                  @click="addRow(index)"
                >
                  <i class="fas fa-plus" aria-hidden="true"></i>
                </button>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-2"></div>
              <div class="col-sm-4">
                <div class="form-group text-center">
                  <button
                    class="btn btn-primary itrn_add_btn"
                    @click="goBack()"
                  >
                    Back
                  </button>
                </div>
              </div>
              <div class="col-sm-4">
                <button type="button" class="btn btn-primary itrn_add_btn" @click="addSightseeing()">
                  SAVE
                </button>
              </div>
              <div class="col-sm-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Form, HasError } from "vform";
import { ModelSelect } from "vue-search-select";
export default {
  name: "List",
  components: { Form, "has-error": HasError },
  components: { Form, "has-error": HasError, ModelSelect },
  data() {
    return {
      row_input: "",
      itineraryday_list: "",
      tour: "",
      options: [],
      total_row: [],
    };
  },
  created() {
    this.sightseeingData();
    this.itineraryData();
  },
  methods: {
    sightseeingData() {
      axios.get(`/api/sightseeings`).then((response) => {
        console.log(response);
        for (var i = 0; i < response.data.data.length; i++) {
          this.options.push({
            value: response.data.data[i].id,
            text: response.data.data[i].name+' ('+response.data.data[i].city.name+' )',
          });
        }
      });
    },

    itineraryData() {
      axios
        .get(`/api/itinerarydayget/${this.$route.params.itinerary_id}`)
        .then((response) => {
          this.itineraryday_list = response.data;
          for (var i = 0; i < this.itineraryday_list.length; i++) {
            this.total_row.push([
              {
                tour_id: this.$route.params.id,
                tour_code: this.$route.params.tour_code,
                itineraryday_id: this.itineraryday_list[i].id,
                sightseeing_id: "",
              },
            ]);
          }
        });
    },

    addRow(index) {
      this.total_row[index].push(
        {
          tour_id: this.$route.params.id,
          tour_code: this.$route.params.tour_code,
          itineraryday_id: this.itineraryday_list[index].id,
          sightseeing_id: "",
        }
      );
    },

    removeRow(index) {
      if (this.total_row[index].length != 1) {
        this.total_row[index].splice(-1, 1);
      }
    },

    addSightseeing() {


      var path = `/api/bookedsightseeings`;
      axios.post(path,this.total_row)
        .then((response) => {
          console.log(response);
          if (response.data == 1) {
            this.$toast.fire({
              icon: "error",
              title: "Already sightseeing added for this tour !!!",
            });
            return false;
          }else if(response.data == 2){
            this.$toast.fire({
              icon: "error",
              title: "Try again",
            });
            return false;
          }
          // this.$router.push(`/hotel-list/`)
          this.$toast.fire({
            icon: "success",
            title: "Sightseeings Added successfully",
          });
        })
        .catch(() => {});
    },

    goBack() {
      this.$router.push(`/booked-tour/${this.$route.params.id}`);
    },
  },
};
</script>