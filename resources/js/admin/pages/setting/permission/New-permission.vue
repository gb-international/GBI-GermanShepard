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
        @submit.prevent="AddPermission()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">Permission Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Permission Name"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="controller">Permission Controller</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Permission Controller"
                v-model="form.controller"
                :class="{ 'is-invalid': form.errors.has('controller') }"
              />
              <has-error :form="form" field="controller"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="method">Permission Method</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Permission Method"
                v-model="form.method"
                :class="{ 'is-invalid': form.errors.has('method') }"
              />
              <has-error :form="form" field="method"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="method">Permission Key</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Permission Key"
                v-model="form.key"
                :class="{ 'is-invalid': form.errors.has('key') }"
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
      form: new Form({
        name: "",
        controller:"",
        method:"",
        key:""
      }),
    };
  },
  methods: {
    AddPermission() {
      var path = `/api/permission`;
      this.form
        .post(path)
        .then((response) => {
          this.form.reset();
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated !!!",
          });
          // this.$router.push(`/list-permission`);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
    },

    goBack() {
      this.$router.push(`/list-permission`);
    },
  },
};
</script>
