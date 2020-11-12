<!--
This Template is for listing for the Frontbooking using function to get the 
data from the api to display the data about the Frontbooking from the backend .
-->
<template>
  <section class="content">
    <!--************************************************
      Template Type: Frontbooking List
      Author:@Ajay

    ****************************************************-->
    <div class="row justify-content-around">
      <div class="col-md-12">
        <div class="container container_admin_body">
          <!-- Start Card -->
          <table id="example" class="display table nowrap" style="width:100%">
            <thead>
              <tr>
                <th>
                  BOOKING DATE
                  <i class="fas fa-sort"></i>
                </th>
                <th>
                  START DATE
                  <i class="fas fa-sort"></i>
                </th>
                <th>
                  END DATE
                  <i class="fas fa-sort"></i>
                </th>
                <th>
                  SIGHT SEEING
                  <i class="fas fa-sort"></i>
                </th>
                
                <th>
                  STATUS
                  <i class="fas fa-sort"></i>
                </th>

                <th>
                  <i class="fas fa-cog"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="tour in alldata"
                role="row"
                v-bind:class="{ odd: oddclass , 'even': evenclass}"
                class="row_list"
                :key="tour.id"
              >
                <td>{{ tour.created_at }}</td>
                <td>{{tour.start_date}}</td>
                <td>{{tour.end_date}}</td>
                <td>{{tour.sightseen}}</td>
                <td>
                  <span v-if="tour.status == 0" class="badge badge-warning">Pending</span>
                  <span v-else class="badge badge-success">Booked</span>
                </td>
                <td class="edit_section">
                  <a href class="delete_link" @click.prevent="deleteTour(tour.id)">
                    <span class="badge badge-danger">
                      <i class="far fa-trash-alt"></i>
                    </span>
                  </a>

                  <router-link :to="`/front-booking/${tour.id}`" class="edit_link">
                    <span class="badge badge-primary" title="View Itinerary">
                      <i class="fas fa-eye"></i>
                    </span>
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ListItinerary",
  data() {
    return {
      oddclass: false,
      evenclass: true,
      itineraryData: {},
      alldata: []
    };
  },

  mounted() {
    this.getBookingList();
  },
  methods: {
    getBookingList() {
      axios.get("/api/frontbooking").then(response => {
        setTimeout(() => $("#example").DataTable(), 1000);
        this.alldata = response.data;
      });
    },

    deleteTour(id) {
      var uri = "/api/frontbooking-delete/";
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
          if (result.value) {

            axios.post(uri,{ id: id }).then(response => {
              console.log(response);
              this.getBookingList();
            });
            this.$swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
    }
  }
};
</script>