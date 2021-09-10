<template>
  <!--************************************************
      Author: @Manas
  ****************************************************-->
<section class="d-flex flex-column justify-content-center">
  <!-- Row 1 -->
  <div class="d-flex justify-content-center align-items-center mainRow1 container">
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
            <p>GBITRIP</p>
            <p class="ml-auto p2">- ₹2,000</p>
          </div>
          <div class="d-flex justify-content-start couponEnterDiv">
            <input type="text">
            <button class="btn btnCpn">Add</button>
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
          <p class="ml-auto p2">₹{{itineraryData.price * 5/100 + itineraryData.price - 2000}} </p>
        </div>
      </div>
      <button class="btn btnPay">Pay Now</button>
    </div>
  </div>

  <!-- Mob Grand Total -->
  <div class="d-flex justify-content-between align-items-center grandTotalMob">
    <div class="d-flex flex-column justify-content-start align-items-start">  
      <p>Grand Total</p>
      <span class="smallP">(Incl. all taxes)</span>
      <p class="p2">₹{{itineraryData.price * 5/100 + itineraryData.price - 2000}}</p>
    </div>
    <button class="btn btnConfirm ml-auto">Pay Now</button>
  </div>
  <!-- Row 2 -->
  <div class="mainRow2 container">
    <p class="rowheadings">Your Experience Includes</p>
    <div class="iconMainDiv">
      <div class="iconClass">
        <img src="/images/icons/hotel_icon.png">
        <p>Hotel</p>
      </div>
      <div class="iconClass">
        <img src="/images/icons/flight_icon.png">
        <p>Flight</p>
      </div>
      <div class="iconClass">
        <img src="/images/icons/passport_icon.png">
        <p>Passport/Visa</p>
      </div>
      <div class="iconClass">
        <img src="/images/icons/transport_icon.png">
        <p>Transfers</p>
      </div>
      <div class="iconClass">
        <img src="/images/icons/dinner_icon.png">
        <p>Dinner</p>
      </div>
      <div class="iconClass">
        <img src="/images/icons/citytour_icon.png">
        <p>City Tour</p>
      </div>
      <div class="iconClass">
        <img src="/images/icons/taxes_icon.png">
        <p>Taxes</p>
      </div>
      <div class="iconClass">
        <img src="/images/icons/sightseeing.png">
        <p>Sightseeing</p>
      </div>
      <div class="iconClass">
        <img src="/images/icons/breakfast.png">
        <p>Breakfast</p>
      </div>
    </div>
  </div>

  <div class="mainRow3 container">
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
  font-family: sans-serif;
  color: #1d1b1b;
  margin-right: 3px;
}
.priceSingleDiv .p2{
  font-size: 16.2px;
  font-weight: 600;
  font-family: sans-serif;
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
  font-family: sans-serif;
  color: #1d1b1b;
  margin-bottom: 0rem !important;
}
.grandTotalMob .smallP{
  font-size: 10px;
  font-weight: 500;
  font-family: sans-serif;
  color: #1d1b1b;
}
.grandTotalMob .p2{
  margin-top: 5px;
  font-size: 15.7px;
  font-weight: 600;
  font-family: sans-serif;
  color: black;
}
.grandTotalDiv p{
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
  color: #1d1b1b;
}
.grandTotalDiv .smallP{
  font-size: 11px;
  font-weight: 500;
  font-family: sans-serif;
  color: #1d1b1b;
}
.grandTotalDiv .p2{
  margin-top: 6px;
  font-size: 16.7px;
  font-weight: 600;
  font-family: sans-serif;
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
  font-family: sans-serif;
  color: #3490dc;
  margin-right: 3px;
}
.couponDiv .p2{
  font-size: 16.2px;
  font-weight: 500;
  font-family: sans-serif;
  color: #3490dc;
}
.btnCpn{
  color: #fff;
  background-color: #01c5c4;
  border-color: #01c5c4;
  border-radius: 0px;
}
.btnPay{
  color: #fff;
  background-color: #01c5c4;
  border-color: #01c5c4;
  height: 50px;
  width: 100%;
  margin-top: 5px;
  border-radius: 0px;
}
.btnConfirm{
  color: #fff;
  background-color: #01c5c4;
  border-color: #01c5c4;
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
