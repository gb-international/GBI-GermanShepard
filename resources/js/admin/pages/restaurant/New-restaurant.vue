<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <form-layout>
    <template #formdata>
      <form role="form" @submit.prevent="addRestaurant()">
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="city_id">Select City</label>

              <dropdown-list class="mb-2" 
                :itemList="options" 
                v-model="form.city_id"
              />
              
              <has-error :form="form" field="city_id"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">Restaurant Name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
                placeholder="Enter Restaurant Name"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="contact_name">Contact Person</label>
              <input
                type="text"
                class="form-control"
                v-model="form.contact_name"
                :class="{ 'is-invalid': form.errors.has('contact_name') }"
                placeholder="Enter contact person name"
              />
              <has-error :form="form" field="contact_name"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="contact_number">Contact number</label>
              <input
                type="number"
                class="form-control"
                v-model="form.contact_number"
                :class="{ 'is-invalid': form.errors.has('contact_number') }"
                placeholder="Enter contact number name"
              />
              <has-error :form="form" field="contact_number"></has-error>
            </div>
          </div>

          <div class="col-sm-8">
            <div class="form-group">
              <label for="address">Address</label>
              <textarea
                class="form-control textarea"
                v-model="form.address"
                :class="{ 'is-invalid': form.errors.has('address') }"
                placeholder="Enter Address"
              ></textarea>
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
import { ModelSelect } from "vue-search-select";
import { Form, HasError, AlertError } from "vform";
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import DropdownList from "@/admin/components/form/DropdownList.vue";
export default {
  name: "NewRestaurant",
  components: {
    Form,
    "has-error": HasError,
    ModelSelect,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "dropdown-list": DropdownList
  },
  data() {
    return {
      options: [],
      form: new Form({
        name: "",
        city_id: "",
        address: "",
        contact_name: "",
        contact_number: "",
      }),
    };
  },
  created() {
    this.cityList();
  },
  methods: {
    cityList() {
      axios.get(`/api/city`).then((res) => {
        if (res) {
          for(let i = 0;i<res.data.data.length;i++){
            this.options.push({
              name:res.data.data[i].name,
              id:res.data.data[i].id
            });
          }
        }
      });
    },


    addRestaurant() {
      this.form
        .post("/api/restaurants")
        .then((response) => {
          this.form.reset();
          // this.$router.push(`/restaurants-list/`);
          this.$toast.fire({
            icon: "success",
            title: "Restaurant Added successfully",
          });
        })
        .catch(() => {});
    },
  },
};
</script>