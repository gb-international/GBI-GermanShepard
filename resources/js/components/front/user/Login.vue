<template>
  <div id="userlogin" v-if="formno == '1'">
    <div class="mx-auto border-0">
	    <div class="border-bottom-0 bg-transparent">
	      <ul class="nav nav-tabs justify-content-center" id="pills-tab" role="tablist">
	        <li class="nav-item">
	          <a class="nav-link active login_tab" id="pills-login-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login"
	             aria-selected="true">Login</a>
	        </li>
	        <li class="nav-item">
	          <a class="nav-link" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register"
	             aria-selected="false">Register</a>
	        </li>
	      </ul>
	    </div>
	    <div class="pb-4 loginform">
	      <div class="tab-content" id="pills-tabContent">
	      	<!-- Start Login -->
	        <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
            <form role="form" id="login-form" enctype="multipart/form-data" @submit.prevent="loginUser()">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                    </div>
                    <input type="email" class="form-control" v-model="loginform.email" :class="{ 'is-invalid': loginform.errors.has('email') }"  placeholder="Enter Email" name="email">
                        <has-error :form="loginform" field="email"></has-error>                      
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>
                    <input type="password" class="form-control" v-model="loginform.password" :class="{ 'is-invalid': loginform.errors.has('password') }"  placeholder="Enter Password" name="password">
                        <has-error :form="loginform" field="password"></has-error>
                  </div>

                  
                  <button class="btn btn-default btn-block loginbutton">Login</button>

                  <p class="text-center message"><a href="#" class="forget_link" v-on:click="changeform">Forget Password?</a></p>
                </form>

	        </div>

	        <!-- end login -->
          <!-- Register Form -->
	        <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
	            <form id="register-form" action="#" method="post" role="form" @submit.prevent="registerUser()">

                <div class="input-group mb-1">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                  </div>
                  <input type="text" class="form-control" v-model="registerForm.name" :class="{ 'is-invalid': registerForm.errors.has('name') }"  placeholder="Enter Name" name="name">
                      <has-error :form="registerForm" field="name"></has-error>
                </div>
                
                <div class="input-group mb-1">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                  </div>
                  <input id="email" type="email" class="form-control" v-model="registerForm.email" :class="{ 'is-invalid': registerForm.errors.has('email') }"  placeholder="Enter Email" name="name">
                      <has-error :form="registerForm" field="email"></has-error>
                </div>
<!-- Radio buttons -->
        <div class="form-group user_input_field">
          <div> 
            <div class="custom-control custom-radio custom-control-inline student">
              <input type="radio" class="custom-control-input" id="student" value="student" name="client_type"  v-model="registerForm.client_type" v-on:change="changeClientType('student')">
              <label class="custom-control-label" for="student">Student</label>
            </div>

            <!-- Default inline 2-->
            <div class="custom-control custom-radio custom-control-inline corporate">
              <input type="radio" class="custom-control-input" value="corporate" id="corporate" name="client_type" v-model="registerForm.client_type"v-on:change="changeClientType('corporate')">
              <label class="custom-control-label" for="corporate">Corporate</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline other">
              <input type="radio" class="custom-control-input" value="other" id="other" name="client_type" v-model="registerForm.client_type"v-on:change="changeClientType('other')">
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
            <span class="input-group-text"><i class="fas fa-link"></i></span>
          </div>
          <input type="text" class="form-control" v-model="registerForm.client_input" :class="{ 'is-invalid': registerForm.errors.has('client_input') }"  placeholder="Enter School Name" name="client_input">
              <has-error :form="registerForm" field="client_input"></has-error>
        </div>
<!-- school name -->
        <div class="input-group mb-1" v-if="this.client_input_box == '2'">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-link"></i></span>
          </div>
          <input type="text" class="form-control" v-model="registerForm.client_input" :class="{ 'is-invalid': registerForm.errors.has('client_input') }"  placeholder="Enter Corporate Name" name="client_input">
              <has-error :form="registerForm" field="client_input"></has-error>
        </div>
                
