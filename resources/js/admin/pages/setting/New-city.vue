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
        @submit.prevent="AddCity()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="country_id">Country name</label>

              <select
                class="form-control select-field"
                v-model="form.country_id"
              >
              <option value="" disabled hidden>Select Country</option>
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

          <div class="col-sm-4">
            <div class="form-group">
              <label for="state_id">State name</label>
              <select class="form-control select-field" v-model="form.state_id">
                <option value="" disabled hidden>Select State</option>
                <option
                  v-for="data in state_list"
                  :value="data.id"
                  :key="data.id"
                >
                  {{ data.name }}
                </option>
              </select>
              <has-error :form="form" field="state_id"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">City Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter City Name"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>
        </div>
        <form-buttons />
      </form>
    </template>
  </form-layout>
</template>

<script>
import { Form, HasError } from "vform";
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
export default {
  name: "New",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
  },
  data() {
    return {
      // Create a new form instance
      country_list: [],
      state_list: [],
      country_name: 0,
      form: new Form({
        country_id: "",
        state_id: "",
        name: "",
      }),
    };
  },
  watch: {
    "form.country_id": function () {
      this.stateList(this.form.country_id);
    },
  },
  mounted() {
    this.countryList();
  },
  methods: {
    countryList() {
      axios.get("/api/country").then((response) => {
        this.country_list = response.data;
      });
    },

    stateList(id) {
      console.log(id);
      axios.get("/api/country-state/" + id).then((response) => {
        this.state_list = response.data;
      });
    },

    AddCity() {
      var path = `/api/city`;
      this.form
        .post(path)
        .then((response) => {
          this.form.name = "";
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated !!!",
          });
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
    },
  },
};
</script>

