<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <section class="content">
    <div class="container-fluid">
      <!--************************************************
        Template Type: Adding New Hotel
        Author:@Ajay

        ****************************************************-->

      <div class="row justify-content-around">
          <!-- left column -->
           <h3 class="card-title">Update  Hotel Detail #{{ this.$route.params.id }}</h3>
          <div class="col-md-12">
            <form role="form" enctype="multipart/form-data" @submit.prevent="UpdateHotel()">
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

                    <div class="col-sm-4">
                      <div class="form-group">
                          <label for="room">Rooms</label>
                          <input type="number" class="form-control" placeholder="Enter No. of Room in hotel"  id="room" name="room" v-model="form.room" :class="{ 'is-invalid': form.errors.has('room') }">
                          <has-error :form="form" field="room"></has-error>
                      </div>
                    </div>

                    <div class="col-sm-4">
                      <div class="form-group">
                          <label for="state">State</label>
                          <input type="text" class="form-control" placeholder="Enter State"  id="state" name="state" v-model="form.state" :class="{ 'is-invalid': form.errors.has('state') }">
                          <has-error :form="form" field="state"></has-error>
                      </div>
                    </div>

                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="city">City</label>
                        <input type="text" class="form-control" placeholder="Enter City"  id="city" name="city" v-model="form.city" :class="{ 'is-invalid': form.errors.has('city') }">
                          <has-error :form="form" field="city"></has-error>
                        </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="address">Address</label>
                        <input type="text" class="form-control" placeholder="Enter Address"  id="address" name="address" v-model="form.address" :class="{ 'is-invalid': form.errors.has('address') }">
                          <has-error :form="form" field="address"></has-error>
                        </div>
                    </div>                          
                  </div>

                  <div class="row">
                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="apai_single">APAI-Single (Price)</label>
                        <input type="text" class="form-control" placeholder="Enter apai_single"  id="apai_single" name="apai_single" v-model="form.apai_single" :class="{ 'is-invalid': form.errors.has('apai_single') }">
                          <has-error :form="form" field="apai_single"></has-error>
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="apai_double">APAI-Double (Price)</label>
                        <input type="text" class="form-control" placeholder="Enter apai_double"  id="apai_double" name="apai_double" v-model="form.apai_double" :class="{ 'is-invalid': form.errors.has('apai_double') }">
                          <has-error :form="form" field="apai_double"></has-error>
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="apai_triple">APAI-Triple (Price)</label>
                        <input type="text" class="form-control" placeholder="Enter apai_triple"  id="apai_triple" name="apai_triple" v-model="form.apai_triple" :class="{ 'is-invalid': form.errors.has('apai_triple') }">
                          <has-error :form="form" field="apai_triple"></has-error>
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="apai_quad">APAI-quad (Price)</label>
                        <input type="text" class="form-control" placeholder="Enter apai_quad"  id="apai_quad" name="apai_quad" v-model="form.apai_quad" :class="{ 'is-invalid': form.errors.has('apai_quad') }">
                          <has-error :form="form" field="apai_quad"></has-error>
                        </div>
                    </div>
                  </div>
<!-- MAPAI -->
                  <div class="row">
                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="mapai_single">MAPAI-Single (Price)</label>
                        <input type="text" class="form-control" placeholder="Enter mapai_single"  id="mapai_single" name="mapai_single" v-model="form.mapai_single" :class="{ 'is-invalid': form.errors.has('mapai_single') }">
                          <has-error :form="form" field="mapai_single"></has-error>
                        </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="mapai_double">MAPAI-Double (Price)</label>
                        <input type="text" class="form-control" placeholder="Enter mapai_double"  id="mapai_double" name="mapai_double" v-model="form.mapai_double" :class="{ 'is-invalid': form.errors.has('mapai_double') }">
                          <has-error :form="form" field="mapai_double"></has-error>
                        </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="mapai_triple">MAPAI-Triple (Price)</label>
                        <input type="text" class="form-control" placeholder="Enter mapai_triple"  id="mapai_triple" name="mapai_triple" v-model="form.mapai_triple" :class="{ 'is-invalid': form.errors.has('mapai_triple') }">
                          <has-error :form="form" field="mapai_triple"></has-error>
                        </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="mapai_quad">MAPAI-quad (Price)</label>
                        <input type="text" class="form-control" placeholder="Enter mapai_quad"  id="mapai_quad" name="mapai_quad" v-model="form.mapai_quad" :class="{ 'is-invalid': form.errors.has('mapai_quad') }">
                          <has-error :form="form" field="mapai_quad"></has-error>
                        </div>
                    </div>
                  </div>

<!-- CPAI -->
                  
                  <div class="row">
                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="cpai_single">CPAI-Single (Price)</label>
                        <input type="text" class="form-control" placeholder="Enter cpai_single"  id="cpai_single" name="cpai_single" v-model="form.cpai_single" :class="{ 'is-invalid': form.errors.has('cpai_single') }">
                          <has-error :form="form" field="cpai_single"></has-error>
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="cpai_double">CPAI-Double (Price)</label>
                        <input type="text" class="form-control" placeholder="Enter cpai_double"  id="cpai_double" name="cpai_double" v-model="form.cpai_double" :class="{ 'is-invalid': form.errors.has('cpai_double') }">
                          <has-error :form="form" field="cpai_double"></has-error>
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="cpai_triple">CPAI-Triple (Price)</label>
                        <input type="text" class="form-control" placeholder="Enter cpai_triple"  id="cpai_triple" name="cpai_triple" v-model="form.cpai_triple" :class="{ 'is-invalid': form.errors.has('cpai_triple') }">
                          <has-error :form="form" field="cpai_triple"></has-error>
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="cpai_quad">CPAI-quad (Price)</label>
                        <input type="text" class="form-control" placeholder="Enter cpai_quad"  id="cpai_quad" name="cpai_quad" v-model="form.cpai_quad" :class="{ 'is-invalid': form.errors.has('cpai_quad') }">
                          <has-error :form="form" field="cpai_quad"></has-error>
                      </div>
                    </div>
                  </div>


                  <div class="row">
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4">
                      <div class="form-group text-center">
                        <button type="submit" class="btn btn-primary btn-block itrn_add_btn">Update</button>
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
          state: '',
          city: '',
          room: '',
          phoneno: '',
          email: '',
          address:'',

          apai_single: '',
          apai_double: '',
          apai_triple: '',
          apai_quad: '',

          mapai_single: '',
          mapai_double: '',
          mapai_triple: '',
          mapai_quad: '',

          cpai_single: '',
          cpai_double: '',
          cpai_triple: '',
          cpai_quad: '',
          
          })
      }
    },
    created(){
      this.hotelData();
    },
    methods:
    {
      hotelData(){
        axios.get(`/api/hotel/${this.$route.params.id}/edit`).then((response)=>{
          this.form.fill(response.data);
        });
      },
      UpdateHotel() {
        // Submit the form via a itinerary request
        this.form.put(`/api/hotel/${this.$route.params.id}`)
          .then((response)=>{
             this.$router.push(`/hotel-list/`)
              toast({
                  type: 'success',
                  title: 'Successfully Updated'
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