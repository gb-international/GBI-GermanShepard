<template>
    <div id="userlogin">
    	<div class="row">
    		<div class="col-sm-3">
    			
    		</div>
    		<div class="col-sm-6">
	    		

			  <div class="card mx-auto border-0">
			    <div class="card-header border-bottom-0 bg-transparent">
			      <ul class="nav nav-tabs justify-content-center pt-4" id="pills-tab" role="tablist">
			        <li class="nav-item">
			          <a class="nav-link active text-primary" id="pills-login-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login"
			             aria-selected="true">Login</a>
			        </li>

			        <li class="nav-item">
			          <a class="nav-link text-primary" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register"
			             aria-selected="false">Register</a>
			        </li>
			      </ul>
			    </div>

			    <div class="card-body pb-4 loginform">
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

                      <p class="text-center message"><a href="#" class="forget_link">Forget Password?</a></p>
                    </form>

			        </div>

			        <!-- end login -->

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

                      <div class="input-group mb-1">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="fas fa-link"></i></span>
                        </div>
                        <input type="text" class="form-control" v-model="registerForm.gbi_link" :class="{ 'is-invalid': registerForm.errors.has('gbi_link') }"  placeholder="Enter Link" name="name">
                            <has-error :form="registerForm" field="gbi_link"></has-error>
                      </div>
                      
  
                      <div class="input_with_button">
                        <div class="input-group mb-1">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-mobile-alt"></i></span>
                          </div>
                          <input id="phone_no" type="text" class="form-control" v-model="registerForm.phone_no" :class="{ 'is-invalid': registerForm.errors.has('phone_no') }"  placeholder="Enter Phone No.">
                            <has-error :form="registerForm" field="phone_no"></has-error>
                        </div>
                      </div>

                      <div class="input_button">
                        <div class="input-group mb-1">
                          <button class="btn btn-default" type="button">Send OTP</button>
                        </div>
                      </div>

                      <div class="input_with_button">
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
                          <button class="btn btn-default" type="button">VERIFY</button>
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
                        <input id="password-confirm" type="password" class="form-control" v-model="registerForm.password_confirmation" :class="{ 'is-invalid': registerForm.errors.has('password_confirmation') }"  placeholder="Re-Type Password" name="name">
                            <has-error :form="registerForm" field="password_confirmation"></has-error>
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
	    	<div class="col-sm-3">
	    		
	    	</div>
    	</div>
    </div>
</template>
<script>
    export default {
        name: "UserLogin",
        data(){
            return {
              // Create a new form instance
              loginform: new Form({
                email: '',
                password: '',
                }),

              registerForm: new Form({
                name:'',
                email:'',
                gbi_link:'https://www.gowithgbi.com/',
                phone_no:'',
                otp:'',
                password:'',
                password_confirmation:''
              })

            }
        },
        created(){
          if(localStorage.getItem('login') == '1'){
            this.$router.push('/dashboard')
          }
        },
        methods:{
          // Login for the user 
          loginUser(){

            this.loginform.post('api/login')
              .then((response)=>{
                if (response.status === 200) {
                    this.$session.start()
                    // Backend Admin 
                    if(response.data.user_role == '1'){
                      this.$session.set('admin',response.data.user_role)
                      window.location.href = 'admin';
                    }
                    // Front User Dashboard
                    if(response.data.user_role == '2'){

                      this.$session.set('user_id', response.data.id)
                      this.$session.set('user','2')
                      localStorage.setItem("login", "1");
                      this.$router.push('/dashboard')
                      //location.reload();
                    }

                  }
                    toast({
                        type: 'success',
                        title: 'Client Added successfully'
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
          
          // Register user

          registerUser(){
            if(this.registerForm.password == this.registerForm.password_confirmation){
              this.registerForm.post('/api/register')
              .then((response)=>{
                console.log(response);
                if (response.status === 200) {
                    this.$session.start()
                    // Front User Dashboard
                    this.$session.set('user_id', response.data.id)
                    this.$session.set('user','2')
                    localStorage.setItem("login", "1");
                   this.$router.push('/dashboard');
                   location.reload();
                  }
                    toast({
                        type: 'success',
                        title: 'Account Created successfully !!'
                    })
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
              swal("Alert", "Password is equal!", "error","customClass");
            }
          }
        }
    }
</script>

<style scoped>

</style>