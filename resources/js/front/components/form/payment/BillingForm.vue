<template>
    <div>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group m-1">
                    <label for="name">Customer Name</label>
                    <input type="text" class="form-control" v-model="form.customer_name">
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group m-1">
                    <label for="name">Billing Name</label>
                    <input type="text" class="form-control" v-model="form.name">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group m-1">
                    <label for="address">Billing Address</label>
                    <input type="text" class="form-control" v-model="form.address">
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-4">
                <div class="form-group m-1">
                    <label for="city">Billing City</label>
                    <input type="text" class="form-control" v-model="form.city">
                </div>
            </div>
            
            <div class="col-sm-4">
                <div class="form-group m-1">
                    <label for="state">Billing State</label>
                    <input type="text" class="form-control" v-model="form.state">
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group m-1">
                    <label for="billing_zipcode">Billing Zip Code</label>
                    <input type="number" class="form-control" v-model="form.zipcode">
                </div>
            </div>

        </div>
        <div class="row">
             <div class="col-sm-4">
                <div class="form-group m-1">
                    <label for="country">Billing Country</label>
                    <input type="text" class="form-control" v-model="form.country">
                </div>
            </div>
        </div>
        
        <div class="row">
             <div class="col-sm-6">
                <div class="form-group m-1">
                    <label for="phone_no">Phone Number</label>
                    <input type="number" class="form-control" v-model="form.phone_no">
                </div>
            </div>

             <div class="col-sm-6">
                <div class="form-group m-1">
                    <label for="email">Billing Email</label>
                    <input type="email" class="form-control" v-model="form.email">
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                customer_name:'',
                name:'',
                address:'',
                city:'',
                state:'',
                zipcode:'',
                country:'',
                phone_no:'',
                email:''
            }
        }
    },
    watch:{
        'form.customer_name':function(){ this.BillingFormChanged(); },
        'form.name':function(){ this.BillingFormChanged(); },
        'form.address':function(){ this.BillingFormChanged(); },
        'form.city':function(){ this.BillingFormChanged(); },
        'form.state':function(){ this.BillingFormChanged(); },
        'form.zipcode':function(){ this.BillingFormChanged(); },
        'form.country':function(){ this.BillingFormChanged(); },
        'form.phone_no':function(){ this.BillingFormChanged(); },
        'form.email':function(){ this.BillingFormChanged(); }
    },
    methods:{
        BillingFormChanged(){
            this.$emit("update",this.form);
        }
    }
}
</script>