<template>
  <!--************************************************
      Author: @Manas
  ****************************************************-->
<section class="d-flex flex-column justify-content-center" style="background: white !important">
  <!-- Row 1 -->
  <div class="d-flex justify-content-center align-items-center mainRow1 container" style="background: white !important">
    <div class="p-2 d-flex flex-column expDetCol1">
        <img 
          :src="selectedPhoto"
          loading="lazy"
          alt="itinerary"
          class="expDetailImg"
        >
        <div class="p-2">
          <VueSlickCarousel v-bind="settings" :dots="true" :arrows="false">
            <div v-for="index in 10" :key="index" @click="changePhoto(itineraryData.photo)">
              <img 
                :src="itineraryData.photo"
                loading="lazy"
                alt="itinerary"
                class="expDetailImgSmall"
                >
            </div>
          </VueSlickCarousel>
        </div>
    </div>
    <div class="expDetCol2Main" v-if="itineraryData.price">
      <div class="expDetCol2">
        <div class="d-flex justify-content-start align-items-center priceSingleDiv">
          <p><b>₹{{itineraryData.price}} x 1 Pax</b></p>
          <p class="ml-auto p2">₹{{itineraryData.price}}</p>
        </div>
        <div class="d-flex justify-content-start align-items-center priceSingleDiv">
          <p>Total Basic Cost</p>
          <p class="ml-auto p2">₹{{itineraryData.price}}</p>
        </div>

        <!-- Coupon Div -->
        <div class="d-flex flex-column justify-content-start couponDivMain">
          <div class="d-flex justify-content-start couponDiv">
            <p>Coupon</p>
            <p class="ml-auto p2">N/A</p>
          </div>
          <div class="d-flex justify-content-start couponEnterDiv">
            <input type="text" v-model="coupon_val">
            <button class="btn btnCpn" @click="couponsAlert(coupon_val)">Add</button>
          </div>
        </div>
        <!-- End Coupon Div -->

        <div class="d-flex justify-content-start align-items-center priceSingleDiv">
          <p>Taxes</p>
          <p class="ml-auto p2">₹{{itineraryData.price * 5/100}}</p>
        </div>
        <!-- <div class="d-flex justify-content-start align-items-center priceSingleDiv">
          <p>TCS(0%)</p>
          <p class="ml-auto p2">₹0</p>
        </div> -->
        <div class="d-flex justify-content-start align-items-center grandTotalDiv" v-if="itineraryData.price">
          <p class="d-flex flex-column justify-content-start align-items-center" style=" margin-top: 5px; margin-right: 3px;">Grand Total
            <span class="smallP">(Incl. all taxes)</span>
          </p>
          <p class="ml-auto p2">₹{{itineraryData.price * 5/100 + itineraryData.price}} </p>
        </div>
      </div>

      <button v-if="login" 
        class="btn btnPay" 
        data-toggle="modal"
        data-target="#bookModal">
          Book Now
      </button>
      <button v-else class="btn btnPay" id="loginButton"
        data-toggle="modal"
        data-target="#LoginForm">
        Book Now
      </button>
    </div>
  </div>

  <!-- Mob Grand Total -->
  <div class="d-flex justify-content-between align-items-center grandTotalMob">
    <div class="d-flex flex-column justify-content-start align-items-start">  
      <p>Grand Total</p>
      <span class="smallP">(Incl. all taxes)</span>
      <p class="p2">₹{{itineraryData.price * 5/100 + itineraryData.price}}</p>
    </div>
    <button v-if="login" 
      class="btn btnConfirm ml-auto" 
      data-toggle="modal"
      data-target="#bookModal">
        Book Now
    </button>
    <button v-else
      class="btn btnConfirm ml-auto"
      data-toggle="modal"
      data-target="#LoginForm"
      id="loginButton"
    >Book Now
    </button>
  </div>

      <div class="container mt-4">
        <div class="custom-flex mt-2">
          <div class="tabs" :style="tabSelected == 'Itinerary' ? 'border-bottom: 3px solid #f77736' : ''" @click="changeTab('Itinerary')">
            Itinerary
          </div>
          <div class="tabs" :style="tabSelected == 'Neighbourhood' ? 'border-bottom: 3px solid #f77736' : ''" @click="changeTab('Neighbourhood')">
            Your Neighbourhood
          </div>
          <!-- <div class="tabs" :style="tabSelected == 'Encylopedia' ? 'border-bottom: 3px solid #f77736' : ''" @click="changeTab('Encylopedia')">
            Encylopedia
          </div> -->
        </div>
      </div>

  <!-- Row 2 -->
  <div class="mainRow2 container" v-if="tabSelected == 'Itinerary' " style="margin-top: 5vh">
    <p class="rowheadings">Your Experience Includes</p>
    <div class="iconMainDiv">
      <div class="iconClass">
        <img :src="$gbiAssets + '/hotel_icon.png'">
        <p>Hotel</p>
      </div>
      <div class="iconClass">
        <img :src="$gbiAssets + '/flight_icon.png'">
        <p>Flight</p>
      </div>
      <div class="iconClass">
        <img :src="$gbiAssets + '/passport_icon.png'">
        <p>Passport/Visa</p>
      </div>
      <div class="iconClass">
        <img :src="$gbiAssets + '/transport_icon.png'">
        <p>Transfers</p>
      </div>
      <div class="iconClass">
        <img :src="$gbiAssets + '/dinner_icon.png'">
        <p>Dinner</p>
      </div>
      <div class="iconClass">
        <img :src="$gbiAssets + '/citytour_icon.png'">
        <p>City Tour</p>
      </div>
      <div class="iconClass">
        <img :src="$gbiAssets + '/taxes_icon.png'">
        <p>Taxes</p>
      </div>
      <div class="iconClass">
        <img :src="$gbiAssets + '/sightseeing.png'">
        <p>Sightseeing</p>
      </div>
      <div class="iconClass">
        <img :src="$gbiAssets + '/breakfast.png'">
        <p>Breakfast</p>
      </div>
    </div>
  </div>

  <div class="mainRow3 container" v-if="tabSelected == 'Itinerary' ">
    <p class="rowheadings">ITINERARY</p>
    <div class="itineraryDiv">
      <div class="singleItneraryDivMain" v-for="(data, index) in itineraryData.itinerarydays" :key="data.id" @click="changeItDiv(data.id)">
        <div class="singleItneraryDiv d-flex justify-content-between">
          <p>Itinerary : Day {{ data.day}}</p>
          <i :class="selectedDay == data.id ? 'fas fa-sort-up mt-2' : 'fas fa-sort-down' "></i>
        </div>
        <div v-if="selectedDay == data.id" class="singleItneraryDiv2">
          <div class="card-text card-text-ul py-2" v-html="data.day_description"></div>
        </div>
        <div v-if="(itineraryData.itinerarydays.length - 1) !== index" class="verticalStep"></div>
      </div>
    </div>
  </div>

  <!-- Booking Modal -->
    <div class="modal" id="bookModal">
      <div class="modal-dialog">
        <div class="modal-content modal-color">
          <div class="modal-body" v-if="itineraryData.itinerarydays">
            <button type="button" class="close" data-dismiss="modal">&times;</button>

            <booking 
              v-if="loading== false"
              :title="itineraryData.title"
              :selected_cities="selected_cities"
              :city_list="city_list"
              ></booking>

          </div>
        </div>
      </div>
    </div>

    <!-- Neightbourhood -->
     <div class="container mt-4" v-if="tabSelected == 'Neighbourhood' ">
       <p class="heading2 mb-4" style="margin-top: 4vh">Explore Neighbourhood</p>

       <!-- <div style="background-color: #f77736; padding: 45px;"> 
            <div style="background-color: white; padding: 35px;">
              <p class="text-center" style="color: black; font-weight: bold; font-size: 20px; font-family: Raleway">Feature Under Development</p>
            </div>
        </div>  -->
        <!-- Icons -->
        <div class="icons-flex mt-2">
          <div class="icons" :style="iconSelected == 'Communication' ? 'color: #f77736' : ''" @click="changeIcon('Communication')">
            Commute
          </div>
          <div class="icons" :style="iconSelected == 'Movie' ? 'color: #f77736' : ''" @click="changeIcon('Movie')">
            Movie
          </div>
          <!-- <div class="icons" :style="iconSelected == 'School' ? 'color: #f77736' : ''" @click="changeIcon('School')">
            School
          </div>
         <div class="icons" :style="iconSelected == 'Bank' ? 'color: #f77736' : ''" @click="changeIcon('Bank')">
            Bank
          </div> -->
          <div class="icons" :style="iconSelected == 'Food' ? 'color: #f77736' : ''" @click="changeIcon('Food')">
            Food
          </div>
          <div class="icons" :style="iconSelected == 'Sightseeing' ? 'color: #f77736' : ''" @click="changeIcon('Sightseeing')">
            Sightseeing
          </div>
        </div>

        <!-- Commute -->
        <div v-if="iconSelected == 'Communication'" style="margin-bottom: 1vh">
          <p class="heading2 mb-4" style="margin-top: 4vh">Commute</p>
        </div>

        <!-- Movie -->
        <div v-if="iconSelected == 'Movie'" style="margin-bottom: 1vh">
          <p class="heading2 mb-4" style="margin-top: 4vh">Movie</p>
        </div> 

        <!-- School 
        <div v-if="iconSelected == 'School'" style="margin-bottom: 1vh">
          <p class="heading2 mb-4" style="margin-top: 4vh">School</p>
        </div> -->

        <!-- Bank 
        <div v-if="iconSelected == 'Bank'" style="margin-bottom: 1vh">
          <p class="heading2 mb-4" style="margin-top: 4vh">Bank</p>
        </div> -->

        <!-- Food -->
        <div v-if="iconSelected == 'Food'" style="margin-bottom: 1vh">
          <p class="heading2 mb-4" style="margin-top: 4vh">Food</p>
        </div> 

        <!-- Sightseeing -->
        <div v-if="iconSelected == 'Sightseeing'" style="margin-bottom: 1vh">
          <p class="heading2 mb-4" style="margin-top: 4vh">Sightseeing</p>
        </div> 


        <div style="margin-bottom: 5vh">
          <GmapMap style="width: 100%; height: 500px;" :zoom="1" :center="{lat: 0, lng: 0}"
              ref="map">
            <GmapMarker v-for="(marker, index) in markers"
              :key="index"
              :position="marker.latLng"
              />
          </GmapMap>
        </div>

      </div>

      

