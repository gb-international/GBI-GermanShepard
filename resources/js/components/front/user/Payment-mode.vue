<template>
  <div id="payment_mode">
    
  <div class="container-fluid p-0">
    <section class="p-3 p-lg-5 d-flex flex-column">
      <div class="my-auto">
        <div id="accordion" role="tablist" aria-multiselectable="true">
          <!-- Accordion Item 1 -->
          <div class="card">
            <div class="card-header" role="tab" id="accordionHeadingOne">
              <div class="mb-0 row">
                <div class="col-12 no-padding accordion-head">
                  <a data-toggle="collapse" data-parent="#accordion" href="#accordionBodyOne" aria-expanded="false" aria-controls="accordionBodyOne"
                    class="collapsed ">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    <h5>Debit Card</h5>
                  </a>
                </div>
              </div>
            </div>

            <div id="accordionBodyOne" class="collapse" role="tabpanel" aria-labelledby="accordionHeadingOne" aria-expanded="false" data-parent="accordion">
              <div class="card-block col-12">
                <div class="row justify-content-center">
                  <div class="col-sm-4">
                    <div class="card-image">
                      <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="customRadio" name="example" value="customEx">
                        <label class="custom-control-label" for="customRadio"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPtbHz06hBHQrVcaSUUtNNMLG0tZ5rxZLokA&usqp=CAU"></label>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-sm-4">
                    <div class="card-image">
                      <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="customRadio" name="example" value="customEx">
                        <label class="custom-control-label" for="customRadio"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPtbHz06hBHQrVcaSUUtNNMLG0tZ5rxZLokA&usqp=CAU"></label>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-sm-4">
                    <div class="card-image">
                      <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="customRadio" name="example" value="customEx">
                        <label class="custom-control-label" for="customRadio"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPtbHz06hBHQrVcaSUUtNNMLG0tZ5rxZLokA&usqp=CAU"></label>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
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
      tours: "",
      formShow: false,
      payment_mode: "self",
      bankdetail: [],
      banknames: [],
      userinfo: "",
      robot: false,
      form: new Form({
        name: "",
        bank_name: "",
        account_number: "",
        account_type: "",
        ifsc_code: "",
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
    this.bankNameList();
    this.tourBank();
    this.userData();
  },

  methods: {
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
      if (this.robot == false) {
        this.$swal.fire({
          icon: "error",
          title: "Try Again !!",
        });
        return false;
      }
      if (this.payment_mode == "self") {
        this.$route.push("/payment-mode");
      } else {
        console.log("student");
      }
      return false;
    },

    bankNameList() {
      this.$axios.get("/api/banknames").then((response) => {
        this.banknames = response.data;
      });
    },
  },
};
</script>
