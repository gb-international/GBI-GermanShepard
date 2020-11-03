<template>
    <layout-table>
        <template #back>
            <img class="back-icon cursor-pointer" @click="$router.go(-1)" src="/assets/front/icons/back.png">
        </template>
        <template #title>
            Number of Pax
        </template>
        <template #table-head>
            <th class="border-0">Gender</th>
            <th class="border-0 text-center">Passenger</th>
        </template>
        <template #table-body v-if="pax">
            <tr>
                <td class="border-0">Male</td>
                <td class="text-center border-0">{{ pax.male }}</td>                
            </tr>
            <tr>
                <td class="border-0">Female</td>
                <td class="text-center border-0">{{ pax.female }}</td>                
            </tr>
            
            <tr>
                <td>Total Number of Pax</td>
                <td class="text-center">{{ total }}</td>                
            </tr>

        </template>

        
        <template #table-body v-else>
            <tr class="text-center">
                No Pax data available
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
            pax:''
        }
    },
    created(){
        this.paxList();
    },
    methods:{
        paxList(){
            axios.get('/escort/pax/'+this.$route.params.tour_code).then(res => {
                this.pax = res.data;
            })
        }
    },
    computed:{
        total(){
            return this.pax.male + this.pax.female;
        }
    }
}
</script>