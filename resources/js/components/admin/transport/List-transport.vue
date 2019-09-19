<!--
This Template is for listing for the Transport profile using function to get the 
data from the api to display the data about the transport from the backend .
-->
<template>
    <section class="content">
      
      <!--************************************************
      Template Type: Transport List
      Author:@Ajay

      ****************************************************-->

        <div class="row justify-content-around" >
            <div class="col-md-12">
              <div class="container container_admin_body">
                  <!-- Start Card -->
                  <table id="example" class="display table table-striped table-bordered nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>TRANSPORT NAME <i class="fas fa-sort"></i></th>
                            <th>LOCATION <i class="fas fa-sort"></i></th>
                            <th>TYPE <i class="fas fa-sort"></i></th>
                            <th>CONTACT NO <i class="fas fa-sort"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="transport in alldata" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}">
                            <td class="sorting_1">{{transport.transName}}</td>
                            <td>{{transport.transLocation}}</td>
                            <td>{{transport.transType}}</td>
                            <td>{{transport.transContact}}</td>
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
            evenclass:true
          }
        },
       
       // Get all the salesdp data
       mounted(){
          this.$store.dispatch('getAllData','/api/transports')
        },
        computed:{

          alldata(){
            setTimeout(() => $('#example').DataTable(), 1000);
            return this.$store.getters.getAllData
          }
        },
// End the process of getting all the data
       methods:
       {

        deleteTransport(id){
        axios.get('/hotel/'+id)
        .then(()=>{
        this.$store.dispatch('getAllHotel')
        toast({
        type: 'success',
        title: 'transport Deleted successfully'
        })
        })
        .catch(()=>{
        })
        }
       } 
    }


</script>