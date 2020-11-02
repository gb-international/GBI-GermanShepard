<template>
    <div class="container p-4">
        <div class="back mb-1">
            <img class="back-icon cursor-pointer" @click="$router.go(-1)" src="/assets/front/icons/back.png">
        </div>
        <h5 class="text-muted">
            Bus
        </h5>

        <div class="pt-4 font-weight-bolder pb-4 whitesomke word-break" v-if="trains.length > 0">
            <div v-for="train in trains" :key="train.id">
                <div class="row m-0 pr-2 pl-2">
                    <div class="col-sm-4">
                        <label class="text-muted f-12">Train Number & Name</label>
                        <p>{{ train.train.name }} ({{ train.train.code}}) </p>
                    </div>
                    <div class="col-sm-3">
                        <div class="row">
                            <div class="col">
                                <label class="text-muted f-12">Source</label>
                                <p>{{ train.source }}</p>
                            </div>
                            
                            <div class="col">
                                <label class="text-muted f-12">Destination</label>
                                <p>{{ train.destination }}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-sm-3">
                        <div class="row">
                            <div class="col">
                                <label class="text-muted f-12">Departure</label>
                                <p>{{ train.departure}}</p>
                            </div>
                            
                            <div class="col">
                                <label class="text-muted f-12">Arrival</label>
                                <p>{{ train.arrival }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <label class="text-muted f-12">Passengers</label>
                        <p>100</p>
                    </div>
                </div>
                <hr class="w-95" />
            </div>
        </div>

        <div class="text-center pt-4 font-weight-bolder pb-4 whitesomke" v-else>
            No Train available....
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            trains:''
        }
    },
    created(){
        this.trainsList();
    },
    methods:{
        trainsList(){
            axios.get('/escort/trains/'+this.$route.params.tour_code).then(res => {
                this.trains = res.data;
            })
        }
    }
}
</script>