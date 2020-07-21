<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div v-if="valid">
    <div class="user_dashboard_profile">
      <div class="container">
        <div class="text-right">
          <router-link :to="`/profile-edit`" class="user_edit">
            <i class="fas fa-user-edit"></i>
          </router-link><br>
          <router-link :to="`/update-password`" class="user_edit">
            <i class="fas fa-cog"></i></i>
          </router-link>
        </div>
        <div class="row" v-if="userinfo.information">
          <div class="col-lg-2 text-center image">
            <figure v-lazyload class="image__wrapper">
              <ImageSpinner class="image__spinner" />
              <img
                class="image__item img img-circle"
                :data-url="`/uploadimage/${userinfo.information['photo']}`"
                alt="user profile"
              />
            </figure>
          </div>
          <div class="col-lg-10">
            <div class="username text-left">
              <h3>{{ userinfo.name }}</h3>
              <p>{{ userinfo.information['city'] }} {{ userinfo.information['country'] }}</p>
            </div>
            <div class="row text-left">
              <div class="col-lg-5">
                <div class="userinfo">
                  <div class="userinfoFirst">
                    <p v-if="userinfo.information['father_name']">Father Name</p>
                    <p class="bottom_text">{{ userinfo.information.father_name }}</p>
                  </div>
                  <div class="userinfoSecond">
                    <p>User Type</p>
                    <p class="bottom_text">{{ userinfo.information['user_profession'] }}</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-7">
                <div class="userinfo">
                  <div class="userinfoFirst">
                    <p>User Id</p>
                    <p class="bottom_text">{{ userinfo['email'] }}</p>
                  </div>
                  <div class="userinfoSecond">
                    <p>Mobile Number</p>
                    <p class="bottom_text">{{ userinfo.information['phone_no'] }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="logout" @click="logout">Logout</a>
      </div>
    </div>
    <!-- Booked Button -->
    <div class="container" id="dashboard_body" v-if="userinfo.information">
      <!-- user Dashboard -->
      <div class="dashboard-body-part-one" v-if="userinfo.information.user_profession == 'student'">
        <div id="rowbody">
          <div class="row">
            <div class="col">
              <router-link :to="`/tour-detail`">
                <div class="rowdata1">
                  <img src="assets/front/images/booked_320.png" loading="lazy" />
                  <p class="icon_text">Booked Itinerary</p>
                </div>
              </router-link>
            </div>
            <div class="col">
              <a href="#">
                <div class="rowdata2">
                  <img src="assets/front/images/payment_320.png" loading="lazy" />
                  <p class="icon_text">Payments</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Teacher Buttons -->

      <div class="dashboard-body-part-one" v-if="userinfo.information.user_profession == 'teacher'">
        <div id="rowbody">
          <div class="row">
            <div class="col-sm-4 colbutton mb-10">
              <router-link :to="`/tour-detail`">
                <div class="rowdata1">
                  <img src="assets/front/images/booked_320.png" loading="lazy" />
                  <p class="icon_text">Booked Itinerary</p>
                </div>
              </router-link>
            </div>
            <div class="col-sm-4 colbutton mb-10">
              <a href="#">
                <div class="rowdata2">
                  <img src="assets/front/images/payment_320.png" loading="lazy" />
                  <p class="icon_text">Payments</p>
                </div>
              </a>
            </div>
            
            <div class="col-sm-4 colbutton mb-10">
              <router-link :to="`/add-group`">
                <div class="rowdata2">
                  <img src="assets/front/images/payment_320.png" loading="lazy" />
                  <p class="icon_text">Payments</p>
                </div>
              </router-link>
            </div>

          </div>
        </div>
      </div>
      
      <h5 class="title_section">Upcoming Event</h5>
      <!-- Upcoming Event Carousel -->
      <div class="dashboard-body-part-two-2" v-if="upcoming_list.length > 0">
        <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
          <div class="states_card card_scroll" v-for="state in upcoming_list" :key="state.id">
            <div class="card">
              <figure v-lazyload class="image__wrapper card_image_ency">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item card-img-top"
                  :data-url="`/uploadimage/${state.photo}`"
                  alt="image"
                />
              </figure>

              <div class="card-img-overlay text-center">
                <p class="card-text">
                  <router-link
                    class="text-white"
                    :to="`/explore-detail/${state.id}`"
                  >{{state.title}}</router-link>
                </p>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
      <!-- Popular Destination Carousel -->
      <h5 class="title_section">
        Popular Destination
        <router-link class="view_link" :to="`/explore-list`">View more</router-link>
      </h5>
      <div class="popular_destination">
        <div class="row">
          <!-- <div class="col-lg-4 col-md-4 col-sm-6" v-for="destination in alldata.popular_detination">
              <div class="content">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg">
                <p class="heading"><b>{{destination.title}}</b></p>
                <p>Lorem Ipsum color sit</p>
                <p>amet amet, new</p>
              </div>
          </div>-->
        </div>
      </div>
      <!-- Advertiment section -->
      <div class="advertismentpart">
        <img
          src="https://placeit-assets.s3-accelerate.amazonaws.com/landing-pages/make-a-twitch-banner2/Twitch-Banner-Blue-1024x324.png"
          loading="lazy"
        />
      </div>
      <!-- Book Section -->
      <div class="booksection">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-8">
            <div class="row" id="data">
              <div class="col">
                <a href="#">
                  <img src="assets/front/images/ebook.png" loading="lazy" />
                  <p>E-Book</p>
                </a>
              </div>
              <div class="col">
                <a href="#">
                  <img src="assets/front/images/quiz.png" loading="lazy" />
                  <p>Quiz</p>
                </a>
              </div>
              <div class="col">
                <a href="#">
                  <img src="assets/front/images/feedback.png" loading="lazy" />
                  <p>Feedback</p>
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-2"></div>
        </div>
      </div>
      <h5 class="title_section">
        Recent Search
        <a href="#" class="view_link">View More</a>
      </h5>

      <!-- Recent Searches -->
      <div class="resent_search">
        <div class="row">
          <!-- <div class="col-12 col-sm-12 col-md-4 col-lg-4" v-for="search in alldata.recent_search">
              <div class="card">
                 <img class="card-img" src="https://img.traveltriangle.com/blog/wp-content/uploads/2017/05/FinalCover1.jpg" alt="Bologna">
                <div class="card-img-overlay text-white d-flex flex-column">
                  <p class="card-subtitle mb-2 heading">{{search.title}}</p>
                  <p class="card-text">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                </div>
              </div>
            </div>
          -->
        </div>
      </div>
      <!-- End Recent Search -->
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "Dashboard",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      itineraryData: {},
      upcoming_list: [],
      userinfo: [],
      valid:false
    };
  },
  mounted() {
    this.checkLogin();
    this.userData();
    this.upComingData();
  },
  methods: {
    checkLogin() {
      if (localStorage.token == undefined) {
        this.$router.push("/");
      }
      this.valid = true;
    },
    userData() {
      var data = [];
      this.$axios
        .post("/api/details", data, {
          headers: { Authorization: `Bearer ${localStorage.token}` }
        })
        .then(response => {
          this.userinfo = response.data.success;
          if (this.userinfo.status == 0) {
            this.$router.push("/user-information");
          }
        })
        .catch(error => {
          this.handleError(error);
        });
    },

    // Upcoming data

    upComingData() {
      this.$axios.get("/api/travel-program/upcoming-tour").then(response => {
        this.upcoming_list = response.data;
      });
    },

    getImgUrl(img) {
      return "/uploadimage/" + img;
    },
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$bus.$emit("logged", "User loogedout");
        this.$router.push("/");
      });
    }
  }
};
</script>
