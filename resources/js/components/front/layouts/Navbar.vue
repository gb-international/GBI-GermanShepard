<template>
  <section class="navigation" id="myHeader">
    <div class="container">
      <div class="nav-container">
        <div class="brand">
          <router-link :to="`/`" > <img src="/assets/front/images/logo.png" alt="GBI Logo"></router-link>
        </div>
        <div class="nav-custom">
          <nav>
            <div class="nav-mobile">
              <a id="nav-toggle" href="javascript:void(0);"><span></span></a>
            </div>
            <ul class="nav-list">
              <li @click="activate_menu(1)" :class="{ nav_active : nav_active_el == 1 }">
                <router-link :to="`/explore-destination`" >Explore Destintion</router-link>
              </li>

              <li @click="activate_menu(6)" :class="{ nav_active : nav_active_el == 6 }">
                <a href="javascript:void(0);">Resources</a>
                <ul class="nav-dropdown">
                  <li><router-link :to="`/resources/travel-education`">Travel & Education</router-link></li>
                  <li><router-link :to="`/resources/safety-security`">Safety & Security</router-link></li>
                  <li><router-link :to="`/resources/faq`">Faq</router-link></li>
                  <li><router-link :to="`/resources/encyclopedia`">Travel encyclopedia</router-link></li>
                </ul>
              </li>
              
              <li><a href="https://gowithgbi.wordpress.com/">GBI Travel Blog</a></li>
              <li @click="activate_menu(9)" :class="{ nav_active : nav_active_el == 9 }">
                <a href="javascript:void(0);">About Us</a>
                <ul class="nav-dropdown">
                  <li><router-link :to="`/about-us/our-story`">Our Story</router-link></li>
                  <li><router-link :to="`/about-us/how-we-work`">How We Work</router-link></li>
                  <li><router-link :to="`/about-us/join-our-team`">Join Our Team</router-link></li>
                  <li><router-link :to="`/about-us/image-gallery`">Image Gallery</router-link></li>
                </ul>
              </li>
              <li @click="activate_menu(4)" :class="{ nav_active : nav_active_el == 4 }">
                <router-link :to="`/contact-us`" >Contact Us</router-link>
              </li>

              <li class="login_link" v-if="login == '1'">
                <!-- <router-link :to="`/login`" >Login</router-link> -->
                <a href="#" id="loginButton" data-toggle="modal" data-target="#LoginForm">login <i class="far fa-user"></i></a>
              </li>
              
              <li class="dashboard_link" v-else-if="dashboard == '1'" @click="toggleClass()">
                <a href="javascript:void(0);">User Name</a>
                <ul class="nav-dropdown" v-bind:class="[isnav_active ? 'show' : 'hide']">
                  <li><router-link :to="`/dashboard`">Dashboard</router-link></li>
                  <li><router-link :to="`/tour-list`">Booked</router-link></li>            
                  <li><router-link :to="`/payment`">Payment</router-link></li>        
                  <li><router-link :to="`/change-password`">Change Password</router-link></li>
                  <li><a href="#" @click="logout">Logout</a></li>   
                </ul>         
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div class="modal" id="LoginForm">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="closebutton">
            <button type="button" class="close"  data-dismiss="modal" style="padding: 5px 13px 0px 0px !important;">&times;</button>
          </div>
          <!-- Modal body -->
          <div class="modal-body loginform">
            <login></login>
          </div>
        </div>
      </div>
    </div>


  </section>

</template>

<script>
export default {
  name: "Navbar",
  data(){
    return{
      nav_active_el:0,
      login:'0',
      dashboard:false,
      countDown:0,
      isnav_active:false,
      logincheck: localStorage.getItem("login"),
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    }
  },
    methods: {
      toggleClass(){
        if(this.isnav_active == false){
          this.isnav_active = true;
        }else{
          this.isnav_active = false;
        }
      },
      logout(){
        axios.post('api/user-logout').then(response => {
          console.log(response);
          if (response.status === 302 || 401) {
            localStorage.setItem("login", "0");
            localStorage.setItem("access_token", "0");
            this.$session.destroy();
            this.$router.push('/');
            toast({
                type: 'success',
                title: 'You are logedout !!'
            })
          }
          else {
            // throw error and go to catch block
          }
        }).catch(error => {
          
      });
      },
      activate_menu:function(el){
          this.nav_active_el = el;
      }
    },
    computed :{
    },
    mounted: function () {
      this.$nextTick(function () {
          window.setInterval(() => {
              // this.countDown =  localStorage.getItem("login");
              this.countDown =  this.$session.get('login')
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

ul > li:hover {
  cursor:pointer;
}

.nav_active{
  border-bottom: 2px solid grey;
}
</style>