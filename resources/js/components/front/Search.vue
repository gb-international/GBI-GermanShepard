<!-- parent component template -->
<template>
	<div>
	 <div class="autocomplete">
    <input type="text" @input="onChange" v-model="search" @keyup.down="onArrowDown" @keyup.up="onArrowUp" @keyup.enter="onEnter" />
    <ul id="autocomplete-results" v-show="isOpen" class="autocomplete-results">
      <li class="loading" v-if="isLoading">
        Loading results...
      </li>
      <li v-else v-for="(result, i) in filteredSource" :key="i" @click="setResult(result.source)" class="autocomplete-result" :class="{ 'is-active': i === arrowCounter }">
        {{ result.source }}
      </li>
    </ul>

  </div>
	</div>
	
</template>

<script>
	export default {
   name: "search",
		 data() {
    return {
      isOpen: false,
      results: [],
      resultsdata: [],
      search: "",
      searchdata: "",
      isLoading: false,
      arrowCounter: 0
    };
  },
  created () {
      axios.get('/api/search').then(response => {
        this.results = response.data.data;
        this.resultsdata = response.data.data;
      });
    },
    computed: {
      filteredSource() {
        if (!this.search) return this.results
        return this.results.filter((result) => {
          return result.source.toLowerCase().includes(this.search.toLowerCase());
        });
      }
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
        // this.filterResults();
        this.isOpen = true;
      }
    },

    setResult(result) {
      this.search = result;
      this.isOpen = false;
    },
    onArrowDown(evt) {
      if (this.arrowCounter < this.filteredSource.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter() {
      this.search = this.filteredSource[this.arrowCounter];
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
    }
</script>
<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

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
  background-color: #00aeefa8;
  color: white;
}

</style>