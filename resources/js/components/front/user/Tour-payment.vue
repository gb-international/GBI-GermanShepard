<template>
  <div id="tour_payment" class="pb-4">
    <div v-if="chequePage==false">
      <div class="container p-t-15 mb-20" v-if="userinfo">
        <form>
          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                <label for="tour_code">Itinerary Code</label>
                <input
                  type="text"
                  :value="`${this.$route.params.id}`"
                  class="form-control grey-border"
                  readonly
                />
              </div>
            </div>
            <div class="col-sm-4">
              <label for="person">Total Number of people</label>
              <input
                type="text"
                class="form-control grey-border"
                v-model="userinfo.no_of_person"
                readonly
              />
            </div>

            <div class="col-sm-4">
              <label for="price">Tour Price</label>
              <input
                type="text"
                class="form-control grey-border"
                v-model="userinfo.tour_price"
                readonly
              />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="student-section" v-if="userinfo.profession=='student'">
                <div class="col-sm-6">
                  <label>Bank Details to pay</label>
                  <div class="ml-5">
                    <div class="row">
                      <div class="col">
                        Beneficary
                        <span>:</span>
                      </div>
                      <div class="col">{{ student_bank.name}}</div>
                    </div>

                    <div class="row">
                      <div class="col">
                        Bank
                        <span>:</span>
                      </div>
                      <div class="col">{{ student_bank.bank_name }}</div>
                    </div>

                    <div class="row">
                      <div class="col">
                        Account Number
                        <span>:</span>
                      </div>
                      <div class="col">{{ student_bank.account_number }}</div>
                    </div>

                    <div class="row">
                      <div class="col">
                        Account Type
                        <span>:</span>
                      </div>
                      <div class="col">{{ student_bank.account_type }}</div>
                    </div>

                    <div class="row">
                      <div class="col">
                        IFSC Code
                        <span>:</span>
                      </div>
                      <div class="col">{{ student_bank.ifsc_code }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <label for="payment_mode mt-20">Payment Mode</label>
              <div class="teacher-section" v-if="userinfo.profession=='teacher'">
                <div class="form-check-inline">
                  <label class="form-check-label">
                    <input
                      type="radio"
                      class="form-check-input"
                      value="student"
                      name="payment_mode"
                      v-model="teacherform.payment_mode"
                    />By Student
                  </label>
                </div>
                <div class="form-check-inline">
                  <label class="form-check-label">
                    <input
                      type="radio"
                      class="form-check-input"
                      value="self"
                      name="payment_mode"
                      v-model="teacherform.payment_mode"
                    />By Self
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-20" v-if="teacherform.payment_mode == 'self'">
            <div class="col-sm-4">
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="option"
                    v-model="teacherform.payment_type"
                    value="cheque"
                  /> Cheque/DD
                </label>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="option"
                    v-model="teacherform.payment_type"
                    value="cash"
                  /> Cash
                </label>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="option"
                    v-model="teacherform.payment_type"
                    value="net"
                  /> Net Banking
                </label>
              </div>
            </div>
          </div>

          <div class="row" v-if="teacherform.payment_mode == 'student'">
            <div class="col-sm-6" v-for="bank in bankdetail" :key="bank.id">
              <hr />
              <div class="form-check-inline">
                <label class="form-check-label">
                  <input
                    type="radio"
                    :value="bank.id"
                    class="form-check-input"
                    v-model="teacherform.schoolbankdetail_id"
                  />
                  {{ bank.name }}
                </label>
              </div>
              <div class="ml-5">
                <div class="row">
                  <div class="col">
                    Beneficary
                    <span>:</span>
                  </div>
                  <div class="col">{{ bank.name }}</div>
                </div>

                <div class="row">
                  <div class="col">
                    Bank
                    <span>:</span>
                  </div>
                  <div class="col">{{ bank.bank_name }}</div>
                </div>

                <div class="row">
                  <div class="col">
                    Account Number
                    <span>:</span>
                  </div>
                  <div class="col">{{ bank.account_number }}</div>
                </div>

                <div class="row">
                  <div class="col">
                    Account Type
                    <span>:</span>
                  </div>
                  <div class="col">{{ bank.account_type }}</div>
                </div>

                <div class="row">
                  <div class="col">
                    IFSC Code
                    <span>:</span>
                  </div>
                  <div class="col">{{ bank.ifsc_code }}</div>
                </div>
              </div>
            </div>
            <div class="row justify-content-left w-100 mt-5 ml-20">
              <button
                type="button"
                class="btn btn-outline-primary btn-square add_row_modal"
                data-toggle="modal"
                data-target="#openModal"
              >ADD Beneficary</button>
            </div>
          </div>

          <div class="row mt-20">
            <div class="col-sm-18">
              <label for="robot" class="col-sm-2 col-form-label">RObOt?</label>
              <div class="col-sm-10">
                <vue-recaptcha
                  ref="recaptcha"
                  :loadRecaptchaScript="true"
                  @expired="onCaptchaExpired"
                  @verify="onVerify"
                  sitekey="6LeyF7gZAAAAADBt5N6EDQqFhL4-DZBUC13NgDpT"
                ></vue-recaptcha>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-5">
            <button
              type="button"
              class="btn btn-outline-primary btn-square"
              @click="submitPayment()"
            >SUBMIT</button>

            <form action="/payment" method="post">
              <input type="hidden" name="user_id" :value=userinfo.user_id>
              <input type="hidden" name="travel_code" :value=userinfo.travel_code>
              <input type="hidden" name="tour_id" :value=$route.params.id>
              <input type="hidden" name="school_id" :value=userinfo.school_id>
              <button 
                type="submit"
                class="btn btn-outline-primary btn-square ml-2"
                  >Pay
              </button>
            </form>

          </div>
        </form>

        <!-- Add Beneficary Modal -->
        <div class="modal fade" id="openModal">
          <div class="modal-dialog">
            <div class="modal-content modal-color">
              <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="no_row">Beneficary Name</label>
                      <input
                        type="text"
                        class="form-control grey-border"
                        name="name"
                        v-model="form.name"
                        :class="{ 'is-invalid': form.errors.has('name') }"
                        placeholder="Enter Beneficary Name"
                      />
                      <has-error :form="form" field="name"></has-error>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="no_row">Select Bank</label>
                      <select
                        class="form-control grey-border"
                        v-model="form.bank_name"
                        :class="{ 'is-invalid': form.errors.has('bank_name') }"
                      >
                        <option
                          v-for="bank in banknames"
                          :value="bank.name"
                          :key="bank.id"
                        >{{ bank.name }}</option>
                      </select>
                      <has-error :form="form" field="bank_name"></has-error>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="no_row">Account Number</label>
                      <input
                        type="number"
                        class="form-control grey-border"
                        v-model="form.account_number"
                        :class="{ 'is-invalid': form.errors.has('account_number') }"
                        placeholder="Enter Account Number"
                        name="account_number"
                      />
                      <has-error :form="form" field="account_number"></has-error>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="no_row">Account Type</label>
                      <select
                        class="form-control grey-border"
                        v-model="form.account_type"
                        :class="{ 'is-invalid': form.errors.has('account_type') }"
                      >
                        <option v-for="type in account_type" :value="type" :key="type">{{ type }}</option>
                      </select>
                      <has-error :form="form" field="account_type"></has-error>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="no_row">IFSC Code</label>
                      <input
                        type="text"
                        class="form-control grey-border"
                        v-model="form.ifsc_code"
                        :class="{ 'is-invalid': form.errors.has('ifsc_code') }"
                        placeholder="Enter IFSC Code"
                        name="ifsc_code"
                      />
                      <has-error :form="form" field="ifsc_code"></has-error>
                    </div>
                  </div>
                </div>

                <p class="text-center">
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-square"
                    @click="ModalForm()"
                  >ADD</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="chequePage == true">
      <div class="container pt-20">
        <p>Please Fill Cheque/DD Details..</p>
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="father_name">Bank Name</label>
              <input type="text" class="form-control" v-model="teacherform.cheque_bank_name" />
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="father_name">Date of Issue</label>
              <input type="date" class="form-control" v-model="teacherform.date_of_issue" />
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="father_name">IFSC Code</label>
              <input type="text" class="form-control" v-model="teacherform.ifsc_code" />
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="father_name">Cheque Number</label>
              <input type="number" class="form-control" v-model="teacherform.cheque_number" />
            </div>
          </div>
        </div>
        <div class="text-center">
          <button type="button" class="btn btn-outline-primary btn-square" @click="backReset()">BACK</button>

          <button
            type="button"
            class="btn btn-outline-primary btn-square"
            @click="validateCheque()"
          >SUBMIT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
import { Form, HasError, AlertError } from "vform";
export default {
  name: "Tour-list",
  components: {
    "vue-recaptcha": VueRecaptcha,
    "has-error": HasError,
  },
  data() {
    return {
      chequePage: false,
      response:'',
      tours: "",
      formShow: false,
      payment_mode: "self",
      self_pay_mode: "cheque",
      teacher_section: false,
      student_section: false,
      student_bank: [],
      bankdetail: [],
      banknames: [],
      userinfo: "",
      robot: false,

      teacherform: {
        payment_mode: "self",
        payment_type: "",
        tour_code: "",
        schoolbankdetail_id: "",
        amount: "",
        user_id: "",
        school_id: "",
        cheque_bank_name: "",
        date_of_issue: "",
        ifsc_code: "",
        cheque_number: "",
        added_by: "student",
      },
      form: new Form({
        name: "",
        bank_name: "",
        account_number: "",
        account_type: "",
        ifsc_code: "",
        tour_code: this.$route.params.id,
      }),
      account_type: [
        "Current Account",
        "Saving Account",
        "Recurring Deposit Account",
        "Fixed Deposit Account",
      ],
      banknames: [],
    };
  },
  mounted() {
    if (localStorage.token == undefined) {
      this.$router.push("/");
    }

    this.tourBank();
    this.userData();
  },

  methods: {
    check(){
      var payment_url = 'https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction';
      var form = {
        'encRequest' : '',
        'access_code' : "AVHG03HI38AG45GHGA",
      };
  	  var access_code = "AVHG03HI38AG45GHGA" // shared by CCAVENUE 
      var url = '/api/payment';
      this.$axios
        .post(url)
        .then((response) => {
          console.log(response.data);
          let start =  response.data.split('name=encRequest value="')[1];
          form.encRequest = start.split('">')[0];
          console.log(form);
          this.paymentRequest(form,payment_url);
        })
        .catch((error) => {
        });
      return false;
    },
    paymentRequest(form,url){
      console.log('paymentresquest');
      this.$axios.post(url,form,{
        headers: { 'Access-Control-Allow-Origin' :'http://localhost:8000'}
      }).then((response) =>{
        console.log(response);
      }).catch((error)=>{
        console.log(error);
      })
    },
    onVerify: function (response) {
      if (response) this.robot = true;
    },
    onCaptchaExpired: function () {
      this.$refs.recaptcha.reset();
    },

    tourBank() {
      var data = [];
      this.$axios
        .post("/api/tour-bankdetail", data, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        })
        .then((response) => {
          this.bankdetail = response.data;
        })
        .catch((error) => {
          this.formShow = true;
          this.handleError(error);
        });
    },
    userData() {
      var data = { travel_code: this.$route.params.id };
      this.$axios
        .post("/api/payment-tour", data, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        })
        .then((response) => {
          this.userinfo = response.data;
          console.log(this.userinfo);
          if (this.userinfo.profession == "teacher") {
            this.teacherform.added_by = 'teacher';
            this.bankNameList();
          }

          if (this.userinfo.profession == "student") {
            this.StudentBank();
          }
        })
        .catch((error) => {
          this.handleError(error);
        });
    },
    ModalForm() {
      this.$axios
        .post("/api/tour-bankdetail-store", this.form, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        })
        .then((response) => {
          this.form.reset();
          this.tourBank();
          this.$swal.fire({
            icon: "success",
            title: "Beneficary Added !!",
          });
        })
        .catch((error) => {
          this.handleError(error);
        });
    },

    submitPayment() {
      this.teacherform.tour_code = this.$route.params.id;
      this.teacherform.amount = this.userinfo.tour_price;
      this.teacherform.user_id = this.userinfo.user_id;
      this.teacherform.school_id = this.userinfo.school_id;
      
      if (this.robot == false) {
        this.$swal.fire({
          icon: "error",
          title: "Try Again !!",
        });
        return false;
      }

      if (
        this.teacherform.payment_mode == "self" &&
        this.teacherform.payment_type == "cheque"
      ) {
        this.teacherform.schoolbankdetail_id = "";
        this.chequePage = true;
        // this.$router.push(`/payment-mode/${this.$route.params.id}`);
      }

      if (
        this.teacherform.payment_mode == "self" &&
        this.teacherform.payment_type == "cash"
      ) {
        this.teacherform.schoolbankdetail_id = "";
        this.submitForm();
      }

      if (
        this.teacherform.payment_mode == "student" &&
        this.teacherform.schoolbankdetail_id != ""
      ) {
        this.teacherform.payment_type = "";
        this.submitForm();
      }

      return false;
    },

    bankNameList() {
      this.$axios.get("/api/banknames").then((response) => {
        this.banknames = response.data;
      });
    },

    StudentBank() {
      var data = { tour_code: this.$route.params.id };
      this.$axios
        .post("/api/tour-bankdetail-student", data, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        })
        .then((response) => {
          this.student_bank = response.data;
        })
        .catch((error) => {
          this.handleError(error);
        });
    },



    submitForm() {
      this.$axios
        .post("/api/tour-submit-payment", this.teacherform, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        })
        .then((response) => {
          console.log(response);
          if(response.data['error']){
            this.$swal.fire({
              icon: "error",
              title: response.data.error,
            }); 
            return false; 
          }
          this.$swal.fire({
            icon: "success",
            title: "Successfully Added !!",
          });
        })
        .catch((error) => {
          this.handleError(error);
        });
    },
    backReset() {
      this.chequePage = false;
      this.teacherform.cheque_bank_name = "";
      this.teacherform.date_of_issue = "";
      this.teacherform.ifsc_code = "";
      this.teacherform.cheque_number = "";
    },

    validateCheque(){
      if(this.teacherform.cheque_bank_name != '' && this.teacherform.date_of_issue != '' && this.teacherform.ifsc_code != '' && this.teacherform.cheque_number != ''){
        this.submitForm();
      }else{
        this.$swal.fire({
          icon: "error",
          title: "Please fill all the fields !!",
        });
      }
    }
  },
};
</script>
