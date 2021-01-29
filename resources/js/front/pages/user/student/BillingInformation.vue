<template>
  <div class="container" id="payment_information">
    <div class="desktop">
      <div class="row pt-4 pb-4">
        <div class="col-sm-8">
          <h6>Billing Information</h6>
          <billing-form @update="billingUpdate"></billing-form>

          <p class="mt-3 pl-1">
            <label for="checkbox"
              ><input type="checkbox" id="checkbox" @click="toggleShipping" />
              <small
                >My billing and shipping address are different</small
              ></label
            >
          </p>

          <div v-if="shipping_toggle">
            <h6>Shipping Information</h6>
            <shipping-form @update="shippingUpdate" />
          </div>
        </div>
        <div class="col-sm-4 pl-4 pr-4">
          <div class="payment-card">
            <payment-card :amount="amount"></payment-card>
          </div>

          <form class="form" method="POST" action="/payment">
            <div class="d-none">
              <input
                type="text"
                name="billing_customer_name"
                :value="formdata.billing_customer_name"
              />

              <input
                type="text"
                name="billing_name"
                :value="formdata.billing_name"
              />
              <input
                type="text"
                name="billing_address"
                :value="formdata.billing_address"
              />
              <input
                type="text"
                name="billing_city"
                :value="formdata.billing_city"
              />
              <input
                type="text"
                name="billing_state"
                :value="formdata.billing_state"
              />
              <input
                type="text"
                name="billing_country"
                :value="formdata.billing_country"
              />
              <input
                type="text"
                name="billing_zip"
                :value="formdata.billing_zip"
              />
              <input
                type="text"
                name="billing_tel"
                :value="formdata.billing_tel"
              />
              <input
                type="text"
                name="billing_email"
                :value="formdata.billing_email"
              />

              <input
                type="text"
                name="shipping_name"
                :value="formdata.delivery_name"
              />
              <input
                type="text"
                name="shipping_address"
                :value="formdata.delivery_address"
              />
              <input
                type="text"
                name="shipping_city"
                :value="formdata.shipping_city"
              />
              <input
                type="text"
                name="shipping_state"
                :value="formdata.shipping_state"
              />
              <input
                type="text"
                name="shipping_country"
                :value="formdata.shipping_country"
              />
              <input
                type="text"
                name="shipping_zipcode"
                :value="formdata.shipping_zipcode"
              />
              <input
                type="text"
                name="shipping_tel"
                :value="formdata.shipping_tel"
              />
              <input
                type="text"
                name="shipping_email"
                :value="formdata.shipping_email"
              />

              <input type="text" name="user_id" :value="formdata.user_id" />
              <input
                type="text"
                name="travel_code"
                :value="formdata.travel_code"
              />
              <input type="text" name="tour_id" :value="formdata.tour_id" />
              <input
                type="text"
                name="tour_price"
                :value="formdata.tour_price"
              />
              <input type="text" name="added_by" :value="formdata.added_by" />
              <input
                type="text"
                name="no_of_person"
                :value="formdata.no_of_person"
              />
              <input type="text" name="school_id" :value="formdata.school_id" />
            </div>

            <button
              v-if="submit_button == false"
              @click="submitForm"
              type="button"
              class="btn btn-block submit-button btn-info p-3 font-weight-bold border-radius-0"
            >Confirm & Pay</button>

            <button v-else
              type="submit"
              class="btn btn-block submit-button btn-info p-3 font-weight-bold border-radius-0"
            >
              Confirm & Pay
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="mobile m-0 p-0">
      <div class="row bg-white text-center">
        <div
          class="col pt-4 pb-2 link font-weight-bold"
          @click="activate(0)"
          :class="{ active: mobile.active_el == 0 }"
        >
          Payment info
        </div>
        <div
          class="col pt-4 pb-2 link font-weight-bold"
          @click="activate(1)"
          :class="{ active: mobile.active_el == 1 }"
        >
          Billing info
        </div>
        <div
          class="col pt-4 pb-2 link font-weight-bold"
          @click="activate(2)"
          :class="{ active: mobile.active_el == 2 }"
        >
          Shipping info
        </div>
      </div>
      <div class="p-1 pt-3">
        <payment-card
          v-if="mobile.active_el == 0"
          :amount="amount"
        ></payment-card>

        <div v-if="mobile.active_el == 1">
          <h5 class="pl-1">Billing Information</h5>
          <billing-form @update="billingUpdate"></billing-form>
        </div>

        <div v-if="mobile.active_el == 2" class="min-height-90">
          <p class="mt-3 pl-1">
            <label for="mobile-checkbox"
              ><input
                type="checkbox"
                id="mobile-checkbox"
                @click="toggleShipping"
              />
              <small
                >My billing and shipping address are different</small
              ></label
            >
          </p>
          <div v-if="shipping_toggle">
            <h5 class="pl-1">Shipping Information</h5>
            <shipping-form @update="shippingUpdate"></shipping-form>
          </div>
        </div>
      </div>

      <form class="form" method="POST" action="/payment">
        <div class="d-none">
          <input
            type="text"
            name="billing_customer_name"
            :value="formdata.billing_customer_name"
          />

          <input
            type="text"
            name="billing_name"
            :value="formdata.billing_name"
          />
          <input
            type="text"
            name="billing_address"
            :value="formdata.billing_address"
          />
          <input
            type="text"
            name="billing_city"
            :value="formdata.billing_city"
          />
          <input
            type="text"
            name="billing_state"
            :value="formdata.billing_state"
          />
          <input
            type="text"
            name="billing_country"
            :value="formdata.billing_country"
          />
          <input
            type="text"
            name="billing_zip"
            :value="formdata.billing_zip"
          />
          <input type="text" name="billing_tel" :value="formdata.billing_tel" />
          <input
            type="text"
            name="billing_email"
            :value="formdata.billing_email"
          />

          <input
            type="text"
            name="shipping_name"
            :value="formdata.delivery_name"
          />
          <input
            type="text"
            name="shipping_address"
            :value="formdata.delivery_address"
          />
          <input
            type="text"
            name="shipping_city"
            :value="formdata.shipping_city"
          />
          <input
            type="text"
            name="shipping_state"
            :value="formdata.shipping_state"
          />
          <input
            type="text"
            name="shipping_country"
            :value="formdata.shipping_country"
          />
          <input
            type="text"
            name="shipping_zipcode"
            :value="formdata.shipping_zipcode"
          />
          <input
            type="text"
            name="shipping_tel"
            :value="formdata.shipping_tel"
          />
          <input
            type="text"
            name="shipping_email"
            :value="formdata.shipping_email"
          />

          <input type="text" name="user_id" :value="formdata.user_id" />
          <input type="text" name="travel_code" :value="formdata.travel_code" />
          <input type="text" name="tour_id" :value="formdata.tour_id" />
          <input type="text" name="tour_price" :value="formdata.tour_price" />
          <input type="text" name="added_by" :value="formdata.added_by" />
          <input
            type="text"
            name="no_of_person"
            :value="formdata.no_of_person"
          />
          <input type="text" name="school_id" :value="formdata.school_id" />
        </div>

        <button
          v-if="submit_button == false"
          @click="submitForm"
          type="button"
          class="btn btn-block submit-button btn-info p-3 font-weight-bold mt-3 border-radius-0"
        >
          Confirm & Pay
        </button>

        <button
          v-else
          type="submit"
          class="btn btn-block submit-button btn-info p-3 font-weight-bold mt-3 border-radius-0"
        >
          Confirm & Pay
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import BillingForm from "@/front/components/form/payment/BillingForm.vue";
import ShippingForm from "@/front/components/form/payment/ShippingForm.vue";
import PaymentCard from "@/front/components/form/payment/StudentPaymentCard.vue";
export default {
  components: {
    BillingForm,
    PaymentCard,
    ShippingForm,
  },
  data() {
    return {
      shipping_toggle: false,
      form: {
        billing: {},
        shipping: {},
      },
      mobile: {
        active_el: 0,
      },
      validated: false,
      submit_button: false,
      formdata: {
        billing_customer_name: "",
        billing_name: "",
        billing_address: "",
        billing_city: "",
        billing_state: "",
        billing_zip: "",
        billing_country: "",
        billing_tel: "",
        billing_email: "",
        delivery_name: "",
        delivery_address: "",
        delivery_city: "",
        delivery_state: "",
        delivery_zipcode: "",
        delivery_country: "",
        delivery_tel: "",
        delivery_email: "",
        user_id: "",
        travel_code: "",
        tour_id: "",
        school_id: "",
        added_by: "",
        tour_price: "",
        no_of_person: "",
      },
      amount: 0,
    };
  },
  created() {
    if (this.$cookies.get("payment-data") == null) {
      this.$router.push("/");
    }
    var data = this.$cookies.get("payment-data");
    this.amount = parseInt(data.tour_price);
    this.formdata.user_id = data.user_id;
    this.formdata.travel_code = data.travel_code;
    this.formdata.tour_id = data.tour_id;
    this.formdata.school_id = data.school_id;
    this.formdata.added_by = data.added_by;
    this.formdata.tour_price = data.tour_price;
    this.formdata.no_of_person = data.no_of_person;
  },

  methods: {
    activate(nav_number) {
      this.mobile.active_el = nav_number;
    },
    billingUpdate(value) {
      this.form.billing = value;
      this.billingFormat();
    },
    shippingUpdate(value) {
      this.form.shipping = value;
      this.shippingFormat();
    },
    toggleShipping() {
      this.shipping_toggle = !this.shipping_toggle;
    },
    submitForm() {
      var billing = this.form.billing;
      if (billing.billing_name == undefined) {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill Billing  fields",
        });
        return false;
      }
      for (const field in billing) {
        if (billing[field] == "") {
          this.$swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill Billing  fields",
          });
          return false;
        }
      }
    },
    billingFormat() {
      for (const field in this.form.billing) {
        if (this.form.billing[field] == "") {
          return false;
        }
      }
      this.formdata.billing_customer_name = this.form.billing.billing_customer_name;
      this.formdata.billing_name = this.form.billing.billing_name;
      this.formdata.billing_address = this.form.billing.billing_address;
      this.formdata.billing_city = this.form.billing.billing_city;
      this.formdata.billing_state = this.form.billing.billing_state;
      this.formdata.billing_zip = this.form.billing.billing_zip;
      this.formdata.billing_country = this.form.billing.billing_country;
      this.formdata.billing_tel = this.form.billing.billing_tel;
      this.formdata.billing_email = this.form.billing.billing_email;
      this.submit_button = true;
    },
    shippingFormat() {
      this.formdata.delivery_name = this.form.shipping.delivery_name;
      this.formdata.delivery_name = this.form.shipping.delivery_name;
      this.formdata.delivery_address = this.form.shipping.delivery_address;
      this.formdata.delivery_city = this.form.shipping.delivery_address;
      this.formdata.delivery_state = this.form.shipping.delivery_state;
      this.formdata.delivery_zipcode = this.form.shipping.delivery_zipcode;
      this.formdata.delivery_country = this.form.shipping.delivery_country;
      this.formdata.delivery_tel = this.form.shipping.delivery_tel;
      this.formdata.delivery_email = this.form.shipping.delivery_email;
    },
  },
};
</script>