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
                  <router-link :to="`/add-permission`">Add Permission</router-link>
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
                        <tr v-for="permission in permission_list" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}" class="row_list">
                            <td>{{permission.name}}</td>
                            <td class="edit_section">

                              <router-link :to="`/edit-permission/${permission.id}`" class="edit_link" v-if="$can('edit clients')">
                                <span class="badge badge-primary"><i class="fas fa-pencil-alt"></i></span>
                              </router-link>


                              <a href="" class="delete_link" @click.prevent = "deleteCity(permission.id)" ><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>

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
            permission_list:{}
          }
        },
        created(){
          axios.get('/api/permission').then((response)=>{
            setTimeout(() => $('#example').DataTable(), 1000);
            this.permission_list = response.data;
          });
        },
// End the process of the the fetching data
       methods:
       {

       deleteCity(id){
          var uri = 'api/permission/'+id;
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
                axios.get('/api/permission').then((response)=>{
                  setTimeout(() => $('#example').DataTable(), 1000);
                  this.permission_list = response.data;
                });
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