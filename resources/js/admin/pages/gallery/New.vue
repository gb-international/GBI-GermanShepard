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
                  <label for="category">itinerary</label>
                  <model-select :options="options" v-model="form.itinerary_id" placeholder="To"></model-select>
                  <has-error :form="form" field="destination"></has-error>
                </div>
              </div>
              
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="category">School</label>
                  <model-select :options="schools" v-model="form.school_id" placeholder="To"></model-select>
                  <has-error :form="form" field="destination"></has-error>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label for="images">Select Multiple Images</label>
                  <input type="file"  multiple="multiple" class="form-control"  ref="attachments" @change="changePhoto">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-2"></div>
              <div class="col-sm-4">
                <router-link
                  :to="`/posts`"
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
        itinerary_id: "",
        school_id:"",
        images:[],
      }),
    };
  },
  mounted(){
    this.getItineraries();
    this.getSchools();
  },
  methods: {
    getItineraries() {
      axios.get("/api/itinerary").then((response) => {
        for (var i = 0; i < response.data.data.length; i++) {
          this.options.push({
            value: response.data.data[i].id,
            text: response.data.data[i].title
          });
        }
      });
    },
    
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
          this.form.images.push(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    },

    AddPost() {

      this.form.post("/api/gallery")
        .then((response) => {
          console.log(response);
          // this.form.reset();
          this.$toast.fire({
            icon: "success",
            title: "Category Added successfully",
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
          text: "Please Select a Valid Image",
        });
      } else {
        let reader = new FileReader();
        reader.onload = (event) => {
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

  },
};
</script>

<style scoped>
</style>  