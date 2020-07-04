<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div class="register-component">
    <form id="register-form" action="#" method="post" role="form" @submit.prevent="registerUser()">

      <span class="text-danger">{{ register_sms }}</span>

      <div class="input-group mb-1">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-user"></i>
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          v-model="registerForm.name"
          :class="{ 'is-invalid': registerForm.errors.has('name') }"
          placeholder="Enter Name"
          name="name"
        />
        <has-error :form="registerForm" field="name"></has-error>
      </div>

      <div class="input-group mb-1">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
        <input
          id="email"
          type="email"
          class="form-control"
          v-model="registerForm.email"
          :class="{ 'is-invalid': registerForm.errors.has('email') }"
          placeholder="Enter Email"
          name="name"
        />
        <has-error :form="registerForm" field="email"></has-error>
      </div>
      <!-- Radio buttons -->
      <div class="form-group user_input_field">
        <div>
          <div class="custom-control custom-radio custom-control-inline student">
            <input
              type="radio"
              class="custom-control-input"
              id="student"
              value="student"
              name="client_type"
              v-model="registerForm.client_type"
              v-on:change="changeClientType('student')"
            />
            <label class="custom-control-label" for="student">Education Institutions</label>
          </div>

          <!-- Default inline 2-->
          <div class="custom-control custom-radio custom-control-inline corporate">
            <input
              type="radio"
              class="custom-control-input"
              value="corporate"
              id="corporate"
              name="client_type"
              v-model="registerForm.client_type"
              v-on:change="changeClientType('corporate')"
            />
            <label class="custom-control-label" for="corporate">Corporate</label>
          </div>
          <div class="custom-control custom-radio custom-control-inline other">
            <input
              type="radio"
              class="custom-control-input"
              value="other"
              id="other"
              name="client_type"
              v-model="registerForm.client_type"
              v-on:change="changeClientType('other')"
            />
            <label class="custom-control-label" for="other">Other</label>
          </div>
        </div>
        <div class="error" v-if="registerForm.errors.has('client_type')">
          <lable class="danger text-danger">{{ registerForm.errors.get("client_type") }}</lable>
        </div>
      </div>
      <!-- school name -->
      <div class="input-group mb-1" v-if="this.client_input_box == '1'">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-link"></i>
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          v-model="registerForm.client_input"
          :class="{ 'is-invalid': registerForm.errors.has('client_input') }"
          placeholder="Enter School Name"
          name="client_input"
        />
        <has-error :form="registerForm" field="client_input"></has-error>
      </div>
      <!-- school name -->
      <div class="input-group mb-1" v-if="this.client_input_box == '2'">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-link"></i>
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          v-model="registerForm.client_input"
          :class="{ 'is-invalid': registerForm.errors.has('client_input') }"
          placeholder="Enter Corporate Name"
          name="client_input"
        />
        <has-error :form="registerForm" field="client_input"></has-error>
      </div>

      <!-- school name -->
      <div class="input-group mb-1" v-if="this.client_input_box == '3'">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-link"></i>
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          v-model="registerForm.other_name"
          :class="{ 'is-invalid': registerForm.errors.has('client_input') }"
          placeholder="Enter Your Occupation"
          name="other_name"
        />
        <has-error :form="registerForm" field="client_input"></has-error>
      </div>

      <div class="input_with_button" v-if="otp_button">
        <div class="input-group mb-1">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-mobile-alt"></i>
            </span>
          </div>
          <input
            id="phone_no"
            type="text"
            class="form-control"
            v-model="registerForm.phone_no"
            :class="{ 'is-invalid': registerForm.errors.has('phone_no') }"
            placeholder="Enter Phone No."
          />
          <has-error :form="registerForm" field="phone_no"></has-error>
        </div>
      </div>

      <div class="input_button" v-if="otp_button">
        <div class="input-group mb-1">
          <button class="btn btn-default" type="button" v-on:click="send_otp">Send OTP</button>
        </div>
      </div>

      <div class="input_with_button input_verify" v-if="otp_verify">
        <div class="input-group mb-1">
          <div class="input-group-prepend">
            <span class="input-group-text"></span>
          </div>
          <input
            type="text"
            class="form-control"
            v-model="registerForm.otp"
            :class="{ 'is-invalid': registerForm.errors.has('otp') }"
            placeholder="OTP"
          />
          <has-error :form="registerForm" field="otp"></has-error>
        </div>
      </div>

      <div class="input_button">
        <div class="input-group mb-1">
          <span v-if="running_time" class="timer">Time : {{ time }}</span>
          <button
            class="btn btn-default"
            type="button"
            v-if="verify_button"
            v-on:click="otp_verify_user"
          >VERIFY</button>
          <p
            v-if="otp_validate"
            style="font-size: 30px;color: green;margin-top: 12px;position: absolute;right: 30px;"
          >
            <i class="fas fa-check-circle"></i>
          </p>
        </div>
      </div>

      <div class="input-group mb-1">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-key"></i>
          </span>
        </div>
        <input
          id="password"
          type="password"
          class="form-control"
          v-model="registerForm.password"
          :class="{ 'is-invalid': registerForm.errors.has('password') }"
          placeholder="Enter Password"
          name="password"
        />
        <has-error :form="registerForm" field="password"></has-error>
      </div>

      <div class="input-group mb-1">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fas fa-key"></i>
          </span>
        </div>
        <input
          id="password-confirm"
          type="password"
          class="form-control"
          v-model="registerForm.c_password"
          :class="{ 'is-invalid': registerForm.errors.has('c_password') }"
          placeholder="Re-Type Password"
          name="name"
        />
        <has-error :form="registerForm" field="c_password"></has-error>
      </div>
      <div class="form-group register_button">
        <div class="row">
          <div class="col-md-12">
            <button type="submit" class="btn btn-block">Register</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { Form, HasError, AlertError } from "vform";
