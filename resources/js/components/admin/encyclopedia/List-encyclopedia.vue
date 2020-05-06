<!--
This Template is for listing for the encyclopedia profile using function to get the 
data from the api to display the data about the encyclopedia from the backend .
-->
<template>
    <section class="content">
<!--************************************************
      Template Type: encyclopedias List
      Author:@Ajay
 ****************************************************-->
        <div class="row justify-content-around" >
            <div class="col-md-12">
              <div class="container container_admin_body">
                <div class="top_btn">
                  <router-link :to="`/encyclopedia-add`">Add encyclopedia</router-link>
                </div>
                  <!-- Start Card -->
                  <table id="example" class="display table table-striped table-bordered nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>NAME<i class="fas fa-sort"></i></th>
                            <th>THUMBNAIL <i class="fas fa-sort"></i></th>
                            <th>BANNER IMAGE <i class="fas fa-sort"></i></th>
                            <th> <i class="fas fa-cog"></i></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="encyclopedia in encyclopedia_list" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}" class="row_list">
                            <td>{{encyclopedia.state_name}}</td>
                            <td><img :src="getImgUrl(encyclopedia.thumbnail)"></td>
                            <td><img :src="getImgUrl(encyclopedia.banner_image)"></td>
                            <td class="edit_section">
                              <router-link :to="`encyclopedia/${encyclopedia.id}`" class="edit_link">
                                <span class="badge badge-primary"><i class="fas fa-pencil-alt"></i></span>
                              </router-link>
                              <a href="" class="delete_link" @click.prevent = "deleteencyclopedia(encyclopedia.id)" ><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>

                              <router-link :to="`/encyclopedia-view/${encyclopedia.id}`" class="edit_link">
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
      encyclopedia_list:[]
    }
  },
  created(){
    this.encyclopediaData();
    
  },

   methods:{
    encyclopediaData(){
      axios.get('/api/encyclopedias').then((response)=>{
        setTimeout(() => $('#example').DataTable(), 1000);
        this.encyclopedia_list = response.data;

      })
    },
    getImgUrl(img){
      return '/encyclopedia/'+img;
    },

    deleteencyclopedia(id){
      var uri = '/api/encyclopedias/'+id;
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

            this.encyclopediaData();
                
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

<style scoped="">
  img{
    width: 60px;
  }
</style>