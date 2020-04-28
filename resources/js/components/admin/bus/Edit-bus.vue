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
        <div class="col-md-12">
          <form role="form" enctype="multipart/form-data" @submit.prevent="UpdateBus()">
              <div class="row">        
                  <div class="col-sm-4">
                    <div class="form-group">
                        <label for="company_name">Bus Company name</label>
                        <input type="text" class="form-control" v-model="form.company_name" :class="{ 'is-invalid': form.errors.has('company_name') }"  placeholder="Enter name">
                        <has-error :form="form" field="company_name"></has-error>
                    </div>
                  </div>
                  
                  <div class="col-sm-4">
                    <div class="form-group">
                        <label for="seater">Seater</label>
                        <select class="from-control" v-model="form.seater">
                          <option v-for="seat in seater" :value="seat">{{ seat }}</option>
                        </select>
                        <has-error :form="form" field="seater"></has-error>
                    </div>
                  </div>
                
                <div class="col-sm-4">
                  <div class="form-group">
                      <label for="seat_type">Seat type</label>
                      <select class="from-control" v-model="form.seat_type">
                          <option v-for="seat in seat_type" :value="seat">{{ seat }}</option>
                        </select>
                      <has-error :form="form" field="seat_type"></has-error>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="form-group">
                      <label for="price">Price</label>
                      <input type="text" class="form-control" placeholder="Enter price" rows="5" v-model="form.price" :class="{ 'is-invalid': form.errors.has('price') }">
                      <has-error :form="form" field="price"></has-error>
                  </div>
                </div>
                
              </div>

              <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-4">
                  <router-link :to="`/bus-list`" class="btn btn-primary itrn_add_btn back_btn">Back</router-link>
                </div>
                <div class="col-sm-4">
                  <div class="form-group text-center">
                    <button type="submit" class="btn btn-primary btn-block itrn_add_btn">UPDATE</button>
                  </div>
                </div>
                <div class="col-sm-2"></div>
              </div> 

            </form>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script>
export default {
  name: "New",
  data(){
    return {
      // Create a new form instance
      seater:[10,20,30,35,40,45,50],
      seat_type:['2*2', '3*2', 'Sigle seater', 'Multi seater'],
      form: new Form({
        company_name: '',
        seater:'',
        seat_type: '',
        price: '',
      })
    }
  },
  created(){
    this.editBus();
  },
  methods:
  {
    
    editBus(){
      axios.get(`/api/bus/${this.$route.params.id}/edit`).then((response)=>{
        setTimeout(() => $('#example').DataTable(), 1000);
        this.form.fill(response.data);
      });
    },
    UpdateBus() {
      // Submit the form via a itinerary request
      this.form.put(`/api/bus/${this.$route.params.id}`)
        .then((response)=>{
          console.log(response);
           this.$router.go(-1);
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