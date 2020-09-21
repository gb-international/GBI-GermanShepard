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

        <tourcard :tour="tour" :userinfo="userinfo"/>
        
      </div>
    </div>
  </div>
</template>

<script>
import TourCard from '../extra/tour-card';
export default {
  name: "Tour-list",
  components:{ tourcard:TourCard},
  data() {
    return {
      tours: [],
      formShow: false,
      userinfo: "",
      travel_code: "",
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
            this.tours = response.data;
          }
        })
        .catch((error) => {
          this.formShow = true;
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
  },
};
</script>
