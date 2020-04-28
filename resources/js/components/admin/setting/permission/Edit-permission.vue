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
                  <form role="form" enctype="multipart/form-data" @submit.prevent="UpdateRole()">
                      <div class="row">        
                        <div class="col-sm-4">
                          <div class="form-group">
                              <label for="name">Permission name</label>
                              <input type="text" class="form-control" v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }"  placeholder="Enter School name">
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
              form: new Form({
                name:''                
                })
            }
        },
        created(){
          var url = `/api/permission/${this.$route.params.id}/edit`;
          axios.get(url).then((response)=>{
            setTimeout(() => $('#example').DataTable(), 1000);
            this.form.fill(response.data);
          });
        },
        methods:
        {
          UpdateRole() {
          // Submit the form via a itinerary request
          this.form.put(`/api/permission/${this.$route.params.id}`)
            .then((response)=>{
               this.$router.push(`/list-permission`)
                toast({
                    type: 'success',
                    title: 'Successfully Updated'
                })
              })
              .catch(()=>{

              })
          },
          goBack(){
            this.$router.push(`/list-permission`);
          },
        }
    }
</script>
<style scoped>
</style>  