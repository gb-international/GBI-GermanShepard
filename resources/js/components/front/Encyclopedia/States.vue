<template>
  <!-- Remove this dummy_height when you add some data to this page -->
  <div class="States">

    <div class="text_on_image">
      <section class="banner-block encyclopedia_banner"></section>  
      <div class="content encyclopedia">
     
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-4">
              <div class="encyclopedia-content">
                <h1 class="heading">Encyclopedia</h1>             
                <span class="sub">Explore and embrace the vibrancy of cultures and traditions of the beautiful countries and states of the globe</span>              
              </div>
            </div>
            <div class="col-sm-6 search_filter">
              <!--  serach itinerary list in serach bar-->
              <div class="search-p-top">
                <div class="input-group">
                    <model-select :options="options" v-model="searchQuery" placeholder="Search encyclopedia..."></model-select>
                  </div>
              </div>
            </div>
            <div class="col-sm-2"></div>         
          </div>        
        </div>           
      </div>      
    </div>

    <br>
    <div class="container">    
      <div class="container">
        <div class="row"v-if="state_list.length" >

          <div class="col-sm-4 states_card" v-for="state in resultQuery">
            <router-link :to="`/encyclopedia/${state.slug}`">
              <div class="card">
                <img class="card-img-top" :src="getImgUrl(state.thumbnail)" alt="Card image">
                <div class="card-img-overlay text-center">
                   <p class="card-text text-white">{{ state.state_name }}</p>
                </div>
              </div>
            </router-link>
          </div>

        </div>
      </div>
      <br>
    </div>
  </div>
</template>



<script>
import 'vue-search-select/dist/VueSearchSelect.css'
import { ModelSelect } from 'vue-search-select'
export default {
  name:"States",
  components: {
    ModelSelect
  },
  data() {
    return {
      state_list:[],
      options: [],
      searchQuery: null,
    }
  },
  created(){
    this.stateList();
    this.SelectBox();
  },
  watch:{
    searchQuery:function(){
      console.log(this.searchQuery);
    }
  },
  methods: {
    stateList(){
      axios.get('/api/encyclopedia-list').then((response)=>{
        this.state_list = response.data;
        console.log(this.state_list);
      });
    },
    SelectBox(){
      axios.get('/api/state').then((response)=>{
        for(var i=0;i<response.data.length;i++){
          this.options.push({value:response.data[i].name,text:response.data[i].name})
        }
      })
    },
    getImgUrl(img){
      return '/encyclopedia/'+img;
    },
  },
  computed: {
    resultQuery(){

      if(this.searchQuery){
        return this.state_list.filter((item)=>{
          return this.searchQuery.toLowerCase().split(' ').every(v => item.state_name.toLowerCase().includes(v))
        })
      }else{
        return this.state_list;
      }
    }
  }

}
</script>

<style scoped>
img{
  opacity: 
}
</style>
  