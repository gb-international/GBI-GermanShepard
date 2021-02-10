<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
  <view-layout>
    <template #viewdata>
      <div class="row pl-4">
        <div class="col-sm-12 text-right top_btn">
          <add-button 
            class="mr-3"
            :url="`/bookedusers/${$route.params.school_id}/${$route.params.tour_code}`"
            >Payment History</add-button>

          <add-button 
            v-if="tour_view.tour_code"
            :url="`/update-paymentmethod/${$route.params.school_id}/${$route.params.tour_code}`"
            >Update Payment Method</add-button>

          <add-button 
            v-else
            :url="`/add-paymentmethod/${$route.params.school_id}/${$route.params.tour_code}`"
            >Add Payment Method</add-button>          
          
        </div>
      </div>

      <div class="card_view pl-4">
        <br />
        <div class="row" v-if="tour_view.tour_code">
          <div class="col-sm-4">
            <h5>School Name</h5>
            <p>
              <router-link :to="`/view-school/${tour_view.school_id}`">{{
                tour_view.school_name
              }}</router-link>
            </p>
          </div>

          <div class="col-sm-4" v-if="tour_view.tour_code != null">
            <h5>Tour Code</h5>
            <p>{{ tour_view.tour_code }}</p>
          </div>
          <br />

          <div class="col-sm-4" v-if="tour_view.amount != null">
            <h5>Tour Price</h5>
            <p>{{ tour_view.amount }}/-</p>
          </div>

          <div class="col-sm-4">
            <h5>User Name</h5>
            <p>
              <router-link :to="`/view-school/${tour_view.user_id}`">
                {{ tour_view.user_name }}</router-link
              >
            </p>
          </div>

          <div class="col-sm-4">
            <h5>Added By</h5>
            <p>{{ tour_view.added_by }}</p>
          </div>

          <div class="col-sm-4" v-if="tour_view.schoolbankdetail_id != null">
            <h5>School Bank Detail ID</h5>
            <p>{{ tour_view.schoolbankdetail_id }}</p>
          </div>

          <div class="col-sm-4" v-if="tour_view.payment_mode != null">
            <h5>Payment By</h5>
            <p>{{ tour_view.payment_mode }}</p>
          </div>

          <div class="col-sm-4" v-if="tour_view.payment_type != null">
            <h5>Payment Type</h5>
            <p>{{ tour_view.payment_type }}</p>
          </div>
          <div class="col-sm-4" v-if="tour_view.ifsc_code != null">
            <h5>IFSC Code</h5>
            <p>{{ tour_view.ifsc_code }}</p>
          </div>
          <div class="col-sm-4" v-if="tour_view.amount != null">
            <h5>Amount</h5>
            <p>{{ tour_view.amount }}</p>
          </div>

          <div class="col-sm-4" v-if="tour_view.cheque_bank_name != null">
            <h5>Cheque Bank Name</h5>
            <p>{{ tour_view.cheque_bank_name }}</p>
          </div>
          <div class="col-sm-4" v-if="tour_view.date_of_issue != null">
            <h5>Date of Issue</h5>
            <p>{{ tour_view.date_of_issue }}</p>
          </div>

          <div class="col-sm-4">
            <h5>Status</h5>
            <p v-if="tour_view.status == 'success'">
              <span class="badge badge-success">Success</span>
            </p>

            <p v-else>
              <span class="badge badge-primary">Pending</span>
            </p>
          </div>
          <div class="col-sm-4">
            <h5>Added At</h5>
            <p>{{ tour_view.created_at }}</p>
          </div>

          <div class="col-sm-4" v-if="tour_view.payment_mode == 'self'">
            <h5>Collect Payment</h5>
            <button
              @click="tourModal(tour_view)"
              class="btn btn-success"
              data-toggle="modal"
              data-target="#paymentModal"
            >
              Collect Payment
            </button>
          </div>

          <div class="col-sm-4" v-if="tour_view.payment_type == 'net'">
            <h5>
              <button
                class="btn btn-info text-white"
                @click="show_json = !show_json"
              >
                Payment Details
              </button>
            </h5>
          </div>
        </div>

        <div v-else class="text-center text-muted">No Data Available</div>

        <div class="row pl-4" v-if="show_json">
          <table class="">
            <tbody>
              <tr v-for="(value, key, i) in tour_view.payment_data" :key="i">
                <td>
                  <p class="mr-5">
                    <b>{{ key }} : </b> <i>{{ value }} </i>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="row" v-if="tour_view.payment_type == 'self'">
          <div class="col-sm-4">
            <h5>Total Tour Price</h5>
            <p>{{ tour_view.total_tour_price }}</p>
          </div>

          <div class="col-sm-4">
            <h5>Amount Collected</h5>
            <p>{{ tour_view.collect_amount }}</p>
          </div>
        </div>
        
      </div>
      <!-- The Modal -->
      <div class="modal" id="paymentModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
              <h5 class="modal-title">Tour Payment</h5>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-6">
                  <label> Total Tour Price</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="form.total_tour_price"
                  />
                </div>

                <div class="col-sm-6">
                  <label> Collect Amount </label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="form.collect_amount"
                  />
                </div>

                <div class="col-sm-6">
                  <label> Payment Status </label>
                  <select class="form-control" v-model="form.status">
                    <option value="pending">Pending</option>
                    <option value="success">Success</option>
                  </select>
                </div>
              </div>
            </div>
            <p class="text-center">
              <button
                type="button"
                class="btn btn-info itrn_add_btn"
                @click="tourPaymentSave()"
              >
                Save
              </button>
            </p>
          </div>
        </div>
      </div>
    </template>
  </view-layout>
</template>
<script>
import ViewLayout from "@/admin/components/layout/ViewLayout.vue";
import AddButton from "@/admin/components/buttons/AddButton.vue";

export default {
  components: {
    "view-layout": ViewLayout,
    "add-button": AddButton,
  },
  data() {
    return {
      show_json: false,
      tour_view: [],
      form: {
        id: 0,
        total_tour_price: "",
        collect_amount: "",
        status: "pending",
      },
      student_list: false,
      edit_id: 0,
    };
  },
  beforeMount() {
    this.tourPayment();
  },
  methods: {
    tourModal(tour) {
      this.form.id = tour.id;
      this.form.total_tour_price = tour.total_tour_price;
      this.form.collect_amount = tour.collect_amount;
      this.form.status = tour.status;
    },

    tourPayment() {
      var data = {
        school_id: this.$route.params.school_id,
        tour_code: this.$route.params.tour_code,
        added_by: "teacher",
      };
      axios.post("/api/payments/list", data).then((response) => {
        this.tour_view = response.data;
      });
    },

    tourPaymentSave() {
      if (
        parseInt(this.form.total_tour_price) <
        parseInt(this.form.collect_amount)
      ) {
        this.$swal.fire({
          icon: "error",
          title: "Valid Data",
          text: "Please enter valid amount!",
        });
        return false;
      }

      if (
        this.form.total_tour_price.length == 0 ||
        this.form.collect_amount.length == 0
      ) {
        this.$swal.fire({
          icon: "error",
          title: "Valid Data",
          text: "Please enter valid amount!",
        });
        return false;
      }

      axios.post("/api/createpayment", this.form).then((response) => {
        this.tour_view = response.data;
        this.$swal.fire({
          icon: "success",
          title: "Successfull",
          text: "Details are saved !!!",
        });
      });
    },

    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>