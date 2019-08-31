<!-- List all itinerary template -->
<template>
  <div id="listitinerary">
      <input type="text" v-model="search" placeholder="search">
    <ul>
      <li v-for="result in filteredCoins">
      {{ result.source }} 
    </li>
</ul>
  
</v-layout>

  </div>
  
</template>

<script>
 export default {
  name: "ListItinerary",
    data() {
    return {
      data: [],
      search: ''
    };
  },
 computed: {
      filteredCoins () {
        if (!this.search) return this.data
        return this.data.filter((result) => {
          return result.source.toLowerCase().includes(this.search.toLowerCase());
        });
      }
    },
    created () {
      axios.get('/api/search').then(response => {
        this.data = response.data.data;
       console.log(response.data.data);
      });
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
  height: 120px;
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