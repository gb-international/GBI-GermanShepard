<!-- add new days itinerary template -->
<template>
    <section class="content">
        <div class="container-fluid">
      <!--
      ************************************************
      Template Type: Add New Itinerary Day information
      Author:@Ajay

      ****************************************************
      -->
      <!-- 
          These two codes which are helping to fill the data in the form
       -->
      {{editData}}
      {{data_split}}
      <!-- 
          End here for the filling the data in the form
       -->
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-12">
                       <div class="row itinerary_day_record">
                         <div class="col-sm-4">
                           <h5>Source</h5>
                           <p>Enter Source</p>
                         </div>
                          <div class="col-sm-8">
                           <h5>Destination</h5>
                           <p>Enter Destination</p>
                         </div>
                       </div>
                       <form role="form" enctype="multipart/form-data" @submit="addItineraryday">
                        <div class="card-body">
                          <div class="rows">
                            <!-- If step would be less than the index then it would be running -->
                              <div v-if="step <= index+1">
                                <h3>Day {{ index+1 }}</h3>
                                <div class="row">
                                  <div class="col-sm-6">

                                    <div class="form-group">
                                      <label for="titleId">Source {{ index+1 }}</label>
                                      <input type="text" class="form-control" placeholder="Enter Source"  name="daysource[]"  v-model="daysource[index]" :class="{ 'is-invalid': form.errors.has('daysource') }" required="">
                                      <has-error :form="form" field="daysource"></has-error>
                                    </div>
                                  </div>
                                  <div class="col-sm-6">
                                    <div class="form-group">
                                      <label for="titleId">Destination {{ index+1 }}</label>
                                      <input type="text" class="form-control" placeholder="Enter Destination"  name="daydestination[]"  v-model="daydestination[index]" :class="{ 'is-invalid': form.errors.has('daydestination') }" required="">
                                      <has-error :form="form" field="daydestination"></has-error>
                                    </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                    <label for="descriptionId">Description {{ index+1 }}</label>
                                    <textarea class="form-control" placeholder="Enter Description"  rows="6" name="daydescription[]" v-model="daydescription[index]"  :class="{ 'is-invalid': form.errors.has('daydescription') }" required=""></textarea>
                                    <has-error :form="form" field="daydescription"></has-error>
                                </div>
                                <div class="form-group text-center">
                                    <button v-if="index+1 > 1" class="btn btn-primary itrn_add_btn" @click.prevent="prev()">Previous</button>
                                   <button v-if="form.noofdays != index+1" class="btn btn-primary itrn_add_btn" @click.prevent="next()">Next</button>
                                    
                                     <button v-if="form.noofdays == index+1" class="btn btn-primary itrn_add_btn" type="submit">Save</button>
                                </div>
                              
                              </div>
                          </div>
                        </div>
                      </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
   export default {
      name: "Newdayitinerary",
        data(){
            return {
            // Create a new form instance
             step:1,
             index:0,
             totaldata:[],
             daysource: [],
             daydestination:[],
             daydescription: [],

              form: new Form({
                noofdays: '',	
                id: '',
                daysource : this.daysource,  
                daydestination: this.daydestination,
                daydescription: this.daydescription
                })
            }
        },
        mounted(){
          this.$store.dispatch('getEditData',`/api/itineraryday/edit/${this.$route.params.itineraryid}`)
        },
        computed:{
          data_split: function () {
            // `this` points to the vm instance
            this.daydestination =  this.totaldata.day_destination.split(',');
            this.daysource =  this.totaldata.day_source.split(',');
            this.daydescription =  this.totaldata.day_description.split(',,');
          },

          editData(){
            setTimeout(() => $('#example').DataTable(), 1000);
            this.totaldata = this.$store.getters.getEditData;
            
            this.form.noofdays = localStorage.getItem("noofdays");
          }
        },
        methods:
        {
           prev() {
              this.step--;
              this.index--;
            },
            next() {
              this.step++;
              this.index++;
            },
             addItineraryday(e)
            {
               // Submit the form via a itinerary request
                e.preventDefault();
                let currentObj = this;
                 axios.post(`/api/itineraryday/update/${this.$route.params.itineraryid}`, {
                    day_source: this.daysource,
                    day_destination:this.daydestination,
                    day_description: this.daydescription
                })
                .then(function (response) {
                    currentObj.$router.push('/itinerary-list')
                        toast({
                            type: 'success',
                            title: 'ItineraryDay Updated successfully'
                        })
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            },
        }
    }
</script>