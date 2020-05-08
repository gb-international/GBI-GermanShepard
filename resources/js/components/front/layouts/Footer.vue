<template>
  <div class="">

    <!-- Footer -->
      <footer id="footer">
        <div class="footer-top">
          <div class="footer-content">
              <div class="single-footer">
                  <h3>ACCREDITAION & RECOGNITIONS</h3> 
                    <ul>
                        <li><img class="footr-img" src="/assets/front/images/lato_logo.png" alt="GBI tourisum"></li>
                        <li><img class="footr-img" src="/assets/front/images/telangana_tourisum.png" alt="telangana tourisum"></li>
                        <li><img class="footr-img" src="/assets/front/images/mt_log.png" alt="minisrty of tourism"></li>
                    </ul>
              </div>
              <div class="single-footer">
                  <ul>
                      
                        <li>
                          <h3>GBI Holidays Pvt. ltd.</h3>
                          <p>G-32,DDA Commercial Complex</p>
                          <p>Sheikh Sarai Phase-1</p>
                          <p>New Delhi 110017</p>
                        </li>
                        <li>
                          <p><i class="fa fa-phone fa-lg" aria-hidden="true"></i> 011-41864453</p>
                          <p><i class="fa fa-envelope-o fa-lg" aria-hidden="true"></i>csrikhi@gbinternational.in</p>
                          <p>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;info@gbinternational.in</p>
                        </li>
                        
                        <li>
                        <h3>Connect With Us</h3>
                        <a href="https://www.facebook.com/gowithgbi/"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
                        <a href="https://twitter.com/gowithgbi"><i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/company/13592478/admin/"> <i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></a>
                        <a href="https://wordpress.com/view/gowithgbi.wordpress.com"> <i class="fa fa-wordpress fa-lg" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/gbirikhi/">  <i class="fa fa-instagram fa-lg" aria-hidden="true"></i></a>
                        <a href="#"> <i class="fa fa-youtube-play fa-lg" aria-hidden="true"></i></a>
                        </li>
                    </ul>
              </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="footer-bottom-area">
                  <p class="copy-right">©{{ new Date().getFullYear() }} GBI Holidays Pvt. ltd. All right reserved.</p>
                </div>
                <div class="footer-bottom-term">
                  <p class="copy-left"><a herf="#"> Terms & Condition</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="col-md-12 m-bottom">
          <div class="navbar-bottom">
            <router-link :to="`/`" >
              <div class="nav-font">
                <i class="fas fa-home"></i>
                </div>
                <div class="nav-font"> home
                </div>
              </router-link>
              <router-link :to="`/explore-destination`" >
              <div class="nav-font">
                <i class="fas fa-map-marked-alt"></i>
                </div>
                <div class="nav-font"> explore
                </div>
              </router-link>
              <a href="tel:+9810055102" class="">
              <div class="nav-font">
                <i class="fas fa-phone tranform-icon"></i>
                </div>
                <div class="nav-font"> call
                </div>
              </a>
              <a href="#" @click="LoginModel()">
                <div class="nav-font">
                  <i class="fas fa-user-alt"></i>
                  </div>
                  <div class="nav-font"> profile
                </div>
              </a>                 
          </div>
      </div>
      <!-- End Footer -->
    
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return {

    }
  },
  methods:{
    LoginModel:function(){
      if(this.$session.get('login') == undefined){
        $("#loginButton").click();
        return false;
      }else{
        this.$router.push('/dashboard');
      }
    }
  }
    
}

</script>

<style scoped>

</style>