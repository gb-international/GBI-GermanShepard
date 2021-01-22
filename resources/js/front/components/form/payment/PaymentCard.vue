<template>
  <div class="payment-card-form">
    <div class="row">
      <div class="col-8">Basic Package Cost</div>
      <div class="col-4 text-right"><img src="/images/icons/rupee.png" />{{ amount }}</div>
    </div>
    <hr />

    <div class="row">
      <div class="col-8">Number of pax</div>
      <div class="col-4 text-right">{{ pax }}</div>
    </div>
    <hr />

    <div class="row">
      <div class="col-6">Total package cost</div>
      <div class="col-6 text-right">{{ pax }} * <img src="/images/icons/rupee.png" />{{ amount }}</div>
    </div>
    <hr />

    <div class="row">
      <div class="col-8">GBI COUPON CODE</div>
      <div class="col-4 text-right"><img src="/images/icons/rupee.png" />0</div>
    </div>
    <div class="input-group mt-3 mb-3">
      <input type="text" class="form-control" placeholder="GBI Coupon Code" />
      <div class="input-group-append">
        <span class="input-group-text bg-info text-white link">Apply</span>
      </div>
    </div>
    <hr />
    <div class="row pt-2 pb-2">
      <div class="col-8">
        <p
          class="m-0 link"
          @click="InernetCharge"
          title="Internet charges and tax"
        >
          <span class="internet-icon"><i class="fas fa-angle-up"></i></span>
          Internet handeling fee
        </p>
      </div>
      <div class="col-4 text-right">{{ internet_amount }}</div>
    </div>
    <div class="internet-charge pl-4 pt-2 pb-2" v-if="internet_charge">
      <p class="m-0">Booking Fees <span class="float-right"><img src="/images/icons/rupee.png" />{{ internet.fee}}</span></p>
      <p class="m-0">
        Central GST(CGST) @ 18% <span class="float-right"><img src="/images/icons/rupee.png" />{{ internet.gst }} </span>
      </p>
    </div>
    <hr />
    <div class="row total pt-2 pb-2">
      <div class="col-8">
        <p class="m-0 p-0 font-weight-bold">Grand Total</p>
        <small>(inclusive of all taxes)</small>
      </div>
      <div class="col-4 text-right"><img src="/images/icons/rupee.png" />49,595959</div>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        amount:{
            type:Number,
            required:true
        },
        pax:{
            type:Number,
            required:true
        }
    },
  data() {
    return {
      internet_charge: false,
      internet:{
          total:0,
          fee:0,
          gst:0,
      },
      gst:18,
      internet_fee:3,
    };
  },
  computed:{
      internet_amount:function(){
          this.internet.fee = (this.amount * this.internet_fee )/100;
          this.internet.gst = (this.internet.fee * this.gst )/100;
          return this.internet.total = this.internet.fee + this.internet.gst;
      }
  },
  methods: {
    InernetCharge() {
      this.internet_charge = !this.internet_charge;
    },
  },
};
</script>