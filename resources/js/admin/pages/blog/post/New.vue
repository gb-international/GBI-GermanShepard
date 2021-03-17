<!-- 
This template helps us to create a new Post it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="AddPost()"
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

          <div class="col-sm-12">
            <div class="form-group">
              <label for="description">Summery</label>
              <textarea
                row="3"
                type="text"
                class="form-control"
                v-model="form.summery"
                :class="{ 'is-invalid': form.errors.has('summery') }"
                placeholder="Enter summery"
              ></textarea>
              <has-error :form="form" field="summery"></has-error>
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
              <label for="meta_keyword">Status</label>
              <dropdown-filter class="mb-2" 
                :itemList="status_list" 
                @update:option="updateStatus" 
              />
              <has-error :form="form" field="meta_keyword"></has-error>
            </div>
          </div>
          
          <div class="col-sm-6">
            <div class="form-group">
              <label for="categories">Category</label>
              <dropdown-filter class="mb-2" 
                :itemList="categories" 
                @update:option="UpdateCategory" 
              />
              <has-error :form="form" field="categories"></has-error>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="tags">Tags</label>

              <multiselect
                v-model="form.tags"
                :options="tags"
                :multiple="true"
                :close-on-select="true"
                placeholder="Pick Tags"
                label="title"
                track-by="title"
              ></multiselect>

              <has-error :form="form" field="tags"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label class="label" for="input"
                >Please upload a Banner image !</label
              >
              <br />
              <input
                @change="changeDetailPhoto($event)"
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
        <form-buttons />
      </form>
    </template>
  </form-layout>
</template>

<script>

import { Form, HasError } from "vform";
import Vue2EditorMixin from '@/admin/mixins/Vue2EditorMixin';
import "vue-search-select/dist/VueSearchSelect.css";
import Multiselect from "vue-multiselect";

import FormButtons from '@/admin/components/buttons/FormButtons.vue';
import SubmitButton from '@/admin/components/buttons/SubmitButton.vue';
import FormLayout from '@/admin/components/layout/FormLayout.vue';
import DropdownFilter from "@/admin/components/form/DropdownFilter.vue";

export default {
  name: "NewPost",
  components: {
    Form,
    "has-error": HasError,
     Multiselect,
    'form-buttons':FormButtons,
    'submit-button':SubmitButton,
    'form-layout':FormLayout,
    "dropdown-filter": DropdownFilter,
  },
  mixins:[Vue2EditorMixin],
  data() {
    return {
      categories:[],
      tags:[],
      img_image:false,
      status_list:[
        {name:"Draft",id:0},
        {name:"Public",id:1}
      ],
      form: new Form({
        title: "",
        description: "",
        summery:"",
        image: [],
        meta_title: "",
        meta_keyword: "",
        status:"",
        category_id:"",
        tags:[],
      }),
    };
  },
  mounted(){
    this.getCategories();
    this.getTags();
  },
  methods: {
    getCategories() {
      axios.get("/api/categories").then((res) => {
        if (res) {
          for(let i = 0;i<res.data.length;i++){
            this.categories.push({
              name:res.data[i].title,
              id:res.data[i].id
            });
          }
        }
      });
    },

    UpdateCategory(v){ this.form.category_id = v.id },    
    updateStatus(v){ this.form.status = v.id },
    
    getTags() {
      axios.get("/api/tags").then((response) => {
        this.tags = response.data;
      });
    },

    AddPost() {
      this.form
        .post("/api/posts")
        .then((re) => {
          this.$swal.fire(
            "Added!",
            "Post Added successfully",
            "success"
          );
          this.$router.push('/posts');
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

