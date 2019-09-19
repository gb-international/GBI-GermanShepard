<template>
    <div class="container">
       <div class="user_dashboard_profile">
        <div class="container">
          <div class="row" v-for="item in alldata.data">
            <div class="col-xm-12 col-sm-12 col-md-12 col-lg-6">
              <div class="container">
                <div class="avatar-upload">
                 <form role="form" enctype="multipart/form-data">
                    <div class="avatar-edit">
                        <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" @change="onChange" />
                        <label for="imageUpload"></label>
                    </div>
                    <div class="avatar-preview">
                        <div id="imagePreview" style="background-image: url();">
                          <img v-if="image" :src="image" class="img">                           
                          <img v-else :src="'/uploadimage/'+item.photo" class="img" alt="">
                        </div>
                    </div>
                  </form>
                </div>
            </div>
                          
            </div>
           <!-- User Text -->
            <div class="col-xm-12 col-sm-12 col-md-12 col-lg-6">              
              <h3 class="username">{{item.name}}</h3>
              <div id="userinfo">
                <div id="userinfoFirst">
                  <p>User Id</p>
                  <p class="bottom_text">{{item.email}}</p>
                </div>
                <div id="userinfoSecond">
                  <p>Mobile Number</p>
                  <p class="bottom_text">{{item.phone_no}}</p>
                </div>
              </div>            
            </div>
          </div>
        </div>
      </div>

      <!-- Booked Button -->

      <div id="dashboard_body">
        <div class="container dashboard-body-part-one">
          <div id="rowbody">
             <div class="row">
                <div class="col">
                  <router-link :to="`/tour-list`">     
                    <div class="rowdata1">
                      <img src="assets/front/images/booked_320.png">
                      <p class="icon_text">Booked Itinerary</p>
                    </div>
                  </router-link>
                </div>
                <div class="col">
                  <a href="#">
                    <div class="rowdata2">
                      <img src="assets/front/images/payment_320.png">
                      <p class="icon_text">Payments</p>
                    </div>
                  </a>
                </div>
             </div>
          </div>
        </div>
         <h5 class="title_section">Upcoming Event</h5>
        <!-- Upcoming Event Carousel -->
        <div class="dashboard-body-part-two-2">            
          
          <slick
            ref="slick"
            :options="slickOptions"
            @afterChange="handleAfterChange"
            @beforeChange="handleBeforeChange"
            @breakpoint="handleBreakpoint"
            @destroy="handleDestroy"
            @edge="handleEdge"
            @init="handleInit"
            @reInit="handleReInit"
            @setPosition="handleSetPosition"
            @swipe="handleSwipe"
            @lazyLoaded="handleLazyLoaded"
            @lazyLoadError="handleLazeLoadError">

            <a href="http://placehold.it/2000x1000"><img src="https://www.billi-bolli.com/bilder/allgemeine-infos/Matratzenmasse_english.png" alt=""></a>
            <a href="http://placehold.it/2000x1000"><img src="https://www.billi-bolli.com/bilder/allgemeine-infos/Matratzenmasse_english.png" alt=""></a>
            <a href="http://placehold.it/2000x1000"><img src="https://www.billi-bolli.com/bilder/allgemeine-infos/Matratzenmasse_english.png" alt=""></a>
            <a href="http://placehold.it/2000x1000"><img src="https://www.billi-bolli.com/bilder/allgemeine-infos/Matratzenmasse_english.png" alt=""></a>
            <a href="http://placehold.it/2000x1000"><img src="https://www.billi-bolli.com/bilder/allgemeine-infos/Matratzenmasse_english.png" alt=""></a>
          </slick>

        </div>
        <!-- Popular Destination Carousel -->
        <h5 class="title_section">Popular Destination <a href="#" class="view_link">View More</a></h5>
        <div class="popular_destination">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6" v-for="destination in alldata.popular_detination">
              <div class="content">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg">
                <p class="heading"><b>{{destination.title}}</b></p>
                <p>Lorem Ipsum color sit</p>
                <p>amet amet, new</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Advertiment section -->
        <div class="advertismentpart">
          <img src="https://placeit-assets.s3-accelerate.amazonaws.com/landing-pages/make-a-twitch-banner2/Twitch-Banner-Blue-1024x324.png">
        </div>
        <!-- Book Section -->
        <div class="booksection">
          <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8">
              <div class="row" id="data">
                <div class="col">
                  <img src="assets/front/images/ebook.png">
                  <p>E-Book</p>
                </div>
                <div class="col">
                  <img src="assets/front/images/quiz.png">
                  <p>Quiz</p>
                </div>
                <div class="col">
                  <img src="assets/front/images/feedback.png">
                  <p>Feedback</p>
                </div>
              </div>
            </div>
            <div class="col-sm-2"></div>
          </div>
        </div>
        <h5 class="title_section">Recent Search <a href="#" class="view_link">View More</a></h5>

        <!-- Recent Searches -->
        <div class="resent_search">  
          <div class="row">

            <div class="col-12 col-sm-12 col-md-4 col-lg-4" v-for="search in alldata.recent_search">
              <div class="card">
                 <img class="card-img" src="https://img.traveltriangle.com/blog/wp-content/uploads/2017/05/FinalCover1.jpg" alt="Bologna">
                <div class="card-img-overlay text-white d-flex flex-column">
                  <p class="card-subtitle mb-2 heading">{{search.title}}</p>
                  <p class="card-text">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Recent Search -->
      </div>

    </div>

