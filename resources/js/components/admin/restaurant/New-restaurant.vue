<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <section class="content">
    <div class="container-fluid">
      <!--************************************************
            Template Type: Adding New Hotel
            Author:@Ajay
      ****************************************************-->
      <div class="row justify-content-around">
        <!-- left column -->
        <div class="col-md-12">
          <form role="form" @submit.prevent="addRestaurant()">
            <div class="row">

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="city_id">Select City</label>
                  <model-select :options="options" v-model="form.city_id" placeholder="From"></model-select>
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
                    type="text"
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
                  <textarea class="form-control" 
                  v-model="form.address"
                  :class="{ 'is-invalid': form.errors.has('address') }"></textarea>
                  <has-error :form="form" field="address"></has-error>
                </div>
              </div>



            </div>
            <div class="row">
              <div class="col-sm-4"></div>
              <div class="col-sm-4">
                <div class="form-group text-center">
                  <button type="submit" class="btn btn-primary btn-block itrn_add_btn">SUBMIT</button>
                </div>
              </div>
              <div class="col-sm-4"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ModelSelect } from "vue-search-select";
import { Form, HasError, AlertError } from 'vform'
export default {
  name: "New",
  components:{Form,
  'has-error': HasError,
  ModelSelect,
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
      })
    };
  },
  created(){
    this.cityList();
  },
  methods: {
    cityList() {
      axios.get("/api/city").then(response => {
        for (var i = 0; i < response.data.data.length; i++) {
          this.options.push({
            value: response.data.data[i].id,
            text: response.data.data[i].name
          });
        }
      });
    },
    addRestaurant() {
      this.form
        .post("/api/restaurants")
        .then(response => {
          this.form.reset();
          // this.$router.push(`/restaurants-list/`);
          this.$toast.fire({
            icon: "success",
            title: "Restaurant Added successfully"
          });
        })
        .catch(() => {});
    }
  }
};
</script>

<style scoped>
.image {
  width: 100%;
}
</style>  