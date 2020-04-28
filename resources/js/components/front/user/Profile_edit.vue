<template>
    <div class="container" id="user_edit_form">

      <div class="text-center">
        <div class="avatar-upload user_edit_image">
          
           <form role="form" enctype="multipart/form-data">
              <div class="avatar-edit">
                  <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" @change="onChange" />
                  <label for="imageUpload"></label>
              </div>
              <div class="avatar-preview">
                  <div id="imagePreview" style="background-image: url();">
                    <img v-if="image" :src="'/uploadimage/'+image" class="img">                           
                    <img v-else :src="'/uploadimage/'+image" class="img" alt="">
                  </div>
              </div>
            </form>
          </div>
      </div>
      <!-- user Edit form -->
      <div class="row">
       
        <form role="form" enctype="multipart/form-data" @submit.prevent="updateUserData()">
          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" name="name" v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" placeholder="Enter Name" >
                   <has-error :form="form" field="name"></has-error>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="form-group">
               <label for="genderId">Gender</label> <br><br>                            
                <div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" class="custom-control-input" id="maleId" value="male" name="gender"  v-model="form.gender">
                    <label class="custom-control-label" for="maleId">Male</label>
                  </div>

                  <!-- Default inline 2-->
                  <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" class="custom-control-input" value="female" id="femaleId" name="gender" v-model="form.gender">
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
              <div class="form-group user_input_field">
                <div>
                  <label>User Type</label><br><br>
                  <div class="custom-control custom-radio custom-control-inline student">
                    <input type="radio" class="custom-control-input" id="student1" value="student" name="client_type"  v-model="form.client_type" v-on:change="changeClientType('student')">
                    <label class="custom-control-label" for="student1">Student</label>
                  </div>

                  <!-- Default inline 2-->
                  <div class="custom-control custom-radio custom-control-inline corporate">
                    <input type="radio" class="custom-control-input" value="corporate" id="corporate1" name="client_type" v-model="form.client_type"v-on:change="changeClientType('corporate')">
                    <label class="custom-control-label" for="corporate1">Corporate</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline other">
                    <input type="radio" class="custom-control-input" value="other" id="other1" name="client_type" v-model="form.client_type"v-on:change="changeClientType('other')">
                    <label class="custom-control-label" for="other1">Other</label>
                  </div>

                </div>
                <div class="error" v-if="form.errors.has('client_type')">
                  <lable class="danger text-danger">{{ form.errors.get("client_type") }}</lable>
                </div>
              </div>
            </div>
          </div>
            
          <div class="row">
            <div class="col-sm-4">
  <!-- school name -->
              <div class="form-group" v-if="this.client_input_box == '1'">
                <label>School name</label>
                <input type="text" class="form-control" v-model="form.client_input" :class="{ 'is-invalid': form.errors.has('client_input') }"  placeholder="Enter School Name" name="client_input">
                    <has-error :form="form" field="client_input"></has-error>
              </div>
  <!-- school name -->
              <div class="form-group" v-if="this.client_input_box == '2'">
                <label>Corporate Name</label>
                <input type="text" class="form-control" v-model="form.client_input" :class="{ 'is-invalid': form.errors.has('client_input') }"  placeholder="Enter Corporate Name" name="client_input">
                    <has-error :form="form" field="client_input"></has-error>
              </div>
              
  <!-- school name -->
              <div class="form-group" v-if="this.client_input_box == '3'">
               <label>Occupation Name</label>
                <input type="text" class="form-control" v-model="form.client_input" :class="{ 'is-invalid': form.errors.has('client_input') }"  placeholder="Enter Your Occupation" name="client_input">
                    <has-error :form="form" field="client_input"></has-error>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                  <label for="name">Father's Name</label>
                  <input type="text" class="form-control" name="name" v-model="form.father_name" :class="{ 'is-invalid': form.errors.has('father_name') }" placeholder="Enter Name" >
                   <has-error :form="form" field="father_name"></has-error>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                  <label for="name">Mother's Name</label>
                  <input type="text" class="form-control" name="name" v-model="form.mother_name" :class="{ 'is-invalid': form.errors.has('mother_name') }" placeholder="Enter mother Name" >
                   <has-error :form="form" field="mother_name"></has-error>
              </div>
            </div>
          </div>            

          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                <label for="email">Email ID</label>
                  <input type="email" class="form-control" v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }"  placeholder="Enter Email" name="email">
                <has-error :form="form" field="email"></has-error>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="form-group">
                  <label for="phone_no">Mobile Number</label>
                  <input type="text" class="form-control" v-model="form.phone_no" :class="{ 'is-invalid': form.errors.has('phone_no') }"  placeholder="Enter Phone No" name="phone_no">
                  <has-error :form="form" field="phone_no"></has-error>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                  <label for="phone_no">DOB</label>
                  <input type="date" class="form-control" v-model="form.dob" :class="{ 'is-invalid': form.errors.has('dob') }"  placeholder="Enter DOB" name="dob">
                  <has-error :form="form" field="dob"></has-error>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                <label for="address">Address</label>
                  <input type="text" class="form-control" v-model="form.address" :class="{ 'is-invalid': form.errors.has('address') }"  placeholder="Enter Address" name="address">
                <has-error :form="form" field="address"></has-error>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="form-group">
                  <label for="phone_no">City</label>
                  <input type="text" class="form-control" v-model="form.city" :class="{ 'is-invalid': form.errors.has('city') }"  placeholder="Enter City" name="city">
                  <has-error :form="form" field="city"></has-error>
              </div>
            </div>
            
            <div class="col-sm-4">
              <div class="form-group">
                  <label for="phone_no">State</label>
                  <input type="text" class="form-control" v-model="form.state" :class="{ 'is-invalid': form.errors.has('state') }"  placeholder="Enter state" name="state">
                  <has-error :form="form" field="state"></has-error>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                <label for="country">Country</label>
                  <input type="text" class="form-control" v-model="form.country" :class="{ 'is-invalid': form.errors.has('country') }"  placeholder="Enter country" name="address">
                <has-error :form="form" field="country"></has-error>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="form-group">
                  <label for="phone_no">Zip Code</label>
                  <input type="text" class="form-control" v-model="form.zip_code" :class="{ 'is-invalid': form.errors.has('zip_code') }"  placeholder="Enter zip_code" name="zip_code">
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
    export default {
        name: "ProfileEdit",
        data(){

          return{
            client_input_box:'',
            oddclass:false,
            evenclass:true,
            itineraryData:{},
            width:0,
            image: '',
            prncilIcon:true,
            userinfo:[],
            total:[],
            form: new Form({
                name: '',
                gender:'',
                email: '',
                phone_no: '',
                father_name:'',
                mother_name:'',
                city:'',
                state:'',
                country:'',
                zip_code:'',
                user_class:'',
                admission_year:'',
                address: '',
                dob: '',
                schoolName:'',
                client_type:'',
                client_input:''
                }),
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
          }
        },
        created() {
          if(this.$session.get('login') == undefined){
            this.$router.push('/')
          }

          var data = [];
          axios.post("/api/user-show", data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
              }
            })
            .then(response => {

              this.form.name = response.data.success.name;
              this.form.gender = response.data.success.information['gender'];
              this.form.email = response.data.success.email;
              this.form.phone_no = response.data.success.information['phone_no'];
              this.form.father_name = response.data.success.information['father_name'];
              this.form.mother_name = response.data.success.information['mother'];
              this.form.city = response.data.success.information['city'];
              this.form.state = response.data.success.information['state'];
              this.form.country = response.data.success.information['country'];
              this.form.zip_code = response.data.success.information['zip_code'];
              this.form.user_class = response.data.success.information['user_class'];
              this.form.admission_year = response.data.success.information['admission_year'];
              this.form.address = response.data.success.information['address'];
              this.form.dob = response.data.success.information['dob'];
              this.form.schoolName = response.data.success.information['schoolName'];
              this.form.client_type = response.data.success.information['client_type'];
              this.form.client_input = response.data.success.information['client_input'];
              this.form.image = response.data.success.information['photo'];
              this.image = this.form.image;

              var type = this.form.client_type;
              if(type == 'student'){
                this.client_input_box = '1';
              }
              else if(type == 'corporate'){
                this.client_input_box = '2';
              }
              else{
                this.client_input_box = '3';
              }

            })
            .catch(error => {
              this.handleError(error);
            });
        },
       methods:
       {
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
          if (!file.type.match('image.*')) {
            alert('Select an image');
            return;
          }
          var img = new Image();
          var reader = new FileReader();
          var vm = this;
          reader.onload = function(e) {
            vm.image = e.target.result; 
            let data = new FormData(); 
            data.append('photo', vm.image);
            data.append('_method', 'post'); // add this
            axios.post("/api/update-user-image", data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
              }
            })
            .then(response => {
              vm.image = response.data.photo;
               toast({
                type: 'success',
                title: 'Profile Image updated!!'
            }) 
            }) 
            .catch(error => console.log()); // 
          }
          reader.readAsDataURL(file);
          },
        removeFile() {
          this.image = '';
        },
// change radio button statement
        changeClientType:function(e){
          if(e == 'student'){
            this.client_input_box = '1';
          }
          if(e == 'corporate'){
            this.client_input_box = '2';
          }
          if(e == 'other'){
            this.client_input_box = '3';
          }
        },
/// Update the user information
        updateUserData(){

          var data = this.form;
          axios.post("/api/user-update", data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
              }
            })
            .then(response => {
              toast({
                  type: 'success',
                  title: 'Profile Image updated!!'
              }) 
            })
            .catch(error => {
              this.handleError(error);
            });

        }
      } 
    }

</script>
