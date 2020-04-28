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
                  
                  <form role="form" enctype="multipart/form-data" @submit.prevent="AddSchool()">
                      <div class="row">        
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="country_name">Country name</label>

                                <select class="form-control"  v-model.lazy="country_name">
                                  <option v-for="data in country_list" :value="data.name">{{ data.name }}</option>
                                </select>
                                <has-error :form="form" field="country_name"></has-error>
                            </div>
                          </div>
                          
                          <div class="col-sm-8">
                            <div class="form-group">
                                <label for="name">City Name</label>
                                <input type="text" class="form-control"  placeholder="Enter City Name" v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }">
                                <has-error :form="form" field="name"></has-error>
                            </div>
                          </div>                        
                      </div>

                      <div class="row">
                        <div class="col-sm-2"></div>
                        <div class="col-sm-4">
                          <div class="form-group text-center">
                            <button class="btn btn-primary itrn_add_btn" @click="goBack()">Back</button>
                            <!-- <router-link :to="`/list-city`">Back</router-link> -->
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="form-group text-center">
                            <button type="submit" class="btn btn-primary btn-block itrn_add_btn">SUBMIT</button>
                          </div>
                        </div>
                        <div class="col-sm-2"></div>
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
      country_list:[],
      country_name:0,
      form: new Form({
        country_name:'',
        name:'',
      })
    }
  },
  created(){
    this.countryList();
  },
  methods:
  {
    countryList(){
      axios.get('/api/country').then((response)=>{
        this.country_list = response.data;
      });
    },

    AddSchool()
    {
        // Submit the form via a itinerary request
       if(this.school_name == 0){
          toast({
            type: 'error',
            title: 'Please Select Country !!!'
          })
          return false;
        }

        this.form['country_name'] = this.country_name;
        var path = `/api/city`;
        this.form.post(path).then(response => {
          this.form.name = '';
          toast({
            type: 'success',
            title: 'Successfully Updated !!!'
          })
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
    },

    goBack(){
      this.$router.push(`/list-city/`);
    },
  }
}
</script>

<style scoped>

</style>  
  