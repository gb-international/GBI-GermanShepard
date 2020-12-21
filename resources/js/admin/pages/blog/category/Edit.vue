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
        @submit.prevent="UpdateCategory()"
      >
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                class="form-control"
                v-model="form.title"
                :class="{ 'is-invalid': form.errors.has('title') }"
                placeholder="Enter title"
              />
              <has-error :form="form" field="title"></has-error>
            </div>
          </div>

          <div class="col-sm-12">
            <div class="form-group">
              <label for="description">Description</label>
              <vue-editor
                v-model="form.description"
                :customModules="customModulesForEditor"
                :editorOptions="editorSettings"
                id="editor"
                useCustomImageHandler
                @image-added="handleImageAdded"
                @image-removed="handleImageRemoved"
                :class="{ 'is-invalid': form.errors.has('description') }"
              ></vue-editor>

              <has-error :form="form" field="description"></has-error>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="meta_title">Meta Title</label>
              <input
                type="text"
                class="form-control"
                v-model="form.meta_title"
                :class="{ 'is-invalid': form.errors.has('meta_title') }"
                placeholder="Enter meta title"
              />
              <has-error :form="form" field="meta_title"></has-error>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="meta_keyword">Meta Keywords</label>
              <input
                type="text"
                class="form-control"
                v-model="form.meta_keyword"
                :class="{ 'is-invalid': form.errors.has('meta_keyword') }"
                placeholder="Enter meta title"
              />
              <has-error :form="form" field="meta_keyword"></has-error>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="image">Please upload a Banner image !</label>
              <br />
              <input
                @change="changeDetailPhoto($event)"
                name="image"
                type="file"
                :class="{ 'is-invalid': form.errors.has('image') }"
              />
              <has-error :form="form" field="image"></has-error>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="form-group">
              <label for="image"></label>
              <br />
              <img :src="img_image" alt class="image w-100" />
              <has-error :form="form" field="image"></has-error>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-4">
            <back-button url="/categories"></back-button>
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
import { VueEditor, Quill } from "vue2-editor";

import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module";
import BackButton from "@/admin/components/buttons/BackButton.vue";
import SubmitButton from "@/admin/components/buttons/SubmitButton.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";

export default {
  name: "New",
  components: {
    Form,
    "has-error": HasError,
    "vue-editor": VueEditor,
    "back-button": BackButton,
    "submit-button": SubmitButton,
    "form-layout": FormLayout,
  },
  data() {
    return {
      img_image: false,
      customModulesForEditor: [
        { alias: "imageDrop", module: ImageDrop },
        { alias: "imageResize", module: ImageResize },
      ],
      editorSettings: {
        modules: {
          imageDrop: true,
          imageResize: {},
        },
      },
      form: new Form({
        title: "",
        description: "",
        image: "",
        meta_title: "",
        meta_keyword: "",
      }),
    };
  },
  created() {
    this.editCategory();
  },
  methods: {
    editCategory() {
      axios
        .get(`/api/categories/${this.$route.params.id}/edit`)
        .then((response) => {
          setTimeout(() => $("#example").DataTable(), 1000);
          this.form.fill(response.data);
          this.form.image = [];
          this.img_image = "/images/category/" + response.data.image;
        });
    },
    UpdateCategory() {
      this.form
        .put(`/api/categories/${this.$route.params.id}`)
        .then((response) => {
          console.log(response);
          //   this.$router.go(-1);
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated",
          });
        })
        .catch(() => {});
    },

    changeDetailPhoto(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image.push({
          name: file.name,
          file: event.target.result,
        });
        this.img_image = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    handleImageAdded: function (file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("image", file);
      axios({
        url: "/api/images",
        method: "POST",
        data: formData,
      })
        .then((result) => {
          let url = result.data.url; // Get url from response
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    handleImageRemoved: function (file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("image", file);
      axios({
        url: "/api/images/delete",
        method: "POST",
        data: formData,
      })
        .then((result) => {
          console.log(result);
          let url = result.data.url; // Get url from response
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    imagePath() {
      return "/images/post/" + this.form.image;
    },
    back() {
      this.$router.push("/categories");
    },
  },
};
</script> 