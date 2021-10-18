<template>
  <!--************************************************
      Author: @Manas
  ****************************************************-->
<section class="d-flex flex-row justify-content-between customCard" style="background: white !important">
<div class="d-flex flex-column justify-content-start align-items-start mainRow1">
<p>Hotel Aman Continental</p>
<p>Kerala</p>
<p>Superior Room Twin Beds</p>
<p>Banquet Hall</p>
</div>

<!-- Images -->
<div class="d-flex justify-content-center align-items-center mainRow2" style="background: white !important">
    <div class="d-flex flex-column expDetCol1">
        <img 
          src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg"
          loading="lazy"
          alt="itinerary"
          class="expDetailImg"
        >
        <div class="d-flex justify-content-center align-items-center">
            <div>
              <img 
                src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg"
                loading="lazy"
                alt="itinerary"
                class="expDetailImgSmall"
                style="margin-right: 10px"
                >
            </div>
             <div>
              <img 
                src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg"
                loading="lazy"
                alt="itinerary"
                class="expDetailImgSmall"
                style="margin-right: 10px"
                >
            </div>
             <div>
              <img 
                src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg"
                loading="lazy"
                alt="itinerary"
                class="expDetailImgSmall"
                style="margin-right: 10px"
                >
            </div>
             <div>
              <img 
                src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg"
                loading="lazy"
                alt="itinerary"
                class="expDetailImgSmall"
                >
            </div>
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
    title: "GBI Hotel Search",
    meta: [
      {
        name: "description",
        content:
          "@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button"
      },
      {
        name: "keywords",
        content:
          "@GoWithGBI, explore desired hotels,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs"
      },
      {
        name: "url",
        content: "https://www.gowithgbi.com/hotel-search"
      }
    ]
  },
  data() {
    return {
    };
  },   
  watch: {
  },
  mounted() {
  },
  beforeCreate(){
  },
  created(){
  },
  methods: {
  }
};
</script>

<style scoped>
.expDetailImg{
  width: 230px;
  height: 170px;
  margin-bottom: 10px;
}
.expDetailImgSmall{
  width:  50px;
  height: 50px;
}
.customCard{
  border: 1px solid gray;
  width: 890px;
  height: 250px;
  padding: 10px;
}
.mainRow1 .p {
    margin-block-start: 0em !important;
    margin-block-end: 0em !important;
    margin-inline-start: 0px !important;
    margin-inline-end: 0px !important;
}
</style>
