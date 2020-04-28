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
          <div class="top_btn">
            <router-link :to="`/add-bus`">Add Bus</router-link>
          </div>
            <!-- Start Card -->
          <table id="example" class="display table table-striped table-bordered nowrap" style="width:100%">
            <thead>
              <tr>
                <th>COMPANY NAME  <i class="fas fa-sort"></i></th>
                <th>SEATER  <i class="fas fa-sort"></i></th>
                <th>SEAT TYPE  <i class="fas fa-sort"></i></th>
                <th>PRICE  <i class="fas fa-sort"></i></th>
                <th> <i class="fas fa-cog"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="bus in busData" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}" class="row_list">
                  <td>{{bus.company_name}}</td>
                  <td>{{bus.seater }} </td>
                  <td>{{ bus.seat_type }}</td>
                  <td>{{ bus.price }}</td>
                  <td class="edit_section">
                    <router-link :to="`/bus/${bus.id}`" class="edit_link">
                      <span class="badge badge-primary"><i class="fas fa-pencil-alt"></i></span>
                    </router-link>
                    <a href="" class="delete_link" @click.prevent = "deletebus(bus.id)" ><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>

                    <router-link :to="`/view-bus/${bus.id}`" class="edit_link">
                      <span class="badge badge-primary" title="View Itinerary"><i class="fas fa-eye"></i></span>
                    </router-link>
                  </td>
              </tr>                 
            </tbody>
          </table>
        </div>                          
            <!-- end -->
      </div>
    </div>


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
      busData:[]
    }
  },
// Get all the data
   created(){
      this.getBus();
    },
// End the process of the the fetching data
   methods:
   {
    getBus(){
      axios.get('/api/bus').then((response)=>{
        setTimeout(() => $('#example').DataTable(), 1000);
        this.busData = response.data.data;
      });
    },

     deletebus(id){
        var uri = 'api/bus/'+id;
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
              this.getBus();
            })
            swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
             
          }
        });
      },
} 
}


</script>