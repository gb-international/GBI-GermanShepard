<template>
     <!-- start banner area display image for itinerary listing -->
     <div id="explorelist">
    	<section class="banner-block">
             <img class="top-imgs" >
         </section>
         <div class="container">
            <div class="row ">
                   
                <div class="col-lg-12">
                 <div class="row">
                <!--start card explore list dynamic tour itinerary list-->
                <div class="col-lg-6 p-te-0" v-for="itinerary in allSearchdata">
                 <div class="card card-radis-list">
                    <router-link :to="`/explore-detail/${itinerary.id}`">
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
       
         <div class="clear"></div>   
    </div>
</template>

<script>
import _ from 'lodash'
       export default {
        name: "ExploreList",
        props:['allSearchdata'],
        data(){
          return{
            
          }
        },
       
        
        }
</script>

<style scoped>
.top-imgs{
	display: none;
}
.p-te-0{
	padding: 0px;
	padding-left: 7px;
	padding-right: 10px;
}
.card-width {
  width: 520px !important;
}
</style>