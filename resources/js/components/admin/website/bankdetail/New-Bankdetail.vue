<!-- 

This template helps us to create a new Escort it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <section class="content">
    <div class="container-fluid">
      <!--************************************************
    
  Template Type: Add New Escort
  Author:@Ajay

****************************************************-->
      <div class="row justify-content-around">
        <!-- left column -->
        <div class="col-md-12">
          <form role="form" enctype="multipart/form-data" @submit.prevent="addEscort()">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    v-model="form.name"
                    :class="{ 'is-invalid': form.errors.has('name') }"
                    placeholder="Enter Name"
                  />
                  <has-error :form="form" field="name"></has-error>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="bank_name">Bank Name</label>
                  <select class="form-control" v-model="form.bank_name" :class="{ 'is-invalid': form.errors.has('bank_name') }">
                    <option v-for="bank in banknames" :value="bank.name" :key="bank.id">{{ bank.name }}</option>
                  </select>
                  <has-error :form="form" field="bank_name"></has-error>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="account_number">Account Number</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="form.account_number"
                    :class="{ 'is-invalid': form.errors.has('account_number') }"
                    placeholder="Enter Account Number"
                    name="account_number"
                  />
                  <has-error :form="form" field="account_number"></has-error>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="account_type">Account Type</label>
                  <select class="form-control" v-model="form.account_type" :class="{ 'is-invalid': form.errors.has('account_type') }">
                    <option v-for="type in account_type" :value="type" :key="type">{{ type }}</option>
                  </select>
                  <has-error :form="form" field="account_type"></has-error>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="ifsc_code">IFSC Code</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.ifsc_code"
                    :class="{ 'is-invalid': form.errors.has('ifsc_code') }"
                    placeholder="Enter IFSC Code"
                    name="ifsc_code"
                  />
                  <has-error :form="form" field="ifsc_code"></has-error>
                </div>
              </div>
            </div>

            <div class="form-group text-center">
              <button type="submit" class="btn btn-primary itrn_add_btn">SAVE</button>
            </div>
          </form>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </section>
</template>

<script>
import { Form, HasError } from "vform";
export default {
  name: "New",
  components: { Form, "has-error": HasError },
  data() {
    return {
      // Create a new form instance
      banknames:[],
      account_type:['Current Account','Saving Account','Recurring Deposit Account','Fixed Deposit Account'],
      form: new Form({
        name: "",
        bank_name: "",
        account_number: "",
        account_type: "",
        ifsc_code: "",
      }),
    };
  },
  mounted(){
    this.bankNameList();
  },
  methods: {
    addEscort() {

      this.form
        .post("/api/schoolbankdetails")
        .then((response) => {
          this.$router.push(`/bankdetail`);
          this.$toast.fire({
            icon: "success",
            title: "Escort Added successfully",
          });
        })
        .catch(() => {});
    },
    bankNameList(){
      axios.get('/api/banknames').then((response)=>{
        this.banknames = response.data;
      })
    }
  },
};
</script>

<style scoped>
</style>