<!--
This Template is for listing for the Hotel profile using function to get the 
data from the api to display the data about the Hotel from the backend .
-->
<template>
    <section class="content">
      <!--************************************************
      Template Type: Reservation List
      Author:@Ajay

      ****************************************************-->
      <div class="row justify-content-around" >
        <div class="col-md-12">
          <div class="container container_admin_body">
            <div class="reservation">

              <!-- Table -->

                <form role="form" enctype="multipart/form-data" @submit.prevent="addFlight()">
                  <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label for="bus_id">Bus Company</label>
                          <select class="form-control" v-model="form.bus_id">
                              <option v-for="bus in bus_list" :value="bus.id">{{ bus.company_name }}</option>
                            </select>
                           <has-error :form="form" field="bus_id"></has-error>
                        </div>
                      </div>
                      
                      <div class="col-sm-4">
                        <div class="form-group">
                            <label for="source">Source</label>
                            <input type="text" class="form-control" v-model="form.source" :class="{ 'is-invalid': form.errors.has('source') }"  placeholder="Enter Source" name="source">
                            <has-error :form="form" field="source"></has-error>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                            <label for="destination">Destination</label>
                            <input type="text" class="form-control" v-model="form.destination" :class="{ 'is-invalid': form.errors.has('destination') }"  placeholder="Enter Destination" name="destination">
                            <has-error :form="form" field="destination"></has-error>
                        </div>
                      </div>
                



                    <div class="col-sm-4">
                      <div class="form-group">
                        <label for="departure">Departure</label>
                          <input type="datetime-local" class="form-control" v-model="form.departure" :class="{ 'is-invalid': form.errors.has('departure') }"  placeholder="Enter departure">
                        <has-error :form="form" field="departure"></has-error>
                      </div>
                    </div>

                    <div class="col-sm-4">
                      <div class="form-group">
                        <label for="arrival">Arrival</label>
                          <input type="datetime-local" class="form-control" v-model="form.arrival" :class="{ 'is-invalid': form.errors.has('arrival') }"  placeholder="Enter arrival">
                        <has-error :form="form" field="arrival"></has-error>
                      </div>
                    </div>                   

                    <div class="col-sm-4">
                      <div class="form-group">
                        <label for="price">Price</label>
                          <input type="number" class="form-control" v-model="form.price" :class="{ 'is-invalid': form.errors.has('price') }"  placeholder="Enter Price">
                        <has-error :form="form" field="price"></has-error>
                      </div>
                    </div>
                    
                    
                  </div>
                  <div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-4">
                      <div class="form-group text-center">
                          <button class="btn btn-primary itrn_add_btn" @click="goBack()">Back</button>
                        </div>
                    </div>
                    <div class="col-sm-4">
                      <button type="submit" class="btn btn-primary itrn_add_btn">SAVE</button>                    
                    </div>
                    <div class="col-sm-2"></div>
                  </div>                       
                </form>


            </div>
          </div>                          
        </div>
      </div>
      <p id="post"></p>
    </section>
    <!-- /.content -->
</template>
<script>

    export default {
        name: "List",
        data(){
          return{
            row_input:'',
            bus_list:'',
            tour:'',
            form: new Form({
              tour_id: '',
              tour_code: '',
              bus_id: '',
              source:'',
              destination:'',
              departure:'',
              arrival:'',
              price: '',
              })
          }
        },
// Get all the data
        created(){
          axios.get(`/api/bus`).then(response => {
            if(response.data){
              this.bus_list = response.data.data;
            }
          })

          axios.get(`/api/tour/${this.$route.params.id}/edit`).then(response => {
            this.tour = response.data;  
          })

        },
// End the process of the the fetching data
       methods:
       {
        addFlight(){
          var path = `/api/bookedbuses`;
          this.form.tour_id = this.$route.params.id;
          this.form.tour_code = this.tour.tour_id;
          // this.form.push({'tour_id':idid,'tour_code':this.tour.tour_id});
          this.form.post(path).then((response)=>{
            console.log(response);
              if(response.data == 1){
                toast({
                  type: 'error',
                  title: 'Already Booked !!!'
                })
              return false;
              }
               // this.$router.push(`/hotel-list/`)
                toast({
                    type: 'success',
                    title: 'Flight Added successfully'
                })
            })
            .catch(()=>{

            })
        },
        goBack(){
          this.$router.push(`/booked-tour/${this.$route.params.id}`);
        }, 
       } 
    }
</script>