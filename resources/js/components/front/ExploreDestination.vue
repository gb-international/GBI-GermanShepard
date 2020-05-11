<template>

  <div id="exploreDestination">
     <vue-headful
    title="GBI Explore Destination"
    description="@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button"
    keywords="@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs"
    image=""
    lang="en_US"
    ogLocale="en_US,en_UK"
    url="https://www.gowithgbi.com/resources/explore-destination"
   />  
   <div class="text_on_image explore_bg_img">
      <section class="banner-block explore_banner"></section>  
      <div class="content">
     
        <div class="container-fluid mb-30">
          <div class="row">
            <div class="col-sm-12">
              <form role="form">
                <div class="nav-sreach-explo"> 
                  <ul class="nav nav-tabs serch-explo-menu">
                    <li class="nav-item">
                      <a class="nav-link active border-none" data-toggle="tab" href="#home" v-on:click="multicity = !multicity">Oneway</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link border-none" data-toggle="tab" href="#menu1" v-on:click="multicity = !multicity">Multicity</a>
                    </li>
                  </ul>                 
                  <!-- start single location Tab panes serach bar for source and destination-->
                  <div class="tab-content explor-content">
                    <div id="home" class="container tab-pane active"><br>
                      <div class="row p-0 parent_padding">

                        <div class="col-6 col-sm-4 col-lg-4 input-p nopadding">
                            <model-select :options="options"
                                v-model="sources"
                                placeholder="Leave from">
                            </model-select>
                        </div>
                        <div class="col-6 col-sm-4 col-lg-4 input-p nopadding">
                           <model-select :options="options"
                              v-model="destinations"
                              placeholder="Arrive at">
                          </model-select>
                        </div>

                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                            <select  class="placeholder_color ui fluid search selection dropdown" name="typetour" @change="tourtypeOnChange($event)">
                              <option selected>In mood for</option>
                              <option v-for="index in tourtype_option" :value="index.id">{{ index.name }}</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                            <select  class="selectpicker ui selection dropdown" name="noofday" @change="noofdaysOnChange($event)">
                              <option selected>No. of days</option>
                              <option v-for="index in noofdays_option" :value="index">{{ index }}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                      <!-- end single location Tab panes serach bar for source and destination-->
                      <!-- start multiple location Tab panes serach bar for source and destination-->

                    <div id="menu1" class="container tab-pane"><br>
                      <div class="row p-0 parent_padding">
                        <div class="col-6 col-sm-4 col-lg-4 input-p nopadding">
                          <model-select :options="options"
                              v-model="multi_source"
                              placeholder="Leave from">
                          </model-select>
                        </div>
                        <div class="col-6 col-sm-4 col-lg-4 input-p nopadding"> 
                          <model-select :options="options"
                              v-model="multi_destination"
                              placeholder="Arrive at">
                          </model-select>
                        </div>
                      </div>
                     
                      <div class="row p-0 parent_padding">
                        <div class="col-lg-8" v-for="(row, index) in rows">
                          <div class="row">
                            <div class="col-6 col-sm-6 input-p nopadding"> 
                              <model-select :options="options"
                                  v-model="row['source']"
                                  placeholder="Leave from">
                              </model-select>
                            </div>
                            <div class="col-6 col-sm-6 input-p nopadding"> 
                              <model-select :options="options"
                                  v-model="row['destination']"
                                  placeholder="Arrive at"
                                  >
                              </model-select>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-2">
                          <div class="row button_group">
                            <div class="col-12"> 
                              <div class="buttons save_btn" v-if="city_button == current_counter">
                                <button v-if="city_button == current_counter" type="button" class="btn btn-default multi_city_btn" v-bind:class="{ disable : save_disable_btn }" @click="addRow"><i class="fas fa-plus"></i></button>
                              </div>
                            
                              <div class="buttons remove_btn" v-if="city_button == current_counter">
                                <button type="button" class="btn text-center btn-default multi_city_btn"  v-bind:class="{ disable : remove_disable_btn }" @click="deleteRow(current_counter-1)"><i class="fas fa-minus"></i></button>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    

                      <!-- tyype of tour and no of days -->
                      <div class="row parent_padding">
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                            <select  class="placeholder_color ui fluid search selection dropdown" name="typetour" @change="tourtypeOnChange($event)">
                              <option selected>In mood for</option>
                              <option v-for="index in tourtype_option" :value="index">{{ index.name}}</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                            <select  class="selectpicker ui selection dropdown" name="noofday" @change="noofdaysOnChange($event)">
                              <option selected>No. of days</option>
                              <option v-for="index in tourtype_option" :value="index.id">{{ index.name }}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div><!--End menu1-->
                    <!-- end multiple location Tab panes serach bar for source and destination-->
                  </div>   
                </div>
                  <p class="text-center">
                   <button class="btn btn-defalt btn-lg center-block profile_button" @click.prevent="searchAll()" type="submit" @click="show = !show">Search</button>
                 </p>
              </form> 
            </div>
          </div>        
        </div>           
      </div>      
    </div>

    <main>
      <!-- /.row -->
      <div class="container">
        <div class="row mt-10 p-20">
        <!--start card explore list dynamic tour itinerary list-->
          <searchexplor :allSearchdata="allSearchdata"></searchexplor> 
          <!-- end card-->
          <div class="col-lg-12 p-0" v-if="allSearchdata == ''">
            <h4 class="text-center">UPCOMING TOUR</h4>

              <!-- new code -->
              <div class="row mt-35">
                <div class="col-lg-6" v-for="(itinerary,index) in upcoming_data">
                  <div class="card card-radis-list">
                    <router-link :to="`/explore-detail/${itinerary.id}`">
                     <div class="card-horizontal">
                        <div class="card-image">
                          <img :src="`/uploadimage/${itinerary.photo}`" alt="{itinerary.title}" />
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
               <!-- End my code -->
                <div class="col-lg-12 nopadding m-b-15">  
                  <router-link to="/explore-list" class="listexplore">View More</router-link>
                </div>
          </div>               
        </div>
        <!-- /.row -->
      </div><!-- /.container-->

      <!-- /.row -->
      <div class="container">
        <div class="row p-20">
          <!-- end card-->
          <div class="col-lg-12 p-0" v-if="allSearchdata == ''">
            <h4 class="text-center">POPULAR TOUR</h4>

              <!-- new code -->
              <div class="row mt-35">
                <div class="col-lg-6" v-for="(itinerary,index) in popular_data">
                  <div class="card card-radis-list">
                    <router-link :to="`/explore-detail/${itinerary.id}`">
                     <div class="card-horizontal">
                        <div class="card-image">
                          <img :src="`/uploadimage/${itinerary.photo}`" alt="{itinerary.title}" />
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
               <!-- End my code -->
                <div class="col-lg-12 nopadding m-b-15">  
                  <router-link to="/explore-list" class="listexplore">View More</router-link>
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
import SearchExplor from './SearchExplor.vue'
import 'vue-search-select/dist/VueSearchSelect.css'
import { ModelSelect } from 'vue-search-select'
export default {
  name: "exploreDestination",
    components: {
    'searchexplor': SearchExplor,
    ModelSelect
  },
  data(){
    return {
        // Create a new form instance
      save_disable_btn:false,
      remove_disable_btn:true,
      multicity:false,
      noofdays_option:10,
      tourtype_option:[],
      options: [],
      sources: {value: '',text: ''},
      destinations: {value:'',text:''},
      multi_source: {value:'',text:''},
      multi_destination: {value:'',text:''},
      rows: [{ 'source':{'value':'','text':''},'destination': {'value':'','text':''}}],
      city_button:1,
      counter:2,
      customers: [],
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
      allSearchdata: [],
      noofday:'',
      tourtype:'',
      upcoming_data:'',
      popular_data:'',
      searchForm: new Form({
        source:[],
        destination:[],
        tourtype:[],
        noofday:[]
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
     alldata(){
      return this.$store.getters.getAllData
     },
    },
    created () {
      axios.get('/api/search').then(response => {
        this.data = response.data.data;
        this.datas = response.data.data;
      });
       axios.get('/api/city').then(response => {
        for(var i=0;i<response.data.data.length;i++){
          this.options.push({value:response.data.data[i].name,text:response.data.data[i].name})
        }
      });
      axios.get('/api/travel-program/upcoming-tour').then(response => {
        this.upcoming_data = response.data;        
      });

      this.tourTypeData();
      this.popularTour();

    },
  methods:
  { 
    popularTour(){
      axios.get('/api/travel-program/popular-tour').then((response)=>{
        this.popular_data = response.data;
      })
    },
    tourTypeData(){
      axios.get('/api/tourtype').then((response)=>{
        this.tourtype_option = response.data;
      })
    },
    

    reset () {
        this.item = {}
      },
      selectFromParentComponent1 () {
        // select option from parent component
        this.item = this.options[0]
      },
      reset2 () {
        this.item2 = ''
      },
      selectFromParentComponent2 () {
        // select option from parent component
        this.item2 = this.options2[0].value
      },
    tourtypeOnChange(value){
      this.tourtype = event.target.value;
    },
    noofdaysOnChange(value){
      this.noofday = event.target.value;
    },
    //add rows multiple location itinerary
    addRow: function() {
      var vm = this;
      var current = this.current_counter;
      var previous = current-1;
      this.current_counter = this.current_counter+1;
      this.city_button=this.city_button+1;      
      this.rows.push({'source': {'value':'','text':''},'destination': {'value':'','text':''}});
        // this.rows[current].source = this.rows[previous].destination;
        vm.rows[vm.current_counter-1].destination = vm.multi_source;
    },
    //delete rows multiple location itinerary
    deleteRow: function(index) {
      this.current_counter = this.current_counter-1;
      this.city_button=this.city_button-1;
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
         let vm = this;
         vm.searchForm.reset();
         let source = [];
         let destination = [];
         vm.searchForm.noofday = vm.noofday;
        vm.searchForm.tourtype = vm.tourtype;
        
         // if multicity search or simple search 
         if(vm.multicity){//Multiple city search
            destination = vm.multi_destination.text;
            source = vm.multi_source.text;
            if(source.length > 1 && destination.length > 1){
              vm.searchForm.source.push(source);
              vm.searchForm.destination.push(destination);
            }else{
              swal.fire({
                text: "Select all the locations!",
                type: 'warning'
              })
            }
            var rows_length = vm.rows.length;
            for (var i = 0;i<=rows_length - 1; i++) {
              vm.searchForm.source.push(vm.rows[i].source.text)
              vm.searchForm.destination.push(vm.rows[i].destination.text)
            }
         }else{//Simple search
           vm.searchForm.source.push(vm.sources.text);
           vm.searchForm.destination.push(vm.destinations.text);

         }

        if((vm.searchForm.destination[0] != '') && (vm.searchForm.destination[0] != '')){
            vm.searchForm.post('api/search-itinerary')
             .then(response => {
              vm.allSearchdata = response.data.data;
              if (vm.allSearchdata !='') {
              
              }
              else {
               swal({
               text: 'Not found!',
               width: 300,
                })
              }
          }).catch(error => {
            swal({
             text: 'please select the fields',
             width: 300,
            })
          });
        } else {
        swal({
           text: 'please select locations',
           width: 300,
          })
       }
    }
  },
  watch:{
    multi_source:function(value){
      var self = this;
      if(self.rows[0]){
        self.rows[this.current_counter-1].destination = value;
      }
    },

    current_counter:function(value){
      if (value == 1) {
        this.save_disable_btn = false;
        this.remove_disable_btn = true;
      }
      if(value == this.counter){
        this.save_disable_btn = true;
        this.remove_disable_btn = false;
      }
    }
  },

  mounted() {
    this.$store.dispatch('getAllData','/api/itinerary');
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
.nopadding{
  padding:0px 5px 10px;
}
.disable{
  pointer-events: none; 
}
option{
  border-top:1px solid #fafafal;
  padding:.78571429rem 1.14285714rem!important;
  white-space:normal;
  word-wrap:normal;
}

@media only screen and (max-width: 680px) {
.explore_banner{
    height: 480px;
  }
.content{ top: 11% !important; }

}
</style>