<template>

<div class="star-rating">
	<span v-for="n in max">&star;</span>
	<div class="star-rating__current" :style="{width: getRating + '%'}">
		<span v-for="n in max">&starf;</span>
	</div>
</div>	

</template>
<script>
export default{
	 props: ['max', 'current'],
	data(){
		return {

		}
	},
	computed: {
	    getRating: function() {
	      return (this.current / this.max) * 100
	    }
	}
}

</script>




<style scoped>
.star-rating {
  color: gold;
  display: inline-block;
  font-size: 4em;
  position: relative;
  transform: translate(-6px);
}

.star-rating__max,
.star-rating__current {
  position: absolute;
  top: 0;
}

.star-rating__current {
  overflow: hidden;
  white-space: nowrap;
}
</style>
