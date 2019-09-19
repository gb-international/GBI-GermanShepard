<!-- 

This template helps us to create a new Itinerary it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
    <section class="content">
        <div class="container-fluid">
      <!--************************************************

      Template Type: Add New Itinerary
      Author:@Ajay

      ****************************************************-->
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-12">
                    <form role="form" enctype="multipart/form-data" @submit.prevent="addItinerary()">
                      <div class="row">
                        <div class="col-sm-4">
                          <!-- Source for the ititnerary  -->
                            <div class="form-group">
                                <label for="sourceId">Source</label>
                                <input type="text" class="form-control" name="source" v-model="form.source" :class="{ 'is-invalid': form.errors.has('source') }" placeholder="Enter Source" >
                                 <has-error :form="form" field="source"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <!-- Desctiantion for the itinerary -->
                            <div class="form-group">
                                <label for="destinationId">Destination</label>
                                <input type="text" class="form-control" v-model="form.destination" :class="{ 'is-invalid': form.errors.has('destination') }"  placeholder="Enter Destination" name="destination">
                                <has-error :form="form" field="destination"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="noofdaysId">Number Of Days</label>
                                <input type="text" class="form-control" v-model="form.noofdays" :class="{ 'is-invalid': form.errors.has('noofdays') }"  placeholder="Enter Number Of Days" name="noofdays">
                                <has-error :form="form" field="noofdays"></has-error>
                            </div>
                          </div>
                        </div>
                        <!-- Adding toure type and transport, hotel type to the itinerary -->
                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-group">
                             <label for="tourtypeId">Tour Type</label>                             
                                <div>
                                  <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input" id="NationalId" value="National" name="tourtype"  v-model="form.tourtype">
                                    <label class="custom-control-label" for="NationalId">National</label>
                                  </div>

                                  <!-- Default inline 2-->
                                  <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input" value="International" id="InternationalId" name="tourtype" v-model="form.tourtype">
                                    <label class="custom-control-label" for="InternationalId">International</label>
                                  </div>
                                </div>
                                <div class="error" v-if="form.errors.has('tourtype')">
                                  <lable class="danger">{{ form.errors.get("tourtype") }}</lable>
                                </div>
                            </div>
                          
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group aligen_top_input">
                              <label for="hoteltype">Hotel Type</label><br>
                                <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="hotelRadio" name="hoteltype" v-model="form.hoteltype" :class="{ 'is-invalid': form.errors.has('hoteltype') }" value="3">
                                <label class="custom-control-label" for="hotelRadio">3 Star</label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="hotelRadio1" name="hoteltype"  v-model="form.hoteltype" :class="{ 'is-invalid': form.errors.has('hoteltype') }" value="4">
                                <label class="custom-control-label" for="hotelRadio1">4 Star</label>
                              </div> 
                              <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="hotelRadio2" name="hoteltype"  v-model="form.hoteltype" :class="{ 'is-invalid': form.errors.has('hoteltype') }" value="5">
                                <label class="custom-control-label" for="hotelRadio2">5 Star</label>
                              </div> 
                              <has-error :form="form" field="hoteltype"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label for="mode_of_transport">Mode of Transport</label><br>
                              <div class="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" class="custom-control-input" id="transport" name="transport"  v-model="transport_flight" value="flight">
                                <label class="custom-control-label" for="transport">Flight</label>
                              </div>

                              <div class="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" class="custom-control-input" id="transport1" name="transport"  v-model="transport_bus" value="bus">
                                <label class="custom-control-label" for="transport1">Bus</label>
                              </div>

                              <div class="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" class="custom-control-input" id="transport2" name="transport" v-model="transport_train" value="train">
                                <label class="custom-control-label" for="transport2">Train</label>
                              </div>
                              <has-error :form="form" field="transport"></has-error>
                            </div>
                          </div>
                        </div>
                        <!-- Title and description for the itinerary -->
                        <div class="row">
                          <div class="col-sm-12">
                            <div class="form-group">
                                <label for="titleId">Title</label>
                                <input type="text" class="form-control"  placeholder="Enter Title"  name="title" v-model="form.title" :class="{ 'is-invalid': form.errors.has('title') }">
                                <has-error :form="form" field="title"></has-error>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-12">
                            <div class="form-group">
                                <label for="descriptionId">Description</label>
                                <textarea class="form-control" placeholder="Enter Description"  id="descriptionId" rows="5" name="description" v-model="form.description" :class="{ 'is-invalid': form.errors.has('description') }"></textarea>
                                <has-error :form="form" field="description"></has-error>
                            </div>
                          </div>
                        </div>
                        <!-- Adding photo for the itinerary -->
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="form-group" >
                                <input @change = "changePhoto($event)" name="photo" type="file" :class="{ 'is-invalid': form.errors.has('photo') }">
                                <img :src="form.photo" alt="" width="80" height="80">
                                <has-error :form="form" field="photo"></has-error>
                            </div>
                          </div>

                          <div class="col-sm-6">
                            <div class="form-group">
                              <input @change = "changeDetailPhoto($event)" name="detail_photo" type="file" :class="{ 'is-invalid': form.errors.has('detail_photo') }">
                                <img :src="form.detail_photo" alt="" width="80" height="80">
                                <has-error :form="form" field="detail_photo"></has-error>
                            </div>
                          </div>
                        </div>

                        <div class="row text-center">
                          <div class="col-sm-12">
                            <div class="form-group">
                              <button type="submit" class="btn btn-primary itrn_add_btn">SAVE & CONTINUE</button>
                            </div>
                          </div>
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

                transport_flight: '',
                transport_bus: '',
                transport_train: '',
              form: new Form({
                source: '',
                destination: '',
                noofdays: '',
                title: '',
                description: '',
                tourtype: '',
                hoteltype: '',
                transport_type: '',
                photo:'',
                detail_photo:''
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
                     };
                     reader.readAsDataURL(file);
                 }
            },
            changeDetailPhoto(event){
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
                         this.form.detail_photo = event.target.result
                     };
                     reader.readAsDataURL(file);
                 }
            },
            addItinerary()
            {
                // Add transport to the transport type 
                if(this.transport_flight == true){ // if flight is checked then add to the transport
                  this.form.transport_type += 'flight';
                }
                if(this.transport_train == true){ // if train is checked then add to the transport
                  this.form.transport_type += ' train';
                }
                if(this.transport_bus == true){ // if bus is checked then add to the transport
                  this.form.transport_type += ' bus';
                }
                 // Set noofdays in the local storage to make it avaliable to the daypage....
                localStorage.setItem("noofdays",this.form.noofdays);
                // Submit form 
                this.form.post('/api/itinerary/create')
                  .then((response)=>{
                       this.$router.push(`/add-days-itinerary/${response.data.id}`)
                        toast({
                            type: 'success',
                            title: 'Itinerary Added successfully'
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