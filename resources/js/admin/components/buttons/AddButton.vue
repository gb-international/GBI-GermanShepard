<template>
    <router-link :to="url" class="text-capitalize font-weight-bold">
        <slot>add</slot>
    </router-link>
</template>
<script>
export default {
    name:"AddButtonGBI",
    props:['url']
}
</script>