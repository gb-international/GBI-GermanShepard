<template>
  <div class="dashboard-body-part-two-2" v-if="upcoming_list.length > 0">
    <VueSlickCarousel :dots="true" v-bind="settings">
      <div
        class="states_card card_scroll"
        v-for="state in upcoming_list"
        :key="state.id"
      >
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="state.photo" alt="Card image cap">
          <div class="card-body">
            <div>
              <h5 class="card-text">{{state.title}}</h5>
              <p class="card-text">
              5 Days<br/>
              Rs. 10,000 /Person
              </p>
            </div>
            <div class="btn-div">
              <button type="button" class="btn btn-primary">Book</button>
            </div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "UpcomingTourCarousel",
  components: { VueSlickCarousel },
  props: {
    upcoming_list: {
      required: true,
    },
  },
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
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
  .card-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .card-title {
    font-size: 15px !important;
  }
  .card-text{
    font-size: 12px !important;
  }
  .btn-div{
    align-self: center;
  }
</style>