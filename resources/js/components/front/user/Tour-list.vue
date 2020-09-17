<template>
  <div class="container">
    <div class="row text-right">
      <button
        class="btn btn-info float-right mt-2"
        data-toggle="modal"
        data-target="#codeModal"
      >Add Tour Code</button>
      <!-- The Modal -->
      <div class="modal fade" id="codeModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <!-- Modal body -->
            <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <form class="form" method="post" @submit.prevent="UserTourSave()">
                <div class="form-group">
                  <label for="tour_code">Travel Code</label>
                  <input
                    type="text"
                    class="form-control input-border"
                    placeholder="Enter travel code"
                    v-model="travel_code"
                    required
                  />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn profile_button">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="tours">
      <div class="row" v-for="tour in tours" :key="tour.id">
        <div class="col-md-12">
          <!-- <div
            class="bg-cover text-white tour_list_card mt-4"
            :style="{background-image: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), `url(${tour.itinerary.detail_photo })}`}"
          >-->
          <div
            class="bg-cover text-white tour_list_card mt-3"
            :style="{ backgroundImage: `url('/uploadimage/${tour.itinerary.detail_photo}')` }"
          >
            <div class="container pt-4 font-weight-bold" v-if="userinfo.information">
              <div class="row">
                <div class="col-sm-8">
                  <p class="font-italic">
                    <span class="display-4 font-weight-normal">Tour to</span>
                    <small>({{ tour.tour_start_date }} - {{ tour.tour_end_date }})</small>
                  </p>
                  <p class="lead font-weight-normal">{{ tour.itinerary.title }}</p>
                </div>

                <div class="col-sm-4 text-center mb-10 mt-5" 
                  v-if="tour.pay_status != 'success'">
                  <router-link :to="`/tour-payment/${tour.tour_id}`" class="btn btn-light">PAY NOW </router-link>
                </div>
              </div>

              <div class="row text-center" v-if="userinfo.information.user_profession == 'teacher'">
                <div class="col p-0">
                  <router-link :to="`/tour-detail/${tour.tour_id}`">
                    <div class="text-center bg-transparent-card p-t-15 pb-15 text-white">
                      <i class="fas fa-eye"></i> View Itinerary
                    </div>
                  </router-link>
                </div>

                <div class="col p-0">
                  <router-link :to="`/add-group/${tour.tour_id}`">
                    <div class="text-cente bg-transparent-card p-t-15 pb-15 ml-1 text-white">
                      <i class="fas fa-eye"></i> Add Group
                    </div>
                  </router-link>
                </div>
                <div class="col p-0">
                  <router-link :to="`/group-member/${tour.tour_id}`">
                    <div class="text-cente bg-transparent-card p-t-15 pb-15 ml-1 text-white">
                      <i class="fas fa-eye"></i> Group Member
                    </div>
                  </router-link>
                </div>
              </div>

              <div class="row text-center" v-if="userinfo.information.user_profession == 'student'">
                <div class="col p-0">
                  <router-link :to="`/tour-detail/${tour.tour_id}`">
                    <div class="text-center bg-transparent-card p-t-15 pb-15 text-white">
                      <i class="fas fa-eye"></i> View Itinerary
                    </div>
                  </router-link>
                </div>
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
  name: "Tour-list",
  data() {
    return {
      tours: [],
      formShow: false,
      userinfo: "",
      travel_code: "",
      total:""
    };
  },
  mounted() {
    if (localStorage.token == undefined) {
      this.$router.push("/");
    }
    this.userData();
    this.tourListData();
  },

  methods: {
    tourListData() {
      var data = [];
      this.$axios
        .post("/api/tour-list", data, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        })
        .then((response) => {
          if (response.data.length == 0) {
            this.formShow = true;
          } else {
            this.total = response.data;
            this.paymentStatus();
          }
        })
        .catch((error) => {
          this.formShow = true;
          this.handleError(error);
        });
    },
    paymentStatus : function(){
      this.tours = [];
      this.total.map(event => {
        // event.pay_status = false;
        var data = {user_id:this.userinfo.id,tour_code:event.tour_id};
          this.$axios
            .post("/api/tour-payment-status", data, {
              headers: { Authorization: `Bearer ${localStorage.token}` },
            })
            .then((response) => {
              event.pay_status = response.data.status;
              console.log(event.tour_id);
              console.log(response.data);
              this.tours.push(event);
            })
            .catch((error) => {
              this.handleError(error);
            });
        });
      this.total = '';
    },


    userData() {
      var data = [];
      this.$axios
        .post("/api/details", data, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        })
        .then((response) => {
          this.userinfo = response.data.success;
          if (this.userinfo.status == 0) {
            this.$router.push("/user-information");
          }
        })
        .catch((error) => {
          this.handleError(error);
        });
    },
    UserTourSave() {
      var data = { travel_code: this.travel_code };
      this.$axios
        .post("/api/tour-travel-save", data, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        })
        .then((response) => {
          // this.alldata = response.data;
          if (response.data == "error") {
            this.$swal.fire({
              icon: "error",
              title: "Try again",
              text: "Please enter valid travel code!",
            });
          } else {
            this.$swal.fire(
              "Valid Code",
              "Check your tour details.",
              "success"
            );
            this.tourListData();
          }
        })
        .catch((error) => {
          this.handleError(error);
        });
    },
  }

};
</script>
