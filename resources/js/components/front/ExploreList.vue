<template>
   <!-- start banner area display image for itinerary listing -->
  <div id="explorelist">
  	<section class="banner-block explore_list_search mb-20">
      <!-- <img class="top-img" v-bind:src="'assets/front/images/faq_banner.jpg'"> -->
      <div class="col-lg-12">
          <div class="container">
            <div class="row">
              <!--  serach itinerary list in serach bar-->
              <div class="col-10 search-p-top">
                <div class="input-group">
                    <input class="form-control border-secondary py-2 explo-list-search" v-model="keyword" @keyup="RealSearch" type="search" placeholder="Search your itinerary"> 
                         <i class="fa fa-search icon-search"></i>
                  </div>
              </div>
            </div>
          </div>
        </div> 
    </section>
    <div class="container">
      <div class="row ">
          
        <div class="col-lg-12">
         <div class="row">
            <!--start card explore list dynamic tour itinerary list-->
            <div class="col-lg-6" v-for="itinerary in alldata">
             <div class="card card-radis-list">
                <router-link :to="`/explore-detail/${itinerary.id}`">
                 <div class="card-horizontal">
                    <div class="card-image">
                      <img :src="`uploadimage/${itinerary.photo}`" alt="{itinerary.title}" />
                    </div>
                     <div class="card-content">
                       <h1>{{itinerary.title | sortlength(35,"")}}</h1> 
                       <p>{{itinerary.noofdays}} Days Tour</p>
                          <table class="table-s">
                           <tbody>
                            
                                <tr>
                                  <td v-if="itinerary.hotel_type != '0'"><i class="fas fa-hotel"></i></td>
                                  <td v-if="itinerary.train == 1"><i class="fas fa-train icon-train-list"></i></td>
                                  <td v-if="itinerary.bus =='1'"><i class="fas fa-bus"></i></td>
                                  <td v-if="itinerary.flight== '1'"><i class="fas fa-plane"></i></td>
                                  <td v-if="itinerary.food != '0'"><i class="fas fa-utensils"></i></td>
                                </tr>
                                <tr>
                                  <td v-if="itinerary.hotel_type != '0'"><span class="icon-i icon-hotel-list">Hotel</span></td>
                                  <td v-if="itinerary.train== '1'"> <span class="icon-i">Train</span></td>
                                  <td v-if="itinerary.bus== '1'"><span class="icon-i icon-bus-list">Bus</span></td>
                                  <td v-if="itinerary.flight== '1'"><span class="icon-i icon-plane-list">Flight</span></td>
                                  <td v-if="itinerary.food != '0'"><span class="icon-i">Food</span></td>
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
          this.$store.dispatch('getAllData','/api/itinerary')
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