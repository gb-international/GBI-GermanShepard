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
                  <router-link :to="`/add-role`">Add Role</router-link>
                </div>

                  <table id="example" class="display table table-striped table-bordered nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>NAME  <i class="fas fa-sort"></i></th>
                            <th> <i class="fas fa-cog"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="role in role_list" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}" class="row_list" v-if="role.name != 'SuperAdmin'">
                            <td>{{role.name}}</td>
                            <td class="edit_section">

                              <router-link :to="`/edit-role/${role.id}`" class="edit_link" v-if="$can('edit clients')">
                                <span class="badge badge-primary"><i class="fas fa-pencil-alt"></i></span>
                              </router-link>

                              <a href="" class="delete_link" @click.prevent = "deleteCity(role.id)" ><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>

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
            role_list:{}
          }
        },
        created(){
          axios.get('/api/role').then((response)=>{
            setTimeout(() => $('#example').DataTable(), 1000);
            this.role_list = response.data;
          });
        },
// End the process of the the fetching data
       methods:
       {

       deleteCity(id){
          var uri = 'api/role/'+id;
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
                axios.get('/api/role').then((response)=>{
                  setTimeout(() => $('#example').DataTable(), 1000);
                  this.role_list = response.data;
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