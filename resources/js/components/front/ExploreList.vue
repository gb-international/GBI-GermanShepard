<template>
     <!-- start banner area display image for itinerary listing -->
     <div id="explorelist">
    	<section class="banner-block">
             <img class="top-img" v-bind:src="'assets/front/images/faq_banner.jpg'">
         </section>
         <div class="container">
            <div class="row ">
                <div class="col-lg-12">
                    <div class="container">
                    <div class="row">
                      <!--  serach itinerary list in serach bar-->
                        <div class="col-10 search-p-top">
                            <div class="input-group">
                                <input class="form-control border-secondary py-2 explo-list-search" v-model="keyword" @keyup="RealSearch" type="search" placeholder="search"> 
                                     <i class="fa fa-search icon-search"></i>
                              </div>
                        </div>
                    </div>
                </div>
                </div>   
                <div class="col-lg-12">
                 <div class="row">
                <!--start card explore list dynamic tour itinerary list-->
                <div class="col-lg-6 mt-3" v-for="itinerary in alldata">
                 <div class="card card-radis-list">
                    <router-link :to="`/explore-datail/${itinerary.id}`">
                     <div class="card-horizontal">
                        <div class="card-image">
                        <img :src="`uploadimage/${itinerary.photo}`" alt="{itinerary.title}" />
                      </div>
                         <div class="card-content">
                          <h1>{{itinerary.title | sortlength(25,"...")}}</h1> 
                          <p>{{itinerary.noofdays}} Days Tour</p>
                          <table class="table-s">
                               <tbody>
                                <tr>
                                <td><i class="fas fa-hotel"></i></td>
                                <td><i class="fas fa-train"></i></td>
                                <td><i class="fas fa-bus"></i></td>
                                <td><i class="fas fa-utensils"></i></td>
                                </tr>
                                <tr>
                                  <td><span class="icon-i">Hotel</span></td>
                                  <td> <span class="icon-i">Train</span></td>
                                  <td><span class="icon-i">Bus</span></td>
                                  <td><span class="icon-i">Dinner</span></td>
                                </tr>
                               
                              </tbody>
                            </table>
                        </div>
                     </div>
                 </router-link>
                 </div>
                </div>
                
                </div>
                <!-- end card-->
               </div>
            </div>
            <!-- /.row -->
        </div><!-- /.container-->
       
            
    </div>
</template>

<script>
import _ from 'lodash'
       export default {
        name: "ExploreList",
        data(){
          return{
            keyword:'',
            itineraryData:{}
          }
        },
       // get api data itinerary data
       mounted(){
          this.$store.dispatch('getAllData','/api/itinerarys')
        },
        //fetch all data function itinerary
        computed:{
          alldata(){
            return this.$store.getters.getAllData
          }
        },
        methods:{
            RealSearch:_.debounce(function () {
                this.$store.dispatch('SearchPost',this.keyword);
            },1000)
        }
        }
</script>

<style scoped>

</style>