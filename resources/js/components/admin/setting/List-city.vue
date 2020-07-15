<!--
This Template is for listing for the Hotel profile using function to get the 
data from the api to display the data about the Hotel from the backend .
-->
<template>
  <section class="content">
    <!--************************************************
      Template Type: Hotel List
      Author:@Ajay

    ****************************************************-->

    <div class="row">
      <div class="col-md-12">
        <div class="container container_admin_body">
          <div class="row mb-10">
            <div class="col-sm-12 top_btn float-right">
              <router-link :to="`/add-city`">Add City</router-link>
            </div>
          </div>

          <!-- <div v-if="$can('edit posts')">You can edit posts.</div>
          <div v-else>hi</div>-->

          <!-- Start Card -->
          <table
            id="example"
            class="display table table-striped table-bordered nowrap"
            style="width:100%"
          >
            <thead>
              <tr>
                <th>
                  CITY SNAME
                  <i class="fas fa-sort"></i>
                </th>
                
                <th>
                  STATE NAME
                  <i class="fas fa-sort"></i>
                </th>

                <th>
                  <i class="fas fa-cog"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="city in alldata"
                role="row"
                v-bind:class="{ odd: oddclass , 'even': evenclass}"
                class="row_list"
                :key="city.id"
              >
                <td>{{city.name}}</td>
                <td>{{city.state.name}}</td>
                <td class="edit_section">

                  <router-link :to="`/city/${city.id}`" class="edit_link">
                    <span class="badge badge-primary"><i class="fas fa-pencil-alt"></i></span>
                  </router-link>
                  <a href class="delete_link" @click.prevent="deleteCity(city.id)">
                    <span class="badge badge-danger">
                      <i class="far fa-trash-alt"></i>
                    </span>
                  </a>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- end -->
      </div>
    </div>
    <p id="post"></p>
  </section>
  <!-- /.content -->
</template>

<script>
export default {
  name: "ListCity",
  data() {
    return {
      oddclass: false,
      evenclass: true,
      hotelData: {}
    };
  },
  // Get all the data
  mounted() {
    this.$store.dispatch("getAllData", "/api/city");
  },
  computed: {
    alldata() {
      setTimeout(() => $("#example").DataTable(), 1000);
      return this.$store.getters.getAllData;
    }
  },
  // End the process of the the fetching data
  methods: {
    deleteCity(id) {
      var uri = "/api/city/" + id;
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
              this.$store.dispatch("getAllData", "/api/city");
            });
            this.$swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          }
        });
    }
  }
};
</script>