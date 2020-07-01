<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div id="app">
    <nav class="navbar navbar-expand-md bg-white navbar-light fixed-top" id="navbar">
      <div class="container">
        <router-link class="navbar-brand" :to="`/`">
          <img src="/assets/front/images/logo.png" />
        </router-link>


        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="icon-bar top-bar"></span>
          <span class="icon-bar middle-bar"></span>
          <span class="icon-bar bottom-bar"></span>				
        </button>



        <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li
              class="nav-item mr-10"
              @click="makeActive(1)"
              :class="{ nav_active : nav_active_el == 1 }"
            >
              <router-link class="nav-link" :to="`/explore-destination`">Explore Destination</router-link>
            </li>
            <li
              class="nav-item dropdown mr-10"
            >
              <router-link
                class="nav-link dropdown-toggle"
                :to="``"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Resources</router-link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <router-link
                  class="dropdown-item mt-10"
                  :to="`/resources/travel-education`"
                >Travel & Education</router-link>
                <router-link
                  class="dropdown-item mt-10"
                  :to="`/resources/safety-security`"
                >Safety & Security</router-link>
                <router-link class="dropdown-item mt-10" :to="`/resources/faq`">Faq</router-link>
                <router-link
                  class="dropdown-item mt-10"
                  :to="`/resources/travel-encyclopedia`"
                >Travel Encyclopedia</router-link>
              </div>
            </li>
            <li
              class="nav-item mr-10"
              @click="makeActive(3)"
              :class="{ nav_active : nav_active_el == 3 }"
            >
              <router-link class="nav-link" :to="`https://gowithgbi.wordpress.com/`">GBI Travel Blog</router-link>
            </li>
            <li
              class="nav-item mr-10 dropdown"
            >
              <router-link
                class="nav-link dropdown-toggle"
                :to="``"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >About Us</router-link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <router-link class="dropdown-item mt-10" :to="`/about-us/our-story`">Our Story</router-link>
                <router-link class="dropdown-item mt-10" :to="`/about-us/how-we-work`">How We Work</router-link>
                <router-link
                  class="dropdown-item mt-10"
                  :to="`/about-us/join-our-team`"
                >Join Our Team</router-link>
                <router-link
                  class="dropdown-item mt-10"
                  :to="`/about-us/image-gallery`"
                >Image Gallery</router-link>
              </div>
            </li>
            <li
              class="nav-item mr-10"
              @click="makeActive(5)"
              :class="{ nav_active : nav_active_el == 5 }"
            >
              <router-link class="nav-link" :to="`/contact-us`">Contact Us</router-link>
            </li>

            <li class="nav-item mr-10" v-if="login == '1'">
              <a
                href="#"
                class="nav-link loginLink"
                id="loginButton"
                data-toggle="modal"
                data-target="#LoginForm"
              >
                login
                <i class="fa fa-user"></i>
              </a>
            </li>

            <li class="nav-item mr-10" v-else
              @click="makeActive(4)"
              :class="{ nav_active : nav_active_el == 4 }"
            >
              <router-link class="nav-link" :to="`/dashboard`"> <img :src="`/uploadimage/${user.photo}`" class="img img-circle nav_profile"> {{ user.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="modal" id="LoginForm">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="closebutton">
            <button
              type="button"
              class="close login_close"
              data-dismiss="modal"
              style="padding: 5px 13px 0px 0px !important;"
            >&times;</button>
          </div>
          <!-- Modal body -->
          <div class="modal-body loginform">
            <login></login>
          </div>
        </div>
      </div>
    </div>

    <div class="body-content mt-85 pb-50">
      <router-view></router-view>
    </div>
    <gbi-footer></gbi-footer>
    <div class="col-md-12 m-bottom">
      <div class="navbar-bottom">
        <router-link :to="`/`">
          <div class="nav-font">
            <i class="fas fa-home"></i>
          </div>
          <div class="nav-font">home</div>
        </router-link>
        <router-link :to="`/explore-destination`">
          <div class="nav-font">
            <i class="fas fa-map-marked-alt"></i>
          </div>
          <div class="nav-font">explore</div>
        </router-link>
        <a href="tel:+9810055102" class>
          <div class="nav-font">
            <i class="fas fa-phone tranform-icon"></i>
          </div>
          <div class="nav-font">call</div>
        </a>
        <a href="#" @click="loginClick()">
          <div class="nav-font">
            <i class="fas fa-user-alt"></i>
          </div>
          <div class="nav-font">profile</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import login from "../user/Login.vue";
export default {
  name: "App",
  components: { login },
  data() {
    return {
      nav_active_el: 0,
      login: 1,
      isLogged: 1,
      dashboard: false,
      token: this.$store.token,
      showModal: false,
      countDown: 0,
      isnav_active: false,
      user:{name:'',photo:''},
    };
  },

  created: function() {
    this.$axios.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout);
        }
        throw err;
      });
    });

    this.$bus.$on("logged", () => {
      this.isLogged = this.loginCheck();
    });
  },
  mounted() {
    this.loginCheck();
  },
  methods: {
    loginCheck() {
      const token = localStorage.token;
      if (token) {
        this.$store.token = token;

        var data = [];
        this.$axios.post("/api/user-show", data, { headers: { Authorization: `Bearer ${localStorage.token}` }
        }).then(response => {
          this.user.name = response.data.success.name;
          this.user.photo = response.data.success.information.photo;
        }).catch(error => {
          this.handleError(error);
        });


        this.$axios.defaults.headers.common["Authorization"] = token;
        this.login = 2;
        return 2;
      } else {
        this.login = 1;
        return 1;
      }
    },
    loginClick() {
      if (localStorage.token == undefined || localStorage.token == "") {
        alert("please login first");
        window.$(".loginLink").click();
        return false;
      } else {
        this.$router.push("/dashboard");
      }
    },
    toggleClass() {
      if (this.isnav_active == false) {
        this.isnav_active = true;
      } else {
        this.isnav_active = false;
      }
    },
    makeActive: function(el) {
      this.nav_active_el = el;
    }
  }
};
</script>