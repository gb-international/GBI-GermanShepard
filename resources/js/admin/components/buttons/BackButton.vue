<template>
    <router-link
        :to="url"
        class="btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold"
        ><slot>Back</slot></router-link
    >
    
</template>
<script>
export default {
    props:['url']
}
</script>