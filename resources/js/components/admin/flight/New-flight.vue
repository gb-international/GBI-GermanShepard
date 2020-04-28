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
                <div class="col-sm-6">
                  <div class="form-group">
                      <label for="code">Flight Code</label>
                      <input type="text" class="form-control" v-model="form.code" :class="{ 'is-invalid': form.errors.has('code') }"  placeholder="Enter Flight Number">
                      <has-error :form="form" field="code"></has-error>
                  </div>
                </div>
                  
                <div class="col-sm-6">
                  <div class="form-group">
                      <label for="name">Flight Name </label>
                      <input type="text" class="form-control"  placeholder="Enter Flight Name" v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }">
                      <has-error :form="form" field="name"></has-error>
                  </div>
                </div>
              </div>        

              <div class="row">
                <div class="col-sm-2">
                </div>
                <div class="col-sm-4">
                  <router-link :to="`/flight-list`" class="btn btn-primary itrn_add_btn back_btn">Back</router-link>
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
      form: new Form({
        code: '',
        name:'',
      })
    }
  },
  methods:
  {

    AddSchool()
    {
      // Submit the form via a itinerary request
      this.form.post('/api/flight')
        .then((response)=>{
             this.$router.push(`/flight-list/`)
              toast({
                  type: 'success',
                  title: 'School Added successfully'
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