</section>
  
</template>

<script>
import  booking  from "@/front/components/Booking.vue";
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "ExploreDetail",
  components: {
    booking,
    VueSlickCarousel
  },
  metaInfo: {
    title: "GBI Explore Destination",
    meta: [
      {
        name: "description",
        content:
          "@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button"
      },
      {
        name: "keywords",
        content:
          "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs"
      },
      {
        name: "url",
        content: "https://www.gowithgbi.com/resources/explore-destination"
      }
    ]
  },
  data() {
    return {
      markers: [],
      coupon_val: '',
      selectedPhoto: '',
      selectedDay: null,
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
      },
      day: 0,
      description: "",
      itineraryData: [],
      selected_cities:[],
      city_list:[],
      login:false,
      loading:true,
      tabSelected: 'Itinerary',
      iconSelected: 'Communication',
    };
  },   
  watch: {
    '$store.state.token': function() {
      if(this.$store.state.token){
        this.login = true;
      }
    }
  },
  mounted() {
    if (this.$cookies.get('access_token') != null) {
      this.login = true;
    }
  },
  beforeCreate(){
      let metaInfo = {
        title: 'GBI Explore Destination',
        description: '@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button',
        keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
        url: 'https://www.gowithgbi.com/resources/explore-destination',
        type: 'website'
      }
      document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
  },
  created(){
    this.getItinerary();
    let metaInfo = {
        title: this.itineraryData.title,
        description: '@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button',
        image: this.itineraryData.detail_photo,
        keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
        url: 'https://www.gowithgbi.com/resources/explore-destination',
        type: 'website'
      }
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
  },
  methods: {
     generate() {
      const spread = Math.random() + 0.001
      this.center = {
        lat: 1.38 + (Math.random() - 0.5) * spread,
        lng: 103.8 + (Math.random() - 0.5) * spread,
      }
      this.markers = _.range(30)
        .map(m => ({
          latLng: {
            lat: this.center.lat + (Math.random() - 0.5) * spread,
            lng: this.center.lng + (Math.random() - 0.5) * spread,
          }
        }))
    },
    couponsAlert(val){
      if(val){
        return this.$swal.fire("Error", "No Coupons Found", "warning");
      } else {
        return this.$swal.fire("No Value", "Coupon Code Not Entered", "warning");
      }
    },
    changeTab(val){
      this.tabSelected = val;
    },
    changeIcon(val){
      this.iconSelected = val;
    },
    changeItDiv(id){
      if(this.selectedDay == id){
        this.selectedDay = null
      } else{
        this.selectedDay = id
      }
    },
    changePhoto(pic){
      this.selectedPhoto = pic;
    },
    getItinerary(){
      this.$axios.get(`/api/itinerary-view/${this.$route.params.id}`).then((res)=>{
        this.itineraryData = res.data;
        //Save search
        let searches = JSON.parse(localStorage.getItem("itSearches"));
        searches.push(this.itineraryData)
        localStorage.setItem("itSearches", JSON.stringify(searches));

        this.selectedPhoto = this.itineraryData.photo;
        if(this.itineraryData.itinerarydays){
          var data = this.itineraryData.itinerarydays;
          let selected=[];
          this.selected_cities = [];
          if(data){
            this.selected_cities = [];
            for(let i=0;i<data.length;i++){
              selected.push(data[i].day_source);
              selected.push(data[i].day_destination);
            }
          }
          this.selected_cities = [...new Set(selected)];
        }
        this.getRelatedCities(this.itineraryData.destination);
      });
    },
    getRelatedCities(destination){
      this.$axios.get(`/api/related-cities/${destination}`).then((res)=>{
        this.city_list = res.data;
        this.loading = false;
      });
    }
  }
};
</script>

