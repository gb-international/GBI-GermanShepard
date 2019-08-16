<!--
This Template is for listing for the sales man profile using function to get the 
data from the api to display the data about the salesman from the backend .
-->
<template>
    <section class="content">
        <div class="row justify-content-around" >
            <div class="col-md-12">
              <div class="container container_admin_body">
                  <!-- Start Card -->
                  <table id="example" class="display table table-striped table-bordered nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>NAME <i class="fas fa-sort"></i></th>
                            <th>LOCATION <i class="fas fa-sort"></i></th>
                            <th>TARGET ACHIEVED <i class="fas fa-sort"></i></th>
                            <th>CONTACT NO <i class="fas fa-sort"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="itinerary in itineraryData" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}">
                            <td class="sorting_1">{{itinerary.source}}</td>
                            <td>{{itinerary.destination}}</td>
                            <td>{{itinerary.noofdays}}</td>
                            <td>{{itinerary.source}}</td>
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
            itineraryData:{}
          }
        },
       
       mounted(){
            this.$store.dispatch("allCategory")
        },
        computed:{
           getallCategory(){
            return this.$store.getters.getCategory
           }
        },
        methods:{
            deletecategory(id){
               axios.get('/category/'+id)
                   .then(()=>{
                       this.$store.dispatch("allCategory")
                       toast({
                           type: 'success',
                           title: 'Category Deleted successfully'
                       })
                   })
                   .catch(()=>{

                   })
            },
            deleteSelected(){
                console.log(this.categoryItem)
               axios.get('/deletecategory/'+this.categoryItem)
                   .then(()=>{
                       this.categoryItem = []
                       this.$store.dispatch("allCategory")
                       toast({
                           type: 'success',
                           title: 'Category Deleted successfully'
                       })

                   })
            },
            selectAll(){
                if(this.all_select==false){
                    this.all_select = true
                    for(var category in this.getallCategory){
                        this.categoryItem.push(this.getallCategory[category].id)
                    }
                }else{
                    this.all_select = false
                    this.categoryItem = []
                }
            }
        } 
    }


</script>

<style scoped>
</style>