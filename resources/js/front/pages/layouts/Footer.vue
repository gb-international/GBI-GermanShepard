<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div class="">
      <footer id="footer">       
        <div class="footer-content">
          <div class="container">
            <div class="row text-white pt-5">
              <div class="col-sm-3">
                <p class="text-white m-0 p-0 pb-1">Link</p>
                <router-link class="text-white d-block pb-1" to="/">Home</router-link>
                <router-link class="text-white d-block pb-1" to="/resources/explore-destination">Explore Destination</router-link>
                <router-link class="text-white d-block pb-1" to="/resources/travel-education">Travel & Education</router-link>
                <router-link class="text-white d-block pb-1" to="/resources/faq">FAQ</router-link>
                <router-link class="text-white d-block pb-1" to="/blog">GBI Travel Blog</router-link>
                <router-link class="text-white d-block pb-1" to="/image-gallery/domestic">Gallery</router-link>
              </div>
              <div class="col-sm-2">
                <p class="text-white m-0 p-0 pb-1">More About GBI</p>
                <router-link class="text-white d-block pb-1" to="/about-us/our-story">Our Story</router-link>
                <router-link class="text-white d-block pb-1" to="/resources/safety-security">Safety & Security</router-link>
                <router-link class="text-white d-block pb-1" to="/about-us/how-we-work">How We Work</router-link>
                <router-link class="text-white d-block pb-1" to="/about-us/join-our-team">Join Our Team</router-link>
                <router-link class="text-white d-block pb-1" to="/contact-us">Contact Us</router-link>
              </div>
              <div class="col-sm-3 footer-icons-section">
                <p class="text-white m-0 p-0 pb-2">Accreditaion & Recognitions</p>
                <div class="icons">
                  <div class="three-icons">
                    <img src="/images/icons/lato.png">
                    <img src="/images/icons/box.png">
                    <img src="/images/icons/elephant.png">
                  </div>
                  <hr class="mt-2 mb-2"/>
                  <div class="social">
                    <a href="https://www.facebook.com/gowithgbi/" target="blank">
                      <img src="/images/icons/fb.png">
                    </a>
                    <a href="https://www.instagram.com/gbirikhi/" target="blan"><img src="/images/icons/insta.png"></a>
                    <a href="https://twitter.com/gowithgbi" target="blan"><img src="/images/icons/twitt.png"></a>
                    <a href="#" target="blan"><img src="/images/icons/youtube.png"></a>
                    <a href="#" target="blan"><img src="/images/icons/linked-in.png"></a>
                    <a href="#" target="blan"><img src="/images/icons/whatsapp.png"></a>
                  </div>
                  <hr class="mt-2 mb-2"/>
                  <div class="ssl-icon">
                    <img src="/images/icons/ssl_certificate.png" class="w-45">
                    <img src="/images/icons/indiaicon.png" class="w-20">
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <p class="text-white m-0 p-0 pb-4 text-center">Get Latest Update</p>
                <Subscribe />
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom pl-5">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 p-0">
                <span class="text-uppercase">©{{ new Date().getFullYear() }} GBI Holidays </span>Pvt. ltd. All right reserved.
              </div>
              <div class="col-sm-6 text-right pr-5">
                Privacy & Policy | Terms & Condition
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- Mobile footer -->
      <div class="m-bottom">
        <div class="navbar-bottom">

          <div class="row text-center text-uppercase">
            <div class="col" @click="makeActive(0)" :class="{ mobile_nav_active : active_element == 0 }">
              <router-link :to="`/`" >
                <div class="nav-font">
                  <i class="fas fa-home"></i>
                </div>
                <div class="nav-font">home</div>
              </router-link>
            </div>

            <div class="col"  @click="makeActive(1)" :class="{ mobile_nav_active : active_element == 1 }">
              <router-link :to="`/explore-destination`">
                <div class="nav-font">
                  <i class="fas fa-map-marked-alt"></i>
                </div>
                <div class="nav-font">explore</div>
              </router-link>
            </div>

            <div class="col">
              <a href="tel:+9810055102" class>
                <div class="nav-font">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div class="nav-font">call</div>
              </a>
            </div>

            <div class="col"  @click="makeActive(2)" :class="{ mobile_nav_active : active_element == 2 }">
              <a href="#" @click="loginClick()" >
                <div class="nav-font">
                  <i class="fas fa-user-alt"></i>
                </div>
                <div class="nav-font">profile</div>
              </a>
            </div>
          </div>

        </div>
    </div>
  </div>
</template>

<script>
import Subscribe from "@/front/components/form/Subscribe.vue";
export default {
  name:"Footer",
  components:{
    Subscribe,
  },
  data(){
    return{
      active_element:0,

    }
  },
  methods:{
    makeActive: function(el) {
      this.active_element = el;
    },
    loginClick() {
      if (this.$cookies.get('access_token') == null || this.$cookies.get('access_token') == "") {
        alert("please login first");
        window.$(".loginLink").click();
        return false;
      } else {
        this.$router.push("/dashboard");
      }
    },
  }
    
}

</script>
