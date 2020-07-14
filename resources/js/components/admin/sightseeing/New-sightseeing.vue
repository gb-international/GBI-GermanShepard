<!-- 

This template helps us to create a new sightseeing it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <section class="content">
    <div class="container-fluid">
      <!--************************************************
            Template Type: Adding New sightseeing
            Author:@Ajay

      ****************************************************-->
      <div class="row justify-content-around">
        <div class="col-md-12">
          <form role="form" enctype="multipart/form-data" @submit.prevent="addHotel()">
            <div class="row">

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="state">State</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter State"
                    v-model="form.state_id"
                    :class="{ 'is-invalid': form.errors.has('state_id') }"
                  />
                  <has-error :form="form" field="state_id"></has-error>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="city">City</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter City"
                    v-model="form.city_id"
                    :class="{ 'is-invalid': form.errors.has('city_id') }"
                  />
                  <has-error :form="form" field="city_id"></has-error>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="name">Sightseeing Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.name"
                    :class="{ 'is-invalid': form.errors.has('name') }"
                    placeholder="Enter Sightseeing Name"
                  />
                  <has-error :form="form" field="name"></has-error>
                </div>
              </div>


              
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="address">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Address"
                    id="address"
                    v-model="form.address"
                    :class="{ 'is-invalid': form.errors.has('address') }"
                  >
                  <has-error :form="form" field="address"></has-error>
                </div>
              </div>
              
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="adult_price">Ticket ( Adult Price )</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Enter Adult price"
                    id="adult_price"
                    v-model="form.adult_price"
                    :class="{ 'is-invalid': form.errors.has('adult_price') }"
                  >
                  <has-error :form="form" field="adult_price"></has-error>
                </div>
              </div>

              
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="child_price">Ticket ( Child Price )</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Enter child price"
                    id="child_price"
                    v-model="form.child_price"
                    :class="{ 'is-invalid': form.errors.has('child_price') }"
                  >
                  <has-error :form="form" field="child_price"></has-error>
                </div>
              </div>

              
              <div class="col-sm-12">
                <div class="form-group">
                  <label for="description">Descripttion</label>
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Enter Description"
                    id="description"
                    v-model="form.description"
                    :class="{ 'is-invalid': form.errors.has('description') }"
                  ></textarea>
                  <has-error :form="form" field="description"></has-error>
                </div>
              </div>






              <div class="col-sm-3">
                <div class="form-group">
                  <label for="image">Image</label>
                  <br />
                  <input
                    @change="changeDetailPhoto($event)"
                    name="image"
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
                  <img :src="img_image" alt class="image" />
                  <has-error :form="form" field="image"></has-error>
                </div>
              </div>

            </div>
            <div class="row justify-content-center">
              <div class="col-sm-4">
                <div class="form-group text-center">
                  <button type="submit" class="btn btn-primary btn-block itrn_add_btn">SUBMIT</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Form, HasError, AlertError } from 'vform'
export default {
  name: "New",
  components:{Form,
  'has-error': HasError
  },
  data() {
    return {
      // Create a new form instance
      img_image: "",
      form: new Form({
        name: "",
        state_id: "",
        city_id: "",
        image: "",
        adult_price: "",
        child_price: "",
        address: "",
        description: "",
      })
    };
  },
  methods: {
    changeDetailPhoto(event) {
      let file = event.target.files[0];
      if (file.size > 10048576) {
        swal({
          type: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: "<a href>Why do I have this issue?</a>"
        });
      } else {
        let reader = new FileReader();
        reader.onload = event => {
          this.form.image = event.target.result;
          this.img_image = this.form.image;
        };
        reader.readAsDataURL(file);
      }
    },
    addHotel() {
      // Submit the form via a itinerary request
      this.form
        .post("/api/sightseeings")
        .then(response => {
          console.log(response);
          // this.$router.push(`/hotel-list/`);
          this.$toast.fire({
            icon: "success",
            title: "Hotel Added successfully"
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