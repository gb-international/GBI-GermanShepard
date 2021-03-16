<template>
    <router-link :to="url" class="edit_link">
        <span class="badge badge-primary" title="Edit Item"
            ><i class="fas fa-pencil-alt"></i
        ></span>
    </router-link>
</template>
<script>
    export default{
        name:"EditIconButtonGBI",
        props:['url'],
        data(){
            return{

            }
        }
    }
</script>