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
            <form role="form" enctype="multipart/form-data" @submit.prevent="addHotel()">
              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group">
                    <label for="name">Restaurant Name</label>
                    <model-select :options="options" v-model="form.restaurant_id" placeholder="From"></model-select>
                    <has-error :form="form" field="name"></has-error>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <label for="check_in">Check In</label>
                    <input
                      type="datetime-local"
                      class="form-control"
                      v-model="form.check_in"
                      :class="{ 'is-invalid': form.errors.has('check_in') }"
                      placeholder="Enter Salary Per Day"
                      name="check_in"
                    />
                    <has-error :form="form" field="check_in"></has-error>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <label for="check_out">Check Out</label>
                    <input
                      type="datetime-local"
                      class="form-control"
                      v-model="form.check_out"
                      :class="{ 'is-invalid': form.errors.has('check_out') }"
                      placeholder="Enter check Out"
                      name="check_out"
                    />
                    <has-error :form="form" field="check_out"></has-error>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group">
                    <label for="price">Price</label>
                    <input
                      type="number"
                      class="form-control"
                      v-model="form.price"
                      :class="{ 'is-invalid': form.errors.has('price') }"
                      placeholder="Enter Price"
                    />
                    <has-error :form="form" field="price"></has-error>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-4">
                  <div class="form-group text-center">
                    <button class="btn btn-primary itrn_add_btn" @click="goBack()">Back</button>
                  </div>
                </div>
                <div class="col-sm-4">
                  <button type="submit" class="btn btn-primary itrn_add_btn">SAVE</button>
                </div>
                <div class="col-sm-2"></div>
              </div>
            </form>
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
  components:{Form,
    'has-error': HasError,
    ModelSelect,
  },
  data() {
    return {
      row_input: "",
      hotel_list: "",
      tour: "",
      options: [],
      form: new Form({
        tour_id: "",
        tour_code: "",
        restaurant_id: "",
        check_in: "",
        check_out: "",
        price: ""
      })
    };
  },
  created() {
    this.hotelData();
  },
  methods: {
    hotelData() {
      axios.get(`/api/restaurants`).then(response => {
        for (var i = 0; i < response.data.length; i++) {
          this.options.push({
            value: response.data[i].id,
            text: response.data[i].name
          });
        }
      });
    },
    addHotel() {
      var path = `/api/bookedrestaurants`;
      this.form.tour_id = this.$route.params.id;
      this.form.tour_code = this.$route.params.tour_code;
      this.form
        .post(path)
        .then(response => {
          if (response.data == 1) {
            this.$toast.fire({
              icon: "error",
              title: "Tour Manager already going on this tour !!!"
            });
            return false;
          }
          // this.$router.push(`/hotel-list/`)
          this.$toast.fire({
            icon: "success",
            title: "restaurant Added successfully"
          });
        })
        .catch(() => {});
    },

    goBack() {
      this.$router.push(`/booked-tour/${this.$route.params.id}`);
    }
  }
};
</script>