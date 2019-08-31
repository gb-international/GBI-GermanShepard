<template>
    <div id="fronthome">
    	    <!-- start banner area display image -->
          
         <div class="container">
            <div class="row ">
              <div class="banner-block">
               <img class="banner-img" v-bind:src="'assets/front/images/explorserach.png'">
              </div> 
                <!-- left column -->
                <div class="col-lg-12 ">
                  <div class="bccolor">
                  <div class="col-md-12">
                     <div class="nav-sreach-explo"> 
                   <ul class="nav nav-tabs serch-explo-menu">
                   <li class="nav-item">
                     <a class="nav-link active border-none" data-toggle="tab" href="#home">Oneway</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link border-none" data-toggle="tab" href="#menu1">Multicity</a>
                   </li>
                  
                  </ul>

                  <!-- start single location Tab panes serach bar for source and destination-->
                  <div class="tab-content explor-content">
                    <div id="home" class="container tab-pane active"><br>
                      <div class="row p-0">
                        <div class="col-6 col-sm-4 col-sm-4 col-lg-4 input-p nopadding"> 
                          <input type="text" name="source" placeholder="Enter Your Source">
                        </div>
                        <div class="col-6 col-sm-4 col-sm-4 col-lg-4 input-p nopadding"> 
                           <input  type="text" name="destination" placeholder="Enter Your Destination">
                        </div>
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                          <select  class="selectpicker">
                            <option selected>Type of travel</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                            </div>
                        </div>
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                           <div class="select">
                          <select  class="selectpicker">
                          <option selected>No of Days</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        </div>
                        </div>
                        
                      </div>
                    </div>
                    <!-- end single location Tab panes serach bar for source and destination-->

                    <!-- start multiple location Tab panes serach bar for source and destination-->
                    <div id="menu1" class="container tab-pane "><br>
                       <div class="row p-0">
                        <div class="col-6 col-sm-4 col-lg-4 input-p nopadding"> 
                          <input type="text" name="source1" placeholder="Enter Your Source">
                        </div>
                        <div class="col-6 col-sm-4 col-lg-4 input-p nopadding"> 
                          <input  type="text" name="destination1" placeholder="Enter Your Destination">
                        </div>
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                          <select  class="selectpicker">
                            <option selected>Type of travel</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        </div>
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                          <select  class="selectpicker">
                          <option selected>No of Days</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        </div>
                        </div>
                       </div>
                       <div class="clear"></div>
                      <div class="row p-0 m-t-5" v-for="(row, index) in rows">
                        
                        <div class="col-4 col-sm-4 col-lg-4 input-p nopadding"> 
                          <input type="text" name="source" placeholder="Enter Your Source">
                        </div>

                        <div class="col-4 col-sm-4 col-lg-4 input-p nopadding"> 
                          <input  type="text" name="destination" placeholder="Enter Your Destination">
                        </div>

                        <div class="col-4 col-sm-4 col-lg-4 input-p nopadding"> 
                             <div class="buttons" v-if="current_counter <= counter">
                              <button v-if="city_button == row['last_button']" type="button" class="btn btn-primary btn-lg btn-block" @click="addRow">Add City</button>
                             </div>
                            <div class="buttons" v-if="city_button != row['last_button']">
                              <button type="button" class="btn text-center button btn-lg btn-danger btn-block cross_btn" @click="deleteRow(index)">Remove</button>
                            </div>
                        </div>
                      </div>
                    </div>
                    <!-- end multiple location Tab panes serach bar for source and destination-->
                    </div>
                      
                  </div>
                    <div class="row">
                        <div class="pt-4 col-md-4 center-block">
                       <button class="btn btn-primary btn-lg btn-block center-block">Search</button>
                        </div>
                     
                    </div>
                 </div>
              </div>
               </div>
            </div>
            <!-- /.row -->
        </div><!-- /.container-->
        <div class="container">
            <div class="row ">
                <div class="col-lg-12">
                    <ul class="nav nav-tabs upcom-pack">
                    <li class="nav-item">
                    <a class="nav-link bg-color-tour" data-toggle="tab" href="#Upcoming"><h1 class="upcom-head">Upcoming Tour</h1></a>
                    </li>
                    </ul>
                  <!-- Tab panes -->
                  <div class="tab-content">
                    <div id="Upcoming" class="container tab-pane active bg-color-tour border-color-tour"><br>
                     <div class="col-lg-12 nopadding">  
                      <!--start upcomig card layout tour itinerary-->
                       <div class="col-sm-6 col-md-4 nopadding">
                        <router-link to="/explore-list">
                        <div class="col-xs-4 col-sm-4 col-md-4">
                        <img class="img-responsive imgcircle" src="https://snap-photos.s3.amazonaws.com/img-thumbs/960w/1U2EGZ07GU.jpg" alt="" />
                      </div>
                      <div class="col-xs-8 col-sm-8 col-md-8 upcomin-days-tour padding-head">
                        <h1>tour gangtok darjeeling</h1>
                        <p>7 Days Tour</p>
                      </div>
                      </router-link>
                       </div>

                        <div class="col-sm-6 col-md-4 nopadding">
                          <router-link to="/explore-list">
                        <div class="col-xs-4 col-sm-4 col-md-4">
                        <img class="img-responsive imgcircle" src="https://snap-photos.s3.amazonaws.com/img-thumbs/960w/1U2EGZ07GU.jpg" alt="" />
                      </div>
                      <div class="col-xs-8 col-sm-8 col-md-8 upcomin-days-tour padding-head">
                        <h1>tour gangtok darjeeling</h1>
                        <p>7 Days Tour</p>
                      </div>
                    </router-link>
                       </div>
                        <div class="col-sm-6 col-md-4 nopadding">
                          <router-link to="/explore-list">
                        <div class="col-xs-4 col-sm-4 col-md-4">
                        <img class="img-responsive imgcircle" src="https://snap-photos.s3.amazonaws.com/img-thumbs/960w/1U2EGZ07GU.jpg" alt="" />
                      </div>
                      <div class="col-xs-8 col-sm-8 col-md-8 upcomin-days-tour padding-head">
                        <h1>tour gangtok darjeeling</h1>
                        <p>7 Days Tour</p>
                      </div>
                    </router-link>
                       </div>
                       <!--start upcomig card layout-->
                      </div>
                      <div class="clear"></div>
                       <div class="col-lg-12 nopadding">  
                      <!--start upcomig card layout-->
                       <div class="col-sm-6 col-md-4 nopadding">
                        <div class="col-sm-6 col-md-4">
                        <img class="img-responsive imgcircle" src="https://snap-photos.s3.amazonaws.com/img-thumbs/960w/1U2EGZ07GU.jpg" alt="" />
                      </div>
                      <div class="col-sm-6 col-md-8 upcomin-days-tour padding-head">
                        <h1>tour gangtok darjeeling</h1>
                        <p>7 Days Tour</p>
                      </div>
                       </div>

                        <div class="col-sm-6 col-md-4 nopadding">
                        <div class="col-sm-6 col-md-4">
                        <img class="img-responsive imgcircle" src="https://snap-photos.s3.amazonaws.com/img-thumbs/960w/1U2EGZ07GU.jpg" alt="" />
                      </div>
                      <div class="col-sm-6 col-md-8 upcomin-days-tour padding-head">
                        <h1>tour gangtok darjeeling</h1>
                        <p>7 Days Tour</p>
                      </div>
                       </div>
                        <div class="column col-sm-6 col-md-4 nopadding">
                        <div class="col-sm-6 col-md-4">
                        <img class="img-responsive imgcircle" src="https://snap-photos.s3.amazonaws.com/img-thumbs/960w/1U2EGZ07GU.jpg" alt="" />
                      </div>
                      <div class="col-sm-6 col-md-8 upcomin-days-tour padding-head">
                        <h1>tour gangtok darjeeling</h1>
                        <p>7 Days Tour</p>
                      </div>
                       </div>
                       <!--start upcomig card layout tour itinerary-->
                      </div>
                    </div>
                    </div>
                </div>
             
              
             </div>
            <!-- /.row -->
        </div><!-- /.container-->
            
    </div>
</template>

<script>
  export default {
        name: "FrontHome",
         data(){

            return {
              // Create a new form instance
            rows: [{ 'source': '', 'destination': '','last_button':'1'}],
            city_button:1,
            counter:2,
            current_counter:1,
            }
        },
        methods:
        {
          //add rows multiple location itinerary
           addRow: function() {
            this.current_counter = this.current_counter+1;
            this.city_button=this.city_button+1;
            this.rows.push({'source': '', 'destination': '','last_button':this.city_button});
          },
          //delete rows multiple location itinerary
          deleteRow: function(index) {
            this.current_counter = this.current_counter-1;
            this.rows.splice(index,1);
          }         
           
        }
    }
</script>
    
<style scoped>

</style>