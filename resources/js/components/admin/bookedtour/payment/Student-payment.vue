<template>
    <div class="pt-4">
        <table class="table table-hover table-bordered">
            <thead>
                <th>Name</th>
                <th>Payment Mode</th>
                <th>Collected Amount</th>
                <th>Added At</th>
                <th>Status</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="student in students" :key="student.id">
                    <td>{{ student.user.name }}</td>
                    <td>{{ student.payment_mode }}</td>
                    <td>{{ student.collect_amount }} /-</td>
                    <td>{{ student.created_at }}</td>
                    <td>
                        <span class="badge badge-success" v-if="student.status== 'paid'">Paid</span>
                        <span v-else class="badge badge-primary">Pending</span>
                    </td>
                    <td>
                    <router-link :to="`/userpayments-view/${student.id}`" class="edit_link">
                        <span class="badge badge-primary" title="View Itinerary"><i class="fas fa-eye"></i></span>
                    </router-link>
                    <button @click="tourModal(student)" class="btn btn-info" data-toggle="modal" data-target="#paymentModal">Collect Payment</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- The Modal -->
        <div class="modal" id="paymentModal">
          <div class="modal-dialog">
            <div class="modal-content">

              <!-- Modal Header -->
              <div class="modal-header">
                <h5 class="modal-title">Tour Payment</h5>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>

              <!-- Modal body -->
              <div class="modal-body">
                <div class="row">
                  <div class="col-sm-6">
                    <label> Total Tour Price</label>
                    <input type="number" class="form-control" v-model="form.total_tour_price" />
                  </div>
                  
                  <div class="col-sm-6">
                    <label> Collect Amount </label>
                    <input type="number" class="form-control" v-model="form.collect_amount" />
                  </div>

                  
                  <div class="col-sm-6">
                    <label> Payment Status </label>
                    <select class="form-control" v-model="form.status">
                      <option value="pending">Pending</option>
                      <option value="paid">Paid</option>
                    </select>
                  </div>

                </div>
              </div>
                <p class="text-center">
                  <button type="button" class="btn btn-info itrn_add_btn" data-toggle="modal" data-target="#paymentModal" @click="tourPaymentSave()">Save</button>
                </p>

            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            students:[],
            form: {
                id: 0,
                total_tour_price: "",
                collect_amount: "",
                status: "pending",
            },
        }
    },
    beforeMount(){
        this.tourStudents();
    },
    methods:{
        tourModal(tour) {
            this.form.id  = tour.id;
            this.form.total_tour_price = tour.total_tour_price;
            this.form.collect_amount = tour.collect_amount;
            this.form.status = tour.status;
        },
        tourStudents(){
            var data = {
                school_id: this.$route.params.school_id,
                tour_code: this.$route.params.tour_code,
                added_by: 'student',
            };
            axios.post("/api/payments/list", data).then((response) => {
                this.students = response.data;
            });
        },
        tourPaymentSave() {
            if(parseInt(this.form.total_tour_price) < parseInt(this.form.collect_amount)){
                this.$swal.fire({
                    icon: "error",
                    title: "Valid Data",
                    text: "Please enter valid amount!",
                    });
                return false;
            }

            if(this.form.total_tour_price.length == 0 || this.form.collect_amount.length == 0){
                this.$swal.fire({
                    icon: "error",
                    title: "Valid Data",
                    text: "Please enter valid amount!",
                    });
                return false;
            }

            axios.post("/api/createpayment", this.form).then((response) => {
                this.tour_view = response.data;
                this.tourStudents();
                this.$swal.fire({
                    icon: "success",
                    title: "Successfull",
                    text: "Details are saved !!!",
                    });
            });
        },
    }
}
</script>