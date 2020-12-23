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
        @submit.prevent="UpdateTrain()"
      >
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label for="code">Flight Number</label>
              <input
                type="text"
                class="form-control"
                v-model="form.code"
                :class="{ 'is-invalid': form.errors.has('code') }"
                placeholder="Enter Flight Number"
              />
              <has-error :form="form" field="code"></has-error>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="name">Flight Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Contact Number"
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
            <back-button url="/flight-list"></back-button>
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
      form: new Form({
        code: "",
        name: "",
      }),
    };
  },
  created() {
    this.editTrain();
  },
  methods: {
    editTrain() {
      axios
        .get(`/api/flight/${this.$route.params.id}/edit`)
        .then((response) => {
          setTimeout(() => $("#example").DataTable(), 1000);
          this.form.fill(response.data);
        });
    },
    UpdateTrain() {
      // Submit the form via a itinerary request
      this.form
        .put(`/api/flight/${this.$route.params.id}`)
        .then((response) => {
          console.log(response);
          this.$router.go(-1);
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
<style scoped>
</style>  