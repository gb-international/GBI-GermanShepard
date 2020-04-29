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
          <div class="col-md-12 role_edit_permission">
            <form role="form" enctype="multipart/form-data" @submit.prevent="UpdateRole()">
              <div class="row">        
                <div class="col-sm-4">
                  <div class="form-group">
                      <label for="name">Role name</label>
                      <input type="text"  class="form-control" v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }"  placeholder="Enter School name">
                      <has-error :form="form" field="name"></has-error>
                  </div>
                </div>



                <div class="col-sm-8">
                  <div class="row">
                    <div class="col-sm-4" v-for="(permission,index) in permissions">                                 
                      <label class="form-check-label font-18 mb-20">
                        <input type="checkbox" name="checkbox" 
                        :value="permission.id" 
                        v-model="items[index].id" :true-value="permission.id"> {{ permission.name }}
                      </label> 
                      <hr>
                    </div>
                    
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
      permissions:[],
      has_permission:[],
      not_has_permission:[],
      items:[],
      form: new Form({
      name:'',
      permissions:'',              
      })
    }
  },
  created(){

    var url = `/api/role/${this.$route.params.id}/edit`;
    axios.get(url).then((response)=>{
      setTimeout(() => $('#example').DataTable(), 1000);
      this.form.fill(response.data);
      this.has_permission = response.data.permissions;
    });

    axios.get(`/api/permission`).then((response)=>{
      setTimeout(() => $('#example').DataTable(), 1000);
      this.permissions = response.data;

      for(var i=0;i<this.permissions.length; i++){
        this.items.push({id:this.permissions[i].id});
      }

      for(var j=0;j<this.items.length;j++){
        var get = 0;
        for(var i=0;i<this.has_permission.length;i++){
          if(this.items[j].id == this.has_permission[i].id){
            get = 1;
          }
        }
        if(get==0){
          this.items[j].id = false  ;
        }
      }
    });

  },
  methods:
  {
    UpdateRole() {
    // Submit the form via a itinerary request

    this.form.permissions = this.items;
    this.form.put(`/api/role/${this.$route.params.id}`)
      .then((response)=>{
         this.$router.push(`/list-role/`)
          toast({
              type: 'success',
              title: 'Successfully Updated'
          })
        })
        .catch(()=>{
        })
    },
    goBack(){
      this.$router.push(`/list-role/`);
    },
  }
}
</script>
<style scoped>
</style>  