<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div id="user_edit_form">
    <div class="text-center">
      <div class="avatar-upload user_edit_image">
        <form role="form" enctype="multipart/form-data">
          <div class="avatar-edit">
            <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" @change="onChange" />
            <label for="imageUpload"><i class="fas fa-pencil-alt"></i></label>
          </div>
          <div class="avatar-preview">
            <div id="imagePreview" style="background-image: url();">
              <img v-if="image" :src="'/uploadimage/'+image" loading="lazy" class="img" />
              <img
                v-else
                :src="'/uploadimage/'+image"
                loading="lazy"
                class="img"
                alt="user profile"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- user Edit form -->
    <div class="container">

        <form role="form" enctype="multipart/form-data" @submit.prevent="updateUserData()">

        <div class="row">
          
            <div class="col-sm-4">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.name"
                  :class="{ 'is-invalid': form.errors.has('name') }"
                  placeholder="Enter Name"
                />
                <has-error :form="form" field="name"></has-error>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="form-group">
                <label for="genderId">Gender</label>
                <br />
                <br />
                <div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="maleId"
                      value="male"
                      v-model="form.gender"
                    />
                    <label class="custom-control-label" for="maleId">Male</label>
                  </div>

                  <!-- Default inline 2-->
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      class="custom-control-input"
                      value="female"
                      id="femaleId"
                      v-model="form.gender"
                    />
                    <label class="custom-control-label" for="femaleId">Female</label>
                  </div>
                </div>
                <div class="error" v-if="form.errors.has('gender')">
                  <lable class="danger text-danger">{{ form.errors.get("gender") }}</lable>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <!-- Radio buttons -->
              <div class="form-group">
                <div>
                  <label>User profession</label>
                  <br />
                  <select class="form-control" v-model="form.user_profession">
                    <option value="student">Student</option>
                    <option value="teacher">Teacher/Principal/Dean</option>
                    <option value="corporate">Corporate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div class="error" v-if="form.errors.has('user_profession')">
                  <lable class="danger text-danger">{{ form.errors.get("user_profession") }}</lable>
                </div>
              </div>
            </div>

          
            <div class="col-sm-4" v-if="school_field">
              <div class="form-group">
                <label>School name</label>
                <select class="form-control" v-model="form.school_id">
                  <option
                    v-for="school in school_list"
                    :value="school.id"
                    :key="school.id"
                  >{{ school.school_name }}</option>
                </select>
                <has-error :form="form" field="school_id"></has-error>
              </div>
            </div>

            <div class="col-sm-4" v-if="namefield">
              <div class="form-group">
                  <label>{{ label_name }} Name</label>
                  <input type="text" class="form-control" v-model="form.profession_name">
              </div>
            </div>

            <div class="col-sm-4" v-if="addressfield">
              <div class="form-group">
                <label>Address</label>
                <input type="text" class="form-control" v-model="form.profession_address">
              </div>
            </div> 
                         
            <div class="col-sm-4" v-if="form.institution_code">
              <div class="form-group">
                <label>Code</label>
                <input type="text" class="form-control" v-model="form.institution_code">
              </div>
            </div> 


            <div class="col-sm-4">
              <div class="form-group">
                <label for="name">Father's Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.father_name"
                  :class="{ 'is-invalid': form.errors.has('father_name') }"
                  placeholder="Enter Name"
                />
                <has-error :form="form" field="father_name"></has-error>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for="name">Mother's Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.mother_name"
                  :class="{ 'is-invalid': form.errors.has('mother_name') }"
                  placeholder="Enter mother Name"
                />
                <has-error :form="form" field="mother_name"></has-error>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for="email">Email ID</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="form.email"
                  :class="{ 'is-invalid': form.errors.has('email') }"
                  placeholder="Enter Email"
                />
                <has-error :form="form" field="email"></has-error>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="form-group">
                <label for="phone_no">Mobile Number</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.phone_no"
                  :class="{ 'is-invalid': form.errors.has('phone_no') }"
                  placeholder="Enter Phone No"
                />
                <has-error :form="form" field="phone_no"></has-error>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for="phone_no">DOB</label>
                <input
                  type="date"
                  class="form-control"
                  v-model="form.dob"
                  :class="{ 'is-invalid': form.errors.has('dob') }"
                  placeholder="Enter DOB"
                />
                <has-error :form="form" field="dob"></has-error>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for="address">Address</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.address"
                  :class="{ 'is-invalid': form.errors.has('address') }"
                  placeholder="Enter Address"
                />
                <has-error :form="form" field="address"></has-error>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="form-group">
                <label for="phone_no">City</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.city"
                  :class="{ 'is-invalid': form.errors.has('city') }"
                  placeholder="Enter City"
                />
                <has-error :form="form" field="city"></has-error>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for="phone_no">State</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.state"
                  :class="{ 'is-invalid': form.errors.has('state') }"
                  placeholder="Enter state"
                />
                <has-error :form="form" field="state"></has-error>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for="country">Country</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.country"
                  :class="{ 'is-invalid': form.errors.has('country') }"
                  placeholder="Enter country"
                />
                <has-error :form="form" field="country"></has-error>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="form-group">
                <label for="phone_no">Zip Code</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.zip_code"
                  :class="{ 'is-invalid': form.errors.has('zip_code') }"
                  placeholder="Enter zip_code"
                />
                <has-error :form="form" field="zip_code"></has-error>
              </div>
            </div>
        </div>

            <div class="form-group text-center">
              <button type="submit" class="btn btn-primary profile_button">UPDATE</button>
            </div>
        </form>

    </div>
  </div>
