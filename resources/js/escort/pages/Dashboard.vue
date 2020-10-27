<template>
    <div class="escort-dashbaord">
        <layout>
            <template #back>
                <img class="back-icon cursor-pointer" @click="$router.go(-1)" src="/assets/front/icons/back.png">
            </template>
            <template #title>
                MADURAo-KODAIKANAL- MUNNAR- KOCHI
            </template>
            <template #body>
                <div class="dashbaord-body pt-4 pb-4">
                    <div class="row text-center">
                        <div class="col-sm-4 mb-3">
                            <router-link to='/dashbaord/sightseeing'><img src="/assets/admin/default/icon/sightseeing.png" class="w-100"></router-link>
                        </div>
                        
                        <div class="col-sm-4 mb-3">
                            <router-link to='/dashbaord/pack'><img src="/assets/admin/default/icon/snacks.png" class="w-100"></router-link>
                        </div>
                        
                        <div class="col-sm-4 mb-3">
                            <router-link to='/dashbaord/hotel'><img src="/assets/admin/default/icon/hotel.png" class="w-100"></router-link>
                        </div>
                        
                        <div class="col-sm-4 mb-3">
                            <router-link to='/dashbaord/flight'><img src="/assets/admin/default/icon/airlines.png" class="w-100"></router-link>
                        </div>

                        
                        <div class="col-sm-4 mb-3">
                            <router-link to='/dashbaord/bus'><img src="/assets/admin/default/icon/bus-icon.png" class="w-100"></router-link>
                        </div>
                        
                        <div class="col-sm-4 mb-3">
                            <router-link to='/dashbaord/train'><img src="/assets/admin/default/icon/train-icon.png" class="w-100"></router-link>
                        </div>
                        
                        <div class="col-sm-4 mb-3">
                            <router-link to='/dashbaord/restaurant'><img src="/assets/admin/default/icon/restaurant.png" class="w-100"></router-link>
                        </div>
                    </div>
                </div>
            </template>
        </layout>
    </div>
</template>
<script>
import layout from '@/escort/components/Layout'
export default {
    components:{
        layout
    }
}
</script>