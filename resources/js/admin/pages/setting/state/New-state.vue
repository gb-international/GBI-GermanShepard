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
        @submit.prevent="AddSchool()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="country_id">Country name</label>

              <select
                class="form-control select-field"
                v-model.lazy="country_id"
              >
                <option
                  v-for="data in country_list"
                  :value="data.id"
                  :key="data.id"
                >
                  {{ data.name }}
                </option>
              </select>
              <has-error :form="form" field="country_id"></has-error>
            </div>
          </div>

          <div class="col-sm-8">
            <div class="form-group">
              <label for="name">State Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter State Name"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-4">
            <back-button url="/sightseeing"></back-button>
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
import { Form, HasError } from "vform";
import BackButton from "@/admin/components/buttons/BackButton.vue";
import SubmitButton from "@/admin/components/buttons/SubmitButton.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
export default {
  name: "New",
  components: {
    Form,
    "has-error": HasError,
    "back-button": BackButton,
    "submit-button": SubmitButton,
    "form-layout": FormLayout,
  },
  data() {
    return {
      // Create a new form instance
      country_list: [],
      country_id: 0,
      form: new Form({
        country_id: "",
        name: ""
      })
    };
  },
  created() {
    this.countryList();
  },
  methods: {
    countryList() {
      axios.get("/api/country").then(response => {
        this.country_list = response.data;
      });
    },

    AddSchool() {
      // Submit the form via a itinerary request
      if (this.school_name == 0) {
        toast({
          type: "error",
          title: "Please Select Country !!!"
        });
        return false;
      }

      this.form["country_id"] = this.country_id;
      var path = `/api/state`;
      this.form
        .post(path)
        .then(response => {
          this.form.name = "";
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated !!!"
          });
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
    },
  }
};
</script>

<style scoped>
</style>  
  