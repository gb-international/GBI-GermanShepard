<template>
    <router-link
        :to="url"
        class="edit_link"
        >
        <span class="badge badge-primary"
            ><i class="fas fa-user-plus"></i
        ></span>
        </router-link>
</template>
<script>
    export default{
        name:"MinusButtonGBI",
        props:['url'],
        data(){
            return{

            }
        }
    }
</script>