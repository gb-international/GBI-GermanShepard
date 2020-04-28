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
            <router-link :to="`/train-add`">Add Train</router-link>
          </div>
            <!-- Start Card -->
          <table id="example" class="display table table-striped table-bordered nowrap" style="width:100%">
            <thead>
              <tr>
                <th>TRAIN NUMBER  <i class="fas fa-sort"></i></th>
                <th>NAME  <i class="fas fa-sort"></i></th>
                <th> <i class="fas fa-cog"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="train in trainData" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}" class="row_list">
                  <td>{{train.code}}</td>
                  <td>{{train.name }} </td>
                  <td class="edit_section">
                    <router-link :to="`/train/${train.id}`" class="edit_link">
                      <span class="badge badge-primary"><i class="fas fa-pencil-alt"></i></span>
                    </router-link>
                    <a href="" class="delete_link" @click.prevent = "deleteTrain(train.id)" ><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>

                    <router-link :to="`/train-view/${train.id}`" class="edit_link">
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
      trainData:[]
    }
  },
// Get all the data
  created(){
      this.getTrain();
  },
// End the process of the the fetching data
   methods:
   {
    getTrain(){
      axios.get('/api/train').then((response)=>{
        setTimeout(() => $('#example').DataTable(), 1000);
        this.trainData = response.data;
      });
    },

     deleteTrain(id){
        var uri = 'api/train/'+id;
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
              this.getTrain();
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