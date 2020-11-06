<template>
    <div class="container p-4">

        <div class="back">
            <slot name="back">Back</slot>
        </div>

        <h3 class="text-heading text-uppercase text-center  word-break">
            <slot name="title"></slot>
        </h3>

        <div class="">
            <slot name="body"></slot>
        </div>
        
        <div class="footer-layout">
            <slot name="footer"></slot>
        </div>
        
    </div>
</template>
<script>
export default {
    created(){
        if(!this.$store.getters.getTourCode){
            this.$route.push('/tour-list');
        }
    }
}
</script>