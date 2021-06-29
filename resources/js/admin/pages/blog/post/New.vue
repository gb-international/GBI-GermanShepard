
<!--************************************************
      Author:@Ajay 
      Edited by: @Manas
      ****************************************************-->
<!-- Edits: Added custom error texts, edits were made to AddPost() funtion for custom error on submission. -->

<!-- 
This template helps us to create a new Post it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <form-layout>
    <template #formdata>
    <section class="formSection">
      <div class="LoaderDiv" v-show="loading">
        <img class="loaderLogo" src="/loader/logo_gif.gif">
        <p class="loadText">Loading..</p>
      </div>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="AddPost()"
        :style="!loading ? '' : 'opacity: 0.5' "
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
              <label for="description">Summary</label>
              <textarea
                row="3"
                type="text"
                class="form-control"
                v-model="form.summery"
                :class="{ 'is-invalid': form.errors.has('summery') }"
                placeholder="Enter summary"
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
              <!-- <input
                type="text"
                class="form-control"
                v-model="form.meta_keyword"
                :class="{ 'is-invalid': form.errors.has('meta_keyword') }"
                placeholder="Enter meta title"
              />
              <has-error :form="form" field="meta_keyword"></has-error> 
               <multiselect
                v-model="form.meta_keyword"
                :options="tags"
                :multiple="true"
                :close-on-select="true"
                placeholder="Choose keywords"
                @input="checkKeyword(data)"
                label="title"
                track-by="title"
              ></multiselect> -->

                <tags-input element-id="tags"
                  v-model="meta_key"
                  :existing-tags="tags"
                  :typeahead="true"
                  @tags-updated="updateTags"
                  >
                </tags-input>

              <has-error :form="form" field="tags"></has-error>
              <p v-if="tagsWarn && meta_key.length < 1 " class="warn-error">Please choose keywords.</p>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="status">Status</label>
              <status-dd class="mb-2" 
                :itemList="status_list"
                @update:option="updateStatus" 
              />
              <has-error :form="form" field="status"></has-error>
              <p v-if="statusWarn && form.status === '' " class="warn-error">Please choose a status.</p>
            </div>
          </div>
          
          <div class="col-sm-6">
            <div class="form-group">
              <label for="categories">Category</label>
              <multiselect
                v-model="form.category"
                :options="categories"
                :close-on-select="true"
                placeholder="Choose category"
                label="name"
                track-by="name"
              ></multiselect>
              <!-- <dropdown-filter class="mb-2" 
                :itemList="categories" 
                @update:option="UpdateCategory" 
              /> -->
              <has-error :form="form" field="categories"></has-error>
              <p v-if="categoryWarn && !form.category " class="warn-error"> Please choose a category.</p>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="client_type">Client Type</label>
              <select class="form-control" v-model="form.client_type">
                <option value="eduInstitute">Educational Institute</option>
                <option value="corporate">Corporate</option>
                <option value="general">General</option>
              </select>
              <has-error :form="form" field="client_type"></has-error>
              <p v-if="clientTypeWarn && form.client_type === '' " class="warn-error"> Please choose a client type.</p>
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
              <p v-if="imageWarn" class="warn-error"> Please upload an image.</p>

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
      </section>
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
import StatusDropdown from "@/admin/components/form/StatusDropdown.vue";
import TagsInput from '@voerro/vue-tagsinput'

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
    "status-dd": StatusDropdown,
    "tags-input": TagsInput,
  },
  mixins:[Vue2EditorMixin],
  data() {
    return {
      categories:[],
      tags:[],
      meta_key: [],
      img_image:false,
      imageWarn:false,
      statusWarn: false,
      categoryWarn: false,
      tagsWarn: false,
      clientTypeWarn: false,
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
        meta_keyword: [],
        status:"",
        category_id:"",
        category:"",
        client_type:"",
        tags:[],
      }),
      loading: false
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

    //UpdateCategory(v){ this.form.category_id = v.id },    
    updateStatus(v){ this.form.status = v.id},

    updateTags(){
      this.form.meta_keyword = []
      for(let i = 0;i<this.meta_key.length;i++){
          this.form.meta_keyword.push({
            title:this.meta_key[i].value,
            id:this.meta_key[i].key
          });
      }
    },
    
    getTags() {
      axios.get("/api/tags").then((res) => {
        //this.tags = response.data;
        if (res) {
          for(let i = 0;i<res.data.length;i++){
            this.tags.push({
              value:res.data[i].title,
              key:res.data[i].id
            });
          }
          //console.log(this.form.tags)
        }
      });
    },

    AddPost() {
      if (!this.img_image) {
        this.imageWarn = true
        return false;
      }
      if (this.form.status === '') {
        this.statusWarn = true
        return false;
      }
      if (this.form.category === '') {
        this.categoryWarn = true
        return false;
      }
      if (this.meta_key.length < 1 ) {
        this.tagsWarn = true
        return false;
      }
      if (this.form.clientTypeWarn === '') {
        this.clientTypeWarn = true
        return false;
      }
      this.loading = true
      this.form.tags = this.form.meta_keyword
      //console.log(this.form.tags)
      this.form.category_id = this.form.category.id
      this.form
        .post("/api/posts")
        .then((re) => {
          this.$swal.fire(
            "Added!",
            "Post Added successfully",
            "success"
          );
          this.loading = false
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
          this.imageWarn = false;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style scoped>
  .warn-error {
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #dc3545;
  }
</style>