</template>
<script>
import { Form, HasError, AlertError } from "vform";

export default {
  name: "ProfileEdit",
  components: {
    "has-error": HasError
  },
  data() {
    return {
      client_input_box: "",
      oddclass: false,
      evenclass: true,
      itineraryData: {},
      width: 0,
      image: "",
      prncilIcon: true,
      userinfo: [],
      total: [],
      school_list:'',

      school_field:false,
      namefield:false,
      addressfield:false,
      institutionfield:false,

      label_name:'',

      form: new Form({
        name: "",
        gender: "",
        email: "",
        phone_no: "",
        father_name: "",
        mother_name: "",
        city: "",
        state: "",
        country: "",
        zip_code: "",
        user_class: "",
        admission_year: "",
        address: "",
        dob: "",
        schoolName: "",
        client_type: "",
        client_input: "",
        profession_name:"",
        school_id:"",
        profession_address:"",
        user_profession:"",
        institution_code:"",

      })
    };
  },
  mounted() {
    if (localStorage.token == "") {
      this.$router.push("/");
    }
    this.$axios.get("/api/school-list").then(response => {
      this.school_list = response.data;
    });

    var data = [];
    this.$axios.post("/api/user-show", data, {
        headers: { Authorization: `Bearer ${localStorage.token}` }
      })
      .then(response => {
        var list = response.data.success;
        this.form.name = list.name;
        this.form.gender = list.information["gender"];
        this.form.email = list.email;
        this.form.phone_no = list.information["phone_no"];
        this.form.father_name = list.information["father_name"];
        this.form.mother_name = list.information["mother"];
        this.form.city = list.information["city"];
        this.form.state = list.information["state"];
        this.form.country = list.information["country"];
        this.form.zip_code = list.information["zip_code"];
        this.form.user_class = list.information["user_class"];
        this.form.admission_year = list.information["admission_year"];
        this.form.address = list.information["address"];
        this.form.dob = list.information["dob"];
        this.form.schoolName = list.information["schoolName"];
        this.form.user_profession = list.information["user_profession"];
        this.form.profession_name = list.information["profession_name"];
        this.form.profession_address = list.information["profession_address"];
        this.form.institution_code = list.information["institution_code"];
        this.form.image = list.information["photo"];
        this.image = this.form.image;

        var type = this.form.user_profession;
        if((type == "student") || (type=="teacher")) {
          this.client_input_box = "1";
          this.form.school_id =
          list.information.school_id;
        } else if (type == "corporate") {
          this.client_input_box = "2";
        } else {
          this.client_input_box = "3";
        }
      })
      .catch(error => { this.handleError(error); });
  },

   watch:{
    institution:function(){
      if(this.form.user_profession == 'other'){
        this.namefield = true;
        this.addressfield = true;
        this.label_name = 'Educational Institution'
      }else{
        this.namefield = false;
        this.addressfield = false;
      }
    },
    'form.user_profession':function(){
      this.namefield = false;
      this.addressfield = false;
      this.school_field = false;
      if(this.form.user_profession == 'corporate'){
        this.namefield = true;
        this.addressfield = true;
        this.label_name = 'Corporate'
      }else if(this.form.user_profession == 'other'){
        this.namefield = true;
        this.label_name = "Occupation";
      }else{
        this.school_field = true;
      }
    }
  },

  methods: {
    onDrop: function(e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;
      this.createFile(files[0]);
    },
    onChange(e) {
      var files = e.target.files;
      this.createFile(files[0]);
    },
    createFile(file) {
      if (!file.type.match("image.*")) {
        alert("Select an image");
        return;
      }
      var img = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = function(e) {
        vm.image = e.target.result;
        let data = new FormData();
        data.append("photo", vm.image);
        data.append("_method", "post"); // add this

        vm.$axios
          .post("/api/update-user-image", data, {
            headers: {
              Authorization: `Bearer ${localStorage.token}`
            }
          })
          .then(response => {
            vm.image = response.data.photo;
            vm.$swal.fire({
              icon: "success",
              title: "Profile image updated !!"
            });
          })
          .catch(error => console.log()); //
      };
      reader.readAsDataURL(file);
    },
    removeFile() {
      this.image = "";
    },

    /// Update the user information
    updateUserData() {
      var data = this.form;
      this.$axios
        .post("/api/user-update", data, {
          headers: { Authorization: `Bearer ${localStorage.token}` }
        })
        .then(response => {
          console.log(response);
          this.$swal.fire({ icon: "success", title: "Profile updated!!" });
        })
        .catch(error => {
          this.handleError(error);
        });
    }
  }
};
</script>
