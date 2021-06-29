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
        @submit.prevent="AddRole()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">Role Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Role Name"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
                  <label for="role_category_id">Select Role Category</label>
                  <dropdown-filter class="mb-2" 
                    :itemList="category_list" 
                    @update:option="updateCategory" 
                    :class="{ 'is-invalid': form.errors.has('role_category_id') }"
                  />
                  <has-error :form="form" field="role_category_id"></has-error>
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
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import DropdownFilter from "@/admin/components/form/DropdownFilter.vue";
export default {
  name: "NewRole",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "dropdown-filter": DropdownFilter,
  },
  data() {
    return {
      form: new Form({
        name: "",
        role_category_id:0
      }),
      category_list: [],
    };
  },
  created(){
     this.getCategories();
  },
  methods: {
    AddRole() {
      var path = `/api/role`;
      this.form
        .post(path)
        .then((response) => {
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated !!!",
          });
          this.$router.push(`/list-role/`);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
    },
    getCategories(){
       axios.get("/api/rolecategory").then((res) => {
        if (res) {
          for(let i = 0;i<res.data.length;i++){
            this.category_list.push({
              name:res.data[i].name,
              id:res.data[i].id
            });
          }
        }
      });
    },
    updateCategory(v){
     this.form.role_category_id = v.id 
    }
  },
};
</script>