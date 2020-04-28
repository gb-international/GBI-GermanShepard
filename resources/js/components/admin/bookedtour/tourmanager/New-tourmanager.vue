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
                            <option v-for="data in escort_list" :value="data.id">{{ data.name }}</option>
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
                      <div class="col-sm-2"></div>
                      <div class="col-sm-4">
                        <div class="form-group text-center">
                          <button class="btn btn-primary itrn_add_btn" @click="goBack()">Back</button>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <button type="button" class="btn btn-default itrn_add_btn" @click="updateData">SUBMIT</button>
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
<script src="https://unpkg.com/xlsx/dist/xlsx.full.min.js"></script>
<script>

export default {
  name: "List",
  data(){
    return{
      manager_data:'',
      escort_id:'',
      tour:'',
      escort_list:[],
    }
  },
// Get all the data
  created(){
    this.escortData();
    this.tourData();         
  },
  watch: {
    escort_id: function (value) {
      var path = `/api/escort/`+value+`/edit/`;
      axios.get(path).then(response => {
        this.manager_data = response.data;
      })
    }
  },

  methods:{
    escortData(){
      setTimeout(() => $('#example').DataTable(), 1000);
      axios.get(`/api/escort`).then(response => {
        this.escort_list = response.data.data;
      })
    },
    tourData(){
      axios.get(`/api/tour/${this.$route.params.id}/edit`).then(response => {
        this.tour = response.data;
      })
    },
    updateData(){
      var path = `/api/bookedescorts`;
      if(this.escort_id == undefined){
        toast({
          type: 'error',
          title: 'Please Select Tour Manager !!!'
        })
        return false;
      }

      var data = {'escort_id':this.escort_id,'tour_id':this.tour.id,'tour_code':this.tour.tour_id};
      axios.post(path, data).then(response => {
        if(response.data == 1){
          toast({
            type: 'error',
            title: 'Tour Manager already going on this tour !!!'
          })
          return false;
        }

        toast({
          type: 'success',
          title: 'Successfully Updated !!!'
        })
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors || {};
        }
      });
    },
    goBack(){
        this.$router.push(`/booked-tour/${this.$route.params.id}`);
    },   
  } 
}


</script>