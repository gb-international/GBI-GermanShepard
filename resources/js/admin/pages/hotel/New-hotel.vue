<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <form-layout>
    <template #formdata>
      <div class="custom-div mt-4">
        <div class="custom-flex mt-2">
          <div class="icons" :style="iconSelected == 'Safety' ? 'border-bottom: 2px solid #00c4c4' : ''" @click="changeIcon('Safety')">
            Safety
          </div>
          <div class="icons" :style="iconSelected == 'Rooms' ? 'border-bottom: 2px solid #00c4c4' : ''" @click="changeIcon('Rooms')">
            Rooms
          </div>
          <div class="icons" :style="iconSelected == 'Amenities' ? 'border-bottom: 2px solid #00c4c4' : ''" @click="changeIcon('Amenities')">
            Amenities
          </div>
          <div class="icons" :style="iconSelected == 'Policies' ? 'border-bottom: 2px solid #00c4c4' : ''" @click="changeIcon('Policies')">
            Policies
          </div>
          <div class="icons" :style="iconSelected == 'Location' ? 'border-bottom: 2px solid #00c4c4;' : ''" @click="changeIcon('Location')">
            Location
          </div>
          <div class="icons" :style="iconSelected == 'Property' ? 'border-bottom: 2px solid #00c4c4;' : ''" @click="changeIcon('Property')">
            Property
          </div>
          <div class="icons" :style="iconSelected == 'Similar' ? 'border-bottom: 2px solid #00c4c4;' : ''" @click="changeIcon('Similar')">
            Similar
          </div>
        </div>
      </div>
      <form
        id="formDiv"
        role="form"
        enctype="multipart/form-data"
      >
        <div class="row" v-if="step1">
          <div class="col-sm-8">
            <div class="form-group">
              <label for="name">Hotel Name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
                placeholder="Enter Hotel Name"
                name="hotelName"
              />
              <has-error :form="form" field="name"></has-error>
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
              <label for="description">Meta Description</label>
              <textarea
                row="3"
                type="text"
                class="form-control"
                v-model="form.description"
                :class="{ 'is-invalid': form.errors.has('description') }"
                placeholder="Enter Meta Description"
              ></textarea>
              <has-error :form="form" field="description"></has-error>
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
              ></multiselect> 
              -->

                <tags-input element-id="tags"
                  v-model="meta_key"
                  :existing-tags="tags"
                  :typeahead="true"
                  @tags-updated="updateTags"
                  placeholder="Add keywords"
                  >
                </tags-input>

              <has-error :form="form" field="tags"></has-error>
              <p v-if="tagsWarn && meta_key.length < 1 " class="warn-error">Please choose keywords.</p>
            </div>
          </div>

         <div class="col-sm-4">
            <div class="form-group">
              <label for="room">No. of Rooms</label>
              <input
                type="number"
                class="form-control"
                placeholder="Enter No. of Room in hotel"
                id="room"
                name="room"
                v-model="form.room"
                :class="{ 'is-invalid': form.errors.has('room') }"
              />
              <has-error :form="form" field="room"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="room">No. of Banquets</label>
              <input
                type="number"
                class="form-control"
                placeholder="Enter No. of Banquets in hotel"
                id="room"
                name="room"
                v-model="form.banquets"
                :class="{ 'is-invalid': form.errors.has('room') }"
              />
              <has-error :form="form" field="room"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="star">Star Category</label>
              <status-dd class="mb-2" 
                :itemList="star_list"
                @update:option="updateStatus" 
              />
              <has-error :form="form" field="star"></has-error>
              <p v-if="starWarn && form.star === '' " class="warn-error">Select Star Category</p>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter Email"
                id="email"
                rows="5"
                name="email"
                v-model="form.email"
                :class="{ 'is-invalid': form.errors.has('email') }"
              />
              <has-error :form="form" field="email"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="phoneno">Phone Number</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Contact Number"
                name="phoneno"
                v-model="form.phoneno"
                :class="{ 'is-invalid': form.errors.has('phoneno') }"
              />
              <has-error :form="form" field="phoneno"></has-error>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="row" v-else-if="step2">
          <div class="col-sm-6">
            <label for="state">Room Category</label>
             <div class="row">
              <div class="col-sm-9 mb-2" v-for="index in form.room_categories" :key="index">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Select Category"
                    id="room_categories"
                    name="room_categories"
                    v-model="form.room_categories[index]"
                    :class="{ 'is-invalid': form.errors.has('room_categories') }"
                    />
              </div>
              <div class="col-sm-3 mt-2">
                <button class="btn btn-custom-indr" @click.prevent="incr('room')"><i class="fas fa-plus"></i></button>
                <button v-if="form.room_categories.length > 1" class="btn btn-custom-indr" @click.prevent="decr('room')"><i class="fas fa-minus"></i></button>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <label for="state">Banquet Category</label>
            <div class="row">
              <div class="col-sm-9 mb-2" v-for="index in form.banquet_categories" :key="index">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Select Category"
                    id="banquet_categories"
                    name="banquet_categories"
                    v-model="form.banquet_categories[index]"
                    :class="{ 'is-invalid': form.errors.has('banquet_categories') }"
                    />
              </div>
              <div class="col-sm-3 mt-2">
                <button class="btn btn-custom-indr" @click.prevent="incr('banquet')"><i class="fas fa-plus"></i></button>
                <button v-if="form.banquet_categories.length > 1" class="btn btn-custom-indr" @click.prevent="decr('banquet')"><i class="fas fa-minus"></i></button>
              </div>
            </div>
          </div>
        </div>

        <div class="row" v-else-if="step3">
          <div class="custom-card shadow" @click="fileInput">
            <i class="fas fa-plus-circle" style="margin-top: 4vh; font-size: 35px;"></i>
          </div>
          <input type="file" ref="fileInput" style="display: none" @change="onFileInput" accept=".png, .jpg, .jpeg, .pdf">
        </div>

        <!-- Step 4 -->
        <div class="row" v-else-if="step4">
          <div class="col-sm-3">
            <div class="form-group">
              <label for="city">City</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter City"
                id="city"
                name="city"
                v-model="form.city"
                :class="{ 'is-invalid': form.errors.has('city') }"
                />
              <has-error :form="form" field="city"></has-error>
            </div>
          </div>
          <div class="col-sm-3">
              <div class="form-group">
                <label for="state">State</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter State"
                  id="state"
                  name="state"
                  v-model="form.state"
                  :class="{ 'is-invalid': form.errors.has('state') }"
                />
                <has-error :form="form" field="state"></has-error>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="form-group">
              <label for="country">Country</label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Country"
                    id="country"
                    name="country"
                    v-model="form.country"
                    :class="{ 'is-invalid': form.errors.has('country') }"
                />
                <has-error :form="form" field="state"></has-error>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="form-group">
              <label for="pincode">Pin Code</label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Pin"
                    id="pincode"
                    name="pincode"
                    v-model="form.pincode"
                    :class="{ 'is-invalid': form.errors.has('pincode') }"
                />
                <has-error :form="form" field="pincode"></has-error>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="form-group">
                <label for="address">Address</label>
                <textarea
                    class="form-control"
                    placeholder="Enter Address"
                    id="address"
                    name="address"
                    cols="12"
                    v-model="form.address"
                    :class="{ 'is-invalid': form.errors.has('address') }"
                ></textarea>
                <has-error :form="form" field="address"></has-error>
              </div>
            </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-sm-9 text-center">
            <button
                @click.prevent="back()"
                class="btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"
                >Back
            </button>
            <button
                @click.prevent="next()"
                class="btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"
                >Next
            </button>
          </div>
        </div>

      </form>
    </template>
  </form-layout>
