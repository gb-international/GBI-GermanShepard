<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="UpdateRestaurant()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="city_id">Select City</label>
              <model-select
                :options="options"
                v-model="form.city_id"
                placeholder="From"
              ></model-select>
              <has-error :form="form" field="city_id"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">Restaurant Name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
                placeholder="Enter Restaurant Name"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="contact_name">Contact Person</label>
              <input
                type="text"
                class="form-control"
                v-model="form.contact_name"
                :class="{ 'is-invalid': form.errors.has('contact_name') }"
                placeholder="Enter contact person name"
              />
              <has-error :form="form" field="contact_name"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="contact_number">Contact number</label>
              <input
                type="text"
                class="form-control"
                v-model="form.contact_number"
                :class="{ 'is-invalid': form.errors.has('contact_number') }"
                placeholder="Enter contact number name"
              />
              <has-error :form="form" field="contact_number"></has-error>
            </div>
          </div>

          <div class="col-sm-8">
            <div class="form-group">
              <label for="address">Address</label>
              <textarea
                class="form-control textarea"
                v-model="form.address"
                :class="{ 'is-invalid': form.errors.has('address') }"
              ></textarea>
              <has-error :form="form" field="address"></has-error>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-4">
            <back-button url="/restaurant-list"></back-button>
          </div>
          <div class="col-sm-4">
            <div class="form-group text-center">
              <submit-button />
            </div>
          </div>
          <div class="col-sm-2"></div>
        </div>
      </form>
    </template>
  </form-layout>
</template>

<script>
import { Form, HasError, AlertError } from "vform";
import { ModelSelect } from "vue-search-select";
import BackButton from "@/admin/components/buttons/BackButton.vue";
import SubmitButton from "@/admin/components/buttons/SubmitButton.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
export default {
  name: "New",
  components: {
    Form,
    "has-error": HasError,
    ModelSelect,
    "back-button": BackButton,
    "submit-button": SubmitButton,
    "form-layout": FormLayout,
  },
  data() {
    return {
      options: [],
      form: new Form({
        name: "",
        city_id: "",
        address: "",
        contact_name: "",
        contact_number: "",
      }),
    };
  },
  created() {
    this.cityList();
    this.RestaurantData();
  },
  methods: {
    RestaurantData() {
      axios
        .get(`/api/restaurants/${this.$route.params.id}/edit`)
        .then((response) => {
          this.form.fill(response.data);
        });
    },
    cityList() {
      axios.get("/api/city").then((response) => {
        for (var i = 0; i < response.data.data.length; i++) {
          this.options.push({
            value: response.data.data[i].id,
            text: response.data.data[i].name,
          });
        }
      });
    },
    UpdateRestaurant() {
      this.form
        .put(`/api/restaurants/${this.$route.params.id}`)
        .then((response) => {
          this.$router.push(`/restaurant-list/`);
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated",
          });
        })
        .catch(() => {});
    },
  },
};
</script>
