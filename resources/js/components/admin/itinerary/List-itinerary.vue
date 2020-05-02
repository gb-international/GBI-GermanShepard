<!--
This Template is for listing for the Itinerary using function to get the 
data from the api to display the data about the Itinerary from the backend .
-->
<template>
    <section class="content">
      <!--************************************************
      Template Type: Itinerary List
      Author:@Ajay

      ****************************************************-->
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
                            <th> <i class="fas fa-cog"></i></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="itinerary in alldata" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}" class="row_list">
                            <td>{{ itinerary.source }}</td>
                            <td>{{itinerary.destination}}</td>
                            <td>{{itinerary.noofdays}}</td>
                            <td>{{itinerary.tourtype}}</td>
                            <td class="edit_section">
                              <router-link :to="`edit-itinerary/${itinerary.id}`" class="edit_link">
                                <span class="badge badge-primary"><i class="fas fa-pencil-alt"></i></span>
                              </router-link>
                              <a href="" class="delete_link" @click.prevent = "deleteitinerary(itinerary.id)" ><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>

                              <router-link :to="`send-itinerary/${itinerary.id}`" class="edit_link">
                                <span class="badge badge-primary" title="Send Itinerary"><i class="fas fa-paper-plane"></i></span>
                              </router-link>

                              
                              <router-link :to="`/view-itinerary/${itinerary.id}`" class="edit_link">
                                <span class="badge badge-primary" title="View Itinerary"><i class="fas fa-eye"></i></span>
                              </router-link>

                              <router-link :to="`/calculator/${itinerary.id}`" class="edit_link">
                                <span class="badge badge-primary" title="Price Calculator"><i class="fas fa-calculator"></i></span>
                              </router-link>

                              

                            </td>
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
      itineraryData:{},
      alldata:[],
    }
  },
 
  created(){
    this.getItinerary();
  },
  methods:{
    getItinerary(){
      axios.get('/api/itinerary').then((response)=>{
        setTimeout(() => $('#example').DataTable(), 1000);
        this.alldata = response.data.data;
      });
    },

    deleteitinerary(id){
      var uri = '/api/itinerary/'+id;
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
          axios.delete(uri).then((response)=>{
            console.log(response);
             this.getItinerary()
                  //response contains your data sent front your controller/route
              })
          swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
           
        }
      });
    }

   } 
}


</script>