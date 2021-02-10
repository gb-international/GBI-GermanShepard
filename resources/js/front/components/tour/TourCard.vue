<template>
  <div class="w-100">
     <!-- show payment button to only teacher at first 
     if teacher has selected payment mode then show to user -->
    <div
      class="bg-cover text-white tour_list_card mt-3"
      :style="{ backgroundImage: `url('/uploadimage/${tour.tour.itinerary.detail_photo}')` }"
    >
      <div class="container pt-4 font-weight-bold">
        
        <div v-if="userinfo.user_profession == 'teacher'">
          <div class="row">
            <div class="col-sm-8">
              <p class="font-italic">
                <span class="display-4 font-weight-normal">Tour to</span>
                <small>({{ tour.tour.tour_start_date }} - {{ tour.tour.tour_end_date }})</small>
              </p>
              <p class="lead font-weight-normal">{{ tour.tour.itinerary.title }}</p>
            </div>

            <div class="col-sm-4 text-center mb-10 mt-5">
              <router-link v-if="tour.payment == null || tour.payment == 'not-paid'" :to="`/tour-payment/${tour.tour.tour_id}`" class="btn btn-light">PAY NOW</router-link>

              <img v-if="tour.payment == 'success'" class="w-45" src="/images/icons/paid.png" />
            </div>
          </div>

          <div class="row text-center">
            <div class="col p-0">
              <div class="text-center bg-transparent-card p-t-15 pb-15 text-white" 
              v-if="tour.payment == null || tour.payment == 'not-paid'">
                  <img src="/images/icons/viewitinerary.png" class="w-20 mr-1">View Itinerary
              </div>
              <router-link v-if="tour.payment == 'success'" :to="`/tour-detail/${tour.tour.tour_id}`">
                <div class="text-center bg-transparent-card p-t-15 pb-15 text-white">
                  <img src="/images/icons/viewitinerary.png" class="w-20 mr-1">View Itinerary
                </div>
              </router-link>

            </div>
            <div class="col p-0">
              <router-link :to="`/group-member/${tour.tour.tour_id}`">
                <div class="text-cente bg-transparent-card p-t-15 pb-15 ml-1 text-white">
                  <img src="/images/icons/viewmemberlist.png" class="w-20 mr-1"> Group Members
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <!-- student tour list card -->

        <div v-if="userinfo.user_profession == 'student'">
          <div class="row">
            <div class="col-sm-8">
              <p class="font-italic">
                <span class="display-4 font-weight-normal">Tour to</span>
                <small>({{ tour.tour.tour_start_date }} - {{ tour.tour.tour_end_date }})</small>
              </p>
              <p class="lead font-weight-normal">{{ tour.tour.itinerary.title }}</p>
            </div>
            <div class="col-sm-4 text-center mb-10 mt-5">
              <router-link v-if="tour.payment == 'not-paid'" :to="`/tour-payment/${tour.tour.tour_id}`" class="btn btn-light">PAY NOW</router-link>

              <img v-if="tour.payment == 'success'" class="w-45" src="/images/icons/paid.png" />
            </div>
          </div>

          <div class="row p-0">
            <div class="col-sm-12 p-0">
              <router-link v-if="tour.payment == 'success'" :to="`/tour-detail/${tour.tour.tour_id}`">
                <div class="text-center bg-transparent-card p-t-15 pb-15 text-white">
                  <img src="/images/icons/viewitinerary.png" class="w-20 mr-1"> View Itinerary
                </div>
              </router-link>
              <div v-else class="text-center bg-transparent-card p-t-15 pb-15 text-white">
                  <img src="/images/icons/viewitinerary.png" class="w-20 mr-1">View Itinerary
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["tour", "userinfo"],
  data() {
    return {};
  },
};
</script>