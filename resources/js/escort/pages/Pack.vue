<template>
    <layout-table>
        <template #back>
            <img class="back-icon cursor-pointer" @click="$router.go(-1)" src="/assets/front/icons/back.png">
        </template>
        <template #title>
            Number of Pax
        </template>
        <template #table-head>
            <th class="border-0">Food Item</th>
            <th class="border-0">Qty</th>
        </template>
        <template #table-body>
            <tr v-for="i in 4" :key="i">
                <td>Chips</td>
                <td>100pcs</td>
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
    }
}
</script>