<!-- school name -->
                <div class="input-group mb-1" v-if="this.client_input_box == '3'">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-link"></i></span>
                  </div>
                  <input type="text" class="form-control" v-model="registerForm.other_name" :class="{ 'is-invalid': registerForm.errors.has('client_input') }"  placeholder="Enter Your Occupation" name="other_name">
                      <has-error :form="registerForm" field="client_input"></has-error>
                </div>
                

                <div class="input_with_button" v-if="otp_button">
                  <div class="input-group mb-1">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-mobile-alt"></i></span>
                    </div>
                    <input id="phone_no" type="text" class="form-control" v-model="registerForm.phone_no" :class="{ 'is-invalid': registerForm.errors.has('phone_no') }"
                       placeholder="Enter Phone No.">
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
                      <span class="input-group-text"> </span>
                    </div>
                    <input type="text" class="form-control" v-model="registerForm.otp" :class="{ 'is-invalid': registerForm.errors.has('otp') }"  placeholder="OTP">
                      <has-error :form="registerForm" field="otp"></has-error>
                  </div>
                </div>

                <div class="input_button">
                  <div class="input-group mb-1">
                    <span v-if="running_time" class="timer"> Time : {{ time }}</span>
                    <button class="btn btn-default" type="button" v-if="verify_button" v-on:click="otp_verify_user">VERIFY</button>
                    <p v-if="otp_validate" style="font-size: 30px;color: green;margin-top: 12px;position: absolute;right: 30px;"><i class="fas fa-check-circle"></i></p>
                  </div>
                </div>

                <div class="input-group mb-1">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                  </div>
                  <input id="password" type="password" class="form-control" v-model="registerForm.password" :class="{ 'is-invalid': registerForm.errors.has('password') }"  placeholder="Enter Password" name="password">
                      <has-error :form="registerForm" field="password"></has-error>
                </div>

                <div class="input-group mb-1">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                  </div>
                  <input id="password-confirm" type="password" class="form-control" v-model="registerForm.c_password" :class="{ 'is-invalid': registerForm.errors.has('c_password') }"  placeholder="Re-Type Password" name="name">
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
	      </div>
	    </div>
	  </div>
  </div>


  <!-- user password change -->
  <div id="change_password" v-else-if="formno == '2'">
    <form role="form" id="password_form" @submit.prevent="UserPassword()">
      <div class="form-group">
        <label for="email_link">Email address:</label>
        <input type="email" class="form-control" v-model="emailForm.email_link" :class="{ 'is-invalid': emailForm.errors.has('email_link') }"  placeholder="Enter Your Email Account" name="email_link" required="">
        <has-error :form="emailForm" field="email_link"></has-error>
      </div>
      <button type="submit" class="btn btn-block btn-primary">Submit</button>
      <p class="text-center message">I have already Account : <a href="#" class="forget_link" v-on:click="changeform">Login</a></p>
    </form>
  </div>
