<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="updateEvent()"
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

         <div class="row mb-30">
            <div class="col-sm-6">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      @change="changePhoto($event)"
                      name="photo"
                      type="file"
                      class="overflow-hidden"
                      :class="{ 'is-invalid': form.errors.has('form.photo') }"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <img v-if="form.photo != ''" :src="form.photo" alt width="80" height="80" />
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="row">
                <div class="col-sm-5">
                  <div class="form-group">
                    <input
                      @change="changeDetailPhoto($event)"
                      type="file"
                      class="overflow-hidden"
                      :class="{ 'is-invalid': form.errors.has('form.detail_photo') }"
                    />
                  </div>
                </div>
                <div class="col-sm-7">
                  <img v-if="form.detail_photo != ''" :src="form.detail_photo" alt width="80" height="80" class="detail_photo" />
                </div>
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
  name: "EditEvent",
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
        description: "",
        date: "",
        time: "",
        photo: "",
        detail_photo: ""
      }),
    };
  },
  mixins:[Vue2EditorMixin],
  created() {
    this.EvtData();
  },
  methods: {
    EvtData() {
      axios
        .get(`/api/events/${this.$route.params.id}/edit`)
        .then((response) => {
          this.form.fill(response.data);
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
    
    updateEvent() {
      this.form
        .put(`/api/events/${this.$route.params.id}`)
        .then((response) => {
          this.$router.push("/event-list");
          this.$toast.fire({
            icon: "success",
            title: "Updated successfully",
          });
        })
        .catch(() => {});
    }
  },
};
</script>
