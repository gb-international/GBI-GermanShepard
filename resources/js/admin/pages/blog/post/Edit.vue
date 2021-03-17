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
        @submit.prevent="UpdatePost()"
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
                :customModules="customModulesForEditor"
                :editorOptions="editorSettings"
                id="editor"
                useCustomImageHandler
                @image-added="handleImageAdded"
                @image-removed="handleImageRemoved"
                v-model="form.description"
                :class="{ 'is-invalid': form.errors.has('description') }"
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
                :selectedId="form.status"
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
                :selectedId="form.category_id"
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
                class="mt-2"
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
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import DropdownFilter from "@/admin/components/form/DropdownFilter.vue";

export default {
  name: "NewPost",
  components: {
    Form,
    "has-error": HasError,
    Multiselect,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "dropdown-filter": DropdownFilter,
  },
  mixins:[Vue2EditorMixin],
  data() {
    return {
      img_image: false,
      categories: [],
      tags: [],
      status_list:[
        {name:"Draft",id:0},
        {name:"Public",id:1}
      ],
      form: new Form({
        title: "",
        description: "",
        summery: "",
        image: [],
        meta_title: "",
        meta_keyword: "",
        status: "",
        tags: [],
        category_id: "",
      }),
    };
  },
  created() {},
  mounted() {
    this.getCategories();
    this.getTags();
    this.editPost();
  },
  methods: {
    editPost() {
      axios.get(`/api/posts/${this.$route.params.id}/edit`).then((response) => {
        setTimeout(() => $("#example").DataTable(), 1000);
        this.form.fill(response.data);
        this.form.image = [];
        this.img_image = response.data.image;
      });
    },
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
    UpdatePost() {
      this.form
        .put(`/api/posts/${this.$route.params.id}`)
        .then((response) => {
          this.$swal.fire(
            "Updated!",
            "Item Updated successfully",
            "success"
          );
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
    back() {
      this.$router.push("/posts");
    },
  },
};
</script> 