<!-- 

This template helps us to create a new Account Sales  it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
    <section class="content">
        <div class="container-fluid">
      <!--************************************************
      Template Type: Send Itinerary To Sales Department.
      Author:@Ajay

      ****************************************************-->
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-12">
                    <form role="form" enctype="multipart/form-data" @submit.prevent="addAccount()">
                      <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="name">Itinerary ID </label>
                                <input type="text" class="form-control" v-model="form.itinerary_id" :class="{ 'is-invalid': form.errors.has('itinerary_id') }" name="itinerary_id" readonly="">
                                 <has-error :form="form" field="name"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="form-group">
                                <label for="position">Price</label>
                                <input type="number" class="form-control" v-model="form.price" :class="{ 'is-invalid': form.errors.has('price') }"  placeholder="Enter price" name="price" min="1">
                                <has-error :form="form" field="price"></has-error>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-sm-6">
                            <div class="form-group">
                                <label for="Location">SalesDep</label>
                                <select class="form-control" v-model="form.salesdp_id" :class="{ 'is-invalid': form.errors.has('price') }">
                                  <option v-for="sale in salesDp" :value="sale.id">{{ sale.name }}</option>
                                </select>
                                <has-error :form="form" field="salesdp_id"></has-error>
                            </div>                          
                          </div>

                        </div>

                        <div class="row">
                          <div class="col-sm-4"></div>
                          <div class="col-sm-4">
                            <div class="form-group text-center">
                              <button type="submit" class="btn btn-primary btn-block itrn_add_btn">Send</button>
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
      itineraryData:'',
      salesDp:'',
      form: new Form({
        itinerary_id: '',
        price: '',
        salesdp_id: '',
        })
    }
  },
  created(){
    this.form.itinerary_id = this.$route.params.id;
    axios.get(`api/members/salesman`).then(response => {
      this.salesDp = response.data; // add data to the itineraryData
    });
  },

  methods:{
    // Function to add the form data 
    addAccount(){
      this.form.post('/account/store')
        .then((response)=>{
          if(response.data == 'error'){
            swal.fire({
              title: 'opps',
              text: "Already Assigned to this Sales Dep",
              type: 'error',
            });
          }else{
            // this.$router.push('/itinerary-list')
              toast({
                  type: 'success',
                  title: 'Successfully Sent'
              })
          }// End if else part
             
          })
          .catch(()=>{
          })
    }
    // End the function
  }
}
</script>

<style scoped>

</style>