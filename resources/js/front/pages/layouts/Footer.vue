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
                  <hr class="mt-4 mb-4"/>
                  <div class="social">
                    <a href="https://www.facebook.com/gowithgbi/" target="blank">
                      <img src="/images/icons/fb.png">
                    </a>
                    <a href="https://www.instagram.com/gbirikhi/" target="blan"><img src="/images/icons/insta.png"></a>
                    <a href="https://twitter.com/gowithgbi" target="blan"><img src="/images/icons/twitt.png"></a>
                    <a href="#" target="blan"><img src="/images/icons/youtube.png"></a>
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
  </div>
</template>

<script>
import Subscribe from "@/front/components/form/Subscribe.vue";
export default {
  name:"Footer",
  components:{
    Subscribe,
  }
    
}

</script>
