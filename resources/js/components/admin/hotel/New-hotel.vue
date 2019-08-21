<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-12">
                    <form role="form" enctype="multipart/form-data" @submit.prevent="addHotel()">
                      <div class="row">
                        
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="name">Hotel Name</label>
                                <input type="text" class="form-control" v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }"  placeholder="Enter Hotel Name" name="hotelName">
                                <has-error :form="form" field="name"></has-error>
                            </div>
                          </div>

                          <div class="col-sm-4">
                            <div class="form-group aligen_top_input">
                              <label for="type">Hotel Type</label><br>
                                <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="hotelRadio" name="type" v-model="form.type" :class="{ 'is-invalid': form.errors.has('type') }" value="3">
                                <label class="custom-control-label" for="hotelRadio">3 Star</label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="hotelRadio1" name="type"  v-model="form.type" :class="{ 'is-invalid': form.errors.has('type') }" value="4">
                                <label class="custom-control-label" for="hotelRadio1">4 Star</label>
                              </div> 
                              <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="hotelRadio2" name="type"  v-model="form.type" :class="{ 'is-invalid': form.errors.has('type') }" value="5">
                                <label class="custom-control-label" for="hotelRadio2">5 Star</label>
                              </div> 
                              <has-error :form="form" field="type"></has-error>
                            </div>
                          </div>
                          
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="location">Location</label>
                                <input type="text" class="form-control" v-model="form.location" :class="{ 'is-invalid': form.errors.has('location') }"  placeholder="Enter Location" name="location">
                                <has-error :form="form" field="location"></has-error>
                            </div>                          
                          </div>

                        </div>
                        <div class="row">
                          
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="mealType">Meal Type</label>
                                <input type="text" class="form-control"  placeholder="Enter Meal Type"  name="mealType" v-model="form.mealType" :class="{ 'is-invalid': form.errors.has('mealType') }">
                                <has-error :form="form" field="mealType"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="price">Price</label>
                                <input type="text" class="form-control"  placeholder="Enter price"  name="price" v-model="form.price" :class="{ 'is-invalid': form.errors.has('price') }">
                                <has-error :form="form" field="price"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="phoneno">Contact Number</label>
                                <input type="text" class="form-control"  placeholder="Enter Contact Number"  name="phoneno" v-model="form.phoneno" :class="{ 'is-invalid': form.errors.has('phoneno') }">
                                <has-error :form="form" field="phoneno"></has-error>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" placeholder="Enter Email"  id="email" rows="5" name="email" v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }">
                                <has-error :form="form" field="email"></has-error>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-4"></div>
                          <div class="col-sm-4">
                            <div class="form-group text-center">
                              <button type="submit" class="btn btn-primary btn-block itrn_add_btn">SAVE</button>
                            </div>
                          </div>
                          <div class="col-sm-4"></div>
                        </div>                        
                    </form>
                </div>
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>
</template>

<script>
   export default {
        name: "New",
        data(){
            return {
              // Create a new form instance
              form: new Form({
                type: '',
                name: '',
                location: '',
                price: '',
                phoneno: '',
                email: '',
                mealType:'',
                })
            }
        },
        methods:
        {

            changePhoto(event){
                let file = event.target.files[0];

                 if(file.size>1048576){
                     swal({
                         type: 'error',
                         title: 'Oops...',
                         text: 'Something went wrong!',
                         footer: '<a href>Why do I have this issue?</a>'
                     })
                 }else{
                     let reader = new FileReader();
                     reader.onload = event => {
                         this.form.photo = event.target.result
                         console.log(event.target.result)
                     };
                     reader.readAsDataURL(file);
                 }

            },
            addHotel()
            {
                // Submit the form via a itinerary request
                this.form.post('/api/hotel/create')
                  .then((response)=>{
                       this.$router.push(`/hotel-list/`)
                        toast({
                            type: 'success',
                            title: 'Hotel Added successfully'
                        })
                    })
                    .catch(()=>{

                    })
            }
        }
    }
</script>

<style scoped>

</style>