</template>

<script>
  import Slick from 'vue-slick';

    export default {
        name: "Dashboard",
        components: { Slick },
        data(){
          return{
            oddclass:false,
            evenclass:true,
            itineraryData:{},
            width:0,
            image: '',
            prncilIcon:true,
            slickOptions: {
                slidesToShow: 3,
                // Any other options that can be got from plugin documentation
            },
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
          }
        },
        created() {
          window.addEventListener('resize', this.handleResize)
          this.handleResize();
          if(localStorage.getItem('login') == '0'){
            this.$router.push('/login')
          }
        },


       mounted(){
        var api = "/api/userdata/"+this.$session.get('user_id');
          this.$store.dispatch('getEditData',api)
        },
        computed:{

          alldata(){
            return this.$store.getters.getEditData
          }
        },
       methods:
       {
        logout:function(){
           axios.post('api/user-logout').then(response => {
              if (response.status === 302 || 401) {
                localStorage.setItem("login", "0");
                this.$session.destroy();
               this.$router.push('/login');
               window.location.reload();
              }
              else {
                // throw error and go to catch block
              }
            }).catch(error => {

          });
        },
        handleResize() {
          this.width = window.innerWidth;
          if(window.innerWidth < 700){
            this.slickOptions.slidesToShow = 1;
          }
          else if((window.innerWidth > 700) && (window.innerWidth < 1024)){
            this.slickOptions.slidesToShow = 2;
          }
          else if(window.innerWidth > 1024){
            this.slickOptions.slidesToShow = 3;
          }

        },

           next() {
              this.$refs.slick.next();
          },
   
          prev() {
              this.$refs.slick.prev();
          },
   
          reInit() {
              // Helpful if you have to deal with v-for to update dynamic lists
              this.$nextTick(() => {
                  this.$refs.slick.reSlick();
              });
          },
   
          // Events listeners
          handleAfterChange(event, slick, currentSlide) {
              console.log('handleAfterChange', event, slick, currentSlide);
          },
          handleBeforeChange(event, slick, currentSlide, nextSlide) {
              console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
          },
          handleBreakpoint(event, slick, breakpoint) {
              console.log('handleBreakpoint', event, slick, breakpoint);
          },
          handleDestroy(event, slick) {
              console.log('handleDestroy', event, slick);
          },
          handleEdge(event, slick, direction) {
              console.log('handleEdge', event, slick, direction);
          },
          handleInit(event, slick) {
              console.log('handleInit', event, slick);
          },
          handleReInit(event, slick) {
              console.log('handleReInit', event, slick);
          },
          handleSetPosition(event, slick) {
              console.log('handleSetPosition', event, slick);
          },
          handleSwipe(event, slick, direction) {
              console.log('handleSwipe', event, slick, direction);
          },
          handleLazyLoaded(event, slick, image, imageSource) {
              console.log('handleLazyLoaded', event, slick, image, imageSource);
          },
          handleLazeLoadError(event, slick, image, imageSource) {
              console.log('handleLazeLoadError', event, slick, image, imageSource);
          },
        // User image 

        onDrop: function(e) {
          e.stopPropagation();
          e.preventDefault();
          var files = e.dataTransfer.files;
          this.createFile(files[0]);
        },
        onChange(e) {
          var files = e.target.files;
          this.createFile(files[0]);
        },
        createFile(file) {
          if (!file.type.match('image.*')) {
            alert('Select an image');
            return;
          }
          var img = new Image();
          var reader = new FileReader();
          var vm = this;
          reader.onload = function(e) {
            vm.image = e.target.result; 

            let data = new FormData(); 
            data.append('photo', vm.image);
            data.append('_method', 'post'); // add this
            var api = "/api/imageupdate/"+vm.$session.get('user_id');
            axios.post(api,data) // change this to post )
            .then(res =>{
               toast({
                type: 'success',
                title: 'Profile Image updated!!'
            }) 
            }) 
            .catch(error => console.log(error)); // 

            
          }
          reader.readAsDataURL(file);
          },
        removeFile() {
          this.image = '';
        }

       } 
    }

</script>
