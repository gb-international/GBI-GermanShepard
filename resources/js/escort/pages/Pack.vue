<template>
    <layout-table>
        <template #back>
            <img class="back-icon cursor-pointer" @click="$router.go(-1)" src="/assets/front/icons/back.png">
        </template>
        <template #title>
            Quantity of items
        </template>
        <template #table-head>
            <th class="border-0">Food Item</th>
            <th class="border-0">Qty</th>
        </template>
        <template #table-body v-if="packs.length > 0">
            <tr v-for="food in packs" :key="food.id">
                <td>{{ food.name }}</td>
                <td>{{ food.quantity }}</td>
            </tr>
        </template>

        
        <template #table-body v-else>
            <tr class="text-center">
                No Snack available
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
            packs:''
        }
    },
    created(){
        this.packsList();
    },
    methods:{
        packsList(){
            axios.get('/escort/packs/'+this.$route.params.tour_code).then(res => {
                this.packs = res.data;
            })
        }
    }
}
</script>