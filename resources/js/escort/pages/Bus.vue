<template>
    <div class="container p-4">
        <div class="back mb-1">
            <img class="back-icon cursor-pointer" @click="$router.go(-1)" src="/assets/front/icons/back.png">
        </div>
        <h5 class="text-muted">
            Bus
        </h5>

        <div class="pt-4 font-weight-bolder pb-4 whitesomke word-break" v-if="buses">
            <div v-for="bus in buses" :key="bus.id">
                <div class="row m-0 pr-2 pl-2">
                    <div class="col-sm-4">
                        <label class="text-muted f-12">Bus Number or Name</label>
                        <p>{{ bus.bus.company_name }} </p>
                    </div>
                    <div class="col-sm-4">
                        <div class="row">
                            <div class="col">
                                <label class="text-muted f-12">Source</label>
                                <p>{{ bus.source }}</p>
                            </div>
                            
                            <div class="col">
                                <label class="text-muted f-12">Destination</label>
                                <p>{{ bus.destination }}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-sm-4">
                        <div class="row">
                            <div class="col">
                                <label class="text-muted f-12">Departure</label>
                                <p>{{ bus.departure }}</p>
                            </div>
                            <div class="col">
                                <label class="text-muted f-12">Contact Number</label>
                                <p>Raj niwas 98989898989</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="w-95" />
            </div>
        </div>

        <div class="text-center pt-4 font-weight-bolder pb-4" v-else>
            No bus available....
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            buses:''
        }
    },
    created(){
        this.busesList();
    },
    methods:{
        busesList(){
            axios.get('/escort/buses/'+this.$route.params.tour_code).then(res => {
                this.buses = res.data;
            })
        }
    }
}
</script>