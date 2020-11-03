<template>
    <div class="escort-dashbaord">
        <layout>
            <template #back>
                <img class="back-icon cursor-pointer" @click="$router.go(-1)" src="/assets/front/icons/back.png">
            </template>
            <template #title>
                {{ $store.getters.getTitle }}
            </template>
            <template #body>
                <div class="dashbaord-body pt-4 pb-4">
                    <div class="row text-center">
                        <div class="col-sm-4 mb-3">
                            <router-link :to='`/dashbaord/sightseeing/${$route.params.tour_code}`'><img src="/assets/admin/default/icon/sightseeing.png" class="w-100"></router-link>
                        </div>
                        
                        <div class="col-sm-4 mb-3">
                            <router-link :to='`/dashbaord/pack/${$route.params.tour_code}`'><img src="/assets/admin/default/icon/snacks.png" class="w-100"></router-link>
                        </div>
                        
                        <div class="col-sm-4 mb-3">
                            <router-link :to='`/dashbaord/hotel/${$route.params.tour_code}`'><img src="/assets/admin/default/icon/hotel.png" class="w-100"></router-link>
                        </div>
                        
                        <div class="col-sm-4 mb-3">
                            <router-link :to='`/dashbaord/flight/${$route.params.tour_code}`'><img src="/assets/admin/default/icon/airlines.png" class="w-100"></router-link>
                        </div>

                        <div class="col-sm-4 mb-3">
                            <router-link :to='`/dashbaord/bus/${$route.params.tour_code}`'><img src="/assets/admin/default/icon/bus-icon.png" class="w-100"></router-link>
                        </div>
                        
                        <div class="col-sm-4 mb-3">
                            <router-link :to='`/dashbaord/train/${$route.params.tour_code}`'><img src="/assets/admin/default/icon/train-icon.png" class="w-100"></router-link>
                        </div>
                        
                        <div class="col-sm-4 mb-3">
                            <router-link :to='`/dashbaord/restaurant/${$route.params.tour_code}`'><img src="/assets/admin/default/icon/restaurant.png" class="w-100"></router-link>
                        </div>
                        
                        <div class="col-sm-4 mb-3">
                            <router-link :to='`/dashbaord/pax/${$route.params.tour_code}`'><img src="/assets/admin/default/icon/pax.png" class="w-100"></router-link>
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
    },
    created(){
        this.itineraryTitle();
    },
    methods:{
        itineraryTitle(){
            axios.get('/escort/itinerary-title/'+this.$route.params.tour_code)
                .then(res => {
                    this.$store.dispatch('setTitle',res.data.itinerary.title);
                })
        }
    }
}
</script>