<!--
This Template is for listing for the Escort profile using function to get the 
data from the api to display the data about the Escort from the backend .
-->
<template>
    <section class="content">
        <div class="row justify-content-around" >
            <div class="col-md-12">
              <div class="container container_admin_body">
                  <!-- Start Card -->
                  <table id="example" class="display table table-striped table-bordered nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>NAME<i class="fas fa-sort"></i></th>
                            <th>SALARY PEAR DAY <i class="fas fa-sort"></i></th>
                            <th>CONTACT NO <i class="fas fa-sort"></i></th>
                            <th>EMAIL <i class="fas fa-sort"></i></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="escort in alldata" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}">
                            <td class="sorting_1">{{escort.name}}</td>
                            <td>{{escort.salaryPerday}}</td>
                            <td>{{escort.phoneno}}</td>
                            <td>{{escort.email}}</td>
                        </tr>                 

                      </tbody>
                </table>
                </div>
                <!-- end -->
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
            oddclass:false,
            evenclass:true,
            escortData:{}
          }
        },
// Get all the data
        mounted(){
          this.$store.dispatch('getAllData','/api/escorts')
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

       getData(){
        // axios.get('/api/escorts')
        //   .then((response) => {
        //       this.escortData = response.data.data;
        //       // this.dataTable.rows.add(response.data).draw();
        //       setTimeout(() => $('#example').DataTable(), 1000);

        //   })
        //   .catch((error) => {
        //       if (error.response.status == 401) {                  
        //       }
        //   });
       },
        deleteItinerary(id){
        axios.get('/hotel/'+id)
        .then(()=>{
        this.$store.dispatch('getAllHotel')
        toast({
        type: 'success',
        title: 'Itinerary Deleted successfully'
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