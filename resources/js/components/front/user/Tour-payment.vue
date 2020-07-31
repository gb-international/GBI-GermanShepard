<template>
  <div id="tour_payment">
    <div class="container p-t-15">
      <form>
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="tour_code">Itinerary Code</label>
              <input type="text" :value="`${this.$route.params.id}`" class="form-control grey-border" readonly/>
            </div>
          </div>
          <div class="col-sm-4">
            <label for="person">Total Number of people</label>
            <input type="text" class="form-control grey-border" v-model="person" readonly />
          </div>

          <div class="col-sm-4">
            <label for="price">Tour Price</label>
            <input type="text" class="form-control grey-border" v-model="price" readonly />
          </div>

          <div class="col-sm-4">
            <label for="payment_mode">Payment Mode</label>
            <br />
            <div class="form-check-inline">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" name="payment_mode" />By Student
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" name="payment_mode" />By Self
              </label>
            </div>
          </div>

          <div class="col-sm-8">
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

          <div class="col-sm-6">
            <div class="form-check-inline">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" name="payment_to" />GB-International
              </label>
            </div>
            <div class="ml-5">
              <div class="row">
                <div class="col">
                  Beneficary
                  <span>:</span>
                </div>
                <div class="col">GB International</div>
              </div>

              <div class="row">
                <div class="col">
                  Bank
                  <span>:</span>
                </div>
                <div class="col">PNB, Dwarka Sctor-24</div>
              </div>

              <div class="row">
                <div class="col">
                  Account Number
                  <span>:</span>
                </div>
                <div class="col">58484849494848499</div>
              </div>

              <div class="row">
                <div class="col">
                  Account Type
                  <span>:</span>
                </div>
                <div class="col">Current Account</div>
              </div>

              <div class="row">
                <div class="col">
                  IFSC Code
                  <span>:</span>
                </div>
                <div class="col">PND484949</div>
              </div>

              <div class="row justify-content-center mt-5">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-square add_row_modal"
                  data-toggle="modal"
                  data-target="#openModal"
                >ADD Beneficary</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-5">
          <button type="button" class="btn btn-outline-primary btn-square">SUBMIT</button>
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
                      class="form-control grey-border p-20"
                      placeholder="Enter Beneficary Name"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="no_row">Select Bank</label>
                    <input
                      type="number"
                      class="form-control p-20"
                      placeholder="Enter Beneficary Name"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="no_row">Account Number</label>
                    <input type="number" class="form-control p-20" placeholder="Account Number" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="no_row">Account Type</label>
                    <input type="number" class="form-control p-20" placeholder="Account Type" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="no_row">IFSC Code</label>
                    <input type="text" class="form-control grey-border p-20" placeholder="IFSC Code" />
                  </div>
                </div>
              </div>

              <p class="text-center">
                <button type="button" class="btn btn-outline-primary btn-square">ADD</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
export default {
  name: "Tour-list",
  components: {
    "vue-recaptcha": VueRecaptcha,
  },
  data() {
    return {
      tours: "",
      formShow: false,
      userinfo: "",
      person: 90,
      price: 4500,
      form: {
        robot: false,
      },
    };
  },
  mounted() {
    if (localStorage.token == undefined) {
      this.$router.push("/");
    }
    this.tourListData();
    this.userData();
  },

  methods: {
    onVerify: function (response) {
      if (response) this.form.robot = true;
    },
    onCaptchaExpired: function () {
      this.$refs.recaptcha.reset();
    },
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
