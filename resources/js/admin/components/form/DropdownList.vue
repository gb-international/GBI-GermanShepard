<template>
  <div class="dropdown-field">
    <input v-if="Object.keys(selectedItem).length === 0" ref="dropdowninput" v-model.trim="inputValue" class="dropdown-input" type="text" placeholder="Find country" />
    <div v-else @click="resetSelection" class="dropdown-selected">
      <img :src="selectedItem.flag" class="dropdown-item-flag" />
      {{ selectedItem.name }}
    </div>
    <div v-show="inputValue && apiLoaded" class="dropdown-list">
      <div @click="selectItem(item)" v-show="itemVisible(item)" v-for="item in itemList" :key="item.name" class="dropdown-item">
        <img :src="item.flag" class="dropdown-item-flag" />
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      selectedItem: {},
      inputValue: '',
      itemList: [],
      apiLoaded: false,
      apiUrl: '/api/members/salesman'
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    resetSelection () {
      this.selectedItem = {}
      this.$nextTick( () => this.$refs.dropdowninput.focus() )
      this.$emit('on-item-reset')
    },
    selectItem (theItem) {
      this.selectedItem = theItem 
      this.inputValue = ''
      this.$emit('on-item-selected', theItem)
    },
    itemVisible (item) {
      let currentName = item.name.toLowerCase()
      let currentInput = this.inputValue.toLowerCase()
      return currentName.includes(currentInput)
    },
    getList () {
      axios.get(this.apiUrl).then( response => {
        this.itemList = response.data;
        this.apiLoaded = true;
      })
    }
  }
}
</script>