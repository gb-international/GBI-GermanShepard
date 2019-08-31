<!--
This Template is for listing for the Itinerary using function to get the 
data from the api to display the data about the Itinerary from the backend .
-->
<template>
    <section class="content">
        <div class="row justify-content-around" >
            <div class="col-md-12">
              <div class="container container_admin_body">
                  <!-- Start Card -->
                  <table id="example" class="display table nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>Source <i class="fas fa-sort"></i></th>
                            <th>Destination <i class="fas fa-sort"></i></th>
                            <th>No. of Days <i class="fas fa-sort"></i></th>
                            <th>Tour type <i class="fas fa-sort"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="itinerary in alldata" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}">
                            <td class="sorting_1">
                              <router-link :to="`/view-itinerary/${itinerary.id}`">{{itinerary.source}}</router-link>
                            </td>
                            <td>{{itinerary.destination}}</td>
                            <td>{{itinerary.noofdays}}</td>
                            <td>{{itinerary.source}}</td>
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
            itineraryData:{}
          }
        },
       
       mounted(){
          this.$store.dispatch('getAllData','/api/itinerarys')
        },
        computed:{

          alldata(){
            setTimeout(() => $('#example').DataTable(), 1000);
            return this.$store.getters.getAllData
          }
        },
       methods:
       {
         deleteescort(id){
              var uri = '/delete-escort/'+id;
              swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.value) {
                  swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                    axios.get(uri).then(response => {
                     this.escortData.splice(this.escortData.indexOf(id), 1);
                  });
                }
              });
        }
       } 
    }


</script>

<style scoped>
</style>