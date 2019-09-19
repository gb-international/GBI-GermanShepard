<template>
    <div id="fronthome">
    	    <!-- start banner area display image -->
          <main>
         <div class="container">
            <div class="row ">
              <div class="banner-block">
               <img class="banner-img" v-bind:src="'assets/front/images/explorserach.png'">
              </div> 
                <!-- left column -->
                <div class="col-lg-12 ">
                  <div class="bccolor">
                  <div class="col-md-12">
                     <form role="form">
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
                          <input type="text" @input="onChange" v-model="search" name="search" placeholder="Enter Your Source" autocomplete="off">
                           <ul  v-show="isOpen" class="autocomplete-results">
                              <li v-for="result in filteredSource"  @click="setResult(result.source)">
                              {{ result.source }} 
                            </li>
                          </ul>
                        </div>
                        <div class="col-6 col-sm-4 col-sm-4 col-lg-4 input-p nopadding"> 
                           <input  type="text" @input="onChanges" v-model="searchs" name="searchs" placeholder="Enter Your Destination" autocomplete="off">
                           <ul v-show="isOpens" class="autocomplete-results">
                              <li v-for="resultdata in filteredData" @click="setResults(resultdata.destination)">
                                  {{ resultdata.destination }} 
                                </li>
                            </ul>
                        </div>
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                          <select  class="selectpicker" name="typetour">
                            <option selected>Type of Tour</option>
                            <option value="advanteure">Advanteure</option>
                            <option value="historical">Historical</option>
                            <option value="cultural">Cultural</option>
                            <option value="industrial tour">Industrial Tour</option>
                            <option value="leisure">Leisure</option>
                            </select>
                            </div>
                        </div>
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                           <div class="select">
                          <select  class="selectpicker" name="noofday">
                          <option selected>No of Days</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
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
                           <option selected>Type of Tour</option>
                            <option value="advanteure">Advanteure</option>
                            <option value="historical">Historical</option>
                            <option value="cultural">Cultural</option>
                            <option value="industrial tour">Industrial Tour</option>
                            <option value="leisure">Leisure</option>
                          </select>
                        </div>
                        </div>
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                          <select  class="selectpicker">
                         <option selected>No of Days</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        </div>
                        </div>
                       </div>
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
                      <div class="col-sm-4"></div>
                        <div class="pt-4 col-md-4 center-block">
                       <button class="btn btn-primary btn-lg btn-block center-block" @click.prevent="searchAll()" type="submit" @click="show = !show">Search</button>

                        </div>
                     
                    </div>
                    </form>
                 </div>
              </div>
               </div>
            </div>
            <!-- /.row -->
        </div><!-- /.container-->
        <div class="container">
            <div class="row ">
              <!--start card explore list dynamic tour itinerary list-->
                    <div class="col-lg-6 mt-3" v-for="itinerary in allSearchdata" v-if="itinerary">
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
                <!-- end card-->

                <div class="col-lg-12" v-if="show">
                     <ul class="nav nav-tabs upcom-pack">
                    <li class="nav-item">
                    <a class="nav-link bg-color-tour" data-toggle="tab" href="#Upcoming"><h1 class="upcom-head">Upcoming Tour</h1></a>
                    </li>
                    </ul>
                  <!-- Tab panes -->
                  <div class="tab-content">
                    <div id="Upcoming" class="container tab-pane active bg-color-tour border-color-tour">
                     <div class="col-lg-12 nopadding"> 
                     <div class="row"> 
                      <!--start upcomig card layout tour itinerary-->
                       <div class="col-sm-6 col-md-6 col-lg-4 m-b-15">
                        <router-link to="/explore-list">
                        <div class="card-horizontal">
                        <div class="card-image-col">
                        <img :src="`assets/front/images/populartour.png`" alt="" />
                      </div>
                         <div class="card-content p-list-20">
                          <h1>tour gangtok darjeeling</h1>
                          <p>7 Days Tour</p>
                        </div>
                        </div>
                      </router-link>
                       </div>

                       <div class="col-sm-6 col-md-6 col-lg-4 m-b-15">
                        <router-link to="/explore-list">
                        <div class="card-horizontal">
                        <div class="card-image-col">
                        <img :src="`assets/front/images/populartour.png`" alt="" />
                      </div>
                         <div class="card-content p-list-20">
                          <h1>tour gangtok darjeeling</h1>
                          <p>7 Days Tour</p>
                        </div>
                        </div>
                      </router-link>
                       </div>

                       <div class="col-sm-6 col-md-6 col-lg-4 m-b-15">
                        <router-link to="/explore-list">
                        <div class="card-horizontal">
                        <div class="card-image-col">
                        <img :src="`assets/front/images/populartour.png`" alt="" />
                      </div>
                         <div class="card-content p-list-20">
                          <h1>tour gangtok darjeeling</h1>
                          <p>7 Days Tour</p>
                        </div>
                        </div>
                      </router-link>
                       </div>

                        <div class="col-sm-6 col-md-6 col-lg-4 m-b-15">
                        <router-link to="/explore-list">
                        <div class="card-horizontal">
                        <div class="card-image-col">
                        <img :src="`assets/front/images/populartour.png`" alt="" />
                      </div>
                         <div class="card-content p-list-20">
                          <h1>tour gangtok darjeeling</h1>
                          <p>7 Days Tour</p>
                        </div>
                        </div>
                      </router-link>
                       </div>

                       <!--start upcomig card layout-->
                      </div>
                    </div>
                      <div class="col-lg-12 nopadding m-b-15">  
                      <router-link to="/explore-list" class="listexplore">View More</router-link>
                      </div>

                    </div>
                    <div class="clear"></div>
                    </div>


                </div>
              
                 
                
             </div>
            <!-- /.row -->
        </div><!-- /.container-->
        <div class="clear"></div>
    </main>    
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
            show: true,
            data: [],
            datas: [],
            search: '',
            searchs: '',
            isOpen: false,
            isOpens: false,
            arrowCounter: 0,
            arrowCounters: 0,
              form: new Form({
                search: '',
                searchs: '',
                typetour: '',
                noofday: '',
              })
            }
        },
        computed: {
          // start filterdata source and destination
            filteredSource () {
              if (!this.search) return this.data
              return this.data.filter((result) => {
                return result.source.toLowerCase().includes(this.search.toLowerCase());
              });
            },
             filteredData () {
              if (!this.searchs) return this.datas
              return this.datas.filter((resultdata) => {
                return resultdata.destination.toLowerCase().includes(this.searchs.toLowerCase());
              });
            },

            allSearchdata(){
            return this.$store.getters.getAllSearchData
           },

           alldata(){
            return this.$store.getters.getAllData
           },


          },
          created () {
            axios.get('/api/search').then(response => {
              this.data = response.data.data;
              this.datas = response.data.data;
             
            });
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
          },
          //search autocompelete start

              onChange() {
              // Let's warn the parent that a change was made
              this.$emit("input", this.search);
                // Is the data given by an outside ajax request?
                if (this.isAsync) {
                  this.isLoading = true;
                } else {
                  // Let's search our flat array
                  // this.filterResults();
                  this.isOpen = true;
                }
            },
             onChanges() {
              this.$emit("input", this.searchs);
               // Let's search our flat array
                 this.isOpens = true;
              
            },
              setResult(result) {
              this.search = result;
              this.isOpen = false;
              },
              setResults(resultdata) {
              this.searchs = resultdata;
              this.isOpens = false;
              },

              handleClickOutside(evt) {
              if (!this.$el.contains(evt.target)) {
                this.isOpen = false;
                this.arrowCounter = -1;
              }
            },
             handleClickOutsides(evt) {
              if (!this.$el.contains(evt.target)) {
                this.isOpens = false;
                this.arrowCounters = -1;
              }
            },

         //search autocompelete end   
         
         //  serach data api
         searchAll(){
                 // Submit form 
                 let currentObj = this;
                 this.$store.dispatch('SearchAlldata',{s: currentObj.search, d: currentObj.searchs});

            }
        },
          
        mounted() {
           // search click autocompelete start 
          document.addEventListener("click", this.handleClickOutside);
          document.addEventListener("click", this.handleClickOutsides);
        },
        destroyed() {
           // search autocompelete start   
          document.removeEventListener("click", this.handleClickOutside);
          document.removeEventListener("click", this.handleClickOutsides);
        }
    }
</script>
    
<style scoped>
.autocomplete {
  position: relative;
  width: 130px;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 100px;
  overflow: auto;
  width: 100%;
  background-color: #ffffff;
}
.autocomplete-results li {
  color: #000;
  float: left;
  text-align: left;
  width: 100%;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
}
.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}
input[type="text"]{
  text-transform: capitalize;
}
a {
  text-decoration: none;
}

</style>