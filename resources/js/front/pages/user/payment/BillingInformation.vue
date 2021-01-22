<template>
    <div class="container" id="payment_information">
        <div class="desktop">
            <div class="row pt-4 pb-4">
                <div class="col-sm-8">
                    <h6>Billing Information</h6>
                    <billing-form @update="billingUpdate"></billing-form>

                    <p class="mt-3 pl-1"><label for="checkbox"><input type="checkbox" id="checkbox" @click="toggleShipping"> <small>My billing and shipping address are different</small></label></p>
                    
                    <div v-if="shippping_toggle">
                        <h6>Shipping Information</h6>
                        <shipping-form @update="shippingUpdate" />
                    </div>

                </div>
                <div class="col-sm-4 pl-4 pr-4">
                    <div class="payment-card">
                        <payment-card :pax="pax" :amount="amount"></payment-card>
                    </div>
                    <button type="button" class="btn btn-block submit-button btn-info p-2 font-weight-bold" @click="submitForm">Confirm & Pay</button>
                </div>
            </div>
        </div>

        <div class="mobile m-0 p-0">
            <div class="row bg-white text-center">
                <div class="col pt-4 pb-2 link font-weight-bold" @click="activate(0)" :class="{ active : mobile.active_el == 0 }">Payment info</div>
                <div class="col pt-4 pb-2 link font-weight-bold" @click="activate(1)" :class="{ active : mobile.active_el == 1 }">Billing info</div>
                <div class="col pt-4 pb-2 link font-weight-bold" @click="activate(2)" :class="{ active : mobile.active_el == 2 }">Shipping info</div>
            </div>
            <div class="p-1 pt-3">
                <payment-card v-if="mobile.active_el == 0" :amount="amount" :pax="pax"></payment-card>

                <div v-if="mobile.active_el == 1">
                    <h5 class="pl-1">Billing Information</h5>
                    <billing-form @update="billingUpdate"></billing-form>
                </div>

                <div v-if="mobile.active_el == 2" class="min-height-90">
                    <p class="mt-3 pl-1"><label for="mobile-checkbox"><input type="checkbox" id="mobile-checkbox" @click="toggleShipping"> <small>My billing and shipping address are different</small></label></p>
                    <div v-if="shippping_toggle">
                        <h5 class="pl-1">Shipping Information</h5>
                        <shipping-form @update="shippingUpdate"></shipping-form>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-block submit-button btn-info p-3 font-weight-bold mt-3 border-radius-0" @click="submitForm">Confirm & Pay</button>
        </div>


    </div>
</template>
<script>
import BillingForm from '@/front/components/form/payment/BillingForm.vue';
import ShippingForm from '@/front/components/form/payment/ShippingForm.vue';
import PaymentCard from '@/front/components/form/payment/PaymentCard.vue';
export default {
    components:{
        BillingForm,
        PaymentCard,
        ShippingForm,
    },
    data(){
        return{
            shippping_toggle:false,
            form:{
                billing:{},
                shipping:{}
            },
            mobile:{
                active_el:0,
            },
            amount:10000,
            pax:1,
        }
    },
    methods:{
        activate(nav_number){
            this.mobile.active_el = nav_number;
        },
        billingUpdate(value){
            this.form.billing = value;
        },
        shippingUpdate(value){
            this.form.shipping = value;
        },
        toggleShipping(){
            this.shippping_toggle = !this.shippping_toggle;
        },
        submitForm(){
            var billing = this.form.billing;
            for(const field in billing){
                if(billing[field] == ''){
                    this.$swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: "Please fill all the fields",
                    });
                    return false;
                }
            }
            console.log('hi');
        }
    },
}
</script>