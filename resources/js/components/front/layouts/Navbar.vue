<template>
    <div id="frontmaster">
        <section class="navigation" id="myHeader">
          <div class="nav-container">
            <div class="brand">
              <router-link :to="`/`" > <img src="assets/front/images/logo.png" alt="GBI Logo"></router-link>
            </div>
            <div class="nav-custom">
              <nav>
                <div class="nav-mobile"><a id="nav-toggle" href="javascript:void(0);"><span></span></a></div>
                <ul class="nav-list">
                  <li>
                   <router-link :to="`/explore-destination`" >Explore Destintion</router-link>
                  </li>
                   <li>
                    <a href="javascript:void(0);">Resources</a>
                    <ul class="nav-dropdown">
                      <li><router-link :to="`/travel-education`" >Travel & Education</router-link></li>
                      <li><router-link :to="`/safety-security`" >Safety & Security</router-link></li>
                      <li><router-link :to="`/faq`" >Faq</router-link></li>
                    </ul>
                  </li>
                   <li><a href="https://gowithgbi.wordpress.com/">GBI Travel Blog</a></li>
                  <li>
                    <a href="javascript:void(0);">About Us</a>
                    <ul class="nav-dropdown">
                      <li><router-link :to="`/our-story`" >Our Story</router-link></li>
                      <li><router-link :to="`/how-we-work`" >How We Work</router-link></li>
                      <li><router-link :to="`/join-our-team`" >Join Our Team</router-link></li>
                    </ul>
                  </li>
                  <li><router-link :to="`/contact-us`" >Contact Us</router-link></li>

                  <li class="login_link" v-if="login == '1'"><router-link :to="`/login`" >Login</router-link></li>
                  
                  <li class="dashboard_link" v-if="dashboard == '1'" @click="toggleClass()">
                    <a href="javascript:void(0);">User Name</a>
                    <ul class="nav-dropdown" v-bind:class="[isActive ? 'show' : 'hide']">
                      <li><router-link :to="`/dashboard`">Dashboard</router-link></li>
                      <li><router-link :to="`/tour-list`">Booked</router-link></li>            
                      <li><router-link :to="`/payment`">Payment</router-link></li>                        
                      <li><router-link :to="`/change-password`">Change Password</router-link></li>
                      <li><router-link :to="`/logout`">Logout</router-link></li>   
                    </ul>         
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        props: ['selectedOption'],
        data(){
          return{
            login:'0',
            dashboard:false,
            countDown:0,
            isActive:false,
            logincheck: localStorage.getItem("login")
          }
        },
         methods: {
          toggleClass(){
            if(this.isActive == false){
              this.isActive = true;
            }else{
              this.isActive = false;
            }
          }
        },
        computed :{
        },
        mounted: function () {
            this.$nextTick(function () {
                window.setInterval(() => {
                    this.countDown =  localStorage.getItem("login");
                    if(this.countDown == '1'){
                        this.dashboard = '1';
                        this.login = '0';
                    }else{
                        this.dashboard = '0';
                        this.login = '1';
                    }
                },1000);
            })
        }
    }

</script>

<style scoped>
.show{
  display: block !important;
}
.hide{
  display: none !important;
}
</style>