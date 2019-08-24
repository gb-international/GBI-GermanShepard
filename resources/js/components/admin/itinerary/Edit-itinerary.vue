<!-- Edit itinerary template -->
<template>
    <section class="content">
      <!-- 
        These functions are helping to call the function of the computed to fill the form for editing the data 
      -->
      {{editData}}
      -{{transport_split}}
      <!-- 
          Don't Delete these two ........
       -->
        <div class="container-fluid">
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-12">
                  <h3 class="card-title">Update  Itinerary #{{ this.$route.params.itineraryid }}</h3>
                    <form role="form" enctype="multipart/form-data" @submit.prevent="updateItinerary()">
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="form-group">
                              <label for="sourceId">Source</label>
                              <input type="text" class="form-control" name="source" v-model="form.source" :class="{ 'is-invalid': form.errors.has('source') }" placeholder="Enter Source" >
                               <has-error :form="form" field="source"></has-error>
                          </div>
                        </div>
                        <div class="col-sm-4">
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
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="form-group">
                           <label for="tourtypeId">Tour Type</label>   
                               <div>
                                 
                                 <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input" id="NationalId" value="National" name="tourtype" v-model="form.tourtype">
                                    <label class="custom-control-label" for="NationalId">National</label>
                                  </div>

                                  <!-- Default inline 2-->
           ;                       <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" class="custom-control-input" value="International" id="InternationalId" name="tourtype" v-model="form.tourtype">
                                    <label class="custom-control-label" for="InternationalId">International</label>
                                  </div>
                               </div>
                              
                              <div class="error" v-if="form.errors.has('tourtype')">
                                {{ form.errors.get("tourtype") }}
                              </div>
                          </div>
                          
                        </div>
                          
                        <div class="col-sm-4">
                            <div class="form-group aligen_top_input">
                              <label for="hotel_type">Hotel Type</label><br>

                              <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="hotelRadio" value="3" name="hotel_type" v-model="form.hotel_type" :class="{ 'is-invalid': form.errors.has('hotel_type') }">
                                <label class="custom-control-label" for="hotelRadio">3 Star</label>
                              </div>
  
                              <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="hotelRadio1" name="hotel_type"  v-model="form.hotel_type" :class="{ 'is-invalid': form.errors.has('hotel_type') }" value="4">
                                <label class="custom-control-label" for="hotelRadio1">4 Star</label>
                              </div>

                              <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="hotelRadio2" name="hotel_type"  v-model="form.hotel_type" :class="{ 'is-invalid': form.errors.has('hotel_type') }" value="5">
                                <label class="custom-control-label" for="hotelRadio2">5 Star</label>
                              </div> 
                              <has-error :form="form" field="hotel_type"></has-error>
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
                        <div class="row">  
                        <div class="col-sm-12">
                          <div class="form-group">
                              <label for="titleId">Title</label>
                              <input type="text" class="form-control"  placeholder="Enter Title"  name="title" v-model="form.title" :class="{ 'is-invalid': form.errors.has('title') }">
                              <has-error :form="form" field="title"></has-error>
                          </div>
                        </div>
                      </div>
                        <div class="form-group">
                          <label for="descriptionId">Description</label>
                          <textarea class="form-control" placeholder="Enter Description"  id="descriptionId" rows="5" name="description" v-model="form.description" :class="{ 'is-invalid': form.errors.has('description') }"></textarea>
                          <has-error :form="form" field="description"></has-error>
                        </div>
                      

                      <div class="row">
                          <div class="col-sm-6">
                            <div class="form-group" >
                              <input @change = "changePhoto($event)" name="photo" type="file" :class="{ 'is-invalid': form.errors.has('photo') }">
                              <img :src="updateImage()" alt="" width="80" height="80">
                              <has-error :form="form" field="photo"></has-error>
                          </div>
                          </div>

                          <div class="col-sm-6">
                            <div class="form-group">
                              <input @change = "changeDetailPhoto($event)" name="detail_photo" type="file" :class="{ 'is-invalid': form.errors.has('detail_photo') }">
                                <img :src="updateDetailImage()" alt="" width="80" height="80">
                                <has-error :form="form" field="detail_photo"></has-error>
                            </div>
                          </div>
                      </div>

                      <div class="row">
                        <div class="col-sm-12 text-center">
                          <button type="submit" class="btn btn-primary itrn_add_btn">Update & Continue</button>
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
        name: "Edit",
        data(){
            return {
              // Create a new form instance
            
              transport_flight: false,
              transport_bus: false,
              transport_train: false,
              transport:'',
              form: new Form({
                source: '',
                destination: '',
                noofdays: '',
                title: '',
                description: '',
                tourtype: '',
                hotel_type: '',
                transport_type: '',
                photo:'',
                detail_photo:''
                })
            }
        },
        mounted(){
          this.$store.dispatch('getEditData',`/api/itinerary/edit/${this.$route.params.itineraryid}`)
        },
        computed:{
          // This function split the string of transport and convert it to the array
          transport_split: function () {
            // `this` points to the vm instance
            this.transport =  this.form.transport_type.split(' ');
          },

          // Get the data to the edit and fill the form with data to show in the form
          editData(){
            setTimeout(() => $('#example').DataTable(), 1000);
            this.form.fill(this.$store.getters.getEditData);// Fill the form with the data
            if(this.transport.indexOf('flight') >= 0){ // Check if the flight in the transport array
              this.transport_flight = true;
            }else{this.transport_flight = false;}
            if(this.transport.indexOf('train') >= 0){// Check if the Train in the transport array
              this.transport_train = true;
            }else{this.transport_train = false;}
            if(this.transport.indexOf('bus') >= 0){ // Check if the Bus in the transport array
              this.transport_bus = true;
            }else{this.transport_bus = false;}
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
            updateItinerary()
            {
                // Add transport to the transport type 
                this.form.transport_type = ' ';
                if(this.transport_flight == true){ // if flight is checked then add to the transport
                  this.form.transport_type += 'flight';
                }
                if(this.transport_train == true){ // if train is checked then add to the transport
                  this.form.transport_type += ' train';
                }
                if(this.transport_bus == true){ // if bus is checked then add to the transport
                  this.form.transport_type += ' bus';
                }
                localStorage.setItem("noofdays",this.form.noofdays);
                // Submit the form via a itinerary request
                this.form.post(`/api/itinerary/update/${this.$route.params.itineraryid}`)
                  .then((response)=>{
                      this.$router.push(`/edit-itineraryday/${this.$route.params.itineraryid}`)
                        toast({
                            type: 'success',
                            title: 'Itinerary Updated successfully'
                        })
                    })
                    .catch(()=>{
                    })
            },
             updateImage(){
                let img = this.form.photo;
                if(img.length>100){
                    return this.form.photo
                }else{
                    return `uploadimage/${this.form.photo}`
                }

            },
            updateDetailImage(){
              let img = this.form.detail_photo;
                if(img.length>100){
                    return  this.form.detail_photo
                }else{
                    return `uploadimage/${this.form.detail_photo}`
                }
            }
        }
    }
</script>