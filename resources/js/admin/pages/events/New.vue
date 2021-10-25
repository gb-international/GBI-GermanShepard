<!-- 
This template helps us to create new events, it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="AddEvent()"
      >
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="name">Event Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Event Name"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>
        
          <div class="col-sm-12">
            <div class="form-group">
              <label for="description">Description</label>
              <vue-editor
                v-model="form.description"
                :class="{ 'is-invalid': form.errors.has('description') }"
                :customModules="customModulesForEditor"
                :editorOptions="editorSettings"
                id="editor"
                useCustomImageHandler
                @image-added="handleImageAdded"
                @image-removed="handleImageRemoved"
              ></vue-editor>
              <has-error :form="form" field="description"></has-error>
            </div>
          </div>

        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label for="date">Date</label>
              <input
                type="date"
                class="form-control"
                placeholder="Enter Event date"
                v-model="form.date"
                :class="{ 'is-invalid': form.errors.has('date') }"
              />
              <has-error :form="form" field="date"></has-error>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="time">Time</label>
              <input
                type="time"
                class="form-control"
                placeholder="Enter Event time"
                v-model="form.time"
                :class="{ 'is-invalid': form.errors.has('time') }"
              />
              <has-error :form="form" field="time"></has-error>
            </div>
          </div>
        </div>

        <!-- Adding photo for the itinerary -->
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group itinerary_image">
              <label class="label" for="input"
                >Please upload a thumbnail image !</label
              >
              <br />
              <input
                @change="changePhoto($event)"
                name="photo"
                type="file"
                :class="{ 'is-invalid': form.errors.has('photo') }"
                required
                accept="jpeg, jpg, png, gif"
                class="select_image overflow-hidden"
              />

              <img v-if="form.photo != ''" :src="form.photo" alt width="80" height="80" />
              <has-error :form="form" field="photo"></has-error>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label class="label" for="input"
                >Please upload a Banner image !</label
              >
              <br />
              <input
                @change="changeDetailPhoto($event)"
                name="detail_photo"
                class="overflow-hiden"
                type="file"
                :class="{ 'is-invalid': form.errors.has('detail_photo') }"
                required
              />

              <img v-if="form.detail_photo != ''" :src="form.detail_photo" alt class="detail_photo" />
              <has-error :form="form" field="detail_photo"></has-error>
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
import Vue2EditorMixin from '@/admin/mixins/Vue2EditorMixin';
export default {
  name: "NewEvent",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
  },
  mixins:[Vue2EditorMixin],
  data() {
    return {
      // Create a new form instance
      form: new Form({
        name: "",
        description: "",
        date: "",
        time: "",
        photo: "",
        detail_photo: ""
      }),
    };
  },
  methods: {
    AddEvent() {
      var path = `/api/events`;
      this.form
        .post(path)
        .then((response) => {
          this.form.reset();
          this.$toast.fire({
            icon: "success",
            title: "Successfully Saved !!!",
          });
        this.$router.push(`/event-list`);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
    },

    changePhoto(event) {
      let file = event.target.files[0];
      if (file.size > 29048576) {
        this.$swal.fire({
          type: "error",
          title: "Oops...",
          text: "Please Select A Valid Image!",
        });
      } else {
        let reader = new FileReader();
        reader.onload = (event) => {
          this.form.photo = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    changeDetailPhoto(event) {
      let file = event.target.files[0];
      if (file.size > 29048576) {
        this.$swal.fire({
          type: "error",
          title: "Oops...",
          text: "Please Select a Valid Image",
        });
      } else {
        let reader = new FileReader();
        reader.onload = (event) => {
          this.form.detail_photo = event.target.result;
          this.form.detail_photo_alt = file.name;
        };
        reader.readAsDataURL(file);
      }
    },

    goBack() {
      this.$router.push(`/event-list`);
    },
  },
};
</script>