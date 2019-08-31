<!-- List all itinerary template -->
<template>
  <div id="listitinerary">
      <div class="autocomplete">
    <input type="text" @input="onChange" v-model="search" @keyup.down="onArrowDown" @keyup.up="onArrowUp" @keyup.enter="onEnter" />
    <ul id="autocomplete-results" v-show="isOpen" class="autocomplete-results">
      <li class="loading" v-if="isLoading">
        Loading results...
      </li>
      <li v-else v-for="(result, i) in results" :key="i" @click="setResult(result.source)" class="autocomplete-result" :class="{ 'is-active': i === arrowCounter }">
        {{ result.source }}
      </li>
    </ul>

  </div>
  </div>
  
</template>

<script>
 export default {
  name: "ListItinerary",
   props: {
    items: {
      type: Array,
      required: false,
      default: () => []
    },
    isAsync: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      isOpen: false,
      results: [],
      search: "",
      isLoading: false,
      arrowCounter: 0
    };
  },

  methods: {
    onChange() {
      // Let's warn the parent that a change was made
      this.$emit("input", this.search);

      // Is the data given by an outside ajax request?
      if (this.isAsync) {
        this.isLoading = true;
      } else {
        // Let's search our flat array
        this.filterResults();
        this.isOpen = true;
      }
    },

    filterResults() {
      // first uncapitalize all the things
      // axios.get('/api/search').then(response => {
      //  this.results = response.data.data;
      //  console.log(response.data);
      //   });
        this.results = this.items.filter(item => {
          console.log(this.search);
        return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
     
       });
    },
    setResult(result) {
      this.search = result;
      this.isOpen = false;
    },
    onArrowDown(evt) {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter() {
      this.search = this.results[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    }
  },
  watch: {
    items: function(val, oldValue) {
      // actually compare them
      if (val.length !== oldValue.length) {
        this.results = val;
        this.isLoading = false;
      }
    }
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  }



     //  data() {

     //    return {

     //      searchquery: '',
     //      data_results: []

     //    }

     //  },

     //  methods: {

     //    autoComplete(){

     //    this.data_results = [];

     //    if(this.searchquery.length > 2){

     //     axios.get('/vuejs/autocomplete/search',{params: {searchquery: this.searchquery}}).then(response => {

     //        console.log(response);

     //      this.data_results = response.data;

     //     });

     //    }

     //   }

     // }
      

  
       //   data(){

       //      return {
       //        // Create a new form instance
       //        rows: [{
         //    row: []
         //  }]
       //      }
       //  },
       //  methods:
       //  {
       //     addRow() {
       //      this.rows.push({
        //     row: []
        //   });
        // },
        // removeRow: function(index) {
        //   console.log("Removing", index);
        //   this.rows.splice(index, 1);
        // }          
           
       //  }
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