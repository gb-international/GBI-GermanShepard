<!-- 

This template helps us to create a new encyclopedia it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <section class="content">
    <div class="container-fluid">
    <!--************************************************

    Template Type: Add New tourprogram
    Author:@Ajay

    ****************************************************-->
      <div class="row justify-content-around">
        <!-- left column -->
        <div class="col-md-12 itinerary_form">
          <form role="form" enctype="multipart/form-data" @submit.prevent="addData()">
            <!-- Adding photo for the itinerary -->
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label class="title">Title</label>
                    <input type="text" class="form-control" v-model="form.title" :class="{ 'is-invalid': form.errors.has('title') }">
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group itinerary_image">
                    <label class="label" for="image">Please upload image !</label><br>
                      <input @change = "changeImage($event,'image')" type="file" :class="{ 'is-invalid': form.errors.has('image') }" accept="jpeg,jpg,png,gif" class="select_image">
                      
                      <img :src="form.image" alt="" width="80" height="80">
                      <has-error :form="form" field="image"></has-error>
                  </div>
                </div>
              </div>


              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                      <label for="descriptionId">Description</label>

                      <ckeditor :editor="editor" class="form-control" id="description" v-model="form.description" :config="editorConfig"  :class="{ 'is-invalid': form.errors.has('description') }"></ckeditor>

                      <has-error :form="form" field="description"></has-error>
                  </div>
                </div>
              </div>

              <hr>  
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label for="mode_of_transport">Tour category</label><br>

                    <multiselect
                      v-model="form.itinerary"
                      :options="itinerary_list"
                      :multiple="true"
                      :close-on-select="true"
                      placeholder="Pick some"
                      label="name"
                      track-by="name">
                    </multiselect>

                  </div>
                </div>
              </div>


              <div class="row text-center">
                <div class="col-sm-4">
                  <router-link :to="`/tourprogram`" class="btn btn-primary itrn_add_btn back_btn">Back</router-link>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary itrn_add_btn">SUBMIT</button>
                  </div>
                </div>
              </div>

              
          </form>
        </div>
      </div>
    </div><!-- /.container-fluid -->
  </section>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'vue-search-select/dist/VueSearchSelect.css'
import { ModelSelect } from 'vue-search-select'
import Multiselect from 'vue-multiselect'

export default {
  name: "New",
  components: {
    ModelSelect,Multiselect
  },
  data(){
    return {
      editor: ClassicEditor,
      editorConfig: {// The configuration of the editor.
      },
      itinerary_list:[],
      form: new Form({
        title:'',
        description: '',
        image:'',
        itinerary:[],
      })
    }
  },
  created(){
    this.itineraryData();
  },

  methods:{
    itineraryData(){
      axios.get('/api/itinerary').then(response => {
        this.data = response.data.data;
        for(var i=0;i<this.data.length;i++){
          this.itinerary_list.push({id:this.data[i]['id'],name:this.data[i]['title']});
        }
      });
    },

    addData()
    {
      this.form.post('/api/tourprogram')
        .then((response)=>{
             this.$router.push(`/tourprogram`)
             console.log(response);
              toast({
                  type: 'success',
                  title: 'Itinerary Added successfully'
              })
           }).catch(()=>{})
    },

    slugCreate(event){
      var slug = "";
      var value = event.target.value.toLowerCase();
      // Trim the last whitespace
      slug = value.replace(/\s*$/g, '');
      // Change whitespace to "-"
      this.form.slug = slug.replace(/\s+/g, '-');
    },

    changeImage(event){
      let file = event.target.files[0];
       let reader = new FileReader();
       reader.onload = event => {
           this.form.image = event.target.result
       };
       reader.readAsDataURL(file);
    },


  }
}
</script>

<style>
input[type='file']{
  width: 200px;
}
.banner_image{
  height: 80px;
  width: 250px;
}

.ck-editor__editable {
  min-height: 200px !important;
 }


</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>