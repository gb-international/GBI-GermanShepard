<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
    <section class="content">
      <!--************************************************
      Template Type: View Itinerary Deatails
      Author:@Ajay

      ****************************************************-->
        <div class="row justify-content-around" >
            <div class="col-md-12">
              <button class="btn btn-primary" @click="goBack()">Back</button>
              <div class="container container_admin_body">
                  <div class="row">
                    <div class="col-sm-4">
                      <h6>SCHOOL NAME</h6>
                      <p> {{ school.school_name }} </p>
                    </div>
                    <div class="col-sm-2">
                      <h6>PRICE</h6>
                      <p> {{ tour.tour_price }} </p>
                    </div>
                    
                    <div class="col-sm-2">
                      <h6>TOUR CODE</h6>
                      <p>{{ tour.tour_id}}</p>
                    </div>
                    <div class="col-sm-2">
                      <h6>TOUR START DATE</h6>
                      <p> {{ tour.tour_start_date }} </p>
                    </div>
                    <div class="col-sm-2">
                      <h6>TOUR END DATE</h6>
                      <p>{{ tour.tour_end_date }}</p>
                    </div>
                  </div>
                  <hr>
                 
                  <div class="row m-30 tour_list_block">
                    <div class="col-sm-3">
                      <router-link :to="`/booked-tour-manager/${tour.id}`">
                        <img :src="`assets/admin/default/icon/tour-manager.png`">
                      </router-link>
                    </div>
                    <div class="col-sm-3">
                      <router-link :to="`/booked-tour-hotel/${tour.id}`">
                        <img :src="`assets/admin/default/icon/hotel.png`">
                      </router-link>
                    </div> 

                    <div class="col-sm-3 m-30">
                      <router-link :to="`/booked-tour-flight/${tour.id}`">
                        <img :src="`assets/admin/default/icon/transport-icon.png`">
                      </router-link>
                    </div>

                    <div class="col-sm-3 m-30">
                      <router-link :to="`/booked-tour-train/${tour.id}`">
                        <img :src="`assets/admin/default/icon/transport-icon.png`">
                      </router-link>
                    </div>

                    
                  </div>
                  <hr />
                  <div class="row m-30 tour_list_block">
                    

                    <div class="col-sm-3 m-30">
                      <router-link :to="`/booked-tour-bus/${tour.id}`">
                        <img :src="`assets/admin/default/icon/transport-icon.png`">
                      </router-link>
                    </div>

                  </div>
                  <hr>
                  <div class="card" v-if="escort">
                    <h4>Tour Manager</h4>
                    <div class="row"v-for="escort in escort">
                      <div class="col-sm-2">
                        <label>Name</label>
                        <p>{{ escort['escort'].name }}</p>
                      </div>
                      <div class="col-sm-3">
                        <label>Perday Allowance </label>
                        <p>{{ escort['escort'].salaryPerday }}</p>
                      </div>
                      <div class="col-sm-3">
                        <label>Contact</label>
                        <p>{{ escort['escort'].phoneno }}</p>
                      </div>
                      <div class="col-sm-3">
                        <label>Email</label>
                        <p>{{ escort['escort'].email }}</p>
                      </div>
                      <div class="col-sm-1">
                        <a href="" v-if="$can('delete clients')" class="delete_link" @click.prevent = "deleteBookedEscort(escort.id)" ><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>
                      </div>
                    </div>  
                  </div>

                  <div class="card" v-if="hotel">
                    <h4>Hotel </h4>
                    <div class="row"v-for="hotel in hotel">
                      <div class="col-sm-2">
                        <label>Name</label>
                        <p>{{ hotel['hotel'].name }}</p>
                      </div>
                      <div class="col-sm-3">
                        <label>Address </label>
                        <p>{{ hotel['hotel'].address }}</p>
                      </div>
                      <div class="col-sm-3">
                        <label>Contact</label>
                        <p>{{ hotel['hotel'].phoneno }}</p>
                      </div>
                      <div class="col-sm-3">
                        <label>Email</label>
                        <p>{{ hotel['hotel'].email }}</p>
                      </div>

                      <div class="col-sm-1">
                        <a href="" v-if="$can('delete clients')" class="delete_link" @click.prevent = "deleteBookedHotel(hotel.id)" ><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>
                      </div>

                    </div>  
                  </div>

                  <div class="card" v-if="train">
                    <h4>Train </h4>
                    <div class="row"v-for="train in train">
                      <div class="col-sm-2">
                        <label>Name</label>
                        <p>{{ train['train'].name }}</p>
                      </div>
                      <div class="col-sm-3">
                        <label>Code </label>
                        <p>{{ train['train'].code }}</p>
                      </div>
                      <div class="col-sm-3">
                        <label>Price</label>
                        <p>{{ train.price }}</p>
                      </div>
                      <div class="col-sm-3">
                        <label>Travel</label>
                        <p>{{ train.source }} - {{ train.destination }}</p>
                      </div>

                      <div class="col-sm-1">
                        <a href="" v-if="$can('delete clients')" class="delete_link" @click.prevent = "deleteBookedTrain(train.id)" ><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>
                      </div>

                    </div>  
                  </div>

                  <div class="card" v-if="flight">
                    <h4>Flight </h4>
                    <div class="row"v-for="flight in flight">
                      <div class="col-sm-2">
                        <label>Name</label>
                        <p>{{ flight['flight'].name }}</p>
                      </div>
                      <div class="col-sm-3">
                        <label>Seat Type </label>
                        <p>{{ flight['flight'].code }}</p>
                      </div>
                      <div class="col-sm-3">
                        <label>Price</label>
                        <p>{{ flight.price }}</p>
                      </div>
                      <div class="col-sm-3">
                        <label>Travel</label>
                        <p>{{ flight.source }} - {{ flight.destination }}</p>
                      </div>

                      <div class="col-sm-1">
                        <a href="" v-if="$can('delete clients')" class="delete_link" @click.prevent = "deleteBookedFlight(flight.id)" ><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>
                      </div>

                    </div>  
                  </div>

                  <div class="card" v-if="bus">
                    <h4>Bus </h4>
                    <div class="row"v-for="bus in bus">
                      <div class="col-sm-2">
                        <label>Company Name</label>
                        <p>{{ bus['bus'].company_name }}</p>
                      </div>
                      <div class="col-sm-3">
                        <label>Seat Type </label>
                        <p>{{ bus['bus'].seat_type }}</p>
                      </div>
                      <div class="col-sm-3">
                        <label>Price</label>
                        <p>{{ bus.price }}</p>
                      </div>
                      <div class="col-sm-3">
                        <label>Travel</label>
                        <p>{{ bus.source }} - {{ bus.destination }}</p>
                      </div>

                      <div class="col-sm-1">
                        <a href="" v-if="$can('delete clients')" class="delete_link" @click.prevent = "deleteBookedBus(bus.id)" ><span class="badge badge-danger"><i class="far fa-trash-alt"></i></span></a>
                      </div>

                    </div>  
                  </div>

              </div>                          
            </div>
        </div>
    </section>
    <!-- /.content -->
