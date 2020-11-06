<template>
    <layout-table>
        <template #back>
            <img class="back-icon cursor-pointer" @click="$router.go(-1)" src="/assets/front/icons/back.png">
        </template>
        <template #title>
            Restaurant
        </template>
        <template #table-head>
            <th class="border-0">Restaurant Name</th>
            <th class="border-0">Place</th>
        </template>
        <template #table-body v-if="restaurants.length > 0">
            <tr v-for="restaurant in restaurants" :key="restaurant.id">
                <td>{{ restaurant.restaurant.name }}</td>
                <td>{{ restaurant.restaurant.address }}</td>
            </tr>
        </template>

        
        <template #table-body v-else>
            <tr>
                <p class="text-center">No Restaurant available</p>
            </tr>
        </template>


        <template #footer>

        </template>
    </layout-table>
</template>
<script>
import LayoutTable from '@/escort/components/LayoutTable'
import { mapState } from 'vuex';
export default {
    components:{
        LayoutTable
    },
    created(){
        this.$store.dispatch('getRestaurants');
    },
    computed:{
        ...mapState(['restaurants']),
    }
}
</script>