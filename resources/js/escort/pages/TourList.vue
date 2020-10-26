<template>
    <layout-table>
        <template #title>
            Tour List
        </template>
        <template #table-head>
            <th class="border-0">Tour</th>
            <th class="border-0">Date</th>
            <th class="border-0">Status</th>
        </template>
        <template #table-body>
            <tr v-for="i in 2" :key="i">
                <td>
                    <router-link to='/dashboard' class="text-dark decoration-none"> days Tour To Ahmedabad, statue of Unity, lothel-indus Valley Civilization, anand, amul Dairy, Mt. Abu & Udaip </router-link>
                </td>
                <td>26/10/2020</td>
                <td>Enabled</td>
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