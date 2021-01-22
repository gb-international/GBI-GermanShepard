<template>
    <div>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group m-1">
                    <label for="name">Shipping Name</label>
                    <input type="text" class="form-control" v-model="form.name">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group m-1">
                    <label for="address">Shipping Address</label>
                    <input type="text" class="form-control" v-model="form.address">
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-4">
                <div class="form-group m-1">
                    <label for="city">Shipping City</label>
                    <input type="text" class="form-control" v-model="form.city">
                </div>
            </div>
            
            <div class="col-sm-4">
                <div class="form-group m-1">
                    <label for="state">Shipping State</label>
                    <input type="text" class="form-control" v-model="form.state">
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group m-1">
                    <label for="zipcode">Shipping Zip Code</label>
                    <input type="number" class="form-control" v-model="form.zipcode">
                </div>
            </div>

        </div>
        <div class="row">
             <div class="col-sm-4">
                <div class="form-group m-1">
                    <label for="country">Shipping Country</label>
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
                    <label for="email">Shipping Email</label>
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
        'form.name':function(){ this.ShippingFormChanged(); },
        'form.address':function(){ this.ShippingFormChanged(); },
        'form.city':function(){ this.ShippingFormChanged(); },
        'form.state':function(){ this.ShippingFormChanged(); },
        'form.zipcode':function(){ this.ShippingFormChanged(); },
        'form.country':function(){ this.ShippingFormChanged(); },
        'form.phone_no':function(){ this.ShippingFormChanged(); },
        'form.email':function(){ this.ShippingFormChanged(); }
    },
    methods:{
        ShippingFormChanged(){
            this.$emit("update",this.form);
        }
    }
}
</script>