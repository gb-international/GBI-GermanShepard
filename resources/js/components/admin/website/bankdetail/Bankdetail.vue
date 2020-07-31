<!--
This Template is for listing for the Escort profile using function to get the 
data from the api to display the data about the Escort from the backend .
-->
<template>
  <section class="content">
    <!--************************************************
      Template Type: Escorts List
      Author:@Ajay
    ****************************************************-->
    <div class="row justify-content-around">
      <div class="col-md-12">
          <div class="top_btn mb-10">
            <router-link :to="`/bankdetail-add`">Add Bankdetail</router-link>
          </div>
        <div class="container container_admin_body">
          <!-- Start Card -->
          <table
            id="example"
            class="display table table-striped table-bordered nowrap"
            style="width:100%"
          >
            <thead>
              <tr>
                <th>
                  NAME
                  <i class="fas fa-sort"></i>
                </th>
                <th>
                  BANK NAME
                  <i class="fas fa-sort"></i>
                </th>
                <th>
                  ACCOUNT NUMBER
                  <i class="fas fa-sort"></i>
                </th>
                <th>
                  IFSC
                  <i class="fas fa-sort"></i>
                </th>
                <th>
                  <i class="fas fa-cog"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="bank in bank_list"
                role="row"
                v-bind:class="{ odd: oddclass , 'even': evenclass}"
                class="row_list"
                :key="bank.id"
              >
                <td>{{bank.name}}</td>
                <td>{{bank.bank_name}}</td>
                <td>{{bank.account_number}}</td>
                <td>{{bank.ifsc_code}}</td>
                <td class="edit_section">
                  <router-link :to="`/bankdetail/${bank.id}`" class="edit_link">
                    <span class="badge badge-primary">
                      <i class="fas fa-pencil-alt"></i>
                    </span>
                  </router-link>
                  <a href class="delete_link" @click.prevent="deleteescort(bank.id)">
                    <span class="badge badge-danger">
                      <i class="far fa-trash-alt"></i>
                    </span>
                  </a>

                  <router-link :to="`/bank-view/${bank.id}`" class="edit_link">
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
import { Form, HasError } from "vform";
export default {
  name: "ListEscort",
  components: [Form, HasError],
  data() {
    return {
      oddclass: false,
      evenclass: true,
      bank_list: [],
    };
  },
  created() {
    this.bankData();
  },

  methods: {
    bankData() {
      axios.get("/api/bankdetails").then((response) => {
        setTimeout(() => $("#example").DataTable(), 1000);
        this.bank_list = response.data;
      });
    },

    deleteescort(id) {
      var uri = "/api/bankdetails/" + id;
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.value) {
            axios.delete(uri).then((response) => {
              this.bankData();
            });
            this.$swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          }
        });
    },
  },
};
</script>