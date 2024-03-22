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
                                <input type="text" class="form-control" v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" placeholder="Enter category name"/>
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
  import FormButtons from '@/admin/components/buttons/FormButtons.vue';
  import FormLayout from '@/admin/components/layout/FormLayout.vue';
  
  export default {
    name: "Category Traveller Policy",
    components: {
      Form,
      "has-error": HasError,
      'form-buttons':FormButtons,
      'form-layout':FormLayout,
    },
    data() {
      return {
        form_collection:'',
        form: new Form({
          name: "",
        }),
        loading: false,
      };
    },

    methods: {
      addCategoryPolicy(){
        if(this.form.name == ''){
          this.$toast.fire({
            icon: "warning",
            title: "Please enter the category name.",
          });
        return false
      }
      this.loading = true
      
      this.form.post("/api/traveller-policy-category/store").then((res) => {
        if(res.data.status == 422){
            if(res.data.errors.name){
              this.$toast.fire({
                icon: "error",
                title: res.data.errors.name[0],
              }); 
              this.loading = false ;      
              return false;
            }  
          }
          this.$router.push(`/policy/category/all`);
          this.$toast.fire({
            icon: "success",
            title: res.data,
          });
        })
        .catch((error) => {
        });
      }
    },
  };
  </script>

  
  
  