<style scoped>

.heading2{
 font-size: 17px;
 font-weight: 500;
 color: black;
}
.mainRow1{
  margin-top: 20px;
  margin-bottom: 21px;
}
.mainRow2{
  margin-bottom: 17px;
}
.mainRow3{
  margin-bottom: 21px;
}
.expDetailImg{
  width: 100%;
  height: 170px;
  margin-bottom: 10px;
  margin-right: 15px;
}
.expDetailImgSmall{
  width:  45px;
  height: 45px;
}
.expDetCol1{
  width: 100%;
}
.expDetCol2Main{
  display: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);
}
.expDetCol2{
  display: none;
  width: 30%; 
  height: 423px; 
  border-radius: 5px;
  background: white;
}

.icons{
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
  padding: 6px 10px;
}

.icons-flex {
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-direction: row;
  font-size: 18px;
  font-weight: 400;
}

.tabs{
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
  padding: 5px 22px;
}

.custom-div{
  display: inline;
  margin-top: 26px !important;
  padding-top: 0.2vh !important;
  margin-right: 20px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 2px 7px 0 rgb(0 0 0 / 19%);
}
.custom-flex {
  display: flex;
  align-content: center;
  justify-content: flex-start;
  flex-direction: row;
  font-size: 18px;
  font-weight: 400;
}

