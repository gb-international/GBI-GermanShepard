<template>
  <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div class="container">
    <div id="UpdatePassword" class="grey-form">
      <div class="mb-20 mt-20">
        <div class="row justify-content-center pt-20">
          <div class="col-sm-5 p-20 tour-code-card">
            <h5 class="text-center pb-15">Update Your Password</h5>
            <form class="form" method="post" @submit.prevent="UpdatePassword()">
              <div class="form-group">
                <label for="tour_code">Current Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter Current Password"
                  v-model="form.current_password"
                  :class="{ 'is-invalid': form.errors.has('current_password') }"
                  required
                />
                <has-error :form="form" field="current_password"></has-error>
              </div>
              <div class="form-group">
                <label for="tour_code">New Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter New Password"
                  v-model="form.new_password"
                  :class="{ 'is-invalid': form.errors.has('new_password') }"
                  required
                />
                <has-error :form="form" field="new_password"></has-error>
              </div>

              <div class="form-group">
                <label for="tour_code">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Re-Enter Password"
                  v-model="form.confirm_password"
                  :class="{ 'is-invalid': form.errors.has('confirm_password') }"
                  required
                />
                <has-error :form="form" field="confirm_password"></has-error>
              </div>
              <div class="w-100">
                <small class="text-danger text-left" v-if="password_error">{{
                  password_error
                }}</small>
                <small
                  class="text-danger text-left"
                  v-if="password_error_mismatch"
                  >{{ password_error_mismatch }}</small
                >
              </div>

              <div class="text-center">
                <button type="submit" class="btn profile_button">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, HasError, AlertError } from "vform";
export default {
  name: "UpdatePassword",
  components: {
    "has-error": HasError,
    "alert-error": AlertError,
  },
  data() {
    return {
      password_error_mismatch: "",
      password_error: "",
      form: new Form({
        current_password: "",
        new_password: "",
        confirm_password: "",
      }),
    };
  },
  watch: {
    "form.new_password": function () {
      this.checkPassword(this.form.new_password);
    },
    "form.confirm_password": function () {
      this.checkPasswordMatch();
    },
  },

  methods: {
    UpdatePassword() {
      var data = {
        current_password: this.form.current_password,
        new_password: this.form.new_password,
        confirm_password: this.form.confirm_password,
      };
      if (
        this.password_error_mismatch == "" &&
        this.password_error == "" &&
        this.new_password != ""
      ) {
        this.$api
          .POST("/api/update-password", data)
          .then((response) => {
            console.log(response);
            this.form.reset();
            this.$router.push("/dashboard");
            this.$swal.fire(
              "Password Updated !!",
              "Your password has been updated",
              "success"
            );
          })
          .catch((error) => {
            this.$swal.fire("Error !!", "Something Wrong Try again", "error");
            this.handleError(error);
          });
      }
    },
    checkPassword(str) {
      var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      let result = re.test(str);
      if (result == false) {
        this.password_error =
          "Password should contain 8 letters, with at least a symbol, upper and lower case letters and a number ";
      } else {
        this.password_error = "";
      }
      return result;
    },
    checkPasswordMatch() {
      if (this.form.new_password != this.form.confirm_password) {
        this.password_error_mismatch = "Password Mismatch";
      } else {
        this.password_error_mismatch = "";
      }
    },
  },
};
</script>
