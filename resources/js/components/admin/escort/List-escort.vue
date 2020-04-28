<!--
This Template is for listing for the Escort profile using function to get the 
data from the api to display the data about the Escort from the backend .
-->
<template>
    <section class="content">
<!--************************************************
      Template Type: Escorts List
      Author:@Ajay
 ****************************************************-->
        <div class="row justify-content-around" >
            <div class="col-md-12">
              <div class="container container_admin_body">
                  <!-- Start Card -->
                  <table id="example" class="display table table-striped table-bordered nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>NAME<i class="fas fa-sort"></i></th>
                            <th>SALARY PEAR DAY <i class="fas fa-sort"></i></th>
                            <th>CONTACT NO <i class="fas fa-sort"></i></th>
                            <th>EMAIL <i class="fas fa-sort"></i></th>
                            <th> <i class="fas fa-cog"></i></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="escort in escort_list" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}" class="row_list">
                            <td>{{escort.name}}</td>
                            <td>{{escort.salaryPerday}}</td>
                            <td>{{escort.phoneno}}</td>
                            <td>{{escort.email}}</td>
                            <td class="edit_section">
                              <router-link :to="`edit-escort/${escort.id}`" class="edit_link">
                                <span class="badge badge-primary"><i class="fas fa-pencil-alt"></i></span>
                              </router-link>
                              <a href="" class="delete_link" @click.prevent = "deleteescort(escort.id)" ><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>

                              <router-link :to="`/escort-view/${escort.id}`" class="edit_link">
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
      escort_list:[]
    }
  },
  created(){
    this.escortData();
  },

   methods:{
    escortData(){
      axios.get('/api/escort').then((response)=>{
        setTimeout(() => $('#example').DataTable(), 1000);
        this.escort_list = response.data.data;
      })
    },

     deleteescort(id){
      var uri = 'api/escort/'+id;
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
            this.escortData();
                
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