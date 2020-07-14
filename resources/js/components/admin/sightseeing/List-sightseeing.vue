<!--
This Template is for listing for the Sightseeing profile using function to get the 
data from the api to display the data about the Sightseeing from the backend .
-->
<template>
  <section class="content">
    <!--************************************************
      Template Type: Sightseeing List
      Author:@Ajay

    ****************************************************-->
    <div class="row justify-content-around">
      <div class="col-md-12">
        <div class="container container_admin_body">
          <div class="top_btn mb-20">
              <router-link :to="`/sightseeing-add`">Add Sightseeing</router-link>
          </div>
          <table
            id="example"
            class="display table table-striped table-bordered nowrap"
            style="width:100%"
          >
            <thead>
              <tr>
                <th>
                  SIGHTSEEING NAME
                  <i class="fas fa-sort"></i>
                </th>
                <th>
                  ADDRESS
                  <i class="fas fa-sort"></i>
                </th>
                
                <th>
                  CITY
                  <i class="fas fa-sort"></i>
                </th>

                <th>
                  <i class="fas fa-cog"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="hotel in sightseeing_list"
                role="row"
                v-bind:class="{ odd: oddclass , 'even': evenclass}"
                class="row_list"
                :key="hotel.id"
              >
                <td>{{hotel.name}}</td>
                <td>{{ hotel.address }}</td>
                <td v-if="hotel.city">{{ hotel.city.name }}</td>
                <td class="edit_section">
                  <router-link :to="`/sightseeing/${hotel.id}`" class="edit_link">
                    <span class="badge badge-primary">
                      <i class="fas fa-pencil-alt"></i>
                    </span>
                  </router-link>
                  <a href class="delete_link" @click.prevent="deletehotel(hotel.id)">
                    <span class="badge badge-danger">
                      <i class="far fa-trash-alt"></i>
                    </span>
                  </a>

                  <router-link :to="`/hotel-view/${hotel.id}`" class="edit_link">
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
  name: "List",
  data() {
    return {
      oddclass: false,
      evenclass: true,
      sightseeing_list: []
    };
  },
  mounted() {
    this.SightseeingData();
  },
  methods: {
    SightseeingData() {
      axios.get("/api/sightseeings").then(response => {
        setTimeout(() => $("#example").DataTable(), 1000);
        this.sightseeing_list = response.data.data;
      });
    },

    deletehotel(id) {
      var uri = "api/sightseeings/" + id;
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
            axios.delete(uri).then(response => {
              this.hotelData();
            });
            this.$swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
    }
  }
};
</script>