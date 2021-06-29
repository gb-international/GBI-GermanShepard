<!-- 

This template helps us to create a new Client it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="updateMember()"
      >
        <div class="row" v-if="form.name">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                name="name"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
                placeholder="Enter Name"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                v-model="form.email"
                :class="{ 'is-invalid': form.errors.has('email') }"
                placeholder="Enter Email"
                name="email"
              />
              <has-error :form="form" field="email"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="phone_no">Phone Number</label>
              <input
                type="text"
                class="form-control"
                v-model="form.phone_no"
                :class="{ 'is-invalid': form.errors.has('phone_no') }"
                placeholder="Enter Phone No"
                name="phone_no"
              />
              <has-error :form="form" field="phone_no"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group date_input">
              <label for="dob">DOB</label>
              <input
                type="date"
                class="form-control"
                placeholder="Enter dob"
                name="journy"
                v-model="form.dob"
                :class="{ 'is-invalid': form.errors.has('dob') }"
              />

              <has-error :form="form" field="dob"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="role_id">Role Assign</label>
              <dropdown-list class="mb-2" 
                :itemList="role_list"
                :selectedId="form.role_id" 
                v-model="form.role_id"
                @update:option="updateRole"
                :class="{ 'is-invalid': form.errors.has('role_id') }"
              />
              <has-error :form="form" field="role_id"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="parent_role_id">Parent Role Assign</label>
              <dropdown-list class="mb-2" 
                :itemList="role_list"
                :selectedId="form.parent_role_id" 
                v-model="form.parent_role_id"
                @update:option="updateParentRole"
                :class="{ 'is-invalid': form.errors.has('parent_role_id') }"
              />
              <has-error :form="form" field="parent_role_id"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="role_name">Department</label>
              <dropdown-list class="mb-2" 
                :itemList="departments" 
                v-model="form.department_id"
                :class="{ 'is-invalid': form.errors.has('department_id') }"
              />
              <has-error :form="form" field="department_id"></has-error>
            </div>
          </div>

           <div class="col-sm-8">
            <div class="form-group">
              <label for="address">Address</label>
              <textarea
                class="form-control"
                placeholder="Enter Address"
                name="address"
                v-model="form.address"
                :class="{ 'is-invalid': form.errors.has('address') }"
              > </textarea>
              <has-error :form="form" field="address"></has-error>
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
import DropdownList from "@/admin/components/form/DropdownList.vue";
export default {
  name: "NewMember",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
     "dropdown-list": DropdownList,
  },
  data() {
    return {
      role_list: [],
      departments: [],
      // Create a new form instance
      form: new Form({
        name: "",
        email: "",
        phone_no: "",
        address: "",
        dob: "",
        role_id: "",
        parent_role_id: "",
        role_name: "",
        old_role:'',
        department_id:'',
      }),
    };
  },

  created() {
    this.getData();
    this.getRoles();
    this.getDepartment();
    console.log(this.form)
  },

  methods: {
    getRoles(){
      axios.get("/api/role").then((res) => {
        if (res) {
          for(let i = 0;i<res.data.length;i++){
            this.role_list.push({
              name:res.data[i].name,
              id:res.data[i].id
            });
          }
        }
      });
    },
    
    getDepartment(){
      axios.get("/api/departments").then((res) => {
        if (res) {
          for(let i = 0;i<res.data.length;i++){
            this.departments.push({
              name:res.data[i].name,
              id:res.data[i].id
            });
          }
        }
      });
    },
    updateRole(v){ 
      console.log('hyyy'); 
      this.form.role_id = v.id;
    },
    updateParentRole(v){ this.form.parent_role_id = v.id },
    updateDepartment(v){ this.form.department_id = v.id },

    getData(){
       axios
        .get(`/api/members/${this.$route.params.id}/edit`)
        .then((res) => {
          this.form.fill(res.data);
          this.form.phone_no = res.data.information.phone_no;
          this.form.address = res.data.information.address;
          this.form.dob = res.data.information.dob;
          this.form.role_name = res.data.user_role.role.name;
          this.form.old_role = this.form.role_name;
          this.form.department_id = res.data.department_id;
          this.form.role_id = res.data.user_role.role.id;
          this.form.parent_role_id = res.data.parent_role_id;
        });
    },

    updateMember() {
        this.form
        .put(`/api/members/${this.$route.params.id}`)
        .then((res) => {
          if(res){
              this.$router.push(`/list-member`);
              this.$toast.fire({
                icon: "success",
                title: "GBI Member Update Successfully",
              });
          }
        })
        .catch(() => {});
    },
  },
};
</script>