</template>

<script>
import { Form, HasError, AlertError } from "vform";
import Vue2EditorMixin from '@/admin/mixins/Vue2EditorMixin';
import StatusDropdown from "@/admin/components/form/StatusDropdown.vue";
import FormButtons from "@/admin/components/buttons/formButtons2.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import TagsInput from '@voerro/vue-tagsinput'

export default {
  name: "NewHotel",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "tags-input": TagsInput,
    "status-dd": StatusDropdown,
  },
  mixins:[Vue2EditorMixin],
  data() {
    return {
      step1: true,
      step2: false,
      step3: false,
      step4: false,
      img_image: "",
      star_list: [
        {name:"5",id:0},
        {name:"4",id:1},
        {name:"3",id:2},
        {name:"2",id:3},
        {name:"1",id:4},
      ],
      form: new Form({
        type: "",
        name: "",
        state: "",
        city: "",
        country: "",
        pincode: "",
        image: '',
        alt:'',
        star: "",
        room: "",
        banquets: "",
        phoneno: "",
        email: "",
        address: "",
        room_categories: [ '' ],
        banquet_categories: [ '' ],
        photos: [''],
        apai_single: "",
        apai_double: "",
        apai_triple: "",
        apai_quad: "",

        mapai_single: "",
        mapai_double: "",
        mapai_triple: "",
        mapai_quad: "",

        cpai_single: "",
        cpai_double: "",
        cpai_triple: "",
        cpai_quad: "",
      }),
    };
  },
  methods: {
    fileInput(){
      this.$refs.fileInput.click()
    },
    onFileInput(e){
        this.form.photos[1] = e.target.files[0];
        console.log(this.form.photos[1])
    },
    incr(val){
      let col = ""
      if(val == 'room'){
        this.form.room_categories.push(col)
      } else {
        this.form.banquet_categories.push(col)
      }
    },
    decr(val,){
      if(val == 'room'){
        this.form.room_categories.pop()
      } else {
        this.form.banquet_categories.pop()
      }
    },
    scrollTop(){
      var el = document.querySelector('formDiv');
      el.scrollTop = el.scrollHeight;

      setTimeout(function(){
        el.scrollTop = 0;
      }, 500);
    },
    next(){
      if(this.step1 == true){
        this.step1 = false;
        this.step2 = true;
        //this.scrollTop()
      } else if(this.step2 == true){
        this.step2 = false;
        this.step3 = true;
        //this.scrollTop()
      } else if(this.step3 == true){
        this.step3 = false;
        this.step4 = true;
        //this.scrollTop()
      }
    },
    back(){
      if(this.step1 == true){
        this.$router.push('/hotel-list');
      }else if(this.step2 == true){
        this.step2 = false;
        this.step1 = true;
        //this.scrollTop()
      } else if(this.step3 == true){
        this.step3 = false;
        this.step2 = true;
        //this.scrollTop()
      } else if(this.step4 == true){
        this.step4 = false;
        this.step3 = true;
        //this.scrollTop()
      }
    },
    updateStatus(v){ this.form.star = v.name},
    changeDetailPhoto(event) {
      let file = event.target.files[0];
      this.form.alt = file.name;
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image  = event.target.result;
        this.img_image = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    addHotel() {
      // Submit the form via a itinerary request
      this.form
        .post("/api/hotel")
        .then((response) => {
          this.$router.push(`/hotel-list/`);
          this.$toast.fire({
            icon: "success",
            title: "Hotel Added successfully",
          });
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
.btn-custom-indr {
    color: #212529;
    background-color: #dee2e6;
    border-color: #dee2e6;
    font-size: 15px !important;
    font-weight: 400;
    padding: 6px 15px;
}
.custom-card {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 12vh;
  width: 10vw;
  background: #e5e5e5;
  border: solid 2px #e5e5e5;
  border-radius: 5px;
}
.custom-div{
  margin-top: 26px !important;
  padding-top: 0.2vh !important;
  margin-right: 20px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 2px 7px 0 rgb(0 0 0 / 19%);
}
.custom-div2{
  margin-top: 5px !important;
  padding-top: 0.2vh !important;
  margin-right: 20px;
}
.custom-flex {
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-direction: row;
  font-size: 18px;
  font-weight: 400;
}
</style>