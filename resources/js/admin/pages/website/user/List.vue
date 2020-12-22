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
                <th>NAME  <i class="fas fa-sort"></i></th>
                <th>EMAIL <i class="fas fa-sort"></i></th>
                <th>CREATED AT<i class="fas fa-cog"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in userlist" :key="user.id" class="row_list">
                  <td>{{user.name }} </td>
                  <td>{{user.email}}</td>
                  <td class="edit_section text-center">

                    <a href="" class="delete_link" @click.prevent = "deleteuser(user.id)" ><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>

                    <router-link :to="`/user/${user.id}`" class="edit_link">
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
  name: "UserList",
  data(){
    return{
      userlist:[]
    }
  },
  created(){
    this.getUser();
  },
   methods:{
    getUser(){
      axios.get('/api/user').then((response)=>{
        setTimeout(() => $('#example').DataTable(), 1000);
        this.userlist = response.data;
      });
    },

    deleteuser(id){
      var uri = 'api/train/'+id;
      this.$swal.fire({
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
          this.$swal.fire(
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