@media (min-width: 768px) {
  .expDetailImgSmall{
    width:  100px;
    height: 100px;
  }
  .expDetailImg{
    height: 330px;
    margin-bottom: 16.5px;
  }
  .mainRow1{
    margin-top: 35px;
    margin-bottom: 35px;
  }
  .mainRow2{
    margin-bottom: 32px;
  }
  .mainRow3{
    margin-bottom: 35px;
  }
  .rowheadings{
    font-size: 25px !important;
  }
  .iconClass p{
    font-size: 19px !important;;
  }
  .grandTotalMob{
    margin-bottom: 35px !important;
  }
  .grandTotalMob p{
    font-size: 18px !important;
  }
  .grandTotalMob .smallP{
    font-size: 12.5px !important;
  }
  .grandTotalMob .p2{
    margin-top: 5px !important;
    font-size: 20px !important;
  }
  .btnConfirm{
    font-size: 20px !important;
    height: 55px !important;
    width: 200px !important;
  }
}
@media (min-width: 1024px) {
  .grandTotalMob{
    display: none !important;
  }
  .expDetCol2Main{
    display: inline;
  }
  .expDetCol2{
    display: inline;
  }
  .expDetCol1{
    width: 70%;
  }
  .iconClass{
    width: 18% !important;
  }
  .mainRow1{
    margin-top: 55px;
    margin-bottom: 55px;
  }
  .mainRow2{
    padding: 5px 65px;
    margin-bottom: 55px;
  }
  .mainRow3{
    padding: 5px 65px;
    margin-bottom: 55px;
  }
}
.iconMainDiv{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start
}
.iconClass{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  width: 45%;
  margin-right: 15px;
  margin-bottom: 50px;
}
.iconClass img{
  height: 40px;
  width: 40px;
  margin-right: 12px;
}
.iconClass p{
  margin-top: 8px;
  font-size: 14.2px;
  font-weight: 400;
  color: #1d1b1b;
}
.rowheadings{
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: #101010;
  font-family: sans-serif;
}
.itineraryDiv{
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-content: space-between;
}
.singleItneraryDivMain{
}
.singleItneraryDiv{
  height: 55px; 
  width: 100%; 
  padding: 14px 30px;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);
  background: white;
}
.singleItneraryDiv2{
  height: auto; 
  width: 100%; 
  padding: 16px 30px;
  font-size: 18px;
  font-weight: 600;
  margin-top: 15px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);
  background: white;
}
.priceSingleDiv{
  padding: 12px 18px !important;
  margin-top: 10px !important; 
  border-bottom: 1px solid #8080806b;
}
.priceSingleDiv p{
  font-size: 15.5px;
  font-weight: 500;
  font-family: 'Nunito Sans';
  color: #1d1b1b;
  margin-right: 3px;
}
.priceSingleDiv .p2{
  font-size: 16.2px;
  font-weight: 600;
  font-family: 'Nunito Sans' ;
  color: #1d1b1b;
}
.grandTotalDiv{
  padding: 13px 18px !important;
  border-bottom: 1px solid #8080806b;
  background: #007bff2b
}
.grandTotalMob{
  padding: 18px !important;
  background: #007bff2b;
  margin-bottom: 26.9px !important;
}
.grandTotalMob p{
  font-size: 15px;
  font-weight: 600;
  font-family: 'Nunito Sans';
  color: #1d1b1b;
  margin-bottom: 0rem !important;
}
.grandTotalMob .smallP{
  font-size: 10px;
  font-weight: 500;
  font-family: 'Nunito Sans';
  color: #1d1b1b;
}
.grandTotalMob .p2{
  margin-top: 5px;
  font-size: 15.7px;
  font-weight: 600;
  font-family: 'Nunito Sans';
  color: black;
}
.grandTotalDiv p{
  font-size: 14px;
  font-weight: 500;
  font-family: 'Nunito Sans';
  color: #1d1b1b;
}
.grandTotalDiv .smallP{
  font-size: 11px;
  font-weight: 500;
  font-family: 'Nunito Sans';
  color: #1d1b1b;
}
.grandTotalDiv .p2{
  margin-top: 6px;
  font-size: 16.7px;
  font-weight: 600;
  font-family: 'Nunito Sans';
  color: #1d1b1b;
  color: black;
}
.couponDivMain{
  padding: 12px 18px !important;
  margin-top: 10px !important; 
  border-bottom: 1px solid #8080806b;
}
.couponDiv{
}
.couponDiv p{
  font-size: 15.5px;
  font-weight: 400;
  font-family: 'Nunito Sans';
  color: #3490dc;
  margin-right: 3px;
}
.couponDiv .p2{
  font-size: 16.2px;
  font-weight: 500;
  font-family: 'Nunito Sans';
  color: #3490dc;
}
.btnCpn{
  color: #fff;
  background-color: #f77736;
  border-color: #f77736;
  border-radius: 0px;
}
.btnPay{
  color: #fff;
  background-color: #f77736;
  border-color: #f77736;
  height: 50px;
  width: 100%;
  margin-top: 5px;
  border-radius: 0px;
}
.btnConfirm{
  color: #fff;
  background-color: #f77736;
  border-color: #f77736;
  height: 45px;
  width: 150px;
  border-radius: 0px;
}
.verticalStep{
  height: 20px;
  width: 1px; 
  background: gray; 
  margin-left: 45px;
}
</style>
