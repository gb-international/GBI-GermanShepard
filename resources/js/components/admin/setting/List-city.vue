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
        

        <div class="row" >
            <div class="col-md-12">
              <div class="container container_admin_body">
                
                <div class="top_btn">
                  <router-link :to="`/add-city`">Add City</router-link>
                </div>
                <!-- <div v-if="$can('edit posts')">You can edit posts.</div>
                <div v-else>hi</div> -->



                  <!-- Start Card -->
                  <table id="example" class="display table table-striped table-bordered nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>NAME  <i class="fas fa-sort"></i></th>
                            <th> <i class="fas fa-cog"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="school in alldata" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}" class="row_list">
                            <td>{{school.name}}</td>
                            <td class="edit_section">
                              <a href="" class="delete_link" @click.prevent = "deleteCity(school.id)" ><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>

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
            hotelData:{}
          }
        },
     // Get all the data
       mounted(){
          this.$store.dispatch('getAllData','/api/city')
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

       deleteCity(id){
              var uri = '/api/city/'+id;
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
                    this.$store.dispatch('getAllData','/api/city')
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