</template>
<script>
export default {
  name: "UserLogin",
  data(){
      return {
        formno:'1',
        time: 90,
        running_time:0,
        isRunning: false,
        interval: null,
        // Create a new form instance
        otp_validate:0,
        otp_button:1,
        verify_button:0,
        otp_verify:0,
        client_input_box:'',
        loginform: new Form({
          email: '',
          password: '',
          }),

        registerForm: new Form({
          name:'',
          email:'',
          gbi_link:'https://www.gowithgbi.com/',
          client_type:'',
          client_input:'',
          phone_no:'',
          otp:'',
          password:'',
          c_password:''
        }),
        emailForm: new Form({
          email_link:''
        }),
        otp_id : ''
      }
  },
  created(){
    if(localStorage.getItem('login') == '1'){
      this.$router.push('/dashboard')
    }
  },
  methods:{
    // Login for the user 
// *******************************************************************************
    send_otp:function(e){
        var phone_no = this.registerForm.phone_no;
        var pattern = /^[789]\d{9}$/;
        if(phone_no.match(pattern)){// If Valid Number
          let data = new FormData(); 
          data.append('phone_no', phone_no);
          data.append('_method', 'post'); // add this
          // data.append('_token',this.csrf);

          var api = "/api/sendotp";
          axios.post(api,data) // change this to post )
          .then(res =>{
            if(res.data.success){
                this.otp_id = res.data.otp_id;
                this.otp_button=0;
                this.otp_verify = 1;
                this.verify_button = 1;
                this.running_time = 1;
                this.toggleTimer();
                  toast({
                  type: 'success',
                  title: 'Otp Sent To you number!!'
              }) 
            }else{
              swal.fire(res.data.error)
            }                  
             
          }) 
          .catch(
          error => swal.fire('Number is Already Registered')); //  
        }else{ // If Not Valid Number
          swal.fire('Please Enter Valid Number');
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
        this.isRunning = !this.isRunning
      },
      incrementTime() {
        this.time = parseInt(this.time) - 1;
        if(this.time == 0){
              this.otp_button=1;
              this.otp_verify = 0;
              this.verify_button = 0;
              this.running_time = 0;
              this.registerForm.phone_no = '';
              this.time =90;
              this.isRunning = !this.isRunning
              clearInterval(this.interval);
              swal("Alert", "Time Over !!!", "error","customClass");
        }
      },
// End timer here
    // Otp Varification 
    otp_verify_user:function(e){
      var otp = this.registerForm.otp;
      if(otp.length==4){
          let data = new FormData(); 
          data.append('otp', otp);
          data.append('id',this.otp_id);
          data.append('_method', 'post'); // add this
          var api = "/api/otpverify";
          axios.post(api,data) //   this to post )
          .then(res =>{
            this.otp_button=0;
            if(res.data.type == 'success'){
              this.otp_validate = 1;
              this.verify_button = 0;
              this.running_time = 0;
              this.otp_button=0;
              this.otp_verify = 1;
              this.verify_button = 0;
              this.toggleTimer();


               toast({
                type: 'success',
                title: 'Otp Validated!!'
               }) 
            }else{
              swal("Alert", "Invalid OTP!!!", "error","customClass");
            }
          }) 
          .catch(error => swal.fire(error)); //  

      }else{
        swal.fire("Please Enter Valid Otp");
      }
    },
// *******************************************************************************
    loginUser(event){
      this.loginform.post('/api/login-user')
        .then((response)=>{
          var access_token = response.data.success.token;
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("login", "1");
          this.$session.set('access_token',access_token);
          this.$session.set('login',1);
          if (response.status === 200) {
              $('#LoginForm').modal('hide');
              $('.modal-backdrop').remove();
              this.loginform.reset();
              this.$router.push('/explore-destination')
            }
            toast({
                type: 'success',
                title: 'Welcome to GBI'
            })
          })
          .catch((err)=>{
            //swal("Alert", "Email or Password is incorrect!", "error","customClass");
           swal({
               text: 'Email or Password is incorrect!',
               width: 300,
               imageWidth: 100,
              type: '',
              imageAlt: 'Custom image',
              animation: true
            })
          })
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
    // Register user
// *******************************************************************************
    registerUser(){
      if(this.registerForm.password.length > 7){
        if(this.registerForm.password == this.registerForm.c_password){
          this.registerForm.post('/api/register-user')
          .then((response)=>{
            
            if (response.status === 200) {
                // Front User Dashboard
                this.registerForm.reset();
                this.otp_validate = 0;
                this.otp_button = 1;
                this.verify_button = 0;
                this.otp_verify = 0;
                $(".login_tab").click();
              }
              swal("Successfull!", " Please Login now !!!", "success")
            })
            .catch((err)=>{
             swal({
                 text: 'Please Enter valid details!',
                 width: 300,
                 imageWidth: 100,
                type: '',
                imageAlt: 'Custom image',
                animation: true
              })
            })
        }else{
          swal("Alert", "Password is not equal!", "error","customClass");
        }
      }else{
        swal("Alert", "Password length should be 8 character or more!", "error","customClass");
      }
    },
    changeform(){
      if(this.formno == '1'){
        this.formno = '2';
      }else if(this.formno == '2'){
        this.formno = '1';
      }else{
        this.formno = '0';
      }
    },
    UserPassword(){
        this.emailForm.post('api/sendlink')
        .then((response)=>{
          console.log(response);
            // this.emailForm.email_link = '';
              swal({
                  title: 'Please Check your Email Account',
                  type: 'success',
                  animation:true
              });
          })
          .catch((err)=>{
            //swal("Alert", "Email or Password is incorrect!", "error","customClass");
           swal({
               text: 'Email is not valid',
               width: 300,
               imageWidth: 100,
              type: '',
              imageAlt: 'Custom image',
              animation: true
            })
          })
    }
  }
}
</script>

<style scoped>

</style>