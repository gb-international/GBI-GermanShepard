<template>
  <div class="row mt-35">
    <div class="col-lg-6" v-for="(itinerary,index) in list" :key="index">
      <div class="card card-radis-list mb-10">
        <router-link :to="`/explore-detail/${itinerary.id}`">
          <div class="card-horizontal">
            <div class="card-image">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item"
                  :data-url="`/uploadimage/${itinerary.photo}`"
                  :alt="itinerary.title"
                />
              </figure>
            </div>
            <div class="card-content">
              <h1>{{itinerary.title | sortlength(35,"")}}</h1>
              <p>{{itinerary.noofdays}} Days Tour</p>
              <table class="table-s">
                <tbody>
                  <tr>
                    <td v-if="itinerary.hotel_type != '0'">
                      <i class="fas fa-hotel"></i>
                    </td>
                    <td v-if="itinerary.train == 1">
                      <i class="fas fa-train icon-train-list"></i>
                    </td>
                    <td v-if="itinerary.bus =='1'">
                      <i class="fas fa-bus"></i>
                    </td>
                    <td v-if="itinerary.flight== '1'">
                      <i class="fas fa-plane"></i>
                    </td>
                    <td v-if="itinerary.food != '0'">
                      <i class="fas fa-utensils"></i>
                    </td>
                  </tr>
                  <tr>
                    <td v-if="itinerary.hotel_type != '0'">
                      <span class="icon-i icon-hotel-list">Hotel</span>
                    </td>
                    <td v-if="itinerary.train== '1'">
                      <span class="icon-i">Train</span>
                    </td>
                    <td v-if="itinerary.bus== '1'">
                      <span class="icon-i icon-bus-list">Bus</span>
                    </td>
                    <td v-if="itinerary.flight== '1'">
                      <span class="icon-i icon-plane-list">Flight</span>
                    </td>
                    <td v-if="itinerary.food != '0'">
                      <span class="icon-i">Food</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["list"],
  data() {
    return {};
  }
};
</script>
