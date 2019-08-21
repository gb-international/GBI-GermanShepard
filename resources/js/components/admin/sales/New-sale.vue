<!-- 

This template helps us to create a new Sales profile it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-12">
                    <form role="form" enctype="multipart/form-data" @submit.prevent="addSalesdp()">
                      <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" name="name" v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" placeholder="Enter Name" >
                                 <has-error :form="form" field="name"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="position">Position</label>
                                <input type="text" class="form-control" v-model="form.position" :class="{ 'is-invalid': form.errors.has('position') }"  placeholder="Enter Position" name="position">
                                <has-error :form="form" field="position"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="salary">Salary</label>
                                <input type="text" class="form-control" v-model="form.salary" :class="{ 'is-invalid': form.errors.has('salary') }"  placeholder="Enter salary" name="price">
                                <has-error :form="form" field="salary"></has-error>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="Location">Location</label>
                                <input type="text" class="form-control" v-model="form.location" :class="{ 'is-invalid': form.errors.has('location') }"  placeholder="Enter Location" name="location">
                                <has-error :form="form" field="location"></has-error>
                            </div>                          
                          </div>
                          <div class="col-sm-8">
                            <div class="form-group">
                                <label for="address">Address</label>
                                <input type="text" class="form-control"  placeholder="Enter Address"  name="address" v-model="form.address" :class="{ 'is-invalid': form.errors.has('address') }">
                                <has-error :form="form" field="address"></has-error>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="phoneno">Contact Number</label>
                                <input type="text" class="form-control"  placeholder="Enter Contact Number"  name="phoneno" v-model="form.phoneno" :class="{ 'is-invalid': form.errors.has('phoneno') }">
                                <has-error :form="form" field="phoneno"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" placeholder="Enter Email"  id="email" rows="5" name="email" v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }">
                                <has-error :form="form" field="email"></has-error>
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
                name: '',
                phoneno: '',
                email: '',
                address: '',
                salary: '',
                position: '',
                location: '',
                })
            }
        },
        methods:{
          // Function to add the form data 
          addSalesdp(){
            this.form.post('/api/salesdp/create')
              .then((response)=>{
                   this.$router.push(`/sales-department-list`)
                    toast({
                        type: 'success',
                        title: 'Sales Added successfully'
                    })
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