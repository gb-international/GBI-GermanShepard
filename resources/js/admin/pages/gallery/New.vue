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
            @submit.prevent="AddPost()"
          >
            <div class="row">

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="category">Gallery Category</label>
                  <select class="form-control" :class="{ 'is-invalid': form.errors.has('category') }" v-model="form.category">
                    <option default="default" value="">Select Category</option>
                    <option value="domestic">Domestic</option>
                    <option value="international">International</option>
                  </select>
                  <has-error :form="form" field="category"></has-error>
                </div>
              </div>

              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">Gallery Title</label>
                  <input type="text"
                  v-model="form.title" 
                  placeholder="Tour to Surat" class="form-control">
                  <has-error :form="form" field="title"></has-error>
                </div>
              </div>
              
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="category">School</label>
                  <model-select 
                  :options="schools" 
                  v-model="form.school_id" 
                  placeholder="Select School"></model-select>
                  <has-error :form="form" field="school_id"></has-error>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="images">Select Multiple Images</label>
                  <input type="file"  multiple="multiple" class="form-control w-100"  ref="attachments" @change="changePhoto">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-2"></div>
              <div class="col-sm-4">
                <router-link
                  :to="`/gallery`"
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
import { ModelSelect } from "vue-search-select";

export default {
  name: "New",
  components: {
    Form,
    "has-error": HasError,
    ModelSelect
  },
  data() {
    return {
      options: [],
      schools:[],
      form: new Form({
        category: "",
        title: "",
        school_id:"",
        images:[],
      }),
    };
  },
  mounted(){
    this.getSchools();
  },
  methods: {
   
    getSchools() {
      axios.get("/api/school").then((response) => {
        for (var i = 0; i < response.data.data.length; i++) {
          this.schools.push({
            value: response.data.data[i].id,
            text: response.data.data[i].school_name
          });
        }
      });
    },

    changePhoto(event) {
      for(var i=0;i<event.target.files.length;i++){
        let file = event.target.files[i];
        let reader = new FileReader();
        reader.onload = event => {
          this.form.images.push({
            'name':file.name,
            'file':event.target.result
            });
        };
        reader.readAsDataURL(file);
      }
    },

    AddPost() {
    
      this.form.post("/api/gallery")
        .then((response) => {
          this.form.reset();
          this.$toast.fire({
            icon: "success",
            title: "Category Added successfully",
          });
        })
        .catch(() => {});
    }
  },
};
</script>

<style scoped>
</style>  