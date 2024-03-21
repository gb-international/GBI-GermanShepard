<!--************************************************
      Author:@Rahul Rawat 
      ****************************************************-->
<!-- 
This template helps us to create a new traveller policy category it takes the data from the form and sumbit with the help of the api to submit the data we are using a function.
-->

<template>
    <form-layout>
        <template #formdata>
            <section class="formSection">
                <div class="LoaderDiv" v-show="loading">
                <img class="loaderLogo" src="/loader/logo_gif.gif">
                <p class="loadText">Loading..</p>
                </div>
                <form role="form" @submit.prevent="addCategoryPolicy()" :style="!loading ? '' : 'opacity: 0.5'">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" placeholder="Enter name"/>
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
  
  import { Form} from "vform";
  import FormButtons from '@/admin/components/buttons/FormButtons.vue';
  import FormLayout from '@/admin/components/layout/FormLayout.vue';

  export default {
    name: "Category Traveller Policy",
    components: {
      Form,
      'form-buttons':FormButtons,
      'form-layout':FormLayout,
    },
    data() {
      return {

        form: new Form({
          name: "",
        }),
        loading: false,
      };
    },

    methods: {
      addFact() {
        this.form_collection = new Form({name: this.form.name, description: this.form.description, status:this.form.status});
  
        if(this.form.country_id !=''){
          this.form_collection.country_id = this.form.country_id;
        }
  
        if(this.form.state_id !=''){
          this.form_collection.state_id = this.form.state_id;
        }
  
        if(this.form.city_id !=''){
          this.form_collection.city_id = this.form.city_id;
        }
  
        this.form_collection.post("/api/fact/fact")
        .then((res) => {
            if(res.data.status == 422){
              if(res.data.errors.name){
                this.$toast.fire({
                    icon: "error",
                    title: res.data.errors.name[0],
                  });        
                return false;
              }
              if(res.data.errors.description){
                this.$toast.fire({
                    icon: "error",
                    title: res.data.errors.description[0],
                  });        
                return false;
              }
              if(res.data.errors.status){
                this.$toast.fire({
                    icon: "error",
                    title: res.data.errors.status[0],
                  });        
                return false;
              }
              if(res.data.errors.country_id){
                this.$toast.fire({
                    icon: "error",
                    title: res.data.errors.country_id[0],
                  });        
                return false;
              }
              if(res.data.errors.state_id){
                this.$toast.fire({
                    icon: "error",
                    title: res.data.errors.state_id[0],
                  });        
                return false;
              }
              if(res.data.errors.city_id){
                this.$toast.fire({
                    icon: "error",
                    title: res.data.errors.city_id[0],
                  });        
                return false;
              }
            }
            this.$router.push(`/fact/`);
            this.$toast.fire({
              icon: "success",
              title: res.data,
            });
          })
          .catch((error) => {
          });
      },
    },
  };
  </script>

  
  
  