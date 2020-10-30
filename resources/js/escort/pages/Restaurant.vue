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
        <template #table-body>
            <tr v-for="restaurant in restaurants" :key="restaurant.id">
                <td>{{ restaurant.restaurant.name }}</td>
                <td>{{ restaurant.restaurant.address }}</td>
            </tr>
        </template>
        <template #footer>

        </template>
    </layout-table>
</template>
<script>
import LayoutTable from '@/escort/components/LayoutTable'
export default {
    components:{
        LayoutTable
    },
    data(){
        return{
            restaurants:''
        }
    },
    created(){
        this.restaurantsList();
    },
    methods:{
        restaurantsList(){
            axios.get('/escort/restaurants/'+this.$route.params.tour_code)
            .then(res => {
                this.restaurants = res.data;
                console.log(this.restaurants);
            })
        }
    }
}
</script>