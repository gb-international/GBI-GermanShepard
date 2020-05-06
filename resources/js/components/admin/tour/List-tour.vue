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
                <th>CODE  <i class="fas fa-sort"></i></th>
                <th>School  <i class="fas fa-sort"></i></th>
                <th>START DATE  <i class="fas fa-sort"></i></th>
                <th>END DATE.  <i class="fas fa-sort"></i></th>
                <th>PRICE  <i class="fas fa-sort"></i></th>
                <th> <i class="fas fa-cog"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="tour in tour_data" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}" class="row_list">
                <td>{{ tour.tour_id }}</td>
                <td>{{ tour.school.school_name }} ({{ tour.school.city_name }})</td>
                <td>{{tour.tour_start_date }} </td>
                <td>{{ tour.tour_end_date }}</td>
                <td>{{ tour.tour_price }}</td>
                <td class="edit_section">
                  <router-link :to="`/tours/${tour.id}`" class="edit_link">
                    <span class="badge badge-primary"><i class="fas fa-pencil-alt"></i></span>
                  </router-link>
                  <a href="" class="delete_link" @click.prevent = "deletetour(tour.id)" ><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>

                  <router-link :to="`/view-tour/${tour.id}`" class="edit_link">
                    <span class="badge badge-primary" title="View Itinerary"><i class="fas fa-eye"></i></span>
                  </router-link>

                  <router-link  :to="`/booked-tour/${tour.id}`" class="edit_link">
                    <span class="badge badge-warning" title="Add Client Details"><i class="fas fa-user-plus"></i></span>
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
      tour_data:[],
    }
  },
  created(){
    this.TourData();
  },

  methods:{
    TourData(){
      axios.get(`/api/tour`).then((response)=>{
        setTimeout(() => $('#example').DataTable(), 1000);
        this.tour_data = response.data.data;
      })
    },
    deletetour(id){
      var uri = 'api/tour/'+id;
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
            setTimeout(() => $('#example').DataTable(), 1000);
            this.TourData();
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