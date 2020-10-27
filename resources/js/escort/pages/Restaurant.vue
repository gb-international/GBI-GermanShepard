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
            <tr v-for="i in 4" :key="i">
                <td>Burger Singh</td>
                <td>Shaikh Sarai</td>
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