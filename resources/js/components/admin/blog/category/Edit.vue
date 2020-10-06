<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <section class="content">
    <div class="container-fluid">
      <!--************************************************
        Template Type: Adding New Hotel
        Author:@Ajay

        ****************************************************-->
      <div class="row justify-content-around">
        <!-- left column -->
        <div class="col-md-12">
          <form
            role="form"
            enctype="multipart/form-data"
            @submit.prevent="UpdateBus()"
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
                  <vue-editor v-model="form.description" 
                    :customModules="customModulesForEditor" :editorOptions="editorSettings"
                    id="editor" useCustomImageHandler @image-added="handleImageAdded"
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

              
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="label" for="input">Please upload a Banner image !</label>
                  <br />
                  <input
                    @change="changeDetailPhoto($event)"
                    type="file"
                    :class="{ 'is-invalid': form.errors.has('image') }"
                  />

                  <img v-if="newImage" :src="form.image" alt class="image ml-2" width="100"/>
                  <img :src="imagePath()" alt class="image ml-2" width="100"/>
                  <has-error :form="form" field="image"></has-error>
                </div>
              </div>



            </div>
            <div class="row">
              <div class="col-sm-2"></div>
              <div class="col-sm-4">
                <button
                    type="button"
                    @click="back()"
                    class="btn btn-primary itrn_add_btn back_btn"
                >Back</button>
              </div>
              <div class="col-sm-4">
                <div class="form-group text-center">
                  <button
                    type="submit"
                    class="btn btn-primary btn-block itrn_add_btn"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
              <div class="col-sm-2"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Form, HasError } from "vform";
import { VueEditor, Quill } from "vue2-editor";

import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module";

export default {
  name: "New",
  components: {
    Form,
    "has-error": HasError,
    "vue-editor": VueEditor,
  },
  data() {
    return {
        newImage:false,
        customModulesForEditor: [
            { alias: "imageDrop", module: ImageDrop },
            { alias: "imageResize", module: ImageResize }
        ],
        editorSettings: {
            modules: {
            imageDrop: true,
            imageResize: {}
            }
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
    this.editBus();
  },
  methods: {
    editBus() {
      axios.get(`/api/categories/${this.$route.params.id}/edit`).then((response) => {
        setTimeout(() => $("#example").DataTable(), 1000);
        this.form.fill(response.data);
      });
    },
    UpdateBus() {
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
        if (file.size > 29048576) {
            this.$swal.fire({
                type: "error",
                title: "Oops...",
                text: "Please Select a Valid Image"
            });
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                this.newImage = true;
                this.form.image = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    },
    handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
        var formData = new FormData();
        formData.append("image", file);
        axios({
            url: "/api/images",
            method: "POST",
            data: formData
        }).then(result => {
          let url = result.data.url; // Get url from response
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch(err => {
          console.log(err);
        });
    },

    
    handleImageRemoved: function(file, Editor, cursorLocation, resetUploader) {
        var formData = new FormData();
        formData.append("image", file);
        axios({
            url: "/api/images/delete",
            method: "POST",
            data: formData
        }).then(result => {
            console.log(result);
          let url = result.data.url; // Get url from response
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch(err => {
          console.log(err);
        });
    },


    imagePath(){
        return '/images/post/'+ this.form.image;
    },
    back(){
        this.$router.push('/categories');
    }
  },
};
</script> 