export default {
  name: "Register",
  components: {
    Form,
    HasError
  },
  data() {
    return {
      register_sms: "",
      registerForm: new Form({
        name: "",
        email: "",
        gbi_link: "https://www.gowithgbi.com/",
        client_type: "",
        client_input: "",
        phone_no: "",
        otp: "",
        password: "",
        c_password: ""
      }),
      otp_validate: 0,
      otp_button: 1,
      verify_button: 0,
      otp_verify: 0,
      client_input_box: "",
      otp_id: "",
      interval: null,
      running_time: 0,
      time: 90
    };
  },
  methods: {
    // Login for the user
    // *******************************************************************************
    send_otp: function(e) {
      var phone_no = this.registerForm.phone_no;
      var pattern = /^[789]\d{9}$/;
      if (phone_no.match(pattern)) {
        // If Valid Number
        let data = new FormData();
        data.append("phone_no", phone_no);
        data.append("_method", "post"); // add this
        // data.append('_token',this.csrf);

        var api = "/api/sendotp";
        this.$axios
          .post(api, data) // change this to post )
          .then(res => {
            if (res.data.success) {
              this.otp_id = res.data.otp_id;
              this.otp_button = 0;
              this.otp_verify = 1;
              this.verify_button = 1;
              this.running_time = 1;
              this.toggleTimer();
              this.$swal.fire(
                'Otp Sent',
                'Otp Sent To you number!!',
                'success'
              );
            } else {
              this.$swal.fire(res.data.error);
            }
          })
          .catch(error => this.$swal.fire("The phone no. has already been taken.")); 
      } else {
        // If Not Valid Number
        this.$swal.fire("Please Enter Valid Number");
      }
    },
    // *******************************************************************************
    // Timer start here
    toggleTimer() {
      if (this.isRunning) {
        clearInterval(this.interval);
      } else {
        this.interval = setInterval(this.incrementTime, 1000);
      }
      this.isRunning = !this.isRunning;
    },
    incrementTime() {
      this.time = parseInt(this.time) - 1;
      if (this.time == 0) {
        this.otp_button = 1;
        this.otp_verify = 0;
        this.verify_button = 0;
        this.running_time = 0;
        this.registerForm.phone_no = "";
        this.time = 90;
        this.isRunning = !this.isRunning;
        clearInterval(this.interval);
        this.$swal.fire("Alert", "Time Over !!!", "error", "customClass");
      }
    },
    // End timer here
    // Otp Varification
    otp_verify_user: function(e) {
      var otp = this.registerForm.otp;
      if (otp.length == 4) {
        let data = new FormData();
        data.append("otp", otp);
        data.append("id", this.otp_id);
        data.append("_method", "post"); // add this
        var api = "/api/otpverify";
        this.$axios
          .post(api, data) //   this to post )
          .then(res => {
            this.otp_button = 0;
            if (res.data.type == "success") {
              this.otp_validate = 1;
              this.verify_button = 0;
              this.running_time = 0;
              this.otp_button = 0;
              this.otp_verify = 1;
              this.verify_button = 0;
              this.toggleTimer();

               this.$swal.fire(
                'Valid',
                'Otp is valid',
                'success'
              );
            } else {
              this.$swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid OTP!!!'
              });
            }
          })
          .catch(error => this.$swal.fire(error)); //
      } else {
        this.$swal.fire("Please Enter Valid Otp");
      }
    },
    // *******************************************************************************
    // change radio button statement
    changeClientType: function(e) {
      if (e == "student") {
        this.client_input_box = "1";
      }
      if (e == "corporate") {
        this.client_input_box = "2";
      }
      if (e == "other") {
        this.client_input_box = "3";
      }
    },
    // Register user
    // ******************************************
    registerUser() {
      if((this.registerForm.email =='') || (this.registerForm.name == '') || (this.otp_validate != 1) ){
        this.register_sms = 'Please Fill all the filelds';
        return false;
      }
      
      if (this.registerForm.password.length > 7) {
        if (this.registerForm.password == this.registerForm.c_password) {
          this.registerForm
            .post("/api/register-user")
            .then(response => {
              if (response.status === 200) {
                // Front User Dashboard
                this.registerForm.reset();
                this.otp_validate = 0;
                this.otp_button = 1;
                this.verify_button = 0;
                this.otp_verify = 0;
                this.register_sms = '';
                window.$(".login_close").click();
              }
              this.$swal.fire("Successfull!", " Please Login now !!!", "success");
            })
            .catch(err => {
              this.register_sms = "please provide valide credentials";
            });
        } else {
          this.register_sms = "Password is not equal";
        }
      } else {
        this.register_sms = "Password length should be 8 character or more!";
      }
    }
  }
};
</script>