</template>

<script>
export default {
  name: "View",
  data(){
    return{
      client_view:[], 
      school:[],
      tour:[],
      train:[],
      hotel:[],
      escort:[],
      bus:[],
      flight:[],
    }
  },
  created(){
    this.getAllData();
  },

  methods:
  {
    getAllData(){
      axios.get(`/api/tour/${this.$route.params.id}`).then(response => {
        if(response.data){
          this.tour = response.data['tour'];
          this.train = response.data['train'];
          this.hotel = response.data['hotel'];
          this.escort = response.data['escort'];
          this.bus = response.data['bus'];
          this.flight = response.data['flight'];
          this.school = response.data['school'];
        }
      });
    },

    deleteBookedTrain(id){
      var uri = 'api/bookedtrains/'+id;
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
           this.getAllData();
         })
          swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
           
        }
      });        
  },

  deleteBookedHotel(id){
    var uri = 'api/bookedhotels/'+id;
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
         this.getAllData();
       })
        swal.fire('Deleted!','Your file has been deleted.','success')
      }
    });        
  },

  deleteBookedEscort(id){
      var uri = 'api/bookedescorts/'+id;
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
           this.getAllData();
         })
          swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
           
        }
      });
  },

  deleteBookedFlight(id){
      var uri = 'api/bookedflights/'+id;
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
           this.getAllData();
         })
          swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
           
        }
      });
  },
  deleteBookedBus(id){
      var uri = 'api/bookedbuses/'+id;
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
           this.getAllData();
         })
          swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
           
        }
      });
  },

  goBack(){
    this.$router.push(`/tours`);
  },
  }
}
</script>