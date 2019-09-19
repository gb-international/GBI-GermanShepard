<!-- List all itinerary template -->
<template>
  <div id="listitinerary">
      <input type="text" @input="onChange" v-model="search" placeholder="search">
      
    <ul  v-show="isOpen" class="autocomplete-results">
      <li v-for="result in filteredSource"  @click="setResult(result.source)">
      {{ result.source }} 
    </li>
  </ul>

<input type="text" @input="onChanges" v-model="searchs" placeholder="search Destination">
<ul v-show="isOpens" class="autocomplete-results">
  <li v-for="resultdata in filteredData" @click="setResults(resultdata.source)">
      {{ resultdata.source }} 
    </li>
</ul>
  
</v-layout>

  </div>
  
</template>

<script>
 export default {
 //  name: "ListItinerary",
 //    data() {
 //    return {
 //      data: [],
 //      datas: [],
 //      search: '',
 //      searchs: '',
 //      isOpen: false,
 //      isOpens: false,
 //      arrowCounter: 0,
 //      arrowCounters: 0,
 //    };
 //  },
 // computed: {
  //     filteredSource () {
  //       if (!this.search) return this.data
  //       return this.data.filter((result) => {
  //         return result.source.toLowerCase().includes(this.search.toLowerCase());
  //       });
  //     },
  //      filteredData () {
  //       if (!this.searchs) return this.datas
  //       return this.datas.filter((resultdata) => {
  //         return resultdata.source.toLowerCase().includes(this.searchs.toLowerCase());
  //       });
  //     }

  //   },
  //   created () {
  //     axios.get('/api/search').then(response => {
  //       this.data = response.data.data;
  //       this.datas = response.data.data;
  //     });
  //   },
  //   methods: {
  //      onChange() {
  //     // Let's warn the parent that a change was made
  //     this.$emit("input", this.search);
  //        this.isOpen = true;
  //   },
  //    onChanges() {
  //     this.$emit("input", this.searchs);
  //      // Let's search our flat array
  //        this.isOpens = true;
      
  //   },
  //     setResult(result) {
  //     this.search = result;
  //     this.isOpen = false;
  //     },
  //     setResults(resultdata) {
  //     this.searchs = resultdata;
  //     this.isOpens = false;
  //     },

  //     handleClickOutside(evt) {
  //     if (!this.$el.contains(evt.target)) {
  //       this.isOpen = false;
  //       this.arrowCounter = -1;
  //     }
  //   },
  //    handleClickOutsides(evt) {
  //     if (!this.$el.contains(evt.target)) {
  //       this.isOpens = false;
  //       this.arrowCounters = -1;
  //     }
  //   }
  // },
  // mounted() {
  //   document.addEventListener("click", this.handleClickOutside);
  //   document.addEventListener("click", this.handleClickOutsides);
  // },
  // destroyed() {
  //   document.removeEventListener("click", this.handleClickOutside);
  //   document.removeEventListener("click", this.handleClickOutsides);
  // }



    
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

</style>