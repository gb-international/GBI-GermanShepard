<template>
  <!-- Remove this dummy_height when you add some data to this page -->
  <div class="States">
    <div class="container">
      <div class="bg-banner">
        <div class="row">
          <div class="col-md-8 offset-md-2">
              <div class="form-group">
                <model-select :options="options" v-model="searchQuery" placeholder="Search encyclopedia..."></model-select>
              </div>
          </div>
        </div>
        
      </div>
      <br>

    
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
  