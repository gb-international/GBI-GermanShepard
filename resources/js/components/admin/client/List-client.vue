<!--
This Template is for listing for the Client profile using function to get the 
data from the api to display the data about the client from the backend .
-->
<template>
    <section class="content">
      <!--************************************************
      Template Type: Client List
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
                            <th>PHONE NO. <i class="fas fa-sort"></i></th>
                            <th>EMAIL<i class="fas fa-sort"></i></th>
                            <th>SCHOOL NAME <i class="fas fa-sort"></i></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="client in alldata" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}">
                            <td class="sorting_1">{{client.name}}</td>
                            <td>{{client.phoneno}}</td>
                            <td>{{client.email}}</td>
                            <td>{{client.schoolName}}</td>
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
          }
        },
// Get all the data
        mounted(){
          this.$store.dispatch('getAllData','/api/clients')
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
        deleteclient(id){
              var uri = '/delete-client/'+id;
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
                  swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                    axios.get(uri).then(response => {
                     this.clientData.data.splice(this.clientData.data.indexOf(id), 1);
                  });
                }
              });
        }
       } 
    }


</script>