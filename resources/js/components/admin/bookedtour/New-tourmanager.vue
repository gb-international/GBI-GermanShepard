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
                <div class="tour_manager">
                  <form>
                    <div class="row">
                      <div class="col-sm-5">
                        <div class="form-group">
                          <label>TOUR MANAGER</label>
                          <select class="form-control" v-model.lazy="escort_id">
                            <option v-for="data in alldata" :value="data.id">{{ data.name }}</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label>SALARY PER DAY(INR)</label>
                          <p>{{ manager_data.salaryPerday }}/-</p>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <label>CONTACT NUMBER</label>
                        <p>{{ manager_data.phoneno }}</p>
                      </div>
                      <div class="col-sm-5">
                        <label>EMAIL ID</label>
                        <p>{{ manager_data.email }}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4"></div>
                      <div class="col-sm-4">
                        <button type="button" class="btn btn-default itrn_add_btn" @click="updateData">UPDATE</button>
                      </div>
                      <div class="col-sm-4"></div>
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
<script src="https://unpkg.com/xlsx/dist/xlsx.full.min.js"></script>
<script>

    export default {
        name: "List",
        data(){
          return{
            manager_data:'',
            escort_id:'',
          }
        },
// Get all the data
        created(){
           axios.get(`/tour_manager/${this.$route.params.id}`).then(response => {
            this.escort_id = response.data.escort;
          })
        },
        mounted(){
          this.$store.dispatch('getAllData','/api/escorts')
        },
        watch: {
          escort_id: function (value) {
            var path = `/api/escort/edit/`+value;
            axios.get(path).then(response => {
              this.manager_data = response.data;
            })
          }
        },
        computed:{
          alldata(){
            setTimeout(() => $('#example').DataTable(), 1000);
            return this.$store.getters.getAllData
          }
        },
// End the process of the the fetching data
       methods:
       {
        updateData(){
          var path = `/tour_manager_add/${this.$route.params.id}`;
          var data = {'escort':this.escort_id};
          axios.post(path, data).then(response => {
            console.log(response);
            toast({
              type: 'success',
              title: 'Successfully Updated !!!'
            })
          }).catch(error => {
            if (error.response.status === 422) {
              this.errors = error.response.data.errors || {};
            }
          });
        }       
       } 
    }


</script>