<!-- 
This template helps us to create a new Category it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <section class="content">
    <div class="container-fluid">
      <!--************************************************
        Template Type: Adding New Category
        Author:@Ajay
        ****************************************************-->
      <div class="row justify-content-around">
        <div class="col-md-12">
          <form
            role="form"
            enctype="multipart/form-data"
            @submit.prevent="AddCategory()"
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
                <router-link
                  :to="`/categories`"
                  class="btn btn-primary itrn_add_btn back_btn"
                  >Back</router-link
                >
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

export default {
  name: "New",
  components: {
    Form,
    "has-error": HasError,
    "vue-editor": VueEditor,
  },
  data() {
    return {
      img_image:false,
      form: new Form({
        title: "",
        description: "",
        image: [],
        meta_title: "",
        meta_keyword: "",
      }),
    };
  },
  methods: {
    AddCategory() {
      this.form
        .post("/api/categories")
        .then((response) => {
          this.form.reset();
          this.$toast.fire({
            icon: "success",
            title: "Category Added successfully",
          });
        })
        .catch(() => {});
    },

    changeDetailPhoto(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.form.image.push({
          'name':file.name,
          'file':event.target.result
          });
          this.img_image = event.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style scoped>
</style>  