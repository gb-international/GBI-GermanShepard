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
        @submit.prevent="UpdateRole()"
      >
        <!--<div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">Role name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
                placeholder="Enter School name"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
            <div class="form-group">
              <label for="role_category_id">Role Category</label>
              <dropdown-filter class="mb-2" 
                    :itemList="category_list" 
                    :selectedId="form.role_category_id"
                    @update:option="updateCategory"
                    :class="{ 'is-invalid': form.errors.has('role_category_id') }"
                  />
              <has-error :form="form" field="role_category_id"></has-error>
            </div>
          </div>

          <div class="col-sm-8">
            <div class="row">
              <div
                class="col-sm-4"
                v-for="(permission, index) in permissions"
                :key="permission.id"
              >
                <label class="form-check-label font-18 mb-20">
                  <input
                    type="checkbox"
                    name="checkbox"
                    :value="permission.id"
                    v-model="items[index].id"
                    :true-value="permission.id"
                  />
                  <span class="text-capitalize">{{ permission.name }}</span>
                </label>
                <hr />
              </div>
            </div>
          </div>
        </div>-->
        <div class="row justify-content-center">
          <div class="col-sm-8">
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="name">Role name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.name"
                    :class="{ 'is-invalid': form.errors.has('name') }"
                    placeholder="Enter School name"
                  />
                  <has-error :form="form" field="name"></has-error>
                </div>
              </div> 
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="role_category_id">Role Category</label>
                  <dropdown-filter class="mb-2" 
                        :itemList="category_list" 
                        :selectedId="form.role_category_id"
                        @update:option="updateCategory"
                        :class="{ 'is-invalid': form.errors.has('role_category_id') }"
                      />
                  <has-error :form="form" field="role_category_id"></has-error>
                </div>
              </div> 
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label for="role_category_id">Select Permission</label>
                  <dropdown-filter class="mb-2" 
                        :itemList="permission_keys_list" 
                        :selectedId="form.permission_key"
                        @update:option="updatePermission"
                        
                      />
                  <has-error :form="form" field="role_category_id"></has-error>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div class="row">
           <div class="col-sm-3 text-center"
              v-for="(permission, index) in permission_list"
              :key="permission.id"
           >
            <label class="text-capitalize permission-label">{{permission.name}}</label>
            <b-form-checkbox  
                   name="check-button" 
                   size="lg"
                   :value="permission.id"
                    v-model="new_permissions" 
                    @change="checkPermission($event)"
                   switch>
            </b-form-checkbox>
            <hr/>
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
      // Create a new form instance
      permissions: [],
      has_permission: [],
      not_has_permission: [],
      items: [],
      form: new Form({
        name: "",
        permissions: "",
        role_category_id:"",
        permission_key:""
      }),
      category_list: [],
      permission_keys_list:[],
      permission_list:[],
      new_permissions:[]
    };
  },
  created() {
    this.getCategories();
    this.getPermissionKeys();

    var url = `/api/role/${this.$route.params.id}/edit`;
    axios.get(url).then((response) => {
      setTimeout(() => $("#example").DataTable(), 1000);
      this.form.fill(response.data);
      this.has_permission = response.data.permissions;

      for (var i = 0; i < response.data.permissions.length; i++) {
        this.new_permissions.push(response.data.permissions[i].id);
      }
    });
    axios.get(`/api/permission`).then((response) => {
      setTimeout(() => $("#example").DataTable(), 1000);
      this.permissions = response.data;

      for (var i = 0; i < this.permissions.length; i++) {
        this.items.push({ id: this.permissions[i].id });
      }

      for (var j = 0; j < this.items.length; j++) {
        var get = 0;
        for (var i = 0; i < this.has_permission.length; i++) {
          if (this.items[j].id == this.has_permission[i].id) {
            get = 1;
          }
        }
        if (get == 0) {
          this.items[j].id = false;
        }
      }
    });
    console.log('Old checked')
       console.log(this.new_permissions)
  },
  methods: {
    UpdateRole() {
      // Submit the form via a itinerary request

      this.form.permissions = this.new_permissions;
      //this.form.permissions = this.items;
      console.log(this.form.permissions);
      this.form
        .put(`/api/role/${this.$route.params.id}`)
        .then((response) => {
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated",
          });
        })
        .catch(() => {});
    },
    goBack() {
      this.$router.push(`/list-role/`);
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
    updateCategory(v){ this.form.role_category_id = v.id;},
    getPermissionKeys(){
      axios.get("/api/permission/keys").then((res) => {
        if (res) {
        this.form.permission_key =  res.data[0].key;
          for(let i = 0;i<res.data.length;i++){
            this.permission_keys_list.push({
              //name:res.data[i].key,
              name:res.data[i].key.charAt(0).toUpperCase() + res.data[i].key.slice(1),
              id:res.data[i].key,
            });
          }
        }
      });
    },
    updatePermission(v){
       this.form.permission_key = v.id;
       if(v.id != undefined){
          const relativeUrl = `/api/permission/${v.id}`;
          axios.get(relativeUrl).then((res) => {
            if (res) {
              let data = [];
              for(let i = 0;i<res.data.length;i++){
                  var check = false;
                  for (var j = 0; j < this.has_permission.length; j++) {
                    if (res.data[i].id == this.has_permission[j].id) {
                         check = true;
                    }
                  }
                  if(check == true){
                      res.data[i].checked = res.data[i].id;
                      data.push(res.data[i]);
                  }else{
                    res.data[i].checked = false;
                    data.push(res.data[i]);
                  }
              }
              this.permission_list = data;
              //console.log(this.permission_list);
            }
          });
       }
    },
    checkPermission(e){
       console.log('checked')
       console.log(this.new_permissions)
    }
  },
};
</script>
<style scoped>
  .permission-label{
    margin-bottom:0px;
  }
</style>
 