<!-- parent component template -->
<template>
	<div>
		<h1>{{ message }}</h1>
        <button  @click="updateMessage">update to child</button>
	</div>
	
</template>

<script>
	export default {
        props:["message"],
        data ()
        {
        	return {
        		
        	}
        },
          methods: {
            updateMessage: function () {
                //this.message ="value has been change chlid"
                this.$emit("udpdateParentVariable","value has been change chlid");
                
            }
        },
    }
</script>
<style scoped></style>