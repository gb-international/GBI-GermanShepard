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
                    <th>Itinerary Title <i class="fas fa-sort"></i></th>
                    <th>Sales Man <i class="fas fa-sort"></i></th>
                    <th>Price <i class="fas fa-sort"></i></th>
                    <th>Status <i class="fas fa-sort"></i></th>
                    <th>Action <i class="fas fa-cog"></i></th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="itinerary in itinerary_list" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}"  class="row_list" v-if="itinerary.status != 'confirm'">
                      <td>{{itinerary.title}}</td>
                      <td>{{itinerary.name}}</td>
                      <td>{{itinerary.price}} /-</td>
                      <td>
                        <span  v-if="itinerary.status == 'confirm'" class="badge badge-success">{{itinerary.status}}</span>
                        <span  v-if="itinerary.status == 'cancel'" class="badge badge-danger">{{itinerary.status}}</span>
                        <span  v-if="itinerary.status == 'pending'" class="badge badge-warning">{{itinerary.status}}</span>
                      </td>
                      <td class="edit_section">

                        <a href="" class="delete_link" @click.prevent = "deleteitinerary(itinerary.id)" title="Delete"><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>

                        <router-link :to="`account-itinerary-view/${itinerary.id}`" class="edit_link">
                          <span class="badge badge-primary" title="Booking Details"><i class="fas fa-book-reader"></i></span>
                        </router-link>

                        <router-link :to="`/account-itinerary-view/${itinerary.id}`" class="edit_link">
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
      itinerary_list:[],
    }
  },
  created(){
    this.accountList();
  },

   methods:{
    accountList(){
      axios.get('/api/accounts').then((response)=>{
        setTimeout(() => $('#example').DataTable(), 1000);
        this.itinerary_list = response.data.data;
      });
    },


     deleteitinerary(id){
      var uri = 'account/destroy/'+id;
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
          axios.get(uri).then((response)=>{
            console.log(response);
            this.$store.dispatch('getAllData','/api/accounts')
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