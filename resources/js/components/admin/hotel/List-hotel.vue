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
                

                <!-- <div v-if="$can('edit posts')">You can edit posts.</div>
                <div v-else>hi</div> -->



                  <!-- Start Card -->
                  <table id="example" class="display table table-striped table-bordered nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>HOTEL NAME  <i class="fas fa-sort"></i></th>
                            <th>LOCATION  <i class="fas fa-sort"></i></th>
                            <th>TYPE  <i class="fas fa-sort"></i></th>
                            <th>CONTACT NO.  <i class="fas fa-sort"></i></th>
                            <th> <i class="fas fa-cog"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="hotel in hotel_list" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}" class="row_list">
                            <td>{{hotel.name}}</td>
                            <td>{{hotel.city}} - {{ hotel.state }}</td>
                            <td>{{hotel.type}}</td>
                            <td>{{hotel.phoneno}}</td>
                            <td class="edit_section">
                              <router-link :to="`/edit-hotel/${hotel.id}`" class="edit_link">
                                <span class="badge badge-primary"><i class="fas fa-pencil-alt"></i></span>
                              </router-link>
                              <a href="" class="delete_link" @click.prevent = "deletehotel(hotel.id)" ><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>

                              <router-link :to="`/hotel-view/${hotel.id}`" class="edit_link">
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
        hotel_list:[]
      }
    },
// Get all the data
    created(){
      this.hotelData();
    },
// End the process of the the fetching data
       methods:
       {
        hotelData(){
          axios.get('/api/hotel').then((response)=>{
            setTimeout(() => $("#example").DataTable(), 1000);
            this.hotel_list = response.data.data;
          });
        },

       deletehotel(id){
          var uri = 'api/hotel/'+id;
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
                this.$store.dispatch('getAllData','/api/hotels')
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