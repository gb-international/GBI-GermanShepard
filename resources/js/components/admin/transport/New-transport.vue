<!-- 

This template helps us to create a new Transport it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-12">
                    <form role="form" enctype="multipart/form-data" @submit.prevent="addTransport()">
                      <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group aligen_top_input">
                              <label for="transType">Transport Type</label><br>
                                <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="hotelRadio" name="transType" v-model="form.transType" :class="{ 'is-invalid': form.errors.has('transType') }" value="flight">
                                <label class="custom-control-label" for="hotelRadio">Flight</label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="hotelRadio1" name="transType"  v-model="form.transType" :class="{ 'is-invalid': form.errors.has('transType') }" value="bus">
                                <label class="custom-control-label" for="hotelRadio1">Bus</label>
                              </div> 
                              <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="hotelRadio2" name="transType"  v-model="form.transType" :class="{ 'is-invalid': form.errors.has('transType') }" value="train">
                                <label class="custom-control-label" for="hotelRadio2">Train</label>
                              </div> 
                              <has-error :form="form" field="transType"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="transName">Transport Name</label>
                                <input type="text" class="form-control" v-model="form.transName" :class="{ 'is-invalid': form.errors.has('transName') }"  placeholder="Enter Transport Name" name="transName">
                                <has-error :form="form" field="transName"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="transLocation">Location</label>
                                <input type="text" class="form-control" v-model="form.transLocation" :class="{ 'is-invalid': form.errors.has('transLocation') }"  placeholder="Enter transLocation" name="transLocation">
                                <has-error :form="form" field="transLocation"></has-error>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="transPrice">Price</label>
                                <input type="text" class="form-control"  placeholder="Enter transPrice"  name="transPrice" v-model="form.transPrice" :class="{ 'is-invalid': form.errors.has('transPrice') }">
                                <has-error :form="form" field="transPrice"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="transContact">Contact Number</label>
                                <input type="text" class="form-control"  placeholder="Enter Contact Number"  name="transContact" v-model="form.transContact" :class="{ 'is-invalid': form.errors.has('transContact') }">
                                <has-error :form="form" field="transContact"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="transEmail">Email</label>
                                <input type="email" class="form-control" placeholder="Enter transEmail"  id="transEmail" rows="5" name="transEmail" v-model="form.transEmail" :class="{ 'is-invalid': form.errors.has('transEmail') }">
                                <has-error :form="form" field="transEmail"></has-error>
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
                transType: '',
                transName: '',
                transLocation: '',
                transPrice: '',
                transContact: '',
                transEmail: ''
                })
            }
        },
        methods:
        {
            addTransport()
            {
                // Submit the form via a itinerary request
                this.form.post('/api/transport/create')
                  .then((response)=>{
                       this.$router.push(`/transport-list`)
                        toast({
                            type: 'success',
                            title: 'Transport Added successfully'
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