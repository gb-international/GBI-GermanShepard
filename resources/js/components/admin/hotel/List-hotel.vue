<!--
This Template is for listing for the Hotel profile using function to get the 
data from the api to display the data about the Hotel from the backend .
-->
<template>
    <section class="content">
      <!--************************************************
      Template Type: Hotel List
      Author:@Ajay

      ****************************************************-->
        <div class="row justify-content-around" >
            <div class="col-md-12">
              <div class="container container_admin_body">
                  <!-- Start Card -->
                  <table id="example" class="display table table-striped table-bordered nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>HOTEL NAME  <i class="fas fa-sort"></i></th>
                            <th>LOCATION  <i class="fas fa-sort"></i></th>
                            <th>TYPE  <i class="fas fa-sort"></i></th>
                            <th>CONTACT NO.  <i class="fas fa-sort"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="hotel in alldata" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}">
                            <td class="sorting_1">{{hotel.name}}</td>
                            <td>{{hotel.location}}</td>
                            <td>{{hotel.type}}</td>
                            <td>{{hotel.phoneno}}</td>
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
            hotelData:{}
          }
        },
// Get all the data
       mounted(){
          this.$store.dispatch('getAllData','/api/hotels')
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
        // axios.get('/api/hotels')
        //   .then((response) => {
        //       this.hotelData = response.data.data;
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