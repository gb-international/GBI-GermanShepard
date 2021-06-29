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
        @submit.prevent="UpdateRole()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">Permission name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
                placeholder="Enter Permission name"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="controller">Controller Name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.controller"
                :class="{ 'is-invalid': form.errors.has('controller') }"
                placeholder="Enter Controller name"
              />
              <has-error :form="form" field="controller"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="method">Method Name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.method"
                :class="{ 'is-invalid': form.errors.has('method') }"
                placeholder="Enter Method name"
              />
              <has-error :form="form" field="method"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="method">Key Name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.key"
                :class="{ 'is-invalid': form.errors.has('key') }"
                placeholder="Enter Key name"
              />
              <has-error :form="form" field="key"></has-error>
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
  name: "NewRole",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
  },
  data() {
    return {
      // Create a new form instance
      form: new Form({
        name: "",
        controller:"",
        method:"",
        key:""
      }),
    };
  },
  created() {
    var url = `/api/permission/${this.$route.params.id}/edit`;
    axios.get(url).then((response) => {
      setTimeout(() => $("#example").DataTable(), 1000);
      this.form.fill(response.data);
    });
  },
  methods: {
    UpdateRole() {
      // Submit the form via a itinerary request
      this.form
        .put(`/api/permission/${this.$route.params.id}`)
        .then((response) => {
          this.$router.push(`/list-permission`);
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated",
          });
        })
        .catch(() => {});
    },
    goBack() {
      this.$router.push(`/list-permission`);
    },
  